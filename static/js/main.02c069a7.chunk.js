(this["webpackJsonpedubots-ui"]=this["webpackJsonpedubots-ui"]||[]).push([[0],{22:function(t,e,n){t.exports=n.p+"static/media/bot_green_heart.0100a92f.png"},27:function(t,e,n){t.exports=n(55)},32:function(t,e,n){},51:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),u=n.n(a),o=n(21),r=n.n(o),i=(n(32),n(26)),c=n(7),s=n.n(c),p=n(8),l=n(3),d=n(4),f=n(5),m=n(6),h=n(9),b=n.n(h),v=n(58),k=n(22),O=n.n(k),y=(n(51),n(23)),R=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sayToBot=Object(p.a)(s.a.mark((function t(){var e,n,u,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.inputRef.current.value,t.next=3,b.a.post(B,{input:e});case 3:n=t.sent,(u=n.data.conversationOutputs).length>0&&(o=u[0],a.props.updateBotOutputs(o)),a.inputRef.current.value="";case 7:case"end":return t.stop()}}),t)}))),a.keyPress=function(t){13===t.keyCode&&(console.log("value",t.target.value),a.sayToBot())},a.inputRef=t.inputRef,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){y.a.make(this.inputRef.current,{height:2,tha:[0,360],g:.1,num:1,radius:2,circle:!0,alpha:[.75,.1],color:"#67AB67"})}},{key:"render",value:function(){return u.a.createElement("div",{className:"inputFieldContainer"},u.a.createElement("input",{id:"userInputField",autoFocus:!0,onKeyDown:this.keyPress,autoComplete:"off",ref:this.inputRef,className:"inputField"}),u.a.createElement("button",{type:"submit",onClick:this.sayToBot},"reply"))}}]),n}(u.a.Component),j=n(24),g=n(10),E=n.n(g),w=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return u.a.createElement("span",{className:"chatbotOutput"},u.a.createElement(E.a,{wait:1500},u.a.createElement(j.a,{options:{strings:[this.props.output.text],speed:30,waitUntilVisible:!0,lifeLike:!0,cursor:!1}})))}}]),n}(u.a.Component),x=n(25),C=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=0,e=this.props.outputs.map((function(e){return u.a.createElement(E.a,{key:e.index,wait:3e3*t++},u.a.createElement(x.a.div,{initial:{y:300},animate:{y:-100},transition:{duration:2}},u.a.createElement(w,{output:e})))}));return u.a.createElement("span",{className:"botOutputsContainer"},e)}}]),n}(u.a.Component),I=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(t=e.call.apply(e,[this].concat(u))).setTextToInputField=function(){t.props.inputRef.current.value=t.props.quickReply.value},t.onClickQuickReply=function(){t.setTextToInputField(),t.props.removeQuickReplies(),t.props.inputRef.current.focus()},t}return Object(d.a)(n,[{key:"render",value:function(){return u.a.createElement("button",{className:"quickReply",onClick:this.onClickQuickReply},this.props.quickReply.value)}}]),n}(u.a.Component),q=(u.a.Component,Object(v.a)()),B="https://app.labs.ai/managedbots/partygrouping/".concat(q),N=0,T=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t,a){var o;return Object(l.a)(this,n),(o=e.call(this,t,a)).loadConversationLog=Object(p.a)(s.a.mark((function t(){var e,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(B);case 2:e=t.sent,(n=e.data.conversationOutputs).length>0&&((a=n[0]).output&&o.setState({botOutputs:o.addIndex(a.output)}),a.quickReplies&&o.setState({quickReplies:o.addIndex(a.quickReplies)}));case 5:case"end":return t.stop()}}),t)}))),o.addIndex=function(t){return t?t.map((function(t){return Object(i.a)({},t,{index:N++})})):[]},o.updateBotOutputs=function(t){o.setState({botOutputs:o.addIndex(t.output)}),o.setState({quickReplies:o.addIndex(t.quickReplies)})},o.removeQuickReplies=function(){o.setState({quickReplies:[]})},o.state={userInput:"",botOutputs:[],quickReplies:[]},o.inputRef=u.a.createRef(),o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadConversationLog()}},{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement("img",{src:O.a,className:"botIcon",alt:"logo icon"}),u.a.createElement(C,{outputs:this.state.botOutputs}),u.a.createElement(R,{inputRef:this.inputRef,userInput:this.state.userInput,updateBotOutputs:this.updateBotOutputs}))}}]),n}(u.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.02c069a7.chunk.js.map