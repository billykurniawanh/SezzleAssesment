(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),i=e(10),r=e.n(i),s=(e(87),e(13)),o=e(170),l=e(181),u=e(135),j=e(174),b=e(180),d=e(6),h=Object(o.a)({resultBox:{width:"40vw",marginTop:"2vw",marginBottom:"1vw",display:"flex",marginLeft:"auto",marginRight:"auto",textAlign:"right",color:"black"},buttonGroup:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40vw"},button:{height:"3vw",width:"8vw",margin:"1vw 1vw 1vw 1vw"}}),O=function(t){var n=t.socket,e=h(),a=Object(c.useState)(""),i=Object(s.a)(a,2),r=i[0],o=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{label:"Result",variant:"outlined",disabled:!0,value:r,className:e.resultBox}),Object(d.jsxs)(j.a,{size:"large",className:e.buttonGroup,variant:"contained",children:[Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"(")},children:"("}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+")")},children:")"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"%")},children:"%"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o("")},children:"AC"})]}),Object(d.jsxs)(j.a,{size:"large",className:e.buttonGroup,variant:"contained",children:[Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"7")},children:"7"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"8")},children:"8"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"9")},children:"9"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"/")},children:"/"})]}),Object(d.jsxs)(j.a,{size:"large",className:e.buttonGroup,variant:"contained",children:[Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"4")},children:"4"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"5")},children:"5"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"6")},children:"6"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"*")},children:"x"})]}),Object(d.jsxs)(j.a,{size:"large",className:e.buttonGroup,variant:"contained",children:[Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"1")},children:"1"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"2")},children:"2"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"3")},children:"3"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"-")},children:"-"})]}),Object(d.jsxs)(j.a,{size:"large",className:e.buttonGroup,variant:"contained",children:[Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"0")},children:"0"}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+".")},children:"."}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){try{var t=Object(b.a)(r);n.emit("newExpression",r+" = "+t),o(t)}catch(e){o("ERROR"),setTimeout((function(){return o("")}),1500)}},children:"="}),Object(d.jsx)(u.a,{className:e.button,onClick:function(){return o(r+"+")},children:"+"})]})]})},x=e(175),m=e(179),f=e(178),g=e(176),N=e(177),v=Object(o.a)({table:{width:"40vw",marginLeft:"auto",marginRight:"auto",marginTop:"2vw"},header:{textAlign:"center"}}),k=function(t){var n=t.data,e=v();return Object(d.jsxs)(x.a,{className:e.table,children:[Object(d.jsx)(g.a,{children:Object(d.jsx)(N.a,{children:Object(d.jsx)(f.a,{className:e.header,children:"Calculation History"})})}),Object(d.jsx)(m.a,{children:n.map((function(t){return Object(d.jsx)(N.a,{children:Object(d.jsx)(f.a,{component:"th",scope:"row",children:t})})}))})]})},C=e(74),p=e.n(C)()("http://localhost"),w=function(){var t=Object(c.useState)([]),n=Object(s.a)(t,2),e=n[0],a=n[1];return Object(c.useEffect)((function(){p.on("updateHistory",(function(t){a(t)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{socket:p}),Object(d.jsx)(k,{data:e})]})},R=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,183)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),R()},87:function(t,n,e){},98:function(t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.7588303a.chunk.js.map