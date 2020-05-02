// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
/**
 * Canvas to render current game on.
 */
app.events.canvas = cljs.core.volatile_BANG_(null);
var G__17074_17076 = cljs.core.cst$kw$canvas;
var G__17075_17077 = (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17074_17076,G__17075_17077) : re_frame.core.reg_cofx.call(null,G__17074_17076,G__17075_17077));
var G__17078_17080 = cljs.core.cst$kw$canvas;
var G__17079_17081 = (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17078_17080,G__17079_17081) : re_frame.core.reg_fx.call(null,G__17078_17080,G__17079_17081));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17082){
var vec__17083 = p__17082;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,(function (p__17086){
var map__17087 = p__17086;
var map__17087__$1 = (((((!((map__17087 == null))))?(((((map__17087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17087):map__17087);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17087__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$typing_DASH_race], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17089 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17089) : re_frame.core.inject_cofx.call(null,G__17089));
})()], null),(function (p__17090,p__17091){
var map__17092 = p__17090;
var map__17092__$1 = (((((!((map__17092 == null))))?(((((map__17092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17092):map__17092);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17092__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17092__$1,cljs.core.cst$kw$canvas);
var vec__17093 = p__17091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_name,game_name], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,game,cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17097,_){
var map__17098 = p__17097;
var map__17098__$1 = (((((!((map__17098 == null))))?(((((map__17098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17098):map__17098);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17098__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17100,p__17101){
var map__17102 = p__17100;
var map__17102__$1 = (((((!((map__17102 == null))))?(((((map__17102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17102):map__17102);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17102__$1,cljs.core.cst$kw$db);
var vec__17103 = p__17101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17103,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17103,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17103,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(game_name,cljs.core.cst$kw$game_SLASH_name.cljs$core$IFn$_invoke$arity$1(db))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game_name,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17107){
var vec__17108 = p__17107;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17108,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17108,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_up,(function (_,p__17111){
var vec__17112 = p__17111;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17112,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17112,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_up,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_page,(function (p__17115,p__17116){
var map__17117 = p__17115;
var map__17117__$1 = (((((!((map__17117 == null))))?(((((map__17117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17117):map__17117);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17117__$1,cljs.core.cst$kw$db);
var vec__17118 = p__17116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17118,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17118,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,page], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$stopped], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stop], null)], null);
}));
