(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),l=t(6),o=t.n(l),r=(t(2),t(7)),i=t(8),s=t(3),d=t(10),b=t(9),j=(t(15),t(0)),u=function(e){var n=e.result;return Object(j.jsx)("div",{className:"display",children:n})};u.defaultProps={result:"0"};var O=u,x=function(e){var n=e.name,t=e.handleOnClick,a=e.color,c=e.wide;return Object(j.jsx)("button",{className:"".concat(a," ").concat(c),type:"button",onClick:function(){return t(n)},children:n})},h=function(e){var n=e.onClick,t=function(e){n(e)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"btnPanel",children:[Object(j.jsx)(x,{name:"AC",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"+/-",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"%",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"\xf7",handleOnClick:t,wide:"btn25",color:"orange"})]}),Object(j.jsxs)("div",{className:"btnPanel",children:[Object(j.jsx)(x,{name:"7",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"8",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"9",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"x",handleOnClick:t,wide:"btn25",color:"orange"})]}),Object(j.jsxs)("div",{className:"btnPanel",children:[Object(j.jsx)(x,{name:"4",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"5",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"6",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"-",handleOnClick:t,wide:"btn25",color:"orange"})]}),Object(j.jsxs)("div",{className:"btnPanel",children:[Object(j.jsx)(x,{name:"1",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"2",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"3",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"+",handleOnClick:t,wide:"btn25",color:"orange"})]}),Object(j.jsxs)("div",{className:"btnPanel",children:[Object(j.jsx)(x,{name:"0",handleOnClick:t,wide:"btnWider",color:"gray"}),Object(j.jsx)(x,{name:".",handleOnClick:t,wide:"btn25",color:"gray"}),Object(j.jsx)(x,{name:"=",handleOnClick:t,wide:"btn25",color:"orange"})]})]})},k=t(5),m=t.n(k),p=function(e,n,t){var a,c=m()(1*e),l=m()(1*n);switch(t){case"%":a=c.times(l).div(100);break;case"+":a=c.plus(l);break;case"-":a=c.minus(l);break;case"x":a=c.times(l);break;case"\xf7":a=c.div(l);break;default:a=null}return a.toString()},C=function(e,n){var t=e.total,a=e.next,c=e.operation;switch(n){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return c?{total:t,next:a?a+n:n,operation:c}:{total:t?t+n:n,next:a,operation:c};case"AC":return{total:null,next:null,operation:null};case"+/-":return a?{total:t,next:p(a,"-1","x"),operation:c}:{total:p(t,"-1","x"),next:a,operation:c};case".":return c?a?{total:t,next:a+n,operation:c}:{total:t,next:"0".concat(n),operation:c}:t?{total:t+n,next:a,operation:c}:{total:"0".concat(n),next:a,operation:c};case"=":return"\xf7"===c&&"0"===a?{total:"there is no division by zero",next:null,operation:null}:{total:a?p(t,a,c):t,next:null,operation:null};case"%":if(t)return{total:a?p(t,a,c)/100:"expression error",next:null,operation:null};break;default:return c?{total:a?p(t,a,c):"expression error",next:null,operation:n}:{total:t,next:null,operation:n}}return{total:t,next:a,operation:c}},w=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).state={total:null,next:null,operation:null},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(i.a)(t,[{key:"handleClick",value:function(e){var n=C(this.state,e);this.setState(n)}},{key:"render",value:function(){var e=this.state,n=e.total,t=e.next,a=e.operation,c="0";return c=t?"".concat(n).concat(a).concat(t):a&&"="!==a&&n?"".concat(n).concat(a):n||"0",Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsx)(O,{result:c}),Object(j.jsx)(h,{onClick:this.handleClick})]})})}}]),t}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},2:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.0e861386.chunk.js.map