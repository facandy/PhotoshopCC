/*!CK:3369150587!*//*1446735322,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qh1+L"]); }

__d('UFICommentLikeSubscription',['CommentLikeSubscriptionWebGraphQLQuery','BaseGraphQLSubscription','uuid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=babelHelpers._extends({},i,{_getTopic:function(l){return 'graphql/comment_like_subscribe;top_level_feedback_id_'+l;},_getQueryID:function(){return h.getQueryID();},_getQueryParameters:function(l){return {input:JSON.stringify({client_subscription_id:j(),top_level_feedback_id:l})};},_getSubscriptionCallName:function(){return 'comment_like_subscribe';}});f.exports=k;},null);