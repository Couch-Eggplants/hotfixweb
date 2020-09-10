import React, { useMemo, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import accounting from 'accounting';

import Checkbox from './Checkbox';

import edit from '../img/edit.svg';
import './place.css';


const Basket = ({ match: { params: { areaId, itemId }}, foodAreas, order }) => {
  const [ faster, setFaster ] = useState(true);
  const [ time, setTime ] = useState('');
  const [ selfService, setSelfService ] = useState(false);
  const [ validTime, setValidTime ] = useState(true);
  const area = foodAreas.filter(area => area.id === areaId)[0];
  const item = area.items.filter(item => item.id === itemId)[0];

  function updateTempOrder(k, v) {
    if (!localStorage.getItem("tempOrder")) {
      localStorage.setItem("tempOrder", "{}");
    }
    var arr = JSON.parse(localStorage.getItem("tempOrder"));
    arr[k] = v;
    localStorage.setItem("tempOrder", JSON.stringify(arr));
  }

  function getTempOrder(k) {
    if (!localStorage.getItem("tempOrder")) {
      return "";
    }
    var arr = JSON.parse(localStorage.getItem("tempOrder"));
    return arr[k];
  }


  const [ price, products ] = useMemo(() => {
    const foodIds = new Set((item.foods || []).map(item => item.id));

    const products = Object.values(order)
      .filter((value) => {
        const { item: { id }} = value;

        return foodIds.has(id);
      });

    const result = products.reduce((result, value) => {
        const { count, item } = value;

        return result + parseInt(item.price) * parseInt(count);
      }, 0);

    return [ accounting.formatNumber(result, 0, ' '), products ];
  }, [ order, item ]);


  return (
    <div className="Place" onLoad={() => {
      var tempOrder = JSON.parse(localStorage.getItem("tempOrder"));
      if (tempOrder) {
        var ttime = tempOrder['time'] ? tempOrder['time'] : "";
        var tselfService = tempOrder['selfService'] ? tempOrder["selfService"] : false;
        var tfaster = tempOrder['faster'] ? tempOrder['faster'] : true;
        setFaster(tfaster == "true" ? true : false);
        setSelfService(tselfService);
        if (!faster) {
          setTime(ttime);
        }
      }
    }}>
      <header className="Place__header">
        <aside className="Place__trz">
          <h1 className="Place__head">
            <Link to="/" className="Place__logo">
              {area.name}
            </Link>
          </h1>
          <Link to="/edit" className="Place__change-tz">
            <img
              alt="change-profile"
              src={edit}
            />
          </Link>
        </aside>
      </header>
      <aside className="Place__restoraunt">
        <img
          className="Place__restoraunt-logo"
          alt="Fastfood logo"
          src={item.image}
        />
        <h2
          className="Place__restoraunt-name"
        >
          {item.name}
        </h2>
        <p className="Place__restoraunt-type">
          {item.description}
        </p>
      </aside>
      <div className="Place__products-wrapper">
        <ul className="Place__products">
          {products.map(({ item, count }) => (
            <li
              className="Place__product"
              key={item.id}
            >
              <img
                className="Place__product-logo"
                alt="Ordered product logo"
                src={item.image}
              />
              <h3
                className="Place__product-name"
              >
                {item.name}
              </h3>
              <p
                className="Place__product-price"
              >
                Цена: {item.price}
              </p>
              <p
                className="Place__product-count"
              >
                x{count}
              </p>
            </li>
          ))}
        </ul>
        <Link
          className="Place__change-product"
          to={`/place/${areaId}/${itemId}`}
        >
          Изменить
        </Link>
      </div>
      <div className="Place__choice">
        <h3>Время:</h3>
        <div className="Place__choice-item">
          <span>Как можно быстрее</span>
          <Checkbox
            checked={faster}
            onToggle={() => {
              if (faster) {
                setFaster(false);
                updateTempOrder("faster", "false");
              } else {
                setTime('');
                setFaster(true);
                updateTempOrder("time", "");
                updateTempOrder("faster", "true");
              }
            }}
          />
        </div>
        <div className="Place__choice-item">
          <span>Назначить</span>
          <input
            value={time}
            onFocus={() => {
              setFaster(false);
              updateTempOrder("faster", "false");
            }}
            onChange={event => {
              setFaster(false);

              var re = new RegExp("^([0-1][0-9]|2[0-3]):([0-5][0-9])$");
              setValidTime(re.test(event.target.value))
              setTime(event.target.value);
              updateTempOrder("time", event.target.value);
              //localStorage.setItem
            }}
            onBlur={() => {
              setTime(getTempOrder("time"));
              if (time) {
                setFaster(false);
              }
            }}
          />
        </div>
        <div className="Place__choice-item">
          <h3>С собой</h3>
          <Checkbox checked={selfService} onToggle={() => {
            setSelfService(!selfService);
            updateTempOrder("selfService", !selfService);
          }} />
        </div>
        <div className="Place__choice-item">
          <h3>На месте</h3>
          <Checkbox checked={!selfService} onToggle={() => {
            setSelfService(!setSelfService);
            updateTempOrder("selfService", !selfService);
          }} />
        </div>
      </div>
      <footer className="Place__footer">
        <Link to={validTime ? `/order/${area.id}/${item.id}` : '#'} className="Place__order">
          Оплатить {price}
        </Link>
      </footer>
    </div>
  );
};

export default withRouter(Basket);
