// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
app.game.Game = function(){};

/**
 * Initializes game.
 */
app.game._init = (function app$game$_init(this$){
if((((!((this$ == null)))) && ((!((this$.app$game$Game$_init$arity$1 == null)))))){
return this$.app$game$Game$_init$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (app.game._init[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (app.game._init["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Game.-init",this$);
}
}
}
});

/**
 * Incorporates inputs into the game.
 */
app.game._process_inputs = (function app$game$_process_inputs(this$,inputs){
if((((!((this$ == null)))) && ((!((this$.app$game$Game$_process_inputs$arity$2 == null)))))){
return this$.app$game$Game$_process_inputs$arity$2(this$,inputs);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (app.game._process_inputs[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,inputs) : m__4434__auto__.call(null,this$,inputs));
} else {
var m__4431__auto__ = (app.game._process_inputs["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,inputs) : m__4431__auto__.call(null,this$,inputs));
} else {
throw cljs.core.missing_protocol("Game.-process-inputs",this$);
}
}
}
});

/**
 * Renders the game.
 */
app.game._render = (function app$game$_render(this$,settings,context){
if((((!((this$ == null)))) && ((!((this$.app$game$Game$_render$arity$3 == null)))))){
return this$.app$game$Game$_render$arity$3(this$,settings,context);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (app.game._render[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,settings,context) : m__4434__auto__.call(null,this$,settings,context));
} else {
var m__4431__auto__ = (app.game._render["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,settings,context) : m__4431__auto__.call(null,this$,settings,context));
} else {
throw cljs.core.missing_protocol("Game.-render",this$);
}
}
}
});

app.game.init = (function app$game$init(game){
return app.game._init(game);
});
app.game.process_inputs = (function app$game$process_inputs(game,inputs){
return app.game._process_inputs(game,inputs);
});
app.game.render = (function app$game$render(game,settings,context){
return app.game._render(game,settings,context);
});
