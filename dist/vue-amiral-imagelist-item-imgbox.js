!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-amiral-imagelist-item-imgbox",[],e):"object"==typeof exports?exports["vue-amiral-imagelist-item-imgbox"]=e():t["vue-amiral-imagelist-item-imgbox"]=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i=r(1)(r(2),r(3),null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,r,i){var n,o=t=t||{},s=typeof t["default"];"object"!==s&&"function"!==s||(n=t,o=t["default"]);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r),i){var u=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var e=i[t];u[t]=function(){return e}}),c.computed=u}return{esModule:n,exports:o,options:c}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"vue-amiral-imagelist-item-imgbox",props:{src:String},computed:{getSrc:function(){return this.src.startsWith("http")||this.src.startsWith("//")?this.src:""==this.src||"false"==this.src||0==this.src?"":this.src+this.src}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:t.getSrc,alt:""}})},staticRenderFns:[]}}])});