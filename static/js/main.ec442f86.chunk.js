(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),o=n(2),r=n(4),l=n(6),d=n(7),b=n(11),j=n(10),u=n(8),h=n.n(u),O=n(0),v=function(t){var e=t.children,n=t.title;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:h.a.title,children:n}),e]})},x=n(9),f=n.n(x),g=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(O.jsxs)("ul",{className:f.a.list,children:[Object(O.jsxs)("li",{children:["Good: ",e]}),Object(O.jsxs)("li",{children:["Neutral: ",n]}),Object(O.jsxs)("li",{children:["Bad: ",c]}),Object(O.jsxs)("li",{children:["Total: ",a]}),Object(O.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})},k=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(O.jsx)(O.Fragment,{children:e.map((function(t){return Object(O.jsx)("button",{type:"button",name:t,onClick:n,children:t},t)}))})},p=function(t){var e=t.message;return Object(O.jsx)("p",{children:e})},m=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleClick=function(e){var n=e.target.name;t.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},n,t.state[n]+1))}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return t.state.good?Math.round(t.state.good/t.countTotalFeedback()*100):0},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{title:"Please leave feedback",children:Object(O.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick})}),this.countTotalFeedback()?Object(O.jsx)(v,{title:"Statistics",children:Object(O.jsx)(g,{good:e,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(O.jsx)(p,{message:"No feedback given"})]})}}]),n}(c.Component);n(17);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={sectionContainer:"Section_sectionContainer__x1wZn",title:"Section_title__TsVVE"}},9:function(t,e,n){t.exports={statList:"Statistics_statList__1Whwc",list:"Statistics_list__vj22e"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ec442f86.chunk.js.map