(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=n(4),r=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),p=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={pressedkey:""},e.handleClick=function(t){e.setState({pressedkey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleClick)}},{key:"render",value:function(){var e=this.state.pressedkey;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);s.a.render(Object(p.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dfb22f53.chunk.js.map