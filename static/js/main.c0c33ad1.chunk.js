(this.webpackJsonpconvert=this.webpackJsonpconvert||[]).push([[0],{36:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),l=n.n(c),s=n(8),i=n.n(s),r=(n(52),n(19)),o=n(20),u=n(23),d=n(22),j=(n(53),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).clicked=function(){document.querySelectorAll(".header-right a").forEach((function(e){e.setAttribute("className","")}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{class:"header",children:Object(a.jsx)("h2",{class:"logo",children:"Delta - Y Converter"})})}}]),n}(c.Component)),h=(n(36),n(87)),b=n(92),R=n(93),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={R12Value:0,R13Value:0,R23Value:0,R1value:0,R2value:0,R3value:0},e.R1=function(){var t=document.getElementById("t1");e.setState({R1value:t.value})},e.R2=function(){var t=document.getElementById("t2");e.setState({R2value:t.value})},e.R3=function(){var t=document.getElementById("t3");e.setState({R3value:t.value})},e.calc=function(){var t=1*e.state.R1value,n=1*e.state.R2value,a=1*e.state.R3value,c=1*t+1*n+1*t*n/(1*a),l=1*n+1*a+n*a/(1*t),s=1*t+1*a+t*a/(1*n),i=document.getElementById("R12"),r=document.getElementById("R23"),o=document.getElementById("R13");t<=0||n<=0||a<=0?(e.setState({R12value:"invalid value"}),e.setState({R23value:"invalid value"}),e.setState({R13value:"invalid value"})):(i.textContent=c,r.textContent=l,o.textContent=s,e.setState({R12value:c}),e.setState({R23value:l}),e.setState({R13value:s}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"clear"}),Object(a.jsxs)(h.a,{elevation:3,className:"container",children:[Object(a.jsx)("h1",{children:"Y to Delta"}),Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R1",type:"number",InputLabelProps:{shrink:!0},id:"t1",onChange:this.R1,placeholder:"R1"})}),Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R2",type:"number",InputLabelProps:{shrink:!0},placeholder:"R2",id:"t2",onChange:this.R2})}),Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R3",type:"number",InputLabelProps:{shrink:!0},id:"t3",onChange:this.R3,placeholder:"R3"})}),Object(a.jsx)(R.a,{variant:"contained",color:"primary",onClick:this.calc,children:"calc"})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R12"}),Object(a.jsx)("h1",{id:"R12",children:this.state.R12value})]}),Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R23"}),Object(a.jsx)("h1",{id:"R23",children:this.state.R23value})]}),Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R13"}),Object(a.jsx)("h1",{id:"R13",children:this.state.R13value})]})]})]})]})}}]),n}(c.Component),x=n(91),O=(Object(x.a)({root:{maxWidth:345},media:{height:140}}),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={R12Value:0,R13Value:0,R23Value:0,R1value:0,R2value:0,R3value:0},e.R12=function(){var t=document.getElementById("R12").value;e.state.R12Value=t},e.R13=function(){var t=document.getElementById("R13").value;e.state.R13Value=t},e.R23=function(){var t=document.getElementById("R23").value;e.state.R23Value=t},e.calc=function(){console.log(document.getElementById("te"));var t=1*e.state.R12Value+1*e.state.R13Value+1*e.state.R23Value,n=e.state.R12Value*e.state.R13Value/t,a=e.state.R12Value*e.state.R23Value/t,c=e.state.R23Value*e.state.R13Value/t;e.state.R1value=n,e.state.R2value=a,e.state.R3value=c;var l=document.getElementById("R1"),s=document.getElementById("R2"),i=document.getElementById("R3");n<=0||a<=0||c<=0?(l.textContent="invalid value",s.textContent="invalid value",i.textContent="invalid value"):(l.textContent=n,s.textContent=a,i.textContent=c)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"clear"}),Object(a.jsxs)(h.a,{elevation:3,className:"container",children:[Object(a.jsx)("h1",{children:"Delta to Y"}),Object(a.jsxs)("div",{id:"con",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R12",type:"number",InputLabelProps:{shrink:!0},id:"R12",onChange:this.R12,placeholder:"R12"})}),Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R23",type:"number",InputLabelProps:{shrink:!0},placeholder:"R23",id:"R23",onChange:this.R23})}),Object(a.jsx)("section",{children:Object(a.jsx)(b.a,{label:"R13",type:"number",InputLabelProps:{shrink:!0},id:"R13",onChange:this.R13,placeholder:"R13"})}),Object(a.jsx)(R.a,{variant:"contained",color:"primary",onClick:this.calc,children:"calc"})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R1"}),Object(a.jsx)("h1",{id:"R1",children:this.state.R1value})]}),Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R2"}),Object(a.jsx)("h1",{id:"R2",children:this.state.R2value})]}),Object(a.jsxs)("section",{id:"box",children:[Object(a.jsx)("h3",{children:"R3"}),Object(a.jsx)("h1",{id:"R3",children:this.state.R3value})]})]})]})]})]})}}]),n}(c.Component));n(57);var m=function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{id:"clear"}),Object(a.jsx)(O,{}),Object(a.jsx)(v,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),p()}},[[58,1,2]]]);
//# sourceMappingURL=main.c0c33ad1.chunk.js.map