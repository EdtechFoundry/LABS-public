(this["webpackJsonpedubots-ui"]=this["webpackJsonpedubots-ui"]||[]).push([[0],{23:function(t,e,n){t.exports=n.p+"static/media/bot_green_heart.0100a92f.png"},27:function(t,e,n){t.exports=n(55)},32:function(t,e,n){},51:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),u=n(22),r=n.n(u),o=(n(32),n(26)),c=n(8),s=n.n(c),p=n(10),l=n(3),m=n(4),d=n(5),f=n(6),k=n(11),h=n.n(k),y=n(58),b=n(23),R=n.n(b),v=(n(51),n(24)),O=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sayToBot=Object(p.a)(s.a.mark((function t(){var e,n,i,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===(e=a.inputRef.current.value)){t.next=8;break}return t.next=4,h.a.post(A,{input:e});case 4:n=t.sent,(i=n.data.conversationOutputs).length>0&&(u=i[0],a.props.updateBotOutputs(u)),a.inputRef.current.value="";case 8:case"end":return t.stop()}}),t)}))),a.keyPress=function(t){13===t.keyCode&&a.sayToBot()},a.inputRef=t.inputRef,a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){v.a.make(this.inputRef.current,{height:2,tha:[0,360],g:.1,num:1,radius:2,circle:!0,alpha:[.75,.1],color:"#67AB67"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"inputFieldContainer"},i.a.createElement("input",{id:"userInputField",autoFocus:!0,onKeyDown:this.keyPress,autoComplete:"off",ref:this.inputRef,className:"inputField",tabIndex:1}),i.a.createElement("button",{type:"submit",onClick:this.sayToBot},"reply"))}}]),n}(i.a.Component),j=n(25),E=n(7),x=n.n(E),g=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("span",{className:"chatbotOutput"},i.a.createElement(x.a,{wait:1500},i.a.createElement(j.a,{options:{strings:[this.props.output.text],speed:30,waitUntilVisible:!0,lifeLike:!0,cursor:!1,afterComplete:this.props.startQuickReplyAnimation}})))}}]),n}(i.a.Component),Q=n(9),C=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=0,n=this.props.outputs.map((function(n,a,u){return i.a.createElement(x.a,{key:n.index,wait:3e3*e++},i.a.createElement(Q.b.div,{initial:!1,exit:{y:-300,opacity:0},transition:{duration:.5}},i.a.createElement(Q.b.div,{initial:{y:300},animate:{y:-100},transition:{duration:2}},i.a.createElement(g,{output:n,startQuickReplyAnimation:a===u.length-1?t.props.startQuickReplyAnimation:function(){}}))))}));return i.a.createElement("span",{className:"botOutputsContainer"},i.a.createElement(Q.a,null,n))}}]),n}(i.a.Component),w=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=e.call.apply(e,[this].concat(i))).setTextToInputField=function(){t.props.inputRef.current.value=t.props.quickReply.value},t.onClickQuickReply=function(){t.setTextToInputField(),t.props.removeQuickReplies(),t.props.inputRef.current.focus()},t.onKeyPress=function(e){13===e.keyCode&&t.onClickQuickReply()},t}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(Q.b.div,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5},className:"containerEunit",tabIndex:this.props.tabIndex,onKeyDown:this.onKeyPress},i.a.createElement("span",{className:"quickReply",onClick:this.onClickQuickReply},this.props.quickReply.value))}}]),n}(i.a.Component),I=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=1,n=this.props.quickReplies.map((function(n,a){return i.a.createElement(x.a,{key:n.index,wait:200*e++},i.a.createElement(w,{quickReply:n,inputRef:t.props.inputRef,removeQuickReplies:t.props.removeQuickReplies,tabIndex:a+2}))})),a=i.a.createElement("span",null);return this.props.startQuickReplyAnimation&&(a=i.a.createElement("div",{className:"quickReplyContainer"},n)),a}}]),n}(i.a.Component),q=Object(y.a)(),A="https://app.labs.ai/managedbots/partygrouping/".concat(q),B=0,N=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(t,a){var u;return Object(l.a)(this,n),(u=e.call(this,t,a)).loadConversationLog=Object(p.a)(s.a.mark((function t(){var e,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(A);case 2:e=t.sent,(n=e.data.conversationOutputs).length>0&&((a=n[0]).output&&u.setState({botOutputs:u.addIndex(a.output)}),a.quickReplies&&u.setState({quickReplies:u.addIndex(a.quickReplies)}));case 5:case"end":return t.stop()}}),t)}))),u.addIndex=function(t){return t?t.map((function(t){return Object(o.a)({},t,{index:B++})})):[]},u.updateBotOutputs=function(t){u.setState({botOutputs:u.addIndex(t.output)}),u.setState({quickReplies:u.addIndex(t.quickReplies)})},u.removeQuickReplies=function(){u.setState({quickReplies:[]}),u.setState({startQuickReplyAnimation:!1})},u.startQuickReplyAnimation=function(){u.setState({startQuickReplyAnimation:!0})},u.state={userInput:"",botOutputs:[],quickReplies:[],startQuickReplyAnimation:!1},u.inputRef=i.a.createRef(),u}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadConversationLog()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{src:R.a,className:"botIcon",alt:"logo icon"}),i.a.createElement(C,{outputs:this.state.botOutputs,startQuickReplyAnimation:this.startQuickReplyAnimation}),i.a.createElement(I,{quickReplies:this.state.quickReplies,inputRef:this.inputRef,removeQuickReplies:this.removeQuickReplies,startQuickReplyAnimation:this.state.startQuickReplyAnimation}),i.a.createElement(O,{inputRef:this.inputRef,userInput:this.state.userInput,updateBotOutputs:this.updateBotOutputs}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.81249ade.chunk.js.map