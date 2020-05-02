// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('app.game_engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.game');
if((typeof app !== 'undefined') && (typeof app.game_engine !== 'undefined') && (typeof app.game_engine.game_state !== 'undefined')){
} else {
app.game_engine.game_state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.game_engine !== 'undefined') && (typeof app.game_engine.initial_state !== 'undefined')){
} else {
app.game_engine.initial_state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,false,cljs.core.cst$kw$settings,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$prev_DASH_time,null], null);
}
app.game_engine.replace_canvas = (function app$game_engine$replace_canvas(state,canvas){
if(cljs.core.truth_(canvas)){
var context = canvas.getContext("2d");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,context),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$game_DASH_area_SLASH_size], null),(function (p1__17151_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17151_SHARP_,cljs.core.cst$kw$width,canvas.width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,canvas.height], 0));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,null);
}
});
app.game_engine.unpause = (function app$game_engine$unpause(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$running,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$prev_DASH_time,window.performance.now()], 0));
});
/**
 * Runs single iteration of the game loop (update, render). Returns state.
 */
app.game_engine.game_iter = (function app$game_engine$game_iter(state,current_time){
var temp__5733__auto__ = cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5733__auto__)){
var running_game = temp__5733__auto__;
var delta = (current_time - cljs.core.cst$kw$prev_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
var inputs = (cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delta,delta], null)):cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state));
var game = app.game.process_inputs(running_game,inputs);
var updated_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$game,game,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prev_DASH_time,current_time], 0));
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(updated_state);
if(cljs.core.truth_(context)){
app.game.render(game,cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(updated_state),context);
} else {
}

return updated_state;
} else {
return state;
}
});
/**
 * Initializes game. Returns initial game state.
 */
app.game_engine.start_game = (function app$game_engine$start_game(p__17152){
var map__17153 = p__17152;
var map__17153__$1 = (((((!((map__17153 == null))))?(((((map__17153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17153):map__17153);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17153__$1,cljs.core.cst$kw$settings);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17153__$1,cljs.core.cst$kw$game);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17153__$1,cljs.core.cst$kw$canvas);
return app.game_engine.unpause(app.game_engine.replace_canvas(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,true,cljs.core.cst$kw$settings,settings,cljs.core.cst$kw$game,app.game.init(game)], null),canvas));
});
app.game_engine.process_event_BANG_ = (function app$game_engine$process_event_BANG_(state,event){
var G__17157 = cljs.core.first(event);
var G__17157__$1 = (((G__17157 instanceof cljs.core.Keyword))?G__17157.fqn:null);
switch (G__17157__$1) {
case "input":
if(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$inputs,cljs.core.conj,cljs.core.second(event));
} else {
return state;
}

break;
case "loop":
window.requestAnimationFrame((function (p1__17155_SHARP_){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17158 = app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null);
var G__17159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop,p1__17155_SHARP_], null);
return (app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2(G__17158,G__17159) : app.game_engine.process_event_BANG_.call(null,G__17158,G__17159));
})());
}));

return app.game_engine.game_iter(state,cljs.core.second(event));

break;
case "start":
window.requestAnimationFrame((function (p1__17156_SHARP_){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17160 = app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null);
var G__17161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop,p1__17156_SHARP_], null);
return (app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2(G__17160,G__17161) : app.game_engine.process_event_BANG_.call(null,G__17160,G__17161));
})());
}));

return app.game_engine.start_game(cljs.core.second(event));

break;
case "stop":
var temp__5735__auto___17165 = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5735__auto___17165)){
var context_17166 = temp__5735__auto___17165;
var map__17162_17167 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$game_DASH_area_SLASH_size], null));
var map__17162_17168__$1 = (((((!((map__17162_17167 == null))))?(((((map__17162_17167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17162_17167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17162_17167):map__17162_17167);
var width_17169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17162_17168__$1,cljs.core.cst$kw$width);
var height_17170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17162_17168__$1,cljs.core.cst$kw$height);
context_17166.clearRect((0),(0),width_17169,height_17170);
} else {
}

return app.game_engine.initial_state;

break;
case "pause":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$running,false);

break;
case "resume":
return app.game_engine.unpause(state);

break;
case "replace-canvas":
return app.game_engine.replace_canvas(state,cljs.core.second(event));

break;
default:
return state;

}
});
app.game_engine.init = (function app$game_engine$init(){
return cljs.core.vreset_BANG_(app.game_engine.game_state,app.game_engine.initial_state);
});
var G__17171_17173 = cljs.core.cst$kw$game_DASH_event;
var G__17172_17174 = (function (event){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,app.game_engine.process_event_BANG_(app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null),event));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17171_17173,G__17172_17174) : re_frame.core.reg_fx.call(null,G__17171_17173,G__17172_17174));