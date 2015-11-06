/*!CK:3367050393!*//*1446435495,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4LceR"]); }

__d('AdsPagerConstants',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h({ADD_PAGE:null,PAGE_TRANSITION:null,REQUEST_PAGE:null}),j=h({VIEW_ACTION:null,SERVER_ACTION:null});f.exports={ActionTypes:i,PayloadSources:j};},null);
__d('AdsPagerDispatcher',['AdsPagerConstants','Dispatcher'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.PayloadSources;function k(m){return function(n){this.dispatch({payloadSource:m,action:n});};}var l=Object.assign(new i(),{handleUpdateFromViewAction:k(j.VIEW_ACTION),handleUpdateFromServerAction:k(j.SERVER_ACTION)});f.exports=l;},null);
__d('AdsRefreshHandler',['AdsMouseStateStore','AdsPagerDispatcher','AdsPagerConstants','Arbiter','Animation','DOM','Event','SubscriptionsHandler','UIPagelet','csx','debounceAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=h.STATES,t=600;function u(v,w,x){'use strict';if(!x.data||!x.pid)return;this.$AdsRefreshHandler1=v;this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler3=w;this.$AdsRefreshHandler4=x;this.$AdsRefreshHandler5=0;this.$AdsRefreshHandler6=false;this.$AdsRefreshHandler7=true;this.$AdsRefreshHandler8=r(this.reloadAdsIfNeeded.bind(this),this.$AdsRefreshHandler3.delay);this.$AdsRefreshHandler9=new o();this.$AdsRefreshHandler9.addSubscriptions(n.listen(this.$AdsRefreshHandler1,'mouseenter',this.setMouseOver.bind(this,true)),n.listen(this.$AdsRefreshHandler1,'mouseleave',this.setMouseOver.bind(this,false)),h.subscribe('change',this.onMouseStateStoreChange.bind(this)),k.subscribe('AdsPreferencesDialog/opened',this.stopRefreshingRHC.bind(this)),k.subscribe('AdsPreferencesDialog/closed',this.startRefreshingRHC.bind(this)),k.subscribe('VideoChannelView/opened',this.stopRefreshingRHC.bind(this)),k.subscribe('VideoChannelView/closed',this.startRefreshingRHC.bind(this)));i.register(this.handlePageDispatch.bind(this));}u.prototype.handlePageDispatch=function(v){'use strict';var w=v.action||{};if(w.actionType===j.ActionTypes.REQUEST_PAGE)this.reloadAds();};u.prototype.setMouseOver=function(v){'use strict';this.$AdsRefreshHandler10=v;};u.prototype.subscribeDefaultEventsForRefresh=function(){'use strict';this.$AdsRefreshHandler9.addSubscriptions(n.listen(window,'scroll',this.$AdsRefreshHandler8),n.listen(window,'resize',this.$AdsRefreshHandler8));return this;};u.prototype.reloadWithDebounce=function(){'use strict';this.$AdsRefreshHandler8();};u.prototype.reloadWithoutDebounce=function(){'use strict';this.reloadAdsIfNeeded();};u.prototype.stopRefreshingRHC=function(v,w){'use strict';this.$AdsRefreshHandler7=false;};u.prototype.startRefreshingRHC=function(v,w){'use strict';this.$AdsRefreshHandler2=Date.now();this.$AdsRefreshHandler7=true;};u.prototype.forceLoadIfEnoughTimePassed=function(v){'use strict';if(Date.now()-this.$AdsRefreshHandler2>v)this.reloadAds();};u.prototype.containsPremium=function(){'use strict';var v=m.scry(this.$AdsRefreshHandler1,"div._4u8");return !!v.filter(function(w){return JSON.parse(w.getAttribute('data-ad')).segment==='premium';}).length;};u.prototype.reloadAdsIfNeeded=function(){'use strict';if(!this.$AdsRefreshHandler1)return;k.inform('AdsRefreshHandler/CheckingReload');if(this.$AdsRefreshHandler3.stateRefresh){this.reloadAdsIfNeededStateBased();return;}if(this.containsPremium()||this.$AdsRefreshHandler10||!this.$AdsRefreshHandler3.interval)return;if(Date.now()-this.$AdsRefreshHandler2>=this.$AdsRefreshHandler3.interval)this.reloadAds();};u.prototype.reloadAdsIfNeededStateBased=function(){'use strict';if(Date.now()-this.$AdsRefreshHandler2<this.$AdsRefreshHandler3.interval)return;if(this.containsPremium())return;if(!this.$AdsRefreshHandler3.interval)return;this.$AdsRefreshHandler6=true;k.inform('AdsRefreshHandler/RefreshScheduled');this.checkScheduledRefresh();};u.prototype.getRefreshScheduled=function(){'use strict';return this.$AdsRefreshHandler6;};u.prototype.onMouseStateStoreChange=function(){'use strict';this.checkScheduledRefresh();};u.prototype.checkScheduledRefresh=function(){'use strict';if(!this.$AdsRefreshHandler6)return;if(this.$AdsRefreshHandler10)return;var v=h.getState(),w=false;switch(v){case s.HOVER:case s.NO_INTENT:w=true;break;default:break;}if(!w)return;this.$AdsRefreshHandler6=false;this.reloadAds();};u.prototype.reloadAds=function(){'use strict';if(!this.$AdsRefreshHandler1)return;this.$AdsRefreshHandler2=Date.now();if(!this.$AdsRefreshHandler7)return;var v=this.$AdsRefreshHandler4&&this.$AdsRefreshHandler4.data,w=babelHelpers._extends({},v,{refresh_num:++this.$AdsRefreshHandler5});p.loadFromEndpoint('WebEgoPane',this.$AdsRefreshHandler1,{dom_id:m.getID(this.$AdsRefreshHandler1),pid:this.$AdsRefreshHandler4.pid,data:w},{bundle:false,handler:this.onLoadHandler.bind(this)});k.inform('AdsRefreshHandler/AdsLoading');};u.prototype.onLoadHandler=function(){'use strict';k.inform('AdsRefreshHandler/AdsLoaded');if(!this.$AdsRefreshHandler3.fade)return;new l(this.$AdsRefreshHandler1).from('opacity',0).to('opacity',1).duration(t).go();};u.prototype.cleanup=function(){'use strict';this.$AdsRefreshHandler1=null;this.$AdsRefreshHandler9.release();this.$AdsRefreshHandler8.reset();};f.exports=u;},null);
__d('HomeRHCAdsBasicRefresh',['AdsRefreshHandler','Arbiter','NavigationMessage','Run','SubscriptionsHandler','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o,p,q;function r(){if(n){n.cleanup();n=null;}if(o){o.release();o=null;}p=null;}function s(){var v=m(q);if(v&&p){v.appendChild(p);p=null;}}function t(v,w){p=w;n&&n.forceLoadIfEnoughTimePassed(0);}var u={init:function(v,w,x){q=v;n=new h(m(v),w,x).subscribeDefaultEventsForRefresh();o=new l();o.addSubscriptions(i.subscribe(j.NAVIGATION_BEGIN,r),i.subscribe('ProfileQuestionAnswered',t),i.subscribe('AdsRefreshHandler/AdsLoaded',s));k.onLeave(r);}};f.exports=u;},null);
__d('TickerController',['Animation','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=1,u=2,v=3,w=4,x=15000,y=null,z={},aa={},ba={setActiveInstance:function(ca){y=ca;},getActiveInstance:function(){return y;},clearRHCplaceholder:function(){z.pagelet_rhc_ticker=null;},registerInstance:function(ca,da,ea){aa[ca.id]={root:ca,scrollable_area:da,config:ea};k.loadModules(["TickerStoryList"],function(fa){return (new fa(ca,da,ea));});},callWithInstance:function(ca,da){if(!ca)return;var ea=n.byClass(q(ca),'fbFeedTicker');k.loadModules(["TickerStoryList"],function(fa){var ga=ea?fa.instances()[ea.id]:null,ha=aa[ea.id];if(!ga&&ha){ga=new fa(ha.root,ha.scrollable_area,ha.config);delete aa[ea.id];}da(ga);});},isLoaded:function(ca){var da=z[ca.id];return !da||da.status==v;},show:function(ca,da){k.loadModules(["TickerStoryList"],function(ea){return (ba._showImpl(ea,ca,da));});},_showImpl:function(ca,da,ea){ea=ea||r;for(var fa in ca.instances()){var ga=s(fa);if(!ga||ga.parentNode.id==da.id)continue;ba.hide(ga.parentNode);}ba._doPositionChange(da);l.show(da);var ha=z[da.id];if(ha&&ha.status==t){var ia=(p.getElementDimensions(da).y||0)>0,ja=da.id==='pagelet_rhc_ticker'&&!l.hasClass(da,'hidden_rhc_ticker');if(ia||ja){ba._fetchTickerForPlaceholder(da,ea);}else i.subscribe('Ticker/resized',function(){if(ha.status==t)ba._fetchTickerForPlaceholder(da,ea);});}else{var ka=m.scry(da,'.fbFeedTicker')[0];ba.callWithInstance(ka,function(la){y=la;la&&la._poll();z[da.id]={status:w,callback:ea};ea();});}i.inform('ticker/show',{node:da,callback:ea});},_doPositionChange:function(ca){if(l.shown(ca))return;new j('/common/ods_endpoint.php',{k:'ticker.render.switch.'+ca.id}).send();},hide:function(ca){var da=m.scry(ca,'.fbFeedTicker')[0];ba.callWithInstance(da,function(ea){ea&&ea.hideActiveStory();l.hide(ca);});},hideStoriesByClass:function(ca){k.loadModules(["TickerStoryList"],function(da){for(var ea in da.instances())m.scry(q(ea),ca).forEach(l.hide);});},hideStory:function(ca){ba.callWithInstance(ca,function(da){da&&da.hideStory(ca);});},replaceStory:function(ca,da){var ea=m.scry(document.body,'div.fbFeedTickerStory');ba.callWithInstance(ea[0],function(fa){var ga=fa._findStoryById(ca);fa.handleRemoveStory();l.hide(ga);m.insertAfter(ga,da);da.setAttribute('data-story-id',ga.getAttribute('id'));var ha=setTimeout(function(){return ba.removeMarkup(da,ga);},x);da.setAttribute('data-timeout-token',ha);});},removeMarkup:function(ca,da){l.addClass(ca,'removedStoryMarkup');new h(ca).to('height',0).duration(500).ondone(function(){m.remove(ca);}).go();},undoHideStory:function(ca){ba.callWithInstance(ca,function(da){da&&da.undoHideStory(ca);});},insertStoriesAtBottom:function(ca){y.insertStoriesAtBottom(ca);},_fetchTickerForPlaceholder:function(ca,da){var ea={handler:function(){z[ca.id].status=v;da();}};o.loadFromEndpoint('TickerEntStoryPagelet',ca.id,z[ca.id].pageletData,ea);z[ca.id].status=u;},registerStoryDialog:function(ca,da){i.subscribe('ticker/init',function(){var ea=s(ca);ba.callWithInstance(ea,function(fa){fa&&fa.registerStoryDialog(ea,da);});},i.SUBSCRIBE_ALL);},registerPlaceholder:function(ca,da){var ea=z[ca];z[ca]={status:t,pageletData:da};if(ea&&ea.status==w){ba.show(q(ca));ea.callback();}}};f.exports=ba;},null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t;function u(){var z=r('pagelet_rhc_ticker');z&&p.show(z,w);}function v(){var z=r('pagelet_rhc_ticker');z&&p.hide(z);}function w(){var z=r('pagelet_rhc_ticker'),aa=j.scry(z,'.ticker_container')[0],ba=j.scry(z,'.ticker_stream')[0],ca=r('rightCol');if(!z||!aa||!ba||!ca)return;n.set(aa,'height','0');var da=75,ea=q.getViewportDimensions().y,fa=q.getElementDimensions(ca).y,ga=ea-fa-da,ha=q.getElementDimensions(ba).y,ia=Math.max(Math.min(ga,ha,t.tickerMaxHeight||425),t.tickerMinHeight||225);n.set(aa,'height',ia+'px');}function x(z){var aa=r('pagelet_reminders'),ba=r('pagelet_rhc_ticker'),ca=aa&&j.scry(aa,'div.tickerToggleWrapper')[0],da=ba&&j.scry(ba,'div.tickerToggleWrapper')[0];ca&&i.conditionClass(ca,'displayedTickerToggleWrapper',!z);da&&i.conditionClass(da,'displayedTickerToggleWrapper',z);ba&&i.conditionClass(ba,'hidden_rhc_ticker',!z);if(z){w();var ea=r('fbTickerClosedEd');ea&&i.hide(ea);}}var y={init:function(z){t=z;var aa=new o();if(t.enableSidebar)aa.addSubscriptions(h.subscribe('sidebar/hide',u),h.subscribe('sidebar/show',v),h.subscribe('minisidebar/show',u),h.subscribe('LitestandClassicRHC/loaded',w),k.listen(window,'scroll',s(function(){var ca=j.scry(r('pagelet_rhc_ticker'),'.fbFeedTicker')[0];p.callWithInstance(ca,function(da){return (da&&da.handleRemoveStory());});})));if(!i.hasClass(document.documentElement,'sidebarMode')){u();}else if(t.enableSidebar)i.hasClass(document.documentElement,'miniSidebar')?u():v();var ba=function(){aa.release();};h.subscribeOnce(l.NAVIGATION_BEGIN,ba);m.onLeave(ba);},initRHCTickerHider:function(z){k.listen(z,'click',this.hideRHCTicker);},showRHCTicker:function(){x(true);},hideRHCTicker:function(){x(false);}};f.exports=y;},null);
__d('AsyncLayout',['AjaxPipeRequest','Arbiter','AsyncRequest','AsyncResponse','CSS','DOM','HTML','NavigationMessage','PageTransitionsRegistrar','URI','$','emptyFunction','ge','goURI','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w;v('PageTransitions',function(y){w=y;});function x(y){'use strict';this.canvasID=y;if(t('rightCol'))this.auxiliaryID='rightCol';if(t('headerArea'))this.headerID='headerArea';if(t('toolbarContainer'))this.toolbarID='toolbarContainer';this.waitingForAux=false;p.registerHandler(this.catchPageTransition.bind(this));this.subscription=i.subscribe(o.NAVIGATION_BEGIN,this.onNavigate.bind(this));i.inform('AsyncLayout/initialized',null,i.BEHAVIOR_STATE);}x.prototype.catchPageTransition=function(y){'use strict';this.subscription.unsubscribe();return false;};x.prototype.getCanvasID=function(y){'use strict';return y.sidecol?'contentCol':'contentArea';};x.prototype.onNavigate=function(y,z){'use strict';var aa=z.useAjaxPipe;z=z.params;if(z.endpoint){if(this.request){this.request.setFinallyHandler(s);this.request.abort();}if(this.sideRequest)this.sideRequest.abort();if(aa){this.request=new h().setURI(z.endpoint).setData(z).setCanvasId(this.getCanvasID(z)).setFinallyHandler(this.finallyHandler.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFirstResponseCallback(this.firstResponseCallback.bind(this)).send();}else{z.handled=true;this.waitingForAux=z.sidecol;var ba=!!z.iframe,ca=new j().setOption('useIframeTransport',ba).setURI(new q(z.endpoint)).setReadOnly(true).setMethod('GET').setData(z).setHandler(this.onResponse.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFinallyHandler(this.finallyHandler.bind(this));this.request=ca;ca.send();}}};x.prototype.onSideResponse=function(y){'use strict';var z=y.getPayload();if(z&&this.auxiliaryID)this.receivedAux(z);};x.prototype.receivedAux=function(y){'use strict';!this.waitingForAux;this.waitingForAux=false;m.setContent(r(this.auxiliaryID),n(y));};x.prototype.onResponse=function(y){'use strict';var z=y.getPayload();if(z.redirect){u(z.redirect);}else{var aa=z.html||z;m.setContent(r(this.canvasID),n(aa));if(z.side_html&&this.auxiliaryID)this.receivedAux(z.side_html);if(this.headerID&&!z.keep_header){var ba=r(this.headerID);m.setContent(ba,n(z.header_html||''));l.conditionShow(ba,z.header_html);}if(z.toolbar_html&&this.toolbarID)m.setContent(r(this.toolbarID),n(z.toolbar_html));if(z.js)new Function(z.js)();l.conditionClass('contentCol','hasRightCol',this.auxiliaryID&&!z.noRightSide);var ca=t('rightCol');if(ca&&z.noRightSide)m.empty(ca);}var da=y.getRequest().getData();i.inform(o.NAVIGATION_COMPLETED,da.key);};x.prototype.errorHandler=function(y){'use strict';k.verboseErrorHandler(y);i.inform(o.NAVIGATION_FAILED);this.request=null;};x.prototype.firstResponseCallback=function(y){'use strict';window.scrollTo(0,0);i.inform(o.NAVIGATION_FIRST_RESPONSE);};x.prototype.finallyHandler=function(y){'use strict';this.request=null;if(w)w.transitionComplete(true);i.inform(o.NAVIGATION_COMPLETED);};f.exports=x;},null);
__d('DirectionalDockingElement',['ArbiterMixin','DOM','DOMDimensions','Event','Run','Scroll','Style','SubscriptionsHandler','UITinyViewportAction','ViewportBounds','getElementPosition','mixin','queryThenMutateDOM','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w,x,y=[],z=true,aa=false,ba='unfixed',ca='fixed_top',da='fixed_middle';v=babelHelpers.inherits(ea,s(h));w=v&&v.prototype;function ea(fa){'use strict';w.constructor.call(this);this.$DirectionalDockingElement1=fa;this.$DirectionalDockingElement2=0;if(!x){var ga=t.bind(null,function(){for(var ha=0,ia=y.length;ha<ia;ha++)y[ha].$DirectionalDockingElement3();},function(){for(var ha=0,ia=y.length;ha<ia;ha++)y[ha].$DirectionalDockingElement4();},'DirectionalDockingElement');x=new o();x.addSubscriptions(k.listen(window,'scroll',ga),k.listen(window,'resize',ga));l.onLeave(function(){while(y.length)y.pop().destroy();x.release();x=null;});}y.push(this);this.$DirectionalDockingElement5=q.getTop();this.$DirectionalDockingElement6=ca;n.set(this.$DirectionalDockingElement1,'width',j.getElementDimensions(this.$DirectionalDockingElement1).width+'px');this.$DirectionalDockingElement7=i.create('div');n.set(this.$DirectionalDockingElement7,'position','relative');i.replace(this.$DirectionalDockingElement1,this.$DirectionalDockingElement7);i.appendContent(this.$DirectionalDockingElement7,this.$DirectionalDockingElement1);this.update();}ea.prototype.$DirectionalDockingElement3=function(){'use strict';var fa=-r(this.$DirectionalDockingElement7).y;if(fa!==this.$DirectionalDockingElement8){this.$DirectionalDockingElement9=fa>this.$DirectionalDockingElement8?aa:z;this.$DirectionalDockingElement8=fa;}this.$DirectionalDockingElement10=j.getElementDimensions(this.$DirectionalDockingElement1);this.$DirectionalDockingElement11=m.getTop(document.body)+document.documentElement.clientHeight>document.documentElement.scrollHeight;};ea.prototype.$DirectionalDockingElement12=function(fa,ga){'use strict';if(this.$DirectionalDockingElement13!==fa||this.$DirectionalDockingElement14!==ga){n.apply(this.$DirectionalDockingElement1,{position:fa,top:ga+'px'});this.$DirectionalDockingElement13=fa;this.$DirectionalDockingElement14=ga;}};ea.prototype.$DirectionalDockingElement15=function(){'use strict';this.$DirectionalDockingElement6=ca;this.$DirectionalDockingElement12('fixed',this.$DirectionalDockingElement5);};ea.prototype.$DirectionalDockingElement16=function(){'use strict';this.$DirectionalDockingElement6=da;this.$DirectionalDockingElement12('fixed',this.$DirectionalDockingElement2);};ea.prototype.$DirectionalDockingElement17=function(){'use strict';this.$DirectionalDockingElement6=ba;this.$DirectionalDockingElement12('absolute',this.$DirectionalDockingElement18);};ea.prototype.$DirectionalDockingElement4=function(){'use strict';var fa=this.$DirectionalDockingElement10.height;if(fa!==this.$DirectionalDockingElement19){n.set(this.$DirectionalDockingElement7,'height',fa+'px');this.$DirectionalDockingElement19=fa;this.inform('changedheight');}if(this.$DirectionalDockingElement6===ca){this.$DirectionalDockingElement18=this.$DirectionalDockingElement8+this.$DirectionalDockingElement5;}else if(this.$DirectionalDockingElement6===da)this.$DirectionalDockingElement18=this.$DirectionalDockingElement8+this.$DirectionalDockingElement2;if(this.$DirectionalDockingElement11)return;if(this.$DirectionalDockingElement8+this.$DirectionalDockingElement5<=0||p.isTiny()){this.$DirectionalDockingElement18=0;this.$DirectionalDockingElement17();return;}if(this.$DirectionalDockingElement9===aa&&this.$DirectionalDockingElement8+this.$DirectionalDockingElement2>=this.$DirectionalDockingElement18){this.$DirectionalDockingElement16();}else if(this.$DirectionalDockingElement9===z&&this.$DirectionalDockingElement8+this.$DirectionalDockingElement5<=this.$DirectionalDockingElement18){this.$DirectionalDockingElement15();}else this.$DirectionalDockingElement17();};ea.prototype.update=function(){'use strict';this.$DirectionalDockingElement3();this.$DirectionalDockingElement4();};ea.prototype.destroy=function(){'use strict';if(y.indexOf(this)===-1)return;u(y,this);if(this.$DirectionalDockingElement7&&this.$DirectionalDockingElement7.parentNode){i.remove(this.$DirectionalDockingElement7);this.$DirectionalDockingElement7=null;}};ea.prototype.setOffset=function(fa){'use strict';this.$DirectionalDockingElement2=fa;this.update();return this;};f.exports=ea;},null);
__d('DockingElement',['ArbiterMixin','CSS','DOM','DOMDimensions','Event','Run','Style','SubscriptionsHandler','UITinyViewportAction','getElementPosition','mixin','queryThenMutateDOM','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v,w,x=[];u=babelHelpers.inherits(y,r(h));v=u&&u.prototype;function y(z){'use strict';v.constructor.call(this);this.$DockingElement1=z;this.$DockingElement2=0;if(!x.length){var aa=s.bind(null,function(){for(var ba=0,ca=x.length;ba<ca;ba++)x[ba].getRect();},function(){for(var ba=0,ca=x.length;ba<ca;ba++)x[ba].updateWithCache();},'DockingElement');w=new o();w.addSubscriptions(l.listen(window,'scroll',aa),l.listen(window,'resize',aa));m.onLeave(function(){while(x.length)x.pop().destroy();});}x.push(this);this.update();}y.prototype.getRect=function(){'use strict';var z=this.$DockingElement3?this.getPlaceholder():this.$DockingElement1;this.$DockingElement4=q(z);this.$DockingElement5=k.getElementDimensions(z);};y.prototype.updateWithCache=function(){'use strict';var z=this.$DockingElement2,aa=this.getPlaceholder();if(!p.isTiny()&&this.$DockingElement4.y<=z){if(!this.$DockingElement3){if(!this.$DockingElement6){j.insertAfter(this.$DockingElement1,aa);this.$DockingElement6=true;}i.addClass(this.$DockingElement1,'fixed_elem');i.show(aa);this.$DockingElement3=true;}var ba;if(this.$DockingElement7!==z){ba={};ba.top=z+'px';this.$DockingElement7=z;}var ca=this.$DockingElement5.width;if(ca!==this.$DockingElement8){ba=ba||{};ba.width=ca+'px';this.$DockingElement8=ca;}ba&&n.apply(this.$DockingElement1,ba);var da=this.$DockingElement5.height;if(da!==this.$DockingElement9){n.set(aa,'height',da+'px');this.$DockingElement9=da;this.inform('changedheight');}}else if(this.$DockingElement3){n.apply(this.$DockingElement1,{top:'',width:''});i.removeClass(this.$DockingElement1,'fixed_elem');i.hide(aa);this.$DockingElement3=false;this.$DockingElement8=null;this.$DockingElement7=null;}};y.prototype.update=function(){'use strict';this.getRect();this.updateWithCache();};y.prototype.getPlaceholder=function(){'use strict';if(!this.$DockingElement10)this.$DockingElement10=j.create('div');return this.$DockingElement10;};y.prototype.destroy=function(){'use strict';if(x.indexOf(this)===-1)return;t(x,this);if(this.$DockingElement10&&this.$DockingElement10.parentNode){j.remove(this.$DockingElement10);this.$DockingElement10=null;}if(!x.length){w.release();w=null;}};y.prototype.setOffset=function(z){'use strict';this.$DockingElement2=z;this.update();return this;};f.exports=y;},null);
__d('StickyRHC',['Arbiter','DirectionalDockingElement','DockingElement','DOMQuery','DOMDimensions','Event','Run','SubscriptionsHandler','ViewportBounds','$','csx','ge','getElementPosition','removeFromArray','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=35,x=[],y;function z(da,ea){if(!ea||!ea.dom_id){x.forEach(aa);return;}var fa=q(ea.dom_id);for(var ga=0;ga<x.length;ga++)if(k.contains(x[ga].getRoot(),fa)){aa(x[ga]);return;}}function aa(da){var ea=da.getRoot(),fa=da.updateOffset.bind(da),ga=k.scry(ea,'img.img');ga.forEach(function(ha){if(ha.complete||ha.getAttribute('height')||typeof ha.naturalHeight!=='undefined'&&ha.naturalHeight!==0)return;var ia=function(){fa();ja.remove();ka.remove();la.remove();},ja=m.listen(ha,'load',ia),ka=m.listen(ha,'error',ia),la=m.listen(ha,'abort',ia);});fa();}function ba(){x.forEach(function(da){da.updateOffset();});}function ca(da,ea){'use strict';this.$StickyRHC1=da;this.$StickyRHC2=ea?new i(da):new j(da);this.$StickyRHC3=0;this.$StickyRHC2.subscribe('changedheight',this.updateOffset.bind(this));this.updateOffset();aa(this);if(!x.length){y=new o();y.addSubscriptions(h.subscribe('header_loaded',ba),h.subscribe('netego_loaded',z),h.subscribe('pagelet_trending_tags_and_topics_displayed',ba),h.subscribe('browse_top_filters_full_width_displayed',ba),h.subscribe('takeover_survey_closed',ba),m.listen(window,'resize',v(ba)));}n.onLeave(this.destroy.bind(this));x.push(this);}ca.getInstances=function(){'use strict';return x;};ca.prototype.getRoot=function(){'use strict';return this.$StickyRHC1;};ca.prototype.destroy=function(){'use strict';this.$StickyRHC2.destroy();u(x,this);if(!x.length){y.release();y=null;}};ca.prototype.updateOffset=function(){'use strict';var da=ca.getNewOffset(this.$StickyRHC1,this.$StickyRHC4,this.$StickyRHC3);this.$StickyRHC2.setOffset(da+this.$StickyRHC3);};ca.getNewOffset=function(da,ea,fa){'use strict';var ga=k.scry(da,"._4-u2"),ha=k.scry(da,"._4-u3"),ia=k.scry(da,"._5eh2"),ja=k.scry(da,'.uiHeader'),ka=k.scry(da,'.ego_unit'),la=[].concat(ga,ha,ia,ja,ka),ma=[];la.forEach(function(wa){ma.push(t(wa).y);});ma.sort(function(wa,xa){return wa-xa;});var na=t(da).y,oa=l.getElementDimensions(da).height;oa+=fa;var pa=p.getTop(),qa=l.getViewportDimensions().height-pa;qa-=w;if(typeof ea==='undefined'){var ra=s('pageFooter');ea=ra?l.getElementDimensions(ra).height:0;}qa-=ea;var sa=qa-oa;if(oa<qa){sa=pa;}else for(var ta=0,ua=ma.length;ta<ua;ta++){var va=ma[ta]-na;if(oa-va<qa){sa=pa-va;break;}}return sa;};ca.prototype.setOffset=function(da){'use strict';this.$StickyRHC3=da;this.updateOffset();};ca.prototype.getOffset=function(da){'use strict';return this.$StickyRHC3;};f.exports=ca;},null);
__d('legacy:adware-scanner',['AdwareScaner'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.AdwareScaner=c('AdwareScaner');},3);
__d("XDOMScannerResultsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mac_nerd_son\/",{});},null,{});