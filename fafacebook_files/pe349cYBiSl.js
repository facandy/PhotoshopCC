/*!CK:2488904510!*//*1442806350,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GmYqn"]); }

__d('MessengerComposeViewHeader.react',['immutable','MessengerSearchSource','MessengerTabIndices','MessengerTokenizer.react','ReactComponentWithPureRenderMixin','React','clearImmediate','cx','fbt','joinClasses','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=m.PropTypes,t=320,u=m.createClass({displayName:'MessengerComposeViewHeader',mixins:[l],propTypes:{onAddRecipient:s.func.isRequired,onRemoveRecipient:s.func.isRequired,onResize:s.func.isRequired,recipients:s.instanceOf(h.List).isRequired,viewer:s.string.isRequired},_timer:null,getInitialState:function(){return {tokenizerContext:null};},componentDidMount:function(){this._focusTokenizer();this.setState({tokenizerContext:this.refs.tokenizerContext});},componentDidUpdate:function(v){if(this.props.recipients!==v.recipients)this.props.onResize();},componentWillUnmount:function(){this._timer&&n(this._timer);},render:function(){return (m.createElement('div',{className:q("_2y8y _5l-3",this.props.className)},m.createElement('div',{className:"_2y8z"},p._("To:")),m.createElement('div',null,m.createElement(k,{className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,extraRendererProps:{className:"_2y8_",width:t},hasHoverState:true,onAddEntryAttempt:this.props.onAddRecipient,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:p._("Type the name of a person or group"),ref:'tokenizer',searchSource:i.getForFBID(this.props.viewer),tabIndex:j.NEW_MESSAGE_TOKENIZER,useLayer:true,viewer:this.props.viewer}),m.createElement('div',{ref:'tokenizerContext'}))));},_focusTokenizer:function(){this._timer=r((function(){this.refs.tokenizer&&this.refs.tokenizer.focusInput();}).bind(this));}});f.exports=u;},null);