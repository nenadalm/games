// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.game_engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_frame.core');
goog.require('app.game');
app.game_engine.game_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.game_engine.replace_canvas = (function app$game_engine$replace_canvas(state,canvas){
if(cljs.core.truth_(canvas)){
var context = canvas.getContext("2d");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$context,context),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$game_DASH_area_SLASH_size], null),((function (context){
return (function (p1__30772_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__30772_SHARP_,cljs.core.cst$kw$width,canvas.width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,canvas.height], 0));
});})(context))
);
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
app.game_engine.game_iter_BANG_ = (function app$game_engine$game_iter_BANG_(state){
var current_time = window.performance.now();
var delta = (current_time - cljs.core.cst$kw$prev_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
var inputs = (cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delta,delta], null)):cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(state));
var game = app.game.process_inputs(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(state),inputs);
var updated_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$game,game,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prev_DASH_time,current_time], 0));
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(updated_state);
if(cljs.core.truth_(context)){
app.game.render(game,cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(updated_state),context);
} else {
}

window.requestAnimationFrame(((function (current_time,delta,inputs,game,updated_state,context){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop], null));
});})(current_time,delta,inputs,game,updated_state,context))
);

return updated_state;
});
/**
 * Initializes game. Returns initial game state.
 */
app.game_engine.start_game_BANG_ = (function app$game_engine$start_game_BANG_(p__30773){
var map__30774 = p__30773;
var map__30774__$1 = (((((!((map__30774 == null))))?(((((map__30774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30774):map__30774);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30774__$1,cljs.core.cst$kw$settings);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30774__$1,cljs.core.cst$kw$game);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30774__$1,cljs.core.cst$kw$canvas);
var initial_state = app.game_engine.unpause(app.game_engine.replace_canvas(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,true,cljs.core.cst$kw$settings,settings,cljs.core.cst$kw$game,app.game.init(game)], null),canvas));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop], null));

return initial_state;
});
app.game_engine.init = (function app$game_engine$init(){
var c__28456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28456__auto__){
return (function (){
var f__28457__auto__ = (function (){var switch__28349__auto__ = ((function (c__28456__auto__){
return (function (state_30822){
var state_val_30823 = (state_30822[(1)]);
if((state_val_30823 === (7))){
var inst_30781 = (state_30822[(7)]);
var inst_30784 = (state_30822[(8)]);
var inst_30787 = cljs.core.second(inst_30784);
var inst_30788 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_30781,cljs.core.cst$kw$inputs,cljs.core.conj,inst_30787);
var state_30822__$1 = state_30822;
var statearr_30824_30862 = state_30822__$1;
(statearr_30824_30862[(2)] = inst_30788);

(statearr_30824_30862[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (1))){
var inst_30776 = [cljs.core.cst$kw$inputs,cljs.core.cst$kw$running,cljs.core.cst$kw$settings,cljs.core.cst$kw$prev_DASH_time];
var inst_30777 = cljs.core.PersistentVector.EMPTY;
var inst_30778 = cljs.core.PersistentHashMap.EMPTY;
var inst_30779 = [inst_30777,false,inst_30778,null];
var inst_30780 = cljs.core.PersistentHashMap.fromArrays(inst_30776,inst_30779);
var inst_30781 = inst_30780;
var state_30822__$1 = (function (){var statearr_30825 = state_30822;
(statearr_30825[(7)] = inst_30781);

return statearr_30825;
})();
var statearr_30826_30863 = state_30822__$1;
(statearr_30826_30863[(2)] = null);

(statearr_30826_30863[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (4))){
var inst_30784 = (state_30822[(8)]);
var inst_30784__$1 = (state_30822[(2)]);
var inst_30816 = cljs.core.first(inst_30784__$1);
var state_30822__$1 = (function (){var statearr_30827 = state_30822;
(statearr_30827[(8)] = inst_30784__$1);

return statearr_30827;
})();
var G__30828_30864 = inst_30816;
var G__30828_30865__$1 = (((G__30828_30864 instanceof cljs.core.Keyword))?G__30828_30864.fqn:null);
switch (G__30828_30865__$1) {
case "input":
var statearr_30829_30867 = state_30822__$1;
(statearr_30829_30867[(1)] = (6));


break;
case "loop":
var statearr_30830_30868 = state_30822__$1;
(statearr_30830_30868[(1)] = (10));


break;
case "start":
var statearr_30831_30869 = state_30822__$1;
(statearr_30831_30869[(1)] = (11));


break;
case "stop":
var statearr_30832_30870 = state_30822__$1;
(statearr_30832_30870[(1)] = (12));


break;
case "pause":
var statearr_30833_30871 = state_30822__$1;
(statearr_30833_30871[(1)] = (13));


break;
case "resume":
var statearr_30834_30872 = state_30822__$1;
(statearr_30834_30872[(1)] = (14));


break;
case "replace-canvas":
var statearr_30835_30873 = state_30822__$1;
(statearr_30835_30873[(1)] = (15));


break;
default:
var statearr_30836_30874 = state_30822__$1;
(statearr_30836_30874[(1)] = (16));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (15))){
var inst_30781 = (state_30822[(7)]);
var inst_30784 = (state_30822[(8)]);
var inst_30810 = cljs.core.second(inst_30784);
var inst_30811 = app.game_engine.replace_canvas(inst_30781,inst_30810);
var inst_30781__$1 = inst_30811;
var state_30822__$1 = (function (){var statearr_30837 = state_30822;
(statearr_30837[(7)] = inst_30781__$1);

return statearr_30837;
})();
var statearr_30838_30875 = state_30822__$1;
(statearr_30838_30875[(2)] = null);

(statearr_30838_30875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (13))){
var inst_30781 = (state_30822[(7)]);
var inst_30804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_30781,cljs.core.cst$kw$running,false);
var inst_30781__$1 = inst_30804;
var state_30822__$1 = (function (){var statearr_30839 = state_30822;
(statearr_30839[(7)] = inst_30781__$1);

return statearr_30839;
})();
var statearr_30840_30876 = state_30822__$1;
(statearr_30840_30876[(2)] = null);

(statearr_30840_30876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (6))){
var inst_30781 = (state_30822[(7)]);
var inst_30785 = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(inst_30781);
var state_30822__$1 = state_30822;
if(cljs.core.truth_(inst_30785)){
var statearr_30841_30877 = state_30822__$1;
(statearr_30841_30877[(1)] = (7));

} else {
var statearr_30842_30878 = state_30822__$1;
(statearr_30842_30878[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (3))){
var inst_30820 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30822__$1,inst_30820);
} else {
if((state_val_30823 === (12))){
var inst_30781 = (state_30822[(7)]);
var inst_30801 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_30781,cljs.core.cst$kw$running,false);
var inst_30781__$1 = inst_30801;
var state_30822__$1 = (function (){var statearr_30843 = state_30822;
(statearr_30843[(7)] = inst_30781__$1);

return statearr_30843;
})();
var statearr_30844_30879 = state_30822__$1;
(statearr_30844_30879[(2)] = null);

(statearr_30844_30879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (2))){
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30822__$1,(4),app.game_engine.game_channel);
} else {
if((state_val_30823 === (11))){
var inst_30784 = (state_30822[(8)]);
var inst_30797 = cljs.core.second(inst_30784);
var inst_30798 = app.game_engine.start_game_BANG_(inst_30797);
var inst_30781 = inst_30798;
var state_30822__$1 = (function (){var statearr_30845 = state_30822;
(statearr_30845[(7)] = inst_30781);

return statearr_30845;
})();
var statearr_30846_30880 = state_30822__$1;
(statearr_30846_30880[(2)] = null);

(statearr_30846_30880[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (9))){
var inst_30791 = (state_30822[(2)]);
var inst_30781 = inst_30791;
var state_30822__$1 = (function (){var statearr_30847 = state_30822;
(statearr_30847[(7)] = inst_30781);

return statearr_30847;
})();
var statearr_30848_30881 = state_30822__$1;
(statearr_30848_30881[(2)] = null);

(statearr_30848_30881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (5))){
var inst_30818 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30850_30882 = state_30822__$1;
(statearr_30850_30882[(2)] = inst_30818);

(statearr_30850_30882[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (14))){
var inst_30781 = (state_30822[(7)]);
var inst_30807 = app.game_engine.unpause(inst_30781);
var inst_30781__$1 = inst_30807;
var state_30822__$1 = (function (){var statearr_30851 = state_30822;
(statearr_30851[(7)] = inst_30781__$1);

return statearr_30851;
})();
var statearr_30852_30883 = state_30822__$1;
(statearr_30852_30883[(2)] = null);

(statearr_30852_30883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (16))){
var inst_30781 = (state_30822[(7)]);
var tmp30849 = inst_30781;
var inst_30781__$1 = tmp30849;
var state_30822__$1 = (function (){var statearr_30853 = state_30822;
(statearr_30853[(7)] = inst_30781__$1);

return statearr_30853;
})();
var statearr_30854_30884 = state_30822__$1;
(statearr_30854_30884[(2)] = null);

(statearr_30854_30884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (10))){
var inst_30781 = (state_30822[(7)]);
var inst_30794 = app.game_engine.game_iter_BANG_(inst_30781);
var inst_30781__$1 = inst_30794;
var state_30822__$1 = (function (){var statearr_30855 = state_30822;
(statearr_30855[(7)] = inst_30781__$1);

return statearr_30855;
})();
var statearr_30856_30885 = state_30822__$1;
(statearr_30856_30885[(2)] = null);

(statearr_30856_30885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30823 === (8))){
var inst_30781 = (state_30822[(7)]);
var state_30822__$1 = state_30822;
var statearr_30857_30886 = state_30822__$1;
(statearr_30857_30886[(2)] = inst_30781);

(statearr_30857_30886[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28456__auto__))
;
return ((function (switch__28349__auto__,c__28456__auto__){
return (function() {
var app$game_engine$init_$_state_machine__28350__auto__ = null;
var app$game_engine$init_$_state_machine__28350__auto____0 = (function (){
var statearr_30858 = [null,null,null,null,null,null,null,null,null];
(statearr_30858[(0)] = app$game_engine$init_$_state_machine__28350__auto__);

(statearr_30858[(1)] = (1));

return statearr_30858;
});
var app$game_engine$init_$_state_machine__28350__auto____1 = (function (state_30822){
while(true){
var ret_value__28351__auto__ = (function (){try{while(true){
var result__28352__auto__ = switch__28349__auto__(state_30822);
if(cljs.core.keyword_identical_QMARK_(result__28352__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28352__auto__;
}
break;
}
}catch (e30859){if((e30859 instanceof Object)){
var ex__28353__auto__ = e30859;
var statearr_30860_30887 = state_30822;
(statearr_30860_30887[(5)] = ex__28353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30822);

return cljs.core.cst$kw$recur;
} else {
throw e30859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28351__auto__,cljs.core.cst$kw$recur)){
var G__30888 = state_30822;
state_30822 = G__30888;
continue;
} else {
return ret_value__28351__auto__;
}
break;
}
});
app$game_engine$init_$_state_machine__28350__auto__ = function(state_30822){
switch(arguments.length){
case 0:
return app$game_engine$init_$_state_machine__28350__auto____0.call(this);
case 1:
return app$game_engine$init_$_state_machine__28350__auto____1.call(this,state_30822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$game_engine$init_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$0 = app$game_engine$init_$_state_machine__28350__auto____0;
app$game_engine$init_$_state_machine__28350__auto__.cljs$core$IFn$_invoke$arity$1 = app$game_engine$init_$_state_machine__28350__auto____1;
return app$game_engine$init_$_state_machine__28350__auto__;
})()
;})(switch__28349__auto__,c__28456__auto__))
})();
var state__28458__auto__ = (function (){var statearr_30861 = (f__28457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28457__auto__.cljs$core$IFn$_invoke$arity$0() : f__28457__auto__.call(null));
(statearr_30861[(6)] = c__28456__auto__);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28458__auto__);
});})(c__28456__auto__))
);

return c__28456__auto__;
});
var G__30889_30891 = cljs.core.cst$kw$game_DASH_event;
var G__30890_30892 = ((function (G__30889_30891){
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,event);
});})(G__30889_30891))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__30889_30891,G__30890_30892) : re_frame.core.reg_fx.call(null,G__30889_30891,G__30890_30892));
