/*!CK:1739256008!*//*1446495431,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YfOwR"]); }

__d('ChatFileUploader.react',['ChatFileUploaderMixin','InlineBlock.react','MercuryConfig','React','ReactDOM','cx','createCancelableFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=k.createClass({displayName:'ChatFileUploader',mixins:[h],getDefaultProps:function(){return {uploaderIsFromHigherLevel:true};},shouldComponentUpdate:function(){return false;},componentDidMount:function(){this._uploaderCallback=n(this.setUpSubscriptionsHandler);this.props.initFileUploaderFn(l.findDOMNode(this.refs.form),l.findDOMNode(this.refs.input),l.findDOMNode(this.refs.attachID)).then(this._uploaderCallback);},componentWillUnmount:function(){if(this._uploaderCallback)this._uploaderCallback.cancel();},render:function(){return (k.createElement('form',{ref:'form',action:j.upload_url,method:'post'},k.createElement('input',{type:'hidden',ref:'attachID',name:'attach_id'}),k.createElement(i,{className:"_m _4q60 itemLabel"},k.createElement('input',{type:'file',className:"_n",name:'attachment[]',multiple:'true',ref:'input'}),k.createElement('span',{className:"_4q61 itemAnchor"},o._("Add Files...")))));}});f.exports=p;},null);
__d('NotificationSettingsDialog',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={show:function(i){e(['MercuryThreadActions'],function(j){j.get().openNotificationSettings(i);});}};f.exports=h;},null);
__d('ChatTabMenu.react',['AsyncDialog','AsyncRequest','Bootloader','ChatConfig','ChatFileUploader.react','ChatPrivacyActionController','ChatTabActions','Dialog','MercuryConfig','MercuryIDs','MercuryLogMessageType','MercuryMessengerBlockingUtils','MercuryParticipants','MercuryThreadMuter','MercuryViewer','MercurySourceType','NFXChatHeadGK','Promise','ReactComponentWithPureRenderMixin','React','PopoverMenu.react','ReactMenu','MenuSeparator.react','Run','Toggler','TrackingNodes','URI','WebMessengerDeleteThreadDialog','WebMessengerThreadPermalinks','XNFXStartForMessageThreadController','WorkModeConfig','WorkFileUploadsGating','NotificationSettingsDialog','MessengerNotificationSettingsGKModule','cx','fbt','goURI','MercuryMessageObject','MercuryThreadIDMap','MercuryThreadActions','MercuryThreads','MercuryMessageActions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra){'use strict';if(c.__markCompiled)c.__markCompiled();var sa=c('MercuryMessageObject').get(),ta=c('MercuryThreadIDMap').get(),ua=c('MercuryThreadActions').get(),va=c('MercuryThreads').get(),wa=c('MercuryMessageActions').get(),xa=ca.Item,ya=aa.PropTypes,za=aa.createClass({displayName:'ChatTabMenu',_privacyActionController:undefined,_fileUploaderPromise:undefined,mixins:[z],propTypes:{attachmentsShelf:ya.object,nameConversationFunc:ya.func,isGroupChat:ya.bool,isEmptyChat:ya.bool,hasMessageBlocked:ya.bool,hasSecretModeOn:ya.bool,onFileUploaderMounted:ya.func,onSubmit:ya.func,onUpdateAttachmentsShelf:ya.func,onUploadFinished:ya.func,otherUserID:ya.string,sheetController:ya.object.isRequired,showAddFriend:ya.func,threadID:ya.string.isRequired},getInitialState:function(){return {url:null,privacyText:'',muted:false};},getDefaultProps:function(){return {show:true,isMuted:false,hasSwitchToWork:false};},componentDidMount:function(){ja.getThreadURI(this.props.threadID,(function(ab){this.isMounted()&&this.setState({url:ab});}).bind(this));if(!this.props.isGroupChat)this._privacyActionController=new m(q.getUserIDFromThreadID(this.props.threadID),(function(ab){return this._updatePrivacyLink(ab);}).bind(this));},componentDidUpdate:function(ab,bb){if(this.props.isMuted&&!ab.isMuted){this.props.sheetController.openThreadIsMutedTabSheet();}else if(!this.props.isMuted&&ab.isMuted)this.props.sheetController.closeThreadIsMutedTabSheet();if(this.props.hasMessageBlocked){this.props.sheetController.openMessageBlockedTabSheet();}else this.props.sheetController.closeMessageBlockedTabSheet();if(this.props.hasSecretModeOn){this.props.sheetController.openSecretModeSheet();}else this.props.sheetController.closeSecretModeSheet();},_initFileUploader:function(ab,bb,cb){if(this._fileUploaderPromise){this._fileUploaderPromise.then(function(db){db.updateElements(ab,bb,cb);});}else this._fileUploaderPromise=new y((function(db,eb){ea.onAfterLoad((function(){j.loadModules(["MercuryFileUploader"],(function(fb){var gb=new fb(this.props.attachmentsShelf,ab,bb,cb);db(gb);}).bind(this));}).bind(this));}).bind(this));return this._fileUploaderPromise;},componentWillUnmount:function(){this._privacyActionController&&this._privacyActionController.destroy();this._fileUploaderPromise&&this._fileUploaderPromise.then(function(ab){ab.destroy();});},_unmuteThread:function(){ua.unmute(this.props.threadID);fa.hide();},_togglePrivacyFunc:function(){this._privacyActionController&&this._privacyActionController.togglePrivacy();},_renderFileUploader:function(){return (aa.createElement(xa,{className:"_37_x"},aa.createElement(l,{onFileUploaderMounted:this.props.onFileUploaderMounted,attachmentsShelf:this.props.attachmentsShelf,initFileUploaderFn:this._initFileUploader,onUploadFinished:this.props.onUploadFinished,onUpdateAttachmentsShelf:this.props.onUpdateAttachmentsShelf,onSubmit:this.props.onSubmit})));},_renderOpenFullConversation:function(){if(this.state.url)return (aa.createElement(xa,{onclick:(function(){return ra(this.state.url);}).bind(this)},qa._("See Full Conversation")));return null;},_renderAddFriend:function(){if(!this.props.showAddFriend)return null;var ab=la.is_work_user?qa._("Add coworkers to Chat..."):qa._("Add Friends to Chat...");return (aa.createElement(xa,{onclick:this.props.showAddFriend},ab));},_renderTogglePrivacy:function(){if(!this.props.isGroupChat&&this.state.privacyText)return (aa.createElement(xa,{onclick:this._togglePrivacyFunc},this.state.privacyText));return null;},_renderNotificationSettings:function(){if(oa.inGK){var ab=na.show.bind(null,this.props.threadID);return (aa.createElement(xa,{onclick:ab},qa._("Notification Settings...")));}return null;},_renderMuteConversation:function(){if(!this.props.isMuted){var ab=u.showMuteChangeDialog.bind(null,this.props.threadID,null);return (aa.createElement(xa,{onclick:ab},qa._("Mute Conversation...")));}else return (aa.createElement(xa,{onclick:this._unmuteThread},qa._("Unmute Conversation")));},_renderDeleteConversation:function(){return (aa.createElement(xa,{onclick:this._deleteConversation},qa._("Delete Conversation...")));},_renderReportSpam:function(){if(!this.props.isGroupChat)return (aa.createElement(xa,{onclick:this._reportSpamClicked},qa._("Report as Spam or Abuse...")));return null;},_blockMessagesItem:function(){if(!this.props.isGroupChat&&s.gk_result&&!this.props.hasMessageBlocked)return (aa.createElement(xa,{onclick:this._messageBlockedClicked},qa._("Block Messages...")));if(!this.props.isMultichat&&s.gk_result&&this.props.hasMessageBlocked)return (aa.createElement(xa,{onclick:this._messageUnblockedClicked},qa._("Unblock Messages...")));return null;},_renderCreateGroup:function(){if(this.props.isGroupChat)return (aa.createElement(xa,{onclick:this._createGroupClicked},qa._("Create Group")));return null;},_renderSwitchToWork:function(){if(this.props.hasSwitchToWork)return (aa.createElement(xa,{onclick:this._switchToWorkUserClicked},qa._("Move to Work Account")));return null;},_renderConversationName:function(){if(this.props.isGroupChat&&this.state.url)return (aa.createElement(xa,{onclick:this.props.nameConversationFunc},qa._("Edit Conversation Name")));return null;},_renderLeaveConversation:function(){if(this.props.isGroupChat)return (aa.createElement(xa,{onclick:this._unsubscribeLinkClicked},qa._("Leave Conversation...")));return null;},_renderEnableDesktopNotifications:function(){if(p.DesktopNotificationsGK&&"Notification" in window&&window.Notification.permission!=="granted")return (aa.createElement(xa,{onclick:this._enableDesktopNotif},qa._("Enable Desktop Notifications")));return null;},_renderPeopleList:function(){if(this.props.isGroupChat&&this.state.url)return (aa.createElement(xa,{onclick:this._showParticipants},qa._("Edit Participants...")));return null;},_renderToggleSecretMode:function(){if(!k.get('enable_secret_mode'))return null;if(this.props.hasSecretModeOn){return (aa.createElement(xa,{onclick:this._secretModeTurnOff},qa._("Turn off disappearing messages...")));}else return (aa.createElement(xa,{onclick:this._secretModeTurnOn},qa._("Turn on disappearing messages...")));},render:function(){var ab=this._renderReportSpam(),bb=this._blockMessagesItem(),cb=this._renderCreateGroup(),db=aa.createElement(ca,{className:"chatReact"+(!this.props.show?' '+"hidden_elem":'')},this._renderOpenFullConversation(),ma.canUploadFiles?this._renderFileUploader():null,this._renderToggleSecretMode(),this._renderAddFriend(),this._renderTogglePrivacy(),this._renderConversationName(),this._renderPeopleList(),aa.createElement(da,null),this._renderNotificationSettings(),this._renderSwitchToWork(),this._renderMuteConversation(),this._renderDeleteConversation(),this._renderLeaveConversation(),ab||bb?aa.createElement(da,null):null,bb,ab,cb?aa.createElement(da,null):null,cb,this._renderEnableDesktopNotifications()),eb=qa._("Options"),fb=ga.getTrackingInfo(ga.types.DROPDOWN_BUTTON);return (aa.createElement(ba,{menu:db},aa.createElement('a',{'data-ft':fb,'data-hover':'tooltip','aria-label':eb,'data-tooltip-alignh':'center',className:"button"+(this.props.isEmptyChat?' '+"hidden_elem":'')})));},getFileUploaderPromise:function(){return this._fileUploaderPromise;},_updatePrivacyLink:function(ab){var bb;if(ab==m.OFFLINE){bb=qa._("Go online");this.setState({privacyText:bb});return;}if(this.props.isGroupChat||this.props.otherUserID===undefined)return;var cb='fbid:'.concat(this.props.otherUserID);t.get(cb,(function(db){if(!db.is_friend){bb=null;}else if(ab==m.BLOCKED){bb=qa._("Turn On Chat for {name}",[qa.param('name',db.short_name)]);}else bb=qa._("Turn Off Chat for {name}",[qa.param('name',db.short_name)]);this.setState({privacyText:bb});}).bind(this));},_showParticipants:function(){ta.getServerIDFromClientID(this.props.threadID,function(ab){h.send(new i(new ha('/ajax/browser/dialog/multichat_members/').addQueryData({id:ab})));});},_unsubscribeLinkClicked:function(){var ab=[];ab.push({name:'unsubscribe',label:qa._("Leave Conversation"),handler:(function(){return this._unsubscribeToThread();}).bind(this)});ab.push(o.CANCEL);new o().setTitle(qa._("Leave Conversation?")).setBody(qa._("You will stop receiving messages from this conversation and people will see that you left.")).setButtons(ab).show();},_unsubscribeToThread:function(){if(!va.isEmptyLocalThread(this.props.threadID)){var ab=sa.constructLogMessageObject(w.CHAT_WEB,this.props.threadID,r.UNSUBSCRIBE,{removed_participants:[v.getID()]});wa.send(ab);}n.closeTab(this.props.threadID,'unsubscribed');return true;},_deleteConversation:function(){ia.show(this.props.threadID);},_reportSpamClicked:function(){var ab=new ha('/ajax/chat/report.php').addQueryData({id:this.props.otherUserID}).addQueryData({src:'top_report_link'});if(x.result)ab=ka.getURIBuilder().setString('thread_fbid',this.props.otherUserID).setEnum('location','www_chat_head').getURI();h.send(new i(ab));},_messageBlockedClicked:function(){ua.blockMessages(this.props.threadID);},_messageUnblockedClicked:function(){ua.unblockMessages(this.props.threadID);},_secretModeTurnOff:function(){ua.turnOffSecretMode(this.props.threadID);},_secretModeTurnOn:function(){ua.turnOnSecretMode(this.props.threadID);},_createGroupClicked:function(){va.getThreadMeta(this.props.threadID,function(ab){if(!ab.is_canonical){var bb=new ha('/ajax/groups/create_get.php').addQueryData({ref:'web_messenger_dock',parent_id:'0'}),cb=ab.participants.map(function(db){return q.getUserIDFromParticipantID(db);}).filter(function(db){return db;});bb.addQueryData({members:cb});if(ab.name)bb.addQueryData({name:ab.name});h.send(new i(bb));}});},_switchToWorkUserClicked:function(){var ab=[];ab.push({name:'move',label:qa._("Move Conversation"),handler:(function(){return this._switchToWork();}).bind(this)});ab.push(o.CANCEL);new o().setTitle(qa._("Move Conversation to Work Account?")).setBody(qa._("Do you want to move this conversation so that it shows in your work account instead?")).setButtons(ab).show();},_switchToWork:function(){if(!va.isEmptyLocalThread(this.props.threadID)){var ab=sa.constructLogMessageObject(w.CHAT_WEB,this.props.threadID,r.SWITCH_TO_WORK,{removed_participants:[v.getID()]});wa.send(ab);}n.closeTab(this.props.threadID,'unsubscribed');return true;},_enableDesktopNotif:function(){b.Notification.requestPermission();}});f.exports=za;},null);