(this.webpackJsonpswaploancalculator=this.webpackJsonpswaploancalculator||[]).push([[0],{28:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(12),r=t.n(s),i=(t(28),t(29),t(8)),o=t(0);t(31);var l=function(){return Object(o.jsxs)("div",{id:"top",className:"header left-calc-part",children:[Object(o.jsx)("p",{className:"header-subtitle",children:"Loan EMI Calculator"}),Object(o.jsxs)("h1",{className:"header-title",children:["Worried about ",Object(o.jsx)("b",{children:"EMI Calculations"})]}),Object(o.jsx)("p",{className:"header-title-text",children:"Our Calculator is here to help you out with all your perils, whether it is Home Loan, Car Loan or personal loan, we'll calculate each and every calculation with 99.9% accuracy."}),Object(o.jsx)("p",{children:"If you are interested in to develop similar or different kind of calculator or other small tools please contact us below we will get back to you with in 24hours."}),Object(o.jsx)("div",{className:"learn-more-btn-section",children:Object(o.jsx)("a",{className:"learn-more-btn btn-invert",href:"#services",children:"Let's Calculate"})})]})},d=t(11),u=t(16),j=t.n(u),b=t(18),h=t(23),m=Object(h.a)({name:"loan",initialState:{loading:!1,hasErrors:!1,loan:{interest:0,principle:0,emi:0,total:0}},reducers:{calculateLoanRequest:function(e){e.loading=!0},calculateLoanSuccess:function(e,a){var t=a.payload;e.loan=t,e.loading=!1,e.hasErrors=!1},calculateLoanFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),p=m.actions,v=p.calculateLoanRequest,f=p.calculateLoanSuccess,O=p.calculateLoanFailure,x=function(e){return e.loan};m.reducer;function g(e,a,t,n){return function(){var c=Object(b.a)(j.a.mark((function c(s){var r,i,o,l;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s(v()),r=0,i=0,o=0,l=0,(e=Number(e))>0&&a>0&&t>0&&("reducing-balance"==n?(a/=1200,r=Number(e*a*Math.pow(1+a,t)/(Math.pow(1+a,t)-1)),r+=414e-6):r=Number(e+e*(a/100)*t/12)/t,o=(l=r*t)-e,i=e);try{s(f({interest:o,principle:i,emi:r,total:l}))}catch(d){s(O())}case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}var N=t(19),y=t.n(N);var w=function(){var e=Object(d.b)(x),a=e.loan,t=(e.loading,e.hasErrors,Object(n.useState)([0,100])),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){var e=a.principle>0&&a.total>0&&a.interest>0?a.principle/a.total*100:100,t=a.principle>0&&a.total>0&&a.interest>0?a.interest/a.total*100:0,n=[Math.round(t),Math.round(e)];r(n)}),[a]),Object(o.jsx)("div",{className:"app",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"mixed-chart",children:Object(o.jsx)(y.a,{options:{legend:{position:"bottom",markers:{fillColors:["#cf9700","#ac10f8"]}},fill:{colors:["#cf9700","#ac10f8"]},dataLabels:{style:{colors:["#fff","#fff","#fff"]}},markers:{colors:["#fff","#fff","red"]},chart:{width:380,type:"donut"},plotOptions:{pie:{donut:{labels:{show:!0}}}},labels:["Interest","Principle"]},series:s,type:"donut",width:"100%"})})})})},C=[{name:"Dollar",symbol:"$",abbrevation:"USD",country:"USA"},{name:"Pound Sterling",symbol:"\xa3",abbrevation:"GBP",country:"UK"},{name:"Japanese Yen",symbol:"\xa5",abbrevation:"JPY",country:"Japan"},{name:"Chinese Yuan",symbol:"\xa5",abbrevation:"CNY",country:"China"},{name:"Euro",symbol:"\u20ac",abbrevation:"EUR",country:"Eurozone"},{name:"Indian Rupee",symbol:"\u20b9",abbrevation:"INR",country:"India"}];var k=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)("$"),r=Object(i.a)(s,2),l=r[0],u=r[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(n.useState)(0),v=Object(i.a)(p,2),f=v[0],O=v[1],N=Object(n.useState)(0),y=Object(i.a)(N,2),k=y[0],S=y[1],L=Object(n.useState)("flat-rate"),E=Object(i.a)(L,2),I=E[0],F=E[1],M=Object(d.a)(),P=Object(d.b)(x),R=P.loan,W=(P.loading,P.hasErrors,function(e){c(e.target.value),M(g(f,k,e.target.value,I))}),T=function(e){O(e.target.value),M(g(e.target.value,k,t,I))},U=function(e){S(e.target.value),M(g(f,e.target.value,t,I))},A=function(e){F(e),M(g(f,k,t,e))};return Object(n.useEffect)((function(){var e=localStorage.getItem("slc-currency")?localStorage.getItem("slc-currency"):"$";u(e)}),[]),Object(o.jsx)("div",{id:"calculator",className:"calculator-section",children:Object(o.jsxs)("div",{className:"calculator-box",children:[Object(o.jsx)("div",{className:"navTabs",children:Object(o.jsxs)("ul",{className:"nav nav-pills","data-aos":"fade-right","data-aos-duration":"1000",children:[Object(o.jsx)("li",{className:"flat-rate"==I?"nav-item active":"nav-item",children:Object(o.jsx)("a",{className:"nav-link",onClick:function(){return A("flat-rate")},children:Object(o.jsxs)("span",{children:["Flat Rate ",Object(o.jsx)("b",{children:"Loan Calculator"})]})})}),Object(o.jsx)("li",{className:"reducing-balance"==I?"nav-item active":"nav-item",children:Object(o.jsx)("a",{className:"nav-link",onClick:function(){return A("reducing-balance")},children:Object(o.jsxs)("span",{children:["Reducing Balance ",Object(o.jsx)("b",{children:"Loan Calculator"})]})})})]})}),Object(o.jsx)("div",{className:"calculator_sec",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("form",{className:"form-calculator","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200",children:[Object(o.jsxs)("div",{className:"form-group currency-group","data-aos":"fade-right","data-aos-duration":"800",children:[Object(o.jsx)("label",{htmlFor:"amount",children:"Loan Amount:"}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsxs)("div",{className:"input-group-prepend",children:[Object(o.jsx)("div",{className:"input-group-text",onClick:function(){m(!h)},children:l}),h?Object(o.jsx)("div",{className:"input-currency-selector",children:Object(o.jsx)("ul",{children:C.length>0?C.map((function(e,a){return Object(o.jsxs)("li",{onClick:function(){var a;a=e.symbol,localStorage.setItem("slc-currency",a),u(a),m(!1)},children:[" ",e.abbrevation," - ",e.country]},a)})):""})}):""]}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"amount",value:f,onChange:T})]}),Object(o.jsx)("div",{id:"slider",className:"emi-input",children:Object(o.jsx)("input",{type:"range",min:"0",max:"700000",value:f,onChange:T})})]}),Object(o.jsxs)("div",{className:"form-group","data-aos":"fade-right","data-aos-duration":"900","data-aos-delay":"200",children:[Object(o.jsx)("label",{htmlFor:"amount",children:"Interest Rate :"}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("div",{className:"input-group-text",children:"%"})}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"interest",value:k,onChange:U})]}),Object(o.jsx)("div",{id:"slider-interest",className:"emi-input",children:Object(o.jsx)("input",{type:"range",min:"0",max:"40",value:k,onChange:U})})]}),Object(o.jsxs)("div",{className:"form-group","data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"200",children:[Object(o.jsx)("label",{htmlFor:"amount",children:"Loan Tenure :"}),Object(o.jsxs)("div",{className:"input-group loan-group mb-2",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("div",{className:"input-group-text",children:"Months"})}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"tenure",value:t,onChange:W})]}),Object(o.jsx)("div",{id:"slider-tenure",className:"emi-input",children:Object(o.jsx)("input",{type:"range",min:"0",max:"100",value:t,onChange:W})})]})]})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("div",{className:"emi-details","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200",children:[Object(o.jsx)("div",{className:"emi-details-head","data-aos":"fade-right","data-aos-duration":"900","data-aos-delay":"200",children:Object(o.jsx)("h3",{children:"Your EMI Details"})}),Object(o.jsxs)("div",{className:"emi-details-box","data-aos":"fade-right","data-aos-duration":"1100","data-aos-delay":"200",children:[Object(o.jsx)("p",{children:"Loan EMI"}),Object(o.jsxs)("h5",{children:[Object(o.jsx)("span",{children:l}),R.emi.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"emi-details-box","data-aos":"fade-right","data-aos-duration":"1300","data-aos-delay":"200",children:[Object(o.jsx)("p",{children:"Total Interest Payable"}),Object(o.jsxs)("h5",{children:[Object(o.jsx)("span",{children:l}),R.interest.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"emi-details-box no-bottom-border","data-aos":"fade-right","data-aos-duration":"1500","data-aos-delay":"200",children:[Object(o.jsx)("p",{children:"Total Payment"}),Object(o.jsxs)("h5",{children:[Object(o.jsx)("span",{children:l}),R.total.toFixed(2)]})]})]})}),Object(o.jsx)("div",{className:"col-lg-12 chart-section",children:Object(o.jsx)("div",{className:"pie-chart","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"0",children:Object(o.jsx)("div",{className:"chartMain","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"0",children:Object(o.jsx)(w,{})})})})]})})]})})};var S=t(20),L=t.n(S);t(37);L.a.init();var E=function(){return Object(o.jsx)("div",{className:"swap-loan-calculator",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row calculator-row align-items-center",children:[Object(o.jsx)(l,{}),Object(o.jsx)(k,{})]})})})},I=t(21),F=t(3);var M=function(){return Object(o.jsx)(I.a,{basename:"/swap-loan-calculator",children:Object(o.jsx)(F.c,{children:Object(o.jsx)(F.a,{exact:!0,path:"/",children:Object(o.jsx)(E,{})})})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/swap-loan-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/swap-loan-calculator","/service-worker.js");P?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(a,e)}))}}(),W()}},[[40,1,2]]]);
//# sourceMappingURL=main.e2238705.chunk.js.map