// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('app.timbre.appender.sentry');
goog.require('app.config');
goog.require('app.views');
goog.require('app.game_engine');
app.core.dev_setup = (function app$core$dev_setup(){
if(app.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
app.core.mount_root = (function app$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
if(cljs.core.seq(app.config.sentry_dsn)){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sentry,app.timbre.appender.sentry.sentry_appender(app.config.sentry_dsn)], null)], null));

window.addEventListener("error",(function (e){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"app.core",null,26,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.error], null);
}),null)),null,782785198);
}));
} else {
}

app.core.dev_setup();

app.game_engine.init();

return app.core.mount_root();
});
goog.exportSymbol('app.core.init', app.core.init);
app.core.after_load = (function app$core$after_load(){
return app.core.mount_root();
});
