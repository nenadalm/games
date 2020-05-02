// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
/**
 * Canvas to render current game on.
 */
app.events.canvas = cljs.core.volatile_BANG_(null);
var G__17077_17079 = cljs.core.cst$kw$canvas;
var G__17078_17080 = (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17077_17079,G__17078_17080) : re_frame.core.reg_cofx.call(null,G__17077_17079,G__17078_17080));
var G__17081_17083 = cljs.core.cst$kw$canvas;
var G__17082_17084 = (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17081_17083,G__17082_17084) : re_frame.core.reg_fx.call(null,G__17081_17083,G__17082_17084));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17085){
var vec__17086 = p__17085;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,(function (p__17089){
var map__17090 = p__17089;
var map__17090__$1 = (((((!((map__17090 == null))))?(((((map__17090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17090):map__17090);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17090__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$typing_DASH_race], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17092 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17092) : re_frame.core.inject_cofx.call(null,G__17092));
})()], null),(function (p__17093,p__17094){
var map__17095 = p__17093;
var map__17095__$1 = (((((!((map__17095 == null))))?(((((map__17095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17095):map__17095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,cljs.core.cst$kw$canvas);
var vec__17096 = p__17094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_name,game_name], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,game,cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17100,_){
var map__17101 = p__17100;
var map__17101__$1 = (((((!((map__17101 == null))))?(((((map__17101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17101):map__17101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17101__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17103,p__17104){
var map__17105 = p__17103;
var map__17105__$1 = (((((!((map__17105 == null))))?(((((map__17105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17105):map__17105);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,cljs.core.cst$kw$db);
var vec__17106 = p__17104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(game_name,cljs.core.cst$kw$game_SLASH_name.cljs$core$IFn$_invoke$arity$1(db))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game_name,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17110){
var vec__17111 = p__17110;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17111,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17111,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_up,(function (_,p__17114){
var vec__17115 = p__17114;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_up,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_page,(function (p__17118,p__17119){
var map__17120 = p__17118;
var map__17120__$1 = (((((!((map__17120 == null))))?(((((map__17120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17120):map__17120);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17120__$1,cljs.core.cst$kw$db);
var vec__17121 = p__17119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,page], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$stopped], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stop], null)], null);
}));
