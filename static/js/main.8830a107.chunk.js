(this["webpackJsonpedubots-ui"]=this["webpackJsonpedubots-ui"]||[]).push([[0],{27:function(t,e,n){t.exports=n.p+"static/media/bot_green_heart.0100a92f.png"},31:function(t,e,n){t.exports=n(60)},36:function(t,e,n){},54:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(26),u=n.n(o),r=(n(36),n(30)),s=n(8),c=n.n(s),p=n(9),l=n(4),d=n(5),m=n(6),f=n(7),h=n(10),k=n.n(h),v=n(64),b=n(27),O=n.n(b),y=(n(54),n(28)),R=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sayToBot=Object(p.a)(c.a.mark((function t(){var e,n,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===(e=a.inputRef.current.value)){t.next=8;break}return t.next=4,k.a.post(q,{input:e});case 4:n=t.sent,(i=n.data.conversationOutputs).length>0&&(o=i[0],a.props.updateBotOutputs(o)),a.inputRef.current.value="";case 8:case"end":return t.stop()}}),t)}))),a.keyPress=function(t){13===t.keyCode&&a.sayToBot()},a.inputRef=t.inputRef,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){y.a.make(this.inputRef.current,{height:2,tha:[0,360],g:.1,num:1,radius:2,circle:!0,alpha:[.75,.1],color:"#67AB67"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"inputFieldContainer"},i.a.createElement("input",{id:"userInputField",autoFocus:!0,onKeyDown:this.keyPress,autoComplete:"off",ref:this.inputRef,className:"inputField",tabIndex:1}),i.a.createElement("button",{type:"submit",onClick:this.sayToBot},"reply"))}}]),n}(i.a.Component),j=n(29),E=n(11),x=n.n(E),g=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("span",{className:"chatbotOutput"},i.a.createElement(x.a,{wait:1500},i.a.createElement(j.a,{options:{strings:[this.props.output.text],speed:30,waitUntilVisible:!0,lifeLike:!0,cursor:!1,afterComplete:this.props.startQuickReplyAnimation}})))}}]),n}(i.a.Component),C=n(12),w=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=0,n=this.props.outputs.map((function(n,a,o){return i.a.createElement(x.a,{key:n.index,wait:3e3*e++},i.a.createElement(C.b.div,{initial:!1,exit:{y:-300,opacity:0},transition:{duration:.5}},i.a.createElement(C.b.div,{initial:{y:300},animate:{y:0},transition:{duration:2}},i.a.createElement(g,{output:n,startQuickReplyAnimation:a===o.length-1?t.props.setBotOutputAnimationFinished:function(){}}))))}));return i.a.createElement("span",{className:"botOutputsContainer"},i.a.createElement(C.a,null,n))}}]),n}(i.a.Component),B=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).setTextToInputField=function(){t.props.inputRef.current.value=t.props.quickReply.value},t.onClickQuickReply=function(){t.setTextToInputField(),t.props.removeQuickReplies(),t.props.inputRef.current.focus()},t.onKeyPress=function(e){13===e.keyCode&&t.onClickQuickReply()},t}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(C.b.div,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5},className:"containerEunit",tabIndex:this.props.tabIndex,onKeyDown:this.onKeyPress},i.a.createElement("span",{className:"quickReply",onClick:this.onClickQuickReply},this.props.quickReply.value))}}]),n}(i.a.Component),I=(n(57),function(){var t=Object(p.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!1);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),A=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).onClickUndo=function(){},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=1,n=this.props.quickReplies.map((function(n,a){return i.a.createElement(x.a,{key:n.index,wait:200*e++},i.a.createElement(B,{quickReply:n,inputRef:t.props.inputRef,removeQuickReplies:t.props.removeQuickReplies,tabIndex:a+2}))})),a=i.a.createElement("span",null);return this.props.isBotOutputAnimationFinished&&(a=(I(),i.a.createElement("div",{className:"quickReplyContainer"},n))),a}}]),n}(i.a.Component),F=Object(v.a)(),q="https://app.labs.ai/managedbots/partygrouping/".concat(F),Q=0,N=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t,a){var o;return Object(l.a)(this,n),(o=e.call(this,t,a)).loadConversationLog=Object(p.a)(c.a.mark((function t(){var e,n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(q);case 2:e=t.sent,(n=e.data.conversationOutputs).length>0&&((a=n[0]).output&&o.setState({botOutputs:o.addIndex(a.output)}),a.quickReplies&&o.setState({quickReplies:o.addIndex(a.quickReplies)}));case 5:case"end":return t.stop()}}),t)}))),o.addIndex=function(t){return t?t.map((function(t){return Object(r.a)({},t,{index:Q++})})):[]},o.updateBotOutputs=function(t){o.setState({botOutputs:o.addIndex(t.output)}),o.setState({quickReplies:o.addIndex(t.quickReplies)})},o.removeQuickReplies=function(){o.setState({quickReplies:[]}),o.setState({isBotOutputAnimationFinished:!1})},o.setBotOutputAnimationFinished=function(){o.setState({isBotOutputAnimationFinished:!0})},o.state={userInput:"",botOutputs:[],quickReplies:[],isBotOutputAnimationFinished:!1},o.inputRef=i.a.createRef(),o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadConversationLog()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{src:O.a,className:"botIcon",alt:"logo icon"}),i.a.createElement(w,{outputs:this.state.botOutputs,setBotOutputAnimationFinished:this.setBotOutputAnimationFinished}),i.a.createElement(A,{quickReplies:this.state.quickReplies,inputRef:this.inputRef,removeQuickReplies:this.removeQuickReplies,isBotOutputAnimationFinished:this.state.isBotOutputAnimationFinished,loadConversationLog:this.loadConversationLog}),i.a.createElement(R,{inputRef:this.inputRef,userInput:this.state.userInput,updateBotOutputs:this.updateBotOutputs}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8830a107.chunk.js.map