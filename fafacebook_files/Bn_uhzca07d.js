/*!CK:2725340330!*//*1444021532,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["R94sC"]); }

__d('ChatContentSearchButton.react',['BanzaiLogger','ChatContentSearchFlyout.react','ContentSearchEvents','ChatContentSearchContextualDialog.react','Event','Link.react','ReactComponentWithPureRenderMixin','React','ReactLayeredComponentMixin','MercuryShareAttachmentRenderLocations','SubscriptionsHandler','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){'use strict';if(c.__markCompiled)c.__markCompiled();var v=o.PropTypes,w=o.createClass({displayName:'ChatContentSearchButton',_clickGuard:false,mixins:[n,p],propTypes:{ContextualDialogClass:v.func,flyoutAlignment:v.oneOf(['left','right']),getInput:v.func.isRequired,getQuery:v.func.isRequired,location:v.oneOf(q.getValues()),onLoad:v.func,onSelect:v.func.isRequired},getDefaultProps:function(){return {flyoutAlignment:'left',location:q.CHAT};},getInitialState:function(){return {query:'',shown:false};},componentDidMount:function(){this.props.onLoad&&this.props.onLoad(this);},componentWillUnmount:function(){},updateQuery:function(){this.setState({query:this.props.getQuery()});},hideFlyout:function(){this.setState(this.getInitialState());},render:function(){return (o.createElement(m,{className:u(this.props.className,"_3_a7"+(this.state.shown?' '+"open":'')),onMouseDown:this._handleMouseDown,onClick:this._handleClick,title:t._("Choose a gif or sticker"),ref:'link'},o.createElement('i',{className:"_4l9x _3_a8 _4-fy"})));},renderLayers:function(){if(!this.state.shown)return {contextualDialog:null};var x=this.props.ContextualDialogClass||k;return {contextualDialog:o.createElement(x,{alignment:this.props.flyoutAlignment,contextRef:(function(){return this.refs.link;}).bind(this),onBlur:this.hideFlyout,onToggle:this._handleContextualDialogToggle,shown:this.state.shown,width:278},o.createElement(i,{location:this.props.location,onEscKeyDown:this.hideFlyout,onResultsLoaded:this._handleResultsLoaded,onSelect:this._handleSelect,query:this.state.query}))};},_handleMouseDown:function(x){this._clickGuard=this.state.shown;},_handleClick:function(x){if(this.state.shown||this._clickGuard)return;x.stopPropagation();this.setState({query:this.props.getQuery(),shown:!this.state.shown});h.log('ContentSearchLoggerConfig',{event:j.OPEN_TRAY,query:this.state.query});},_handleSelect:function(x,y){this.props.onSelect(x,y);this.setState(this.getInitialState());h.log('ContentSearchLoggerConfig',{event:j.RESULT_SENT,query:this.state.query,resultid:x.resultID});},_handleContextualDialogToggle:function(x){this.setState({shown:x});},_handleResultsLoaded:function(x){h.log('ContentSearchLoggerConfig',{event:j.QUERY_RESULTS_LOADED,query:this.state.query,inflighttime:x});}});f.exports=w;},null);