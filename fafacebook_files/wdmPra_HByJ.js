/*!CK:1371700113!*//*1446535942,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nhkcW"]); }

__d('MenuStaticItem.react',['MenuStaticItem'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){k.isReactLegacyFactory={};k.type=k;}var j=h;i(j);f.exports=j;},null);
__d('XUIMenuStaticItem.react',['MenuStaticItem.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h;f.exports=i;},null);
__d('XUITokenizerRichToken.react',['DraggableTokenMixin.react','React','SearchableEntry','XUICloseButton.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=i.PropTypes,o=i.createClass({displayName:'XUITokenizerRichToken',mixins:[h],propTypes:{label:n.string.isRequired,entry:n.instanceOf(j),onRemove:n.func,highlighted:n.bool},_onRemove:function(p){p.preventDefault();this.props.onRemove(this.props.entry);},render:function(){var p;if(this.props.onRemove)p=i.createElement(k,{type:'button','aria-label':m._("Remove {item}",[m.param('item',this.props.label)]),className:"_5yii",size:'small',onClick:this._onRemove});var q=this.props.entry;return this.renderDraggableToken(i.createElement('span',this.props,i.createElement('div',{className:"_5yij",label:null},i.createElement('img',{className:"_5yik",src:q.getPhoto()}),q.getTitle(),' - ',q.getSubtitle(),p)));}});f.exports=o;},null);
__d('XUITokenizer.react',['AbstractTokenizer.react','React','XUIError.react','XUITokenizerToken.react','XUITokenizerRichToken.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=i.PropTypes,r={ViewRenderer:n,TokenRenderer:k,useLayer:true},s={ViewRenderer:m,TokenRenderer:k,useLayer:true},t=i.createClass({displayName:'XUITokenizer',propTypes:babelHelpers._extends({alwaysShowPlaceholder:q.bool,className:q.string,context:q.object,entries:q.array,excludedEntries:q.object,onAddEntryAttempt:q.func.isRequired,onEntriesFound:q.func,onInputFocus:q.func,onPaste:q.func,onQueryStringChange:q.func,onRemoveEntryAttempt:q.func.isRequired,onReorderEntryAttempt:q.func,placeholder:q.string,presenter:q.object,queryString:q.string,searchSource:q.object.isRequired,searchSourceOptions:q.object,selectOnBlur:q.bool,selectOnTab:q.bool,testID:q.string,tokenizeQueryString:q.func,viewStyle:q.oneOf(['textonly','rich']),inputID:q.string,entriesWidthMatchContext:q.bool,disabled:q.bool},j.propTypes),getDefaultProps:function(){return {viewStyle:'rich',entriesWidthMatchContext:true};},render:function(){var u=p(this.props.className,"_59_m"),v=this.props.presenter;if(!v){v=this.props.viewStyle=='rich'?r:s;if(this.props.tokenStyle=='rich')v.TokenRenderer=l;}return (i.createElement(j,this.props,i.createElement('div',{className:u,'data-testid':this.props.testID},i.createElement(h,{alwaysShowPlaceholder:this.props.alwaysShowPlaceholder,autoHighlight:this.props.autoHighlight,context:this.props.context,className:"_59_n",entries:this.props.entries,excludedEntries:this.props.excludedEntries,focusedOnInit:this.props.focusedOnInit,limit:this.props.limit,onAddEntryAttempt:this.props.onAddEntryAttempt,onEntriesFound:this.props.onEntriesFound,onEnter:this.props.onEnter,onInputBlur:this.props.onInputBlur,onInputFocus:this.props.onInputFocus,onPaste:this.props.onPaste,onQueryStringChange:this.props.onQueryStringChange,onRemoveEntryAttempt:this.props.onRemoveEntryAttempt,onReorderEntryAttempt:this.props.onReorderEntryAttempt,onEnterWithoutSelection:this.props.onEnterWithoutSelection,placeholder:this.props.placeholder,presenter:v,queryString:this.props.queryString,ref:'tokenizer',searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,selectOnBlur:this.props.selectOnBlur,selectOnTab:this.props.selectOnTab,showEntriesOnFocus:this.props.showEntriesOnFocus,tokenizeQueryStringOnBlur:this.props.tokenizeQueryStringOnBlur,tokenizeQueryString:this.props.tokenizeQueryString,inputID:this.props.inputID,entriesWidthMatchContext:this.props.entriesWidthMatchContext,disabled:this.props.disabled}))));},focusInput:function(){this.refs.tokenizer&&this.refs.tokenizer.focusInput();}});f.exports=t;},null);
__d('PhotoEditorSaveStates',['requireWeak','Map'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j;h('PhotoEditorGraphic',function(n){j=n.Sticker;});var k=new i(),l=new i(),m={setState:function(n,o){k.set(n,o);},getState:function(n){return k.get(n);},setLoggingData:function(n,o){l.set(n,o);},getLoggingData:function(n){return l.get(n);},getTotalNumOfStickersOnPhoto:function(n){if(k.get(n))return k.get(n).graphics.filter(function(o){return j&&o.type===j;}).length;return 0;}};f.exports=m;},null);
__d('ReactComposerAudienceActionTypes',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({SET_AUDIENCE:null,SET_AUDIENCE_ELEMENT:null,SET_AUDIENCE_INSTANCE:null,SET_PRIVACYX_NULL_DANGEROUS:null});},null);
__d('ReactComposerAudienceStore',['ReactComposerActionStore','ReactComposerAudienceActionTypes','$','DOM','csx','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;n=babelHelpers.inherits(p,h);o=n&&n.prototype;function p(){'use strict';var q;o.constructor.call(this,function(){return {audience:null,audienceElement:null,audienceInstance:null,legacyAudience:null,privacyxNullDangerous:false};},function(r){switch(r.type){case i.SET_AUDIENCE:q&&q.$ReactComposerAudienceStore1(r);break;case i.SET_AUDIENCE_ELEMENT:q&&q.$ReactComposerAudienceStore2(r);break;case i.SET_AUDIENCE_INSTANCE:q&&q.$ReactComposerAudienceStore3(r);break;case i.SET_PRIVACYX_NULL_DANGEROUS:q&&q.$ReactComposerAudienceStore4(r);break;}});q=this;}p.prototype.getAudience=function(q){'use strict';if(this.getPrivacyxNullDangerous(q))return null;var r=k.scry(j(q),"._5dd8");!(r.length<2)?m(0):undefined;var s=r[0];if(s){var t=k.scry(s,'input[name="privacyx"]');!(t.length<2)?m(0):undefined;if(t.length===1)return t[0].value;}return this.getComposerData(q).audience;};p.prototype.getLegacyAudience=function(q){'use strict';return this.getComposerData(q).legacyAudience;};p.prototype.getAudienceElement=function(q){'use strict';return this.getComposerData(q).audienceElement;};p.prototype.getAudienceInstance=function(q){'use strict';return this.getComposerData(q).audienceInstance;};p.prototype.getPrivacyxNullDangerous=function(q){'use strict';return this.getComposerData(q).privacyxNullDangerous;};p.prototype.$ReactComposerAudienceStore1=function(q){'use strict';var r=this.validateAction(q,'composerID'),s=this.getComposerData(r);s.audience=q.audience;s.legacyAudience=q.legacyAudience;this.emitChange(r);};p.prototype.$ReactComposerAudienceStore2=function(q){'use strict';var r=this.validateAction(q,['composerID','audienceElement']),s=r[0],t=r[1],u=this.getComposerData(s);u.audienceElement=t;this.emitChange(s);};p.prototype.$ReactComposerAudienceStore3=function(q){'use strict';var r=this.validateAction(q,'composerID'),s=this.getComposerData(r);s.audienceInstance=q.audienceInstance?q.audienceInstance.getInstance().getInstance():null;this.emitChange(r);};p.prototype.$ReactComposerAudienceStore4=function(q){'use strict';var r=this.validateAction(q,'composerID'),s=this.getComposerData(r);s.privacyxNullDangerous=q.privacyxNullDangerous;this.emitChange(r);};f.exports=new p();},null);
__d('ReactComposerAudienceActions',['ReactComposerAudienceActionTypes','ReactComposerDispatcher','ReactComposerAudienceStore'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();c('ReactComposerAudienceStore');var j={setAudience:function(k,l,m){i.dispatch({composerID:k,type:h.SET_AUDIENCE,audience:l,legacyAudience:m});},setAudienceElement:function(k,l){i.dispatch({composerID:k,type:h.SET_AUDIENCE_ELEMENT,audienceElement:l});},setAudienceInstance:function(k,l){i.dispatch({composerID:k,type:h.SET_AUDIENCE_INSTANCE,audienceInstance:l});},setPrivacyxNullDangerous:function(k,l){i.dispatch({composerID:k,type:h.SET_PRIVACYX_NULL_DANGEROUS,privacyxNullDangerous:l});}};f.exports=j;},null);
__d('ReactComposerAudienceInit',['ReactComposerAudienceActions'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={init:function(j,k){h.setAudienceInstance(j,k.audienceInstance);if(k.privacyx)h.setAudience(j,k.privacyx);}};f.exports=i;},null);
__d('ReactComposerStatusActionType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({SET_EDITOR_STATE:null,SET_HAS_TEXT:null,SET_MENTIONS:null,SET_MENTIONS_SOURCE:null,SET_TYPEAHEAD_REPORTER:null});},null);
__d('ReactComposerStatusStore',['ReactComposerStatusActionType','ReactComposerStoreBase','getMentionsTextForContentState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(){'use strict';var n;l.constructor.call(this,function(){return {editorState:null,hasText:false,mentionsSource:null,typeaheadReporter:null,mentions:null};},function(o){switch(o.type){case h.SET_MENTIONS_SOURCE:n&&n.$ReactComposerStatusStore1(o);break;case h.SET_TYPEAHEAD_REPORTER:n&&n.$ReactComposerStatusStore2(o);break;case h.SET_EDITOR_STATE:n&&n.$ReactComposerStatusStore3(o);break;case h.SET_MENTIONS:n&&n.$ReactComposerStatusStore4(o);break;case h.SET_HAS_TEXT:n&&n.$ReactComposerStatusStore5(o);break;}});n=this;}m.prototype.getMentionsSource=function(n){'use strict';return this.getComposerData(n).mentionsSource;};m.prototype.getTypeaheadReporter=function(n){'use strict';return this.getComposerData(n).typeaheadReporter;};m.prototype.getEditorState=function(n){'use strict';return this.getComposerData(n).editorState;};m.prototype.getMentions=function(n){'use strict';return this.getComposerData(n).mentions;};m.prototype.getMessage=function(n){'use strict';var o=this.getEditorState(n);if(!o)return '';var p=o.getCurrentContent();return j(p);};m.prototype.getMessageText=function(n){'use strict';var o=this.getEditorState(n);if(!o)return '';var p=o.getCurrentContent();return p?p.getPlainText():'';};m.prototype.hasText=function(n){'use strict';return this.getComposerData(n).hasText;};m.prototype.$ReactComposerStatusStore1=function(n){'use strict';var o=this.getComposerData(n.composerID);o.mentionsSource=n.mentionsSource;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore2=function(n){'use strict';var o=this.getComposerData(n.composerID);o.typeaheadReporter=n.typeaheadReporter;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore3=function(n){'use strict';var o=this.getComposerData(n.composerID);o.editorState=n.editorState;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore4=function(n){'use strict';var o=this.getComposerData(n.composerID);o.mentions=n.mentions;this.emitChange(n.composerID);};m.prototype.$ReactComposerStatusStore5=function(n){'use strict';var o=this.validateAction(n,['composerID','hasText']),p=o[0],q=o[1],r=this.getComposerData(p);r.hasText=q;this.emitChange(p);};f.exports=new m();},null);
__d('ReactComposerTaggerButton.react',['TooltipLink.react','React','cx','emptyFunction','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.PropTypes,n=i.createClass({displayName:'ReactComposerTaggerButton',propTypes:{taggerID:m.string.isRequired,title:m.string,tooltip:m.string,selected:m.bool,hasData:m.bool,onSelect:m.func},getDefaultProps:function(){return {title:null,tooltip:null,selected:false,hasData:false,onSelect:k};},render:function(){var o=l("_3xem"+(this.props.selected?' '+"_50hx":'')),p=l("_3xen"+(this.props.hasData?' '+"_4pd":''),this.props.className);return (i.createElement(h,{onClick:this._onSelect,tooltip:this.props.tooltip,className:o,'aria-label':this.props.tooltip,tabIndex:'0',role:'button'},i.createElement('span',{className:"accessible_elem"},this.props.title),i.createElement('div',{className:p}),this.props.children));},_onSelect:function(){this.props.onSelect&&this.props.onSelect(this.props.taggerID);}});f.exports=n;},null);
__d('ReactComposerTargetingTaggerButtonMixin',['fbt','cx'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={getInitialState:function(){return {dialogShown:false};},getTitle:function(){return h._("Narrow the potential News Feed audience for this post");},getTooltip:function(){return h._("Narrow the potential News Feed audience for this post");},getClassName:function(){return "_2knc";},_onToggle:function(k){setTimeout((function(){return this.setState({dialogShown:k});}).bind(this),0);},_onSelectX:function(){this.setState({dialogShown:true});}};f.exports=j;},null);
__d("XPagesExtraAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/pages\/extra\/bootstrap\/",{});},null,{});