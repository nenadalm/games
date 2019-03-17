// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.games.typing_race.core');
/**
 * All available games by their name.
 */
app.events.games = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$typing_DASH_race,(new app.games.typing_race.core.__GT_TypingRace())], null);
/**
 * Canvas to render current game on.
 */
app.events.canvas = cljs.core.volatile_BANG_(null);
var G__29026_29028 = cljs.core.cst$kw$canvas;
var G__29027_29029 = ((function (G__29026_29028){
return (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});})(G__29026_29028))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__29026_29028,G__29027_29029) : re_frame.core.reg_cofx.call(null,G__29026_29028,G__29027_29029));
var G__29030_29032 = cljs.core.cst$kw$canvas;
var G__29031_29033 = ((function (G__29030_29032){
return (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});})(G__29030_29032))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29030_29032,G__29031_29033) : re_frame.core.reg_fx.call(null,G__29030_29032,G__29031_29033));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__29034){
var vec__29035 = p__29034;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29035,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29035,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29038 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__29038) : re_frame.core.inject_cofx.call(null,G__29038));
})()], null),(function (p__29039,p__29040){
var map__29041 = p__29039;
var map__29041__$1 = (((((!((map__29041 == null))))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29041):map__29041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$canvas);
var vec__29042 = p__29040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,(app.events.games.cljs$core$IFn$_invoke$arity$1 ? app.events.games.cljs$core$IFn$_invoke$arity$1(game) : app.events.games.call(null,game)),cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__29046,_){
var map__29047 = p__29046;
var map__29047__$1 = (((((!((map__29047 == null))))?(((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29047):map__29047);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__29049,p__29050){
var map__29051 = p__29049;
var map__29051__$1 = (((((!((map__29051 == null))))?(((((map__29051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29051):map__29051);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29051__$1,cljs.core.cst$kw$db);
var vec__29052 = p__29050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29052,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29052,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__29056){
var vec__29057 = p__29056;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29057,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29057,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
