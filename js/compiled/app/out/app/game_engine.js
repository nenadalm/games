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
app.game_engine.replace_canvas = (function app$game_engine$replace_canvas(state,canvas){
if(cljs.core.truth_(canvas)){
var context = canvas.getContext("2d");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,context),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$game_DASH_area_SLASH_size], null),(function (p1__17121_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17121_SHARP_,cljs.core.cst$kw$width,canvas.width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,canvas.height], 0));
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
var delta = (current_time - cljs.core.cst$kw$prev_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
var inputs = (cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delta,delta], null)):cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state));
var game = app.game.process_inputs(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(state),inputs);
var updated_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$game,game,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prev_DASH_time,current_time], 0));
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(updated_state);
if(cljs.core.truth_(context)){
app.game.render(game,cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(updated_state),context);
} else {
}

return updated_state;
});
/**
 * Initializes game. Returns initial game state.
 */
app.game_engine.start_game = (function app$game_engine$start_game(p__17122){
var map__17123 = p__17122;
var map__17123__$1 = (((((!((map__17123 == null))))?(((((map__17123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17123):map__17123);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$settings);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$game);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17123__$1,cljs.core.cst$kw$canvas);
return app.game_engine.unpause(app.game_engine.replace_canvas(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,true,cljs.core.cst$kw$settings,settings,cljs.core.cst$kw$game,app.game.init(game)], null),canvas));
});
app.game_engine.process_event_BANG_ = (function app$game_engine$process_event_BANG_(state,event){
var G__17127 = cljs.core.first(event);
var G__17127__$1 = (((G__17127 instanceof cljs.core.Keyword))?G__17127.fqn:null);
switch (G__17127__$1) {
case "input":
if(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$inputs,cljs.core.conj,cljs.core.second(event));
} else {
return state;
}

break;
case "loop":
window.requestAnimationFrame((function (p1__17125_SHARP_){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17128 = app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null);
var G__17129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop,p1__17125_SHARP_], null);
return (app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2(G__17128,G__17129) : app.game_engine.process_event_BANG_.call(null,G__17128,G__17129));
})());
}));

return app.game_engine.game_iter(state,cljs.core.second(event));

break;
case "start":
window.requestAnimationFrame((function (p1__17126_SHARP_){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17130 = app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null);
var G__17131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop,p1__17126_SHARP_], null);
return (app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? app.game_engine.process_event_BANG_.cljs$core$IFn$_invoke$arity$2(G__17130,G__17131) : app.game_engine.process_event_BANG_.call(null,G__17130,G__17131));
})());
}));

return app.game_engine.start_game(cljs.core.second(event));

break;
case "stop":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$running,false);

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
return cljs.core.vreset_BANG_(app.game_engine.game_state,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,false,cljs.core.cst$kw$settings,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$prev_DASH_time,null], null));
});
var G__17133_17135 = cljs.core.cst$kw$game_DASH_event;
var G__17134_17136 = (function (event){
return app.game_engine.game_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,app.game_engine.process_event_BANG_(app.game_engine.game_state.cljs$core$IDeref$_deref$arity$1(null),event));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17133_17135,G__17134_17136) : re_frame.core.reg_fx.call(null,G__17133_17135,G__17134_17136));
