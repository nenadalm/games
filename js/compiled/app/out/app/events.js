// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
/**
 * Canvas to render current game on.
 */
app.events.canvas = cljs.core.volatile_BANG_(null);
var G__17053_17055 = cljs.core.cst$kw$canvas;
var G__17054_17056 = (function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$canvas,cljs.core.deref(app.events.canvas));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17053_17055,G__17054_17056) : re_frame.core.reg_cofx.call(null,G__17053_17055,G__17054_17056));
var G__17057_17059 = cljs.core.cst$kw$canvas;
var G__17058_17060 = (function (new_canvas){
return cljs.core.vreset_BANG_(app.events.canvas,new_canvas);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17057_17059,G__17058_17060) : re_frame.core.reg_fx.call(null,G__17057_17059,G__17058_17060));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replace_DASH_canvas,(function (_,p__17061){
var vec__17062 = p__17061;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17062,(0),null);
var new_canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,new_canvas,cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace_DASH_canvas,new_canvas], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,(function (p__17065){
var map__17066 = p__17065;
var map__17066__$1 = (((((!((map__17066 == null))))?(((((map__17066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17066):map__17066);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17066__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$typing_DASH_race], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$game_SLASH_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17068 = cljs.core.cst$kw$canvas;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__17068) : re_frame.core.inject_cofx.call(null,G__17068));
})()], null),(function (p__17069,p__17070){
var map__17071 = p__17069;
var map__17071__$1 = (((((!((map__17071 == null))))?(((((map__17071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17071):map__17071);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.cst$kw$db);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.cst$kw$canvas);
var vec__17072 = p__17070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_name,game_name], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$game,game,cljs.core.cst$kw$canvas,canvas], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_pause,(function (p__17076,_){
var map__17077 = p__17076;
var map__17077__$1 = (((((!((map__17077 == null))))?(((((map__17077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17077):map__17077);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17077__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$paused),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pause], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_SLASH_resume,(function (p__17079,p__17080){
var map__17081 = p__17079;
var map__17081__$1 = (((((!((map__17081 == null))))?(((((map__17081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17081):map__17081);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17081__$1,cljs.core.cst$kw$db);
var vec__17082 = p__17080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17082,(0),null);
var game_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17082,(1),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17082,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(game_name,cljs.core.cst$kw$game_SLASH_name.cljs$core$IFn$_invoke$arity$1(db))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stopped,cljs.core.cst$kw$game_SLASH_state.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$stopped))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_SLASH_start,game_name,game], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$running),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resume], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_down,(function (_,p__17086){
var vec__17087 = p__17086;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17087,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17087,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_down,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game$input_SLASH_key_DASH_up,(function (_,p__17090){
var vec__17091 = p__17090;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_up,key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$open_DASH_page,(function (p__17094,p__17095){
var map__17096 = p__17094;
var map__17096__$1 = (((((!((map__17096 == null))))?(((((map__17096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17096):map__17096);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17096__$1,cljs.core.cst$kw$db);
var vec__17097 = p__17095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17097,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17097,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,page], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$game_SLASH_state,cljs.core.cst$kw$stopped], 0)),cljs.core.cst$kw$game_DASH_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stop], null)], null);
}));
