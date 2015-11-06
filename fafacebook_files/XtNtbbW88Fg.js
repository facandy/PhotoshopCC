/*!CK:255769943!*//*1446763263,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["c0My9"]); }

__d('MercuryRtcCallLogMessage.react',['cx','FBRTCCore','React'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass({displayName:'MercuryRtcCallLogMessage',render:function(){if(this.props.event==='start_call')return (j.createElement('a',{className:"_490-",onClick:(function(){return this._onJoinClicked();}).bind(this)},this.props.message));return (j.createElement('span',{className:"_490-"},this.props.message));},_onJoinClicked:function(){i.joinMultiwayCall(this.props.conferenceId,this.props.isVideoCall);}});f.exports=k;},null);