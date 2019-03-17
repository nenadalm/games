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
return (function (p1__29072_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__29072_SHARP_,cljs.core.cst$kw$width,canvas.width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,canvas.height], 0));
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
app.game_engine.start_game_BANG_ = (function app$game_engine$start_game_BANG_(p__29073){
var map__29074 = p__29073;
var map__29074__$1 = (((((!((map__29074 == null))))?(((((map__29074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29074):map__29074);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$settings);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$game);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,cljs.core.cst$kw$canvas);
var initial_state = app.game_engine.unpause(app.game_engine.replace_canvas(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$running,true,cljs.core.cst$kw$settings,settings,cljs.core.cst$kw$game,app.game.init(game)], null),canvas));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop], null));

return initial_state;
});
app.game_engine.init = (function app$game_engine$init(){
var c__26756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26756__auto__){
return (function (){
var f__26757__auto__ = (function (){var switch__26649__auto__ = ((function (c__26756__auto__){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_29081 = (state_29122[(7)]);
var inst_29084 = (state_29122[(8)]);
var inst_29087 = cljs.core.second(inst_29084);
var inst_29088 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_29081,cljs.core.cst$kw$inputs,cljs.core.conj,inst_29087);
var state_29122__$1 = state_29122;
var statearr_29124_29162 = state_29122__$1;
(statearr_29124_29162[(2)] = inst_29088);

(statearr_29124_29162[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (1))){
var inst_29076 = [cljs.core.cst$kw$inputs,cljs.core.cst$kw$running,cljs.core.cst$kw$settings,cljs.core.cst$kw$prev_DASH_time];
var inst_29077 = cljs.core.PersistentVector.EMPTY;
var inst_29078 = cljs.core.PersistentHashMap.EMPTY;
var inst_29079 = [inst_29077,false,inst_29078,null];
var inst_29080 = cljs.core.PersistentHashMap.fromArrays(inst_29076,inst_29079);
var inst_29081 = inst_29080;
var state_29122__$1 = (function (){var statearr_29125 = state_29122;
(statearr_29125[(7)] = inst_29081);

return statearr_29125;
})();
var statearr_29126_29163 = state_29122__$1;
(statearr_29126_29163[(2)] = null);

(statearr_29126_29163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (4))){
var inst_29084 = (state_29122[(8)]);
var inst_29084__$1 = (state_29122[(2)]);
var inst_29116 = cljs.core.first(inst_29084__$1);
var state_29122__$1 = (function (){var statearr_29127 = state_29122;
(statearr_29127[(8)] = inst_29084__$1);

return statearr_29127;
})();
var G__29128_29164 = inst_29116;
var G__29128_29165__$1 = (((G__29128_29164 instanceof cljs.core.Keyword))?G__29128_29164.fqn:null);
switch (G__29128_29165__$1) {
case "input":
var statearr_29129_29167 = state_29122__$1;
(statearr_29129_29167[(1)] = (6));


break;
case "loop":
var statearr_29130_29168 = state_29122__$1;
(statearr_29130_29168[(1)] = (10));


break;
case "start":
var statearr_29131_29169 = state_29122__$1;
(statearr_29131_29169[(1)] = (11));


break;
case "stop":
var statearr_29132_29170 = state_29122__$1;
(statearr_29132_29170[(1)] = (12));


break;
case "pause":
var statearr_29133_29171 = state_29122__$1;
(statearr_29133_29171[(1)] = (13));


break;
case "resume":
var statearr_29134_29172 = state_29122__$1;
(statearr_29134_29172[(1)] = (14));


break;
case "replace-canvas":
var statearr_29135_29173 = state_29122__$1;
(statearr_29135_29173[(1)] = (15));


break;
default:
var statearr_29136_29174 = state_29122__$1;
(statearr_29136_29174[(1)] = (16));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (15))){
var inst_29081 = (state_29122[(7)]);
var inst_29084 = (state_29122[(8)]);
var inst_29110 = cljs.core.second(inst_29084);
var inst_29111 = app.game_engine.replace_canvas(inst_29081,inst_29110);
var inst_29081__$1 = inst_29111;
var state_29122__$1 = (function (){var statearr_29137 = state_29122;
(statearr_29137[(7)] = inst_29081__$1);

return statearr_29137;
})();
var statearr_29138_29175 = state_29122__$1;
(statearr_29138_29175[(2)] = null);

(statearr_29138_29175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (13))){
var inst_29081 = (state_29122[(7)]);
var inst_29104 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_29081,cljs.core.cst$kw$running,false);
var inst_29081__$1 = inst_29104;
var state_29122__$1 = (function (){var statearr_29139 = state_29122;
(statearr_29139[(7)] = inst_29081__$1);

return statearr_29139;
})();
var statearr_29140_29176 = state_29122__$1;
(statearr_29140_29176[(2)] = null);

(statearr_29140_29176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (6))){
var inst_29081 = (state_29122[(7)]);
var inst_29085 = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(inst_29081);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29085)){
var statearr_29141_29177 = state_29122__$1;
(statearr_29141_29177[(1)] = (7));

} else {
var statearr_29142_29178 = state_29122__$1;
(statearr_29142_29178[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (3))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (12))){
var inst_29081 = (state_29122[(7)]);
var inst_29101 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_29081,cljs.core.cst$kw$running,false);
var inst_29081__$1 = inst_29101;
var state_29122__$1 = (function (){var statearr_29143 = state_29122;
(statearr_29143[(7)] = inst_29081__$1);

return statearr_29143;
})();
var statearr_29144_29179 = state_29122__$1;
(statearr_29144_29179[(2)] = null);

(statearr_29144_29179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (2))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29122__$1,(4),app.game_engine.game_channel);
} else {
if((state_val_29123 === (11))){
var inst_29084 = (state_29122[(8)]);
var inst_29097 = cljs.core.second(inst_29084);
var inst_29098 = app.game_engine.start_game_BANG_(inst_29097);
var inst_29081 = inst_29098;
var state_29122__$1 = (function (){var statearr_29145 = state_29122;
(statearr_29145[(7)] = inst_29081);

return statearr_29145;
})();
var statearr_29146_29180 = state_29122__$1;
(statearr_29146_29180[(2)] = null);

(statearr_29146_29180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (9))){
var inst_29091 = (state_29122[(2)]);
var inst_29081 = inst_29091;
var state_29122__$1 = (function (){var statearr_29147 = state_29122;
(statearr_29147[(7)] = inst_29081);

return statearr_29147;
})();
var statearr_29148_29181 = state_29122__$1;
(statearr_29148_29181[(2)] = null);

(statearr_29148_29181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (5))){
var inst_29118 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29150_29182 = state_29122__$1;
(statearr_29150_29182[(2)] = inst_29118);

(statearr_29150_29182[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (14))){
var inst_29081 = (state_29122[(7)]);
var inst_29107 = app.game_engine.unpause(inst_29081);
var inst_29081__$1 = inst_29107;
var state_29122__$1 = (function (){var statearr_29151 = state_29122;
(statearr_29151[(7)] = inst_29081__$1);

return statearr_29151;
})();
var statearr_29152_29183 = state_29122__$1;
(statearr_29152_29183[(2)] = null);

(statearr_29152_29183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (16))){
var inst_29081 = (state_29122[(7)]);
var tmp29149 = inst_29081;
var inst_29081__$1 = tmp29149;
var state_29122__$1 = (function (){var statearr_29153 = state_29122;
(statearr_29153[(7)] = inst_29081__$1);

return statearr_29153;
})();
var statearr_29154_29184 = state_29122__$1;
(statearr_29154_29184[(2)] = null);

(statearr_29154_29184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (10))){
var inst_29081 = (state_29122[(7)]);
var inst_29094 = app.game_engine.game_iter_BANG_(inst_29081);
var inst_29081__$1 = inst_29094;
var state_29122__$1 = (function (){var statearr_29155 = state_29122;
(statearr_29155[(7)] = inst_29081__$1);

return statearr_29155;
})();
var statearr_29156_29185 = state_29122__$1;
(statearr_29156_29185[(2)] = null);

(statearr_29156_29185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29123 === (8))){
var inst_29081 = (state_29122[(7)]);
var state_29122__$1 = state_29122;
var statearr_29157_29186 = state_29122__$1;
(statearr_29157_29186[(2)] = inst_29081);

(statearr_29157_29186[(1)] = (9));


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
});})(c__26756__auto__))
;
return ((function (switch__26649__auto__,c__26756__auto__){
return (function() {
var app$game_engine$init_$_state_machine__26650__auto__ = null;
var app$game_engine$init_$_state_machine__26650__auto____0 = (function (){
var statearr_29158 = [null,null,null,null,null,null,null,null,null];
(statearr_29158[(0)] = app$game_engine$init_$_state_machine__26650__auto__);

(statearr_29158[(1)] = (1));

return statearr_29158;
});
var app$game_engine$init_$_state_machine__26650__auto____1 = (function (state_29122){
while(true){
var ret_value__26651__auto__ = (function (){try{while(true){
var result__26652__auto__ = switch__26649__auto__(state_29122);
if(cljs.core.keyword_identical_QMARK_(result__26652__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26652__auto__;
}
break;
}
}catch (e29159){if((e29159 instanceof Object)){
var ex__26653__auto__ = e29159;
var statearr_29160_29187 = state_29122;
(statearr_29160_29187[(5)] = ex__26653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29122);

return cljs.core.cst$kw$recur;
} else {
throw e29159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26651__auto__,cljs.core.cst$kw$recur)){
var G__29188 = state_29122;
state_29122 = G__29188;
continue;
} else {
return ret_value__26651__auto__;
}
break;
}
});
app$game_engine$init_$_state_machine__26650__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return app$game_engine$init_$_state_machine__26650__auto____0.call(this);
case 1:
return app$game_engine$init_$_state_machine__26650__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$game_engine$init_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$0 = app$game_engine$init_$_state_machine__26650__auto____0;
app$game_engine$init_$_state_machine__26650__auto__.cljs$core$IFn$_invoke$arity$1 = app$game_engine$init_$_state_machine__26650__auto____1;
return app$game_engine$init_$_state_machine__26650__auto__;
})()
;})(switch__26649__auto__,c__26756__auto__))
})();
var state__26758__auto__ = (function (){var statearr_29161 = (f__26757__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26757__auto__.cljs$core$IFn$_invoke$arity$0() : f__26757__auto__.call(null));
(statearr_29161[(6)] = c__26756__auto__);

return statearr_29161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26758__auto__);
});})(c__26756__auto__))
);

return c__26756__auto__;
});
var G__29189_29191 = cljs.core.cst$kw$game_DASH_event;
var G__29190_29192 = ((function (G__29189_29191){
return (function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.game_engine.game_channel,event);
});})(G__29189_29191))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29189_29191,G__29190_29192) : re_frame.core.reg_fx.call(null,G__29189_29191,G__29190_29192));
