(this["webpackJsonpkozodoi-club-hack"]=this["webpackJsonpkozodoi-club-hack"]||[]).push([[0],{169:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);t(93),t(119),t(121),t(122),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(144),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161);var r=t(0),c=t.n(r),n=t(83),o=t.n(n),s=t(84),l=t.n(s),i=t(20),m=t(19),d=t(7),u=t(6),f=t(24),p=t.n(f),_=(t(169),function(e){var a=e.foodAreas,t=e.order;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"Home"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("div",{className:"Home__fixed-content"},c.a.createElement("header",{className:"Home__header"},c.a.createElement("h1",{className:"Home__head"},c.a.createElement(d.b,{to:"/",className:"Home__logo"},e.name)),c.a.createElement(d.b,{to:"/",className:"Home__change-tz"},c.a.createElement("img",{className:"Home__edit",alt:"change-profile",src:p.a}))),c.a.createElement("ul",{className:"Home__tabs"},c.a.createElement("li",{className:"Home__tab Home__tab_active"},"\u0415\u0434\u0430"))),c.a.createElement("ul",{className:"Home__items"},e.items.map((function(e){return c.a.createElement("li",{className:"Home__item",key:e.id},c.a.createElement(d.b,{className:"Home__food-link",to:e.link},c.a.createElement("img",{alt:e.name,className:"Home__image",src:e.image}),c.a.createElement("h3",{className:"Home__food-name"},e.name),c.a.createElement("p",{className:"Home__food-type"},e.description)))}))))}))),0!==Object.keys(t).length&&c.a.createElement("footer",{className:"Footer"},c.a.createElement(d.b,{to:"/orders",className:"Footer__orders"},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))});_.defaultProps={foodAreas:[]};var E=_,g=t(35),N=t.n(g),h=(t(51),function(e){var a=e.item,t=e.order,n=e.onIncrementPosition,o=e.onDecrementPosition,s=e.area,l=Object(r.useMemo)((function(){var e=new Set((a.foods||[]).map((function(e){return e.id}))),r=Object.values(t).filter((function(a){var t=a.item.id;return e.has(t)})).reduce((function(e,a){var t=a.count,r=a.item.price;return e+parseInt(r)*parseInt(t)}),0);return N.a.formatNumber(r,0," ")}),[t,a]);return c.a.createElement("div",{className:"Place"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(d.b,{to:"/",className:"Place__logo"},s.name)),c.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:a.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},a.name),c.a.createElement("p",{className:"Place__restoraunt-type"},a.description)),c.a.createElement("ul",{className:"Place__foods"},a.foods.map((function(e){return c.a.createElement("li",{className:"Place__food",key:e.id},c.a.createElement("div",{className:"Place__food-logo-wrapper"},c.a.createElement("img",{alt:"food logo",className:"Place__food-logo",src:e.image})),c.a.createElement("h3",{className:"Place__food-name"},e.name),c.a.createElement("p",{className:"Place__food-composition"},e.composition),c.a.createElement("div",{className:"Place__food-price"},c.a.createElement("span",{className:".Place__food-price-price"},"\u0426\u0435\u043d\u0430: ",e.price,"\xa0\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){o({id:e.id,itemId:a.id,areaId:s.id})}},"-"),c.a.createElement("span",null,"\xa0",e.id in t?t[e.id].count:0,"\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){n({id:e.id,itemId:a.id,areaId:s.id})}},"+")))}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(d.b,{to:l>0?"/basket/".concat(s.id,"/").concat(a.id):"#",className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",l,")")))});h.defaultProps={item:{},onIncrementPosition:function(){},onDecrementPosition:function(){}};var O=h,b=(t(174),t(86)),v=t.n(b),P=function(e){var a=e.checked,t=e.onToggle;return c.a.createElement("div",{className:"Checkbox"},c.a.createElement("input",{checked:a,onChange:t,type:"checkbox"}),c.a.createElement("img",{alt:"custom checkbox logo",src:v.a}))};P.defaultProps={onToggle:function(){}};var I=P,k=Object(u.f)((function(e){var a=e.match.params,t=a.areaId,n=a.itemId,o=e.foodAreas,s=e.order,l=Object(r.useState)(!0),i=Object(m.a)(l,2),u=i[0],f=i[1],_=Object(r.useState)(""),E=Object(m.a)(_,2),g=E[0],h=E[1],O=Object(r.useState)(!1),b=Object(m.a)(O,2),v=b[0],P=b[1],k=Object(r.useState)(!0),S=Object(m.a)(k,2),y=S[0],j=S[1],A=o.filter((function(e){return e.id===t}))[0],C=A.items.filter((function(e){return e.id===n}))[0];function x(e,a){localStorage.getItem("tempOrder")||localStorage.setItem("tempOrder","{}");var t=JSON.parse(localStorage.getItem("tempOrder"));t[e]=a,localStorage.setItem("tempOrder",JSON.stringify(t))}var T=Object(r.useMemo)((function(){var e=new Set((C.foods||[]).map((function(e){return e.id}))),a=Object.values(s).filter((function(a){var t=a.item.id;return e.has(t)})),t=a.reduce((function(e,a){var t=a.count,r=a.item;return e+parseInt(r.price)*parseInt(t)}),0);return[N.a.formatNumber(t,0," "),a]}),[s,C]),w=Object(m.a)(T,2),H=w[0],J=w[1];return c.a.createElement("div",{className:"Place",onLoad:function(){var e=JSON.parse(localStorage.getItem("tempOrder"));if(e){var a=e.time?e.time:"",t=!!e.selfService&&e.selfService,r=!e.faster||e.faster;f("true"==r),P(t),u&&h(a)}}},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(d.b,{to:"/",className:"Place__logo"},A.name)),c.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:C.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},C.name),c.a.createElement("p",{className:"Place__restoraunt-type"},C.description)),c.a.createElement("div",{className:"Place__products-wrapper"},c.a.createElement("ul",{className:"Place__products"},J.map((function(e){var a=e.item,t=e.count;return c.a.createElement("li",{className:"Place__product",key:a.id},c.a.createElement("img",{className:"Place__product-logo",alt:"Ordered product logo",src:a.image}),c.a.createElement("h3",{className:"Place__product-name"},a.name),c.a.createElement("p",{className:"Place__product-price"},"\u0426\u0435\u043d\u0430: ",a.price),c.a.createElement("p",{className:"Place__product-count"},"x",t))}))),c.a.createElement(d.b,{className:"Place__change-product",to:"/place/".concat(t,"/").concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),c.a.createElement("div",{className:"Place__choice"},c.a.createElement("h3",null,"\u0412\u0440\u0435\u043c\u044f:"),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435"),c.a.createElement(I,{checked:u,onToggle:function(){u?(f(!1),x("faster","false")):(h(""),f(!0),x("time",""),x("faster","true"))}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c"),c.a.createElement("input",{value:g,onFocus:function(){f(!1),x("faster","false")},onChange:function(e){f(!1);var a=new RegExp("^([0-1][0-9]|2[0-3]):([0-5][0-9])$");j(a.test(e.target.value)),h(e.target.value),x("time",e.target.value)},onBlur:function(){var e;h((e="time",localStorage.getItem("tempOrder")?JSON.parse(localStorage.getItem("tempOrder"))[e]:"")),g&&f(!1)}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u0421 \u0441\u043e\u0431\u043e\u0439"),c.a.createElement(I,{checked:v,onToggle:function(){P(!v),x("selfService",!v)}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u041d\u0430 \u043c\u0435\u0441\u0442\u0435"),c.a.createElement(I,{checked:!v,onToggle:function(){P(!P),x("selfService",!v)}}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(d.b,{to:y?"/order/".concat(A.id,"/").concat(C.id):"#",className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",H)))})),S=function(e){var a=e.match.params,t=a.areaId,r=a.itemId,n=e.history,o=e.foodAreas,s=e.setActiveOrder,l=o.filter((function(e){return e.id===t}))[0],i=l.items.filter((function(e){return e.id===r}))[0];return localStorage.removeItem("tempOrder"),c.a.createElement("div",{className:"Place Place_order"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(d.b,{to:"/",className:"Place__logo"},l.name)),c.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:i.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},i.name),c.a.createElement("p",{className:"Place__restoraunt-type"},i.description)),c.a.createElement("div",{className:"Place__order-body"},c.a.createElement("h3",{className:"Place__order-number-header"},"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430"),c.a.createElement("main",{className:"Place__order-number"},"7"),c.a.createElement("p",{className:"Place__order-number-header"},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437"),c.a.createElement("h3",{className:"Place__order-time"},"~ 15 \u043c\u0438\u043d\u0443\u0442")),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement("div",{to:"/orders",className:"Place__order",onClick:function(){s({itemId:r}),setTimeout((function(){n.push("/orders")}),0)}},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))};S.defaultProps={setActiveOrder:function(){}};var y=Object(u.f)(S),j=t(87),A=t.n(j),C=(t(175),function(e){var a=e.order,t=e.orderStatuses,n=e.foodAreas,o=(e.setFinishedOrder,e.setActiveOrder),s=e.setCanceledOrder,l=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"===t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeId:e.id,placeName:e.name,shopId:t.id,shopName:t.name,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]),i=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"!==t[e]&&"CANCELED"!==t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeName:e.name,shopName:t.name,shopId:t.id,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]);return c.a.createElement("div",{className:"Orders"},c.a.createElement("ul",{className:"Orders__active-orders"},l.map((function(e){return c.a.createElement("li",{className:"Orders__active-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name"},e.shopName),c.a.createElement("p",{className:"Orders__price"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("div",{className:"Orders__time"},"~ 15 \u041c"),c.a.createElement(d.b,{className:"Orders__change",to:"/place/".concat(e.placeId,"/").concat(e.shopId)},"\u0418\u0437\u043c"),c.a.createElement("button",{className:"Orders__cancel",onClick:function(){s({itemId:e.shopId})}},"\u041e\u0442\u043c."))}))),c.a.createElement("ul",{className:"Orders__finished-orders"},i.map((function(e){return c.a.createElement("li",{className:"Orders__finished-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header Orders__dark"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name Orders__pink"},e.shopName),c.a.createElement("p",{className:"Orders__price Orders__pink"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("button",{className:"Orders__repeat",onClick:function(){o({itemId:e.shopId})}},c.a.createElement("img",{className:"Orders__refresh",alt:"repeat order",src:A.a})))}))))});C.defaultProps={setFinishedOrder:function(){},setActiveOrder:function(){}};var x=C,T=(t(176),t(88)),w=t.n(T),H=t(89),J=t.n(H),z=t(90),F=t.n(z),D=t(91),V=t.n(D),L=t(36),M=t.n(L),B=t(54),K=t.n(B),W=t(37),R=t.n(W),$=t(55),q=t.n($),G=[{id:"pizikiva-gallery",name:'\u0422\u0420\u0426 "\u0418\u043c.\u041f\u044b\u0436\u0438\u043a\u043e\u0432\u0430"',items:[{id:"kfc",name:"KFC",link:"/place/pizikiva-gallery/kfc",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:w.a,foods:[{id:"classic",image:q.a,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",price:150},{id:"chips",image:M.a,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:50}]},{id:"burger-king",name:"Burger King",link:"/place/pizikiva-gallery/burger-king",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:J.a,foods:[{id:"OneTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 1",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:630,image:M.a},{id:"TwoTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 2",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:450,image:K.a},{id:"ThreeTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 3",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:800,image:R.a},{id:"FourthTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 4",composition:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:600,image:q.a}]},{id:"macdac",name:"McDonal's",link:"/place/pizikiva-gallery/macdac",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:F.a,foods:[{id:"hamburger",image:K.a,name:"\u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",price:50},{id:"bigmac",image:R.a,name:"\u0411\u0438\u0433 \u043c\u0430\u043a",price:200}]},{id:"subway",name:"SubWay",link:"/place/pizikiva-gallery/subway",image:V.a,description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",foods:[{id:"melt-sub",image:R.a,name:"\u0421\u0430\u0431\u0432\u0435\u0439 \u043c\u0435\u043b\u0442",price:300},{id:"day-sub",image:M.a,name:"\u0421\u0430\u0431 \u0434\u043d\u044f",price:200}]}]}],Q=G.reduce((function(e,a){return a.items.forEach((function(a){e[a.link]=a})),e}),{}),U=G.reduce((function(e,a){return a.items.forEach((function(a){a.foods.forEach((function(a){e[a.id]=a}))})),e}),{}),X=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("orderStatuses")||"null")||{}),a=Object(m.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(JSON.parse(localStorage.getItem("orders")||"null")||{}),s=Object(m.a)(o,2),l=s[0],f=s[1];return c.a.createElement(d.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0},c.a.createElement(E,{foodAreas:G,order:l})),c.a.createElement(u.a,{path:"/order/:areaId/:itemId",exact:!0},c.a.createElement(y,{foodAreas:G,order:l,setActiveOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(u.a,{path:"/basket/:areaId/:itemId",exact:!0},c.a.createElement(k,{foodAreas:G,order:l})),c.a.createElement(u.a,{path:"/orders",exact:!0},c.a.createElement(x,{order:l,orderStatuses:t,foodAreas:G,setFinishedOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="DONE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))},setCanceledOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="CANCELED",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))},setActiveOrder:function(e){var a=e.itemId,r=Object(i.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(u.a,{path:"/place/:area/:place",render:function(e){return c.a.createElement(O,Object.assign({},e,{item:Q[e.location.pathname],area:G[0],order:l,onIncrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(i.a)({},l));a in c?c[a].count++:c[a]={item:U[a],count:1};var o=Object(i.a)({},t);0===Object.keys(o).length&&G.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in l){var t=e.id===r?"ACTIVE":"CANCELED";o[e.id]=t}}))}))}));var s=JSON.stringify(c);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(c),n(o)},onDecrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(i.a)({},l));a in c&&(1===c[a].count?delete c[a]:c[a].count--);var o=Object(i.a)({},t);0===Object.keys(o).length&&G.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in l){var t=e.id===r?"ACTIVE":"CANCELED";o[e.id]=t}}))}))}));var s=JSON.stringify(c);localStorage.setItem("orders",s),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(c),n(o)}}))}})))};l.a.send("VKWebAppInit"),o.a.render(c.a.createElement(X,null),document.getElementById("root"))},24:function(e,a,t){e.exports=t.p+"static/media/edit.751f84c2.svg"},36:function(e,a,t){e.exports=t.p+"static/media/1.dfc54362.png"},37:function(e,a,t){e.exports=t.p+"static/media/3.dbf82c38.png"},51:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/2.20489759.png"},55:function(e,a,t){e.exports=t.p+"static/media/4.e671d539.png"},86:function(e,a,t){e.exports=t.p+"static/media/check-symbol.06277842.svg"},87:function(e,a,t){e.exports=t.p+"static/media/refresh-button.1198ed41.svg"},88:function(e,a,t){e.exports=t.p+"static/media/kfc.4fd2ba47.png"},89:function(e,a,t){e.exports=t.p+"static/media/burger.35bcd067.png"},90:function(e,a,t){e.exports=t.p+"static/media/mcdac.60464810.png"},91:function(e,a,t){e.exports=t.p+"static/media/sub.4eb05fdd.png"},92:function(e,a,t){e.exports=t(177)}},[[92,1,2]]]);
//# sourceMappingURL=main.e4d2859b.chunk.js.map