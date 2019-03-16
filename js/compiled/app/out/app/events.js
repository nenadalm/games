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
var G__29016_29018 = cljs.core.cst$kw$canvas;
var G__29017_29019 = ((function (G__29016_29018){
return (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});})(G__29016_29018))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__29016_29018,G__29017_29019) : re_frame.core.reg_cofx.call(null,G__29016_29018,G__29017_29019));
var G__29020_29022 = cljs.core.cst$kw$canvas;
var G__29021_29023 = ((function (G__29020_29022){
return (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});})(G__29020_29022))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29020_29022,G__29021_29023) : re_frame.core.reg_fx.call(null,G__29020_29022,G__29021_29023));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__29024){
var vec__29025 = p__29024;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29028 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__29028) : re_frame.core.inject_cofx.call(null,G__29028));
})()], null),(function (p__29029,p__29030){
var map__29031 = p__29029;
var map__29031__$1 = (((((!((map__29031 == null))))?(((((map__29031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29031):map__29031);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031__$1,cljs.core.cst$kw$canvas);
var vec__29032 = p__29030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29032,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29032,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,(app.events.games.cljs$core$IFn$_invoke$arity$1 ? app.events.games.cljs$core$IFn$_invoke$arity$1(game) : app.events.games.call(null,game)),cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__29036,_){
var map__29037 = p__29036;
var map__29037__$1 = (((((!((map__29037 == null))))?(((((map__29037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29037):map__29037);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29037__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__29039,p__29040){
var map__29041 = p__29039;
var map__29041__$1 = (((((!((map__29041 == null))))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29041):map__29041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29041__$1,cljs.core.cst$kw$db);
var vec__29042 = p__29040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__29046){
var vec__29047 = p__29046;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
