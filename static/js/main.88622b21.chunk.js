(this["webpackJsonpedubots-ui"]=this["webpackJsonpedubots-ui"]||[]).push([[0],{28:function(t,e,n){t.exports=n.p+"static/media/bot_green_heart.0100a92f.png"},33:function(t,e,n){t.exports=n(61)},38:function(t,e,n){},56:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(27),s=n.n(o),u=(n(38),n(32)),r=n(8),c=n.n(r),p=n(9),l=n(3),d=n(4),m=n(5),f=n(6),h=n(10),v=n.n(h),b=n(64),k=n(28),y=n.n(k),C=(n(56),n(13)),R=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).sayToBot=Object(p.a)(c.a.mark((function t(){var e,n,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i.props.isConversationEnded){t.next=5;break}i.props.loadConversationLog(),i.props.setConversationEnded(!1),t.next=15;break;case 5:if(""===(e=i.props.isQuickReplyInput?i.props.userInput:i.inputRef.current.value)){t.next=15;break}return t.next=9,v.a.post(N(),{input:e});case 9:n=t.sent,i.props.setConversationState(n.data.conversationState),"ENDED"===n.data.conversationState?i.props.setUndoAvailable(!1):i.props.setUndoAvailable(n.data.conversationSteps.length>1),(a=n.data.conversationOutputs).length>0&&("undefined"==typeof(o=a[a.length-1]).output&&(o.output=[{text:"I am so sorry \ud83d\ude25",type:"text"},{text:"But this is only a demo...",type:"text"},{text:"Use the back button \u2b05 and try me again \ud83d\udc40\u270c",type:"text"}]),i.props.updateBotOutputs(o)),i.props.isQuickReplyInput||null==i.inputRef.current||(i.inputRef.current.value="");case 15:case"end":return t.stop()}}),t)}))),i.keyPress=function(t){13===t.keyCode&&i.sayToBot()},i.inputRef=t.inputRef,i.submitRef=t.submitRef,i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){q()}},{key:"render",value:function(){var t,e=this;return t=this.props.isConversationEnded?i.createElement("div",{className:"chatbotOutput"},"Conversation has Ended"):this.props.isQuickReplyInput?i.createElement(C.a,{id:"animatedUserInputField",element:"input",getBeforeInit:function(t){return t.type(e.props.userInput),t},onKeyDown:this.keyPress,autoComplete:"off",className:"inputField",tabIndex:this.props.tabIndexInput,options:{speed:30,waitUntilVisible:!0,lifeLike:!0,cursor:!0,afterComplete:this.props.makeVisibleReplyButtonClick}}):i.createElement("input",{id:"userInputField",onKeyDown:this.keyPress,autoComplete:"off",ref:this.inputRef,className:"inputField",tabIndex:this.props.tabIndexInput}),i.createElement("div",{className:"inputFieldContainer"},t,i.createElement("button",{type:"submit",ref:this.submitRef,onClick:this.sayToBot,tabIndex:this.props.tabIndexSubmit,className:(this.props.isClickAnimation?"onClickAnimation":"")+(this.props.isConversationEnded?" btnRestartConversation":"")},this.props.isConversationEnded?"restart conversation":"reply"))}}]),n}(i.Component),O=n(11),E=n.n(O),I=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("span",{className:"chatbotOutput",tabIndex:this.props.tabIndex},a.a.createElement(E.a,{wait:1500},a.a.createElement(C.a,{options:{strings:[this.props.output.text],speed:30,waitUntilVisible:!0,lifeLike:!0,cursor:!1,afterComplete:this.props.startQuickReplyAnimation}})))}}]),n}(a.a.Component),x=n(12),A=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=0,n=this.props.outputs.map((function(n,i,o){return a.a.createElement(x.b.div,{key:n.index,initial:!1,exit:{y:-300,opacity:0},transition:{duration:.3}},a.a.createElement(E.a,{wait:3e3*e++},a.a.createElement(x.b.div,{initial:{y:300},animate:{y:150},transition:{duration:2}},a.a.createElement(I,{output:n,tabIndex:n.index+1,startQuickReplyAnimation:i===o.length-1?t.props.setBotOutputAnimationFinished:function(){}}))))}));return a.a.createElement("span",{className:"botOutputsContainer",ref:this.props.botOutputsRef},a.a.createElement(x.a,null,n))}}]),n}(a.a.Component),g=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).setTextToInputField=function(){t.props.setUserInput(t.props.quickReply.value)},t.onClickQuickReply=function(){t.setTextToInputField(),t.props.removeQuickReplies()},t.onKeyPress=function(e){13===e.keyCode&&t.onClickQuickReply()},t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(x.b.div,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5},className:"containerEunit",tabIndex:this.props.tabIndex,onKeyDown:this.onKeyPress},a.a.createElement("span",{className:"quickReply",onClick:this.onClickQuickReply},this.props.quickReply.value))}}]),n}(a.a.Component),j=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=a.a.createElement("span",null);if(this.props.isBotOutputAnimationFinished){var n=1,i=this.props.quickReplies.map((function(e,i){return a.a.createElement(E.a,{key:e.index,wait:200*n++},a.a.createElement(g,{quickReply:e,inputRef:t.props.inputRef,removeQuickReplies:t.props.removeQuickReplies,setUserInput:t.props.setUserInput,tabIndex:e.index+1}))}));e=a.a.createElement("div",{className:"quickReplyContainer"},i)}return e}}]),n}(a.a.Component),B=n(29),S=n(30),U=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).onClickUndo=function(){var e=t.props.loadConversationLog;t.undo((function(){e()}))},t.onKeyPress=function(e){13===e.keyCode&&t.onClickUndo()},t.undo=function(){var t=Object(p.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post(N("undo")).then(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t}return Object(d.a)(n,[{key:"render",value:function(){var t=a.a.createElement("span",null);return this.props.isUndoAvailable&&(t=a.a.createElement(B.a,{icon:S.faUndo,onClick:this.onClickUndo,className:"undoIcon"})),t}}]),n}(a.a.Component),w=n(31),F=Object(b.a)(),Q=0,N=function(t){return t||(t=""),t.startsWith("/")||(t="/"+t),"".concat("https://app.labs.ai/managedbots/partygrouping/").concat(F).concat(t,"?returnCurrentStepOnly=false")},q=function(){w.a.make(".inputField",{height:2,tha:[0,360],g:.1,num:1,radius:2,circle:!0,alpha:[.75,.1],color:"#67AB67"})},L=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t,i){var o;return Object(l.a)(this,n),(o=e.call(this,t,i)).loadConversationLog=Object(p.a)(c.a.mark((function t(){var e,n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.clearBotOutputAnimationFinished(),t.next=3,v.a.get(N());case 3:e=t.sent,o.setConversationState(e.data.conversationState),"ENDED"===e.data.conversationState?o.setUndoAvailable(!1):o.setUndoAvailable(e.data.conversationSteps.length>1),(n=e.data.conversationOutputs).length>0&&((i=n[n.length-1]).output&&o.setState({botOutputs:o.addIndex(i.output)}),i.quickReplies&&o.setState({quickReplies:o.addIndex(i.quickReplies)}));case 8:case"end":return t.stop()}}),t)}))),o.addIndex=function(t){return t?t.map((function(t){return Object(u.a)({},t,{index:Q++})})):[]},o.updateBotOutputs=function(t){o.clearBotOutputAnimationFinished(),o.setState({botOutputs:o.addIndex(t.output)}),o.setState({quickReplies:o.addIndex(t.quickReplies)}),o.setQuickReplyInput(!1)},o.removeQuickReplies=function(){o.setState({quickReplies:[]}),o.setState({isBotOutputAnimationFinished:!1})},o.setBotOutputAnimationFinished=function(){o.setState({isBotOutputAnimationFinished:!0}),"ENDED"===o.conversationState?o.setConversationEnded(!0):o.setConversationEnded(!1)},o.clearBotOutputAnimationFinished=function(){o.setState({isBotOutputAnimationFinished:!1})},o.setUndoAvailable=function(t){o.setState({isUndoAvailable:t})},o.setConversationEnded=function(t){o.setState({isConversationEnded:t})},o.setConversationState=function(t){o.conversationState=t},o.setUserInput=function(t){o.setState({userInput:t}),o.setQuickReplyInput(!0)},o.setQuickReplyInput=function(t){o.setState({isQuickReplyInput:t}),o.state.isConversationEnded||q()},o.makeVisibleReplyButtonClick=function(){setTimeout((function(){o.animateButtonClick(),o.submitRef.current.click()}),500)},o.animateButtonClick=function(){o.setState({isClickAnimation:!0}),setTimeout((function(){o.setState({isClickAnimation:!1})}),500)},o.state={userInput:"",botOutputs:[],quickReplies:[],isConversationEnded:!1,isBotOutputAnimationFinished:!1,isUndoAvailable:!1,isQuickReplyInput:!1,isClickAnimation:!1,tabIndex:1},o.botOutputsRef=a.a.createRef(),o.inputRef=a.a.createRef(),o.submitRef=a.a.createRef(),o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadConversationLog(),this.botOutputsRef.current.focus()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:y.a,className:"botIcon",alt:"logo icon"}),a.a.createElement(U,{isUndoAvailable:this.state.isUndoAvailable,loadConversationLog:this.loadConversationLog}),a.a.createElement(A,{outputs:this.state.botOutputs,botOutputsRef:this.botOutputsRef,setBotOutputAnimationFinished:this.setBotOutputAnimationFinished}),a.a.createElement(j,{quickReplies:this.state.quickReplies,inputRef:this.inputRef,removeQuickReplies:this.removeQuickReplies,isBotOutputAnimationFinished:this.state.isBotOutputAnimationFinished,loadConversationLog:this.loadConversationLog,setUserInput:this.setUserInput}),a.a.createElement(R,{inputRef:this.inputRef,submitRef:this.submitRef,tabIndexInput:Q+1,tabIndexSubmit:Q+2,userInput:this.state.userInput,updateBotOutputs:this.updateBotOutputs,setUndoAvailable:this.setUndoAvailable,isQuickReplyInput:this.state.isQuickReplyInput,makeVisibleReplyButtonClick:this.makeVisibleReplyButtonClick,isClickAnimation:this.state.isClickAnimation,setConversationState:this.setConversationState,setConversationEnded:this.setConversationEnded,isConversationEnded:this.state.isConversationEnded,loadConversationLog:this.loadConversationLog}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.88622b21.chunk.js.map