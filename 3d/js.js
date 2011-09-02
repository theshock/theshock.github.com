// ./lib/jquery/_jquery.js 
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

// ./lib/jquery/jquery,md5.js 
/**
 * jQuery MD5 hash algorithm function
 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
 * @link http://www.semnanweb.com/jquery-plugin/md5.html
 * @see http://www.webtoolkit.info/
 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 * @param {jQuery} {md5:function(string))
 * @return string
 */

(function($){

	var rotateLeft = function(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	};

	var addUnsigned = function(lX, lY) {
		var lX4, lY4, lX8, lY8, lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
		if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		if (lX4 | lY4) {
			if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
	};

	var F = function(x, y, z) {
		return (x & y) | ((~ x) & z);
	};

	var G = function(x, y, z) {
		return (x & z) | (y & (~ z));
	};

	var H = function(x, y, z) {
		return (x ^ y ^ z);
	};

	var I = function(x, y, z) {
		return (y ^ (x | (~ z)));
	};

	var FF = function(a, b, c, d, x, s, ac) {
		a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
		return addUnsigned(rotateLeft(a, s), b);
	};

	var GG = function(a, b, c, d, x, s, ac) {
		a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
		return addUnsigned(rotateLeft(a, s), b);
	};

	var HH = function(a, b, c, d, x, s, ac) {
		a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
		return addUnsigned(rotateLeft(a, s), b);
	};

	var II = function(a, b, c, d, x, s, ac) {
		a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
		return addUnsigned(rotateLeft(a, s), b);
	};

	var convertToWordArray = function(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWordsTempOne = lMessageLength + 8;
		var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
		var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
		var lWordArray = Array(lNumberOfWords - 1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
		lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
		return lWordArray;
	};

	var wordToHex = function(lValue) {
		var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255;
			WordToHexValueTemp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
		}
		return WordToHexValue;
	};

	var uTF8Encode = function(string) {
		string = string.replace(/\x0d\x0a/g, "\x0a");
		var output = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				output += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				output += String.fromCharCode((c >> 6) | 192);
				output += String.fromCharCode((c & 63) | 128);
			} else {
				output += String.fromCharCode((c >> 12) | 224);
				output += String.fromCharCode(((c >> 6) & 63) | 128);
				output += String.fromCharCode((c & 63) | 128);
			}
		}
		return output;
	};

	$.extend({
		md5: function(string) {
			var x = Array();
			var k, AA, BB, CC, DD, a, b, c, d;
			var S11=7, S12=12, S13=17, S14=22;
			var S21=5, S22=9 , S23=14, S24=20;
			var S31=4, S32=11, S33=16, S34=23;
			var S41=6, S42=10, S43=15, S44=21;
			string = uTF8Encode(string);
			x = convertToWordArray(string);
			a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
			for (k = 0; k < x.length; k += 16) {
				AA = a; BB = b; CC = c; DD = d;
				a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
				d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
				c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
				b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
				a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
				d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
				c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
				b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
				a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
				d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
				c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
				b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
				a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
				d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
				c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
				b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
				a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
				d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
				c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
				b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
				a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
				d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
				c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
				b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
				a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
				d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
				c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
				b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
				a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
				d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
				c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
				b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
				a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
				d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
				c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
				b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
				a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
				d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
				c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
				b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
				a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
				d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
				c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
				b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
				a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
				d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
				c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
				b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
				a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
				d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
				c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
				b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
				a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
				d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
				c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
				b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
				a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
				d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
				c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
				b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
				a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
				d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
				c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
				b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
				a = addUnsigned(a, AA);
				b = addUnsigned(b, BB);
				c = addUnsigned(c, CC);
				d = addUnsigned(d, DD);
			}
			var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
			return tempValue.toLowerCase();
		}
	});
})(jQuery);

// ./lib/jquery/jquery.cookie.js 
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.h/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    return decodeURIComponent(cookie.substring(name.length + 1));
                }
            }
        }
        return null;
    }
};

// ./lib/jquery/jquery.keyboard.js 
(function ($) {	
	$.fn.keyboard = function () {
		$k.bind(this, arguments);
		return this;
	}

	$.keyboard = function () {
		$k.bind($(document), arguments);
		return this;
	}
	
	var $k = {
		setup : {
			'strict' : true,
			'event'  : 'keydown',
			'preventDefault' : false
		},
		keys : {
			cont : [],
			getCodes : function () {
				var codes = [];
				for (var i = 0; i < $k.keys.cont.length; i++) {
					codes.push($k.keys.cont[i].keyCode);
				}
				return codes;
			},
			add : function (e) {
				if (e.keyCode == 0) {
					// throw 'ZeroKeyCodeException';
				} else {
					$k.keys.rm(e);
					$k.keys.cont.push(e);
					$k.keys.dump();
				}
			},
			rm : function (e) {
				for (var i = 0; i < $k.keys.cont.length; i++) {
					if ($k.keys.cont[i].keyCode == e.keyCode) {
						$k.keys.cont.splice(i, 1);
						return;
					}
				}
			},
			clear : function () {
				$k.keys.cont = [];
			},
			dump : function () {
				// console.log($k.keys.getCodes().join('; '));
			}
		},
		keyCodes : {
			// Alphabet
			a:65, b:66, c:67, d:68, e:69,
			f:70, g:71, h:72, i:73, j:74,
			k:75, l:76, m:77, n:78, o:79,
			p:80, q:81, r:82, s:83, t:84,
			u:85, v:86, w:87, x:88, y:89, z:90,
			// Numbers
			n0:48, n1:49, n2:50, n3:51, n4:52,
			n5:53, n6:54, n7:55, n8:56, n9:57,
			// Controls
			tab:  9, enter:13, shift:16, backspace:8,
			ctrl:17, alt  :18, esc  :27, space    :32,
			menu:93, pause:19, cmd  :91,
			insert  :45, home:36, pageup  :33,
			'delete':46, end :35, pagedown:34,
			// F*
			f1:112, f2:113, f3:114, f4 :115, f5 :116, f6 :117,
			f7:118, f8:119, f9:120, f10:121, f11:122, f12:123,
			// numpad
			np0: 96, np1: 97, np2: 98, np3: 99, np4:100,
			np5:101, np6:102, np7:103, np8:104, np9:105,
			npslash:11,npstar:106,nphyphen:109,npplus:107,npdot:110,
			// Lock
			capslock:20, numlock:144, scrolllock:145,
			
			// Symbols
			equals: 61, hyphen   :109, coma  :188, dot:190,
			gravis:192, backslash:220, sbopen:219, sbclose:221,
			slash :191, semicolon: 59, apostrophe : 222,
			// Arrows
			aleft:37, aup:  38, aright:39, adown:40
		},
		parseArgs : function (args) {
			if (!args.length) {
				throw 'EmptyArgs';
			}
			if (typeof args[0] == 'object') {
				return {
					setup : args[0]
				};
			} else {
				var secondIsFunc = (typeof args[1] == 'function');
				var isDelete = !secondIsFunc && (typeof args[2] != 'function');
				var argsObj = {};
				argsObj.keys = args[0];
				if ($.isArray(argsObj.keys)) {
					argsObj.keys = argsObj.keys.join(' ');
				}
				if (isDelete) {
					argsObj.isDelete = true;
				} else {
					argsObj.func = secondIsFunc ? args[1] : args[2];
					argsObj.cfg  = secondIsFunc ? args[2] : args[1];
					if (typeof argsObj.cfg != 'object') {
						argsObj.cfg = {};
					}
					argsObj.cfg = $.extend(clone($k.setup), argsObj.cfg);
				}
				return argsObj;
			}
		},
		getIndex : function (keyCodes, order) {
			return (order == 'strict') ?
				's.' + keyCodes.join('.') :
				'f.' + clone(keyCodes).sort().join('.');
		},
		getIndexCode : function (index) {
			if ($k.keyCodes[index]) {
				return $k.keyCodes[index];
			} else {
				throw 'No such index: «' + index + '»';
			}
		},
		getRange : function (title) {
			var c = $k.keyCodes;
			var f = arguments.callee;
			switch (title) {
				case 'letters'  : return range (c['a']  ,   c['z']);
				case 'numbers'  : return range (c['n0'] ,   c['n9']);
				case 'numpad'   : return range (c['np0'],   c['np9']);
				case 'fkeys'    : return range (c['f1'] ,   c['f12']);
				case 'arrows'   : return range (c['aleft'], c['adown']);
				case 'symbols'  : return [
					c.equals, c.hyphen, c.coma, c.dot, c.gravis, c.backslash,
					c.sbopen, c.sbclose, c.slash, c.semicolon, c.apostrophe,
					c.npslash, c.npstar, c.nphyphen,c.npplus,c.npdot
				];
				case 'allnum'   : return f('numbers').concat(f('numpad'));
				case 'printable': return f('letters').concat(
				                         f('allnum') .concat(
				                         f('symbols')))
				default         : throw 'No such range: «' + title + '»';
			}
		},
		stringGetCodes : function (str) {
			var parts;
			str = str.toLowerCase();
			if (str.match(/^\[[\w\d\s\|\)\(\-]*\]$/i)) { // [ space | (letters) | (n4-n7) ]
				var codes = [];
				parts = str
					.substring(1, str.length-1)
					.replace(/\s/, '')
					.split('|');
				for (var i = 0; i < parts.length; i++) {
					var p = $k.stringGetCodes(parts[i])
					codes = codes.concat(p);
				}
				return codes;
			} else if (str.match(/^\([\w\d\s\-]*\)$/i)) { // (n4-n7)
				parts = str
					.substring(1, str.length-1)
					.replace(/\s/, '')
					.split('-');
				if(parts.length == 2) {
					return range(
						$k.getIndexCode(parts[0]),
						$k.getIndexCode(parts[1])
					);
				} else {
					return $k.getRange(parts[0]);
				}
			} else {
				return [$k.getIndexCode(str)];
			}
		},
		getCodes : function (keys) {
			// ['shift', 'ctrl'] => [16, 17]
			var keycodes = [];
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (!isNaN(key)) { // is_numeric
					key = [1 * key];
				} else if (typeof key == 'string') {
					key = $k.stringGetCodes(key);
				} else {
					throw 'Wrong key type: «' + (typeof key) + '»';
				}
				keycodes.push(key);
			}
			return keycodes;
		},
		parseKeysString : function (str) {
			var parts = str.split(',');
			for (var i = 0; i < parts.length; i++) {
				var string = $.trim(parts[i]);
				parts[i] = {};
				parts[i].order = string.indexOf('+') >= 0 ? 'strict' : 'float';
				parts[i].codes = $k.getCodes(
					string.split(parts[i].order == 'strict' ? '+' : ' ')
				);
				parts[i].index = $k.getIndex(parts[i].codes, parts[i].order);
				parts[i].group = i;
			}
			return parts;
		},
		match : function (bind) {
			var k, i, matched, cur = undefined;
			var cont  = $k.keys.getCodes();
			var codes = clone(bind.keys.codes);
			var eventIndexes = [];
			if (codes.length == 0) {
				return false;
			}
			if (bind.keys.order == 'strict') {
				for (i = 0; i < cont.length; i++) {
					if (!codes.length) {
						break;
					}
					if (cur === undefined) {
						cur = codes.shift();
					}
					if (inArray(cont[i], cur)) {
						cur = undefined;
						eventIndexes.push(i);
					} else if (bind.cfg.strict) {
						return false;
					}
				}
				return (codes.length === 0 && cur === undefined) ?
					eventIndexes : false;
			} else {
				for (i = 0; i < codes.length; i++) {
					matched = false;
					for (k = 0; k < codes[i].length; k++) {
						cur = $.inArray(codes[i][k], cont);
						if (cur >= 0) {
							eventIndexes.push(cur);
							matched = true;
							break;
						}
					}
					if (!matched) {
						return false;
					}
				}
				if (bind.cfg.strict) {
					for (i = 0; i < cont.length; i++) {
						matched = false;
						for (k in codes) {
							if (inArray(cont[i], codes[k])) {
								matched = true;
								break;
							}
						}
						if (!matched) {
							return false;
						}
					}
				}
				return eventIndexes;
			}
		},
		hasCurrent : function (bind, e) {
			var last = bind.keys.codes.length - 1;
			return (bind.keys.order == 'strict') ?
				inArray  (e.keyCode, bind.keys.codes[last]) :
				inArrayR (e.keyCode, bind.keys.codes);
		},
		checkBinds : function ($obj, e) {
			var ei, okb = $obj.keyboardBinds;
			for (var i in okb) {
				var bind = okb[i];
				if (bind && bind.cfg.event == e.originalEvent.type) {
					ei = $k.match(bind);
					if ( ei && $k.hasCurrent(bind, e) ) {
						var backup = $obj.keyboardFunc;
						var events = [];
						for (var k = 0; k < ei.length; k++) {
							var event = $k.keys.cont[ei[k]];
							event.is = eIsKeyFunc;
							events.push(event);
						}
						$obj.keyboardFunc = bind.func;
						$obj.keyboardFunc(events, bind);
						$obj.keyboardFunc = backup;
						if (bind.cfg.preventDefault) {
							e.preventDefault();
						}
					}
				}
			}
		},
		bind : function ($obj, args) {
			args = $k.parseArgs(args);
			if (args.setup) {
				$k.setup = $.extend($k.setup, args.setup);
			} else {
				if (!$obj.keyboardBinds) {
					$obj.keyboardBinds = {};
					$obj
					.keydown(function (e) {
						$k.keys.add(e);
						$k.checkBinds($obj, e);
					})
					.keyup(function (e) {
						$k.checkBinds($obj, e);
					});
				}
				// {keys, func, cfg}
				var parts = $k.parseKeysString(args.keys);
				for (var i = 0; i < parts.length; i++) {
					if (args.isDelete) {
						$obj.keyboardBinds[parts[i].index] = undefined;
					} else {
						$obj.keyboardBinds[parts[i].index] = clone(args);
						$obj.keyboardBinds[parts[i].index].keys = parts[i];
					}
				}
			}
		},
		init : function () {
			$(document)
				.keydown ( $k.keys.add   )
				.keyup (function (e) {
					setTimeout(function () {
						$k.keys.rm(e)
					}, 0);
				})
				.blur ( $k.keys.clear );
		}
	}

	var eIsKeyFunc = function () {
		var keys = arguments;
		if ($.isArray(keys[0])) {
			keys = keys[0];
		}
		for (var k = 0; k < keys.length; k++) {
			if (this.keyCode == $k.keyCodes[keys[k]]) {
				return true;
			}
		}
		return false;
	};
	
	var inArrayR = function (value, array) {
		for (var i = 0; i < array.length; i++) {
			if (typeof array[i] == 'object' || $.isArray(array[i])) {
				if (inArrayR(value, array[i])) {
					return true;
				}
			} else if (value == array[i]) {
				return true;
			}
		}
		return false;
	}

	var inArray = function (value, array) {
		return ($.inArray(value, array) != -1);
	};

	var range = function (from, to) {
		var r = [];
		do {
			r.push(from);
		} while (from++ < to)
		return r;
	};

	var clone = function (obj) {
		var newObj, i;
		if ($.isArray(obj)) {
			newObj = [];
			for (i = 0; i < obj.length; i++) {
				newObj[i] = (typeof obj[i] == 'object' || $.isArray(obj[i]))
					? clone(obj[i]) : obj[i];
			}
		} else {
			newObj = {};
			for (i in obj) {
				newObj[i] = (typeof obj[i] == 'object' || $.isArray(obj[i]))
					? clone(obj[i]) : obj[i];
			}
		}
		return newObj;
	};

	$k.init();
})(jQuery);


// ./lib/classes/Cell.js 
Cell = function (maze, x, y) {
	this.maze = maze;
	this.coord = {
		x : x,
		y : y
	};
	this.walls = {
		top    : false,
		right  : false,
		bottom : false,
		left   : false
	};
	this.diff = {
		isStart  : false,
		isFinish : false
	};
};
Cell.prototype = {
	isExtreme : function (dir) {
		var isExtreme =
			dir == 'top'    ? this.coord.y == 1 :
			dir == 'right'  ? this.coord.x == this.maze.size.width :
			dir == 'bottom' ? this.coord.y == this.maze.size.height :
			dir == 'left'   ? this.coord.x == 1 :
				null;
		if (isExtreme === null) {
			throw 'UnknownDir : ' + dir;
		} else {
			return isExtreme;
		}
	},
	getNeighbour : function (dir, checkWall) {
		if (this.isExtreme(dir)) {
			return null
		}
		if (checkWall && this.walls[dir]) {
			return null;
		}
		var x = this.coord.x, y = this.coord.y;
		dir == 'top'    ? y-- :
		dir == 'right'  ? x++ :
		dir == 'bottom' ? y++ :
		dir == 'left'   ? x-- :
			null;
		return this.maze.getCell(x, y);
	},
	setWall : function (dir, value) {
		this.walls[dir] = this.isExtreme(dir) ? true : value;
		return this;
	},
	getDirTo : function (cell) {
		var diff = 0, values;
		if (cell.coord.x == this.coord.x) {
			diff   = cell.coord.y - this.coord.y;
			values = ['top', 'bottom'];
		} else if (cell.coord.y == this.coord.y) {
			diff = cell.coord.x - this.coord.x;
			values = ['left', 'right'];
		}
		if (diff && Math.abs(diff) == 1) {
			return values[diff == 1 ? 0 : 1];
		}
		throw 'NotNeighbour'
	}
}

// ./lib/classes/Maze.js 
Maze = function () {
	this.container = [];
	this.size = {
		height : 0,
		width  : 0
	};
	this.diff = {
		startCoord  : {
			x : 0,
			y : 0
		},
		finishCoord : {
			x : 0,
			y : 0
		},
		start  : null,
		finish : null
	};
	this.cfg = {
		angle   : 100,
		width   : 720,
		height  : 360,
		texture : true,
		engine  : 'Canvas',
		light   : true,
		quality : 240,
		fps     : 50,
		moveFrames   : 5, // x%2 == 1 !!
		rotateFrames : 5
	};
};
Maze.prototype = {
	addCell : function () {
		var y = this.container   .length - 1;
		var x = this.container[y].length;
		if (x == this.size.width) {
			throw 'MazeLineTooLong.' + y;
		} else {
			var cell = new Cell(this, x + 1, y + 1);
			this.checkCellCoords(cell);
			this.container[y].push(cell);
		}
		return cell;
	},
	checkCellCoords : function (cell) {
		var sc = this.diff.startCoord;
		var fc = this.diff.finishCoord;
		if (cell.coord.x == sc.x && cell.coord.y == sc.y) {
			cell.diff.isStart = true;
			this.diff.start   = cell;
		}
		if (cell.coord.x == fc.x && cell.coord.y == fc.y) {
			cell.diff.isFinish = true;
			this.diff.finish   = cell;
		}
	},
	getCell : function (x, y) {
		var c = this.container;
		x--; y--;
		return c[y] && c[y][x] ? c[y][x] : null;
	},
	newLine : function () {
		var lines = this.container.length;
		var y = lines - 1;
		if (lines && this.container[y].length < this.size.width) {
			throw 'MazeLineTooShort.' + y;
		} else if (lines == this.size.height) {
			throw 'MazeTooTall';
		} else {
			this.container.push([]);
		}
	},
	complete : function () {
		if (this.container.length < this.size.height) {
			throw 'MazeTooShort';
		}
	},
	createUnit : function (x, y) {
		if (x === undefined) {
			x = this.diff.startCoord.x;
			y = this.diff.startCoord.y;
		}
		return new Unit (this, x, y);
	},
	setConfig : function (cfg) {
		for (var i in cfg) {
			if (cfg[i] !== null && this.cfg[i] !== undefined) {
				this.cfg[i] = cfg[i];
				if (is_numeric(cfg[i])) {
					this.cfg[i] *= 1;
				}
			}
		}
		return this;
	}
};

// ./lib/classes/StopWatch.js 
StopWatch = function (fn) {
	this.time  = 0;
	this.timer = null;
	this.fn    = fn;
}
StopWatch.prototype = {
	getTime : function () {
		return this.time;
	},
	getString : function () {
		var ms100 = Math.floor(this.time / 100)  % 10;
		var sec   = Math.floor(this.time / 1000) % 60;
		var min   = Math.floor(this.time / 1000 / 60);
		return min ? min + ':' + sec : sec + '.' + ms100 + ' s.';
	},
	start : function () {
		if (!this.timer) {
			var sw = this;
			this.timer = setInterval (function () {
				sw.time += 100;
				if (this.fn) {
					this.fn(sw);
				}
			}, 100);
		}
		return this;
	},
	pause : function(time){
		clearInterval(this.timer);
		this.timer = null;
		if (time) {
			var sw = this;
			setTimeout(function() {
				sw.start()
			}, time*1000);
		}
		return this;
	},
	stop : function () {
		this.pause().time = 0;
		this.fn(this);
		return this;
	}
};

// ./lib/classes/Unit.js 
Unit = function (maze, x, y) {
	this.maze = maze;
	this.dir  = 'top';
	this.coord = {
		x : x,
		y : y
	};
}
Unit.prototype = {
	move : function (dir) {
		var moveTo;
		if (dir instanceof Cell) {
			moveTo = dir;
		} else {
			var cell = this.getCell();
			if (typeof dir == 'string') {
				this.dir = dir;
			} else {
				dir = dir ? dirShift(this.dir, 2) : this.dir;
			}
			moveTo = cell.getNeighbour(dir, true);
		}
		if (moveTo) {
			this.coord = moveTo.coord;
		}
		return this;
	},
	toStart : function () {
		this.move(this.maze.diff.start);
		return this;
	},
	finish : function () {
		return this.getCell().diff.isFinish;
	},
	rotate : function (dir) {
		this.dir = dirShift(this.dir, dir == 'right' ? 1 : -1);
		return this;
	},
	getCell : function () {
		return this.maze.getCell(this.coord.x, this.coord.y);
	},
	getViewAngle : function () {
		return (90 * dirShift(this.dir)).degree();
	},
	noticeAboutFinish : function (sw) {
		alert('Ура, пройдено за ' + sw.pause().getString() + '!');
		if (!$_GET['code']) {
			moveTo({
				'type' : 'game',
				'lab'  : parseInt($_GET['lab'] || 0) + 1
			});
		}
	}
};


// ./lib/extend/MapEditor.js 
Maze.prototype.mapEditor = function (width, height) {
	if (width > 60) {
		throw 'LineTooLong';
	}
	if (height > 40) {
		throw 'MazeTooLong';
	}
	var dirs = ['top', 'right', 'bottom', 'left'];
	this.size.width  = width;
	this.size.height = height;
	for (var h = height; h--;) {
		this.newLine();
		for(var w = width; w--;) {
			var cell = this.addCell();
			for (var i = dirs.length; i--;) {
				cell.setWall(dirs[i], false);
			}
		}
	}
	this.complete();
	return this;
}

Cell.prototype.setActive = function () {
	if(this.maze.diff.active) {
		this.maze.diff.active.getHtmlElem().removeClass('active');
		this.maze.diff.active = null;
	}
	this.getHtmlElem().addClass('active');
	this.maze.diff.active = this;
}

Cell.prototype.changeWall = function (dir) {
	var classNames = {'top':'t','right':'r','bottom':'b','left':'l'};
	var newValue = !this.walls[dir];
	var opDir    = dirShift(dir, 2);
	var nb       = this.getNeighbour(dir);
	if (nb) {
		this.setWall(dir  , newValue);
		  nb.setWall(opDir, newValue);
		var fn = (newValue) ? 'addClass' : 'removeClass';
		this.getHtmlElem()[fn](classNames[dir]);
		  nb.getHtmlElem()[fn](classNames[opDir]);
		if ($.browser.opera) {
			// Opera sux? 
			$('table.map').appendTo('body');
		}
	}
}

Cell.prototype.setDiff = function (type) {
	var diff = (type == 'finish') ? 'finish' : 'start';
	var active = this.maze.diff.active;
	var curStart  = this.maze.diff[diff];
	if (curStart) {
		curStart.getHtmlElem().removeClass(diff);
		curStart.diff[diff == 'start' ? 'isStart' : 'isFinish'] = false;
	}
	this.maze.diff[diff]           = active;
	this.maze.diff[diff + 'Coord'] = active.coord;
	active.getHtmlElem().addClass(diff);
}

Maze.prototype.getCode = function () {
	if (!this.diff.startCoord.x) {
		throw 'EmptyStart';
	}
	if (!this.diff.finishCoord.x) {
		throw 'EmptyFinish';
	}
	if (coordsEquals (this.diff.startCoord, this.diff.finishCoord)) {
		throw 'StartFinishEquals';
	}
	var code = [  2,
		this.size.width, this.size.height,
		this.diff.startCoord.x , this.diff.startCoord.y,
		this.diff.finishCoord.x, this.diff.finishCoord.y
	].map(function (value) {
		var hex = value.decToHex();
		return (hex.length < 2) ?
			'0' + hex : hex;
	}).join('');
	var c = this.container;
	for (var i = 0; i < c.length; i++) {
		var line = '';
		for (var k = 0; k < c[i].length; k++) {
			var w = c[i][k].walls;
			line += (w.right ? '1' : '0') + (w.bottom ? '1' : '0');
		}
		code += line.binToHex();
	}
	return code;
};

// ./lib/extend/MapRender.js 
Maze.prototype.mapRender = function () {
	var c = this.container;
	var html = '<table class="map">';
	for (var y = 0; y < c.length; y++) {
		html += '<tr>';
		for (var x = 0; x < c[y].length; x++) {
			html += c[y][x].mapRender();
		}
		html += '</tr>';
	}
	html += '</table>';
	return html;
};

Cell.prototype.getHtmlElem = function () {
	if (!this.htmlElem) {
		this.htmlElem = $('#' + this.getId());
	}
	return this.htmlElem;
};

Cell.prototype.getId = function () {
	return 'c-' + this.coord.x + '-' + this.coord.y;
};

Cell.prototype.mapRender = function () {
	var className = [];
	if (this.walls.top)     className.push('t');
	if (this.walls.right)   className.push('r');
	if (this.walls.bottom)  className.push('b');
	if (this.walls.left)    className.push('l');
	if (this.diff.isStart)  className.push('start');
	if (this.diff.isFinish) className.push('finish');
	return '<td id="' + this.getId() + '" class="' + className.join(' ') + '"></td>';
};

// ./lib/extend/StringParser.js 
Maze.prototype.fromStringV1 = function (str) {
	var parseData = function (maze, str) {
		var data = str.split('.');
		maze.size = {
			width  : data[0],
			height : data[1]
		};
		maze.diff.startCoord = {
			x : data[2],
			y : data[3]
		};
		maze.diff.finishCoord = {
			x : data[4],
			y : data[5]
		};
	};
	var re = /^(\d{1,2}\.){5}\d{1,2}( [a-f0-9]+)+$/;
	if (!str.match(re)) {
		throw 'WrongCode';
	}

	var data = str.split(' ');
	parseData(this, data.shift());
	for (var i = 0; i < data.length; i++) {
		this.newLine();
		var binLine = data[i].hexToBin();
		var cellStr = binLine.match(/.{2}/g);
		if (this.size.width % 2) {
			cellStr.shift();
		}
		for (var k = 0; k < cellStr.length; k++) {
			var cell = this.addCell();
			cell.fromString(cellStr[k]);
		}
	}
	this.complete();
	return this;
};

Maze.prototype.fromString = function (str) {
	var version = str.substr(0, 2).hexToDec();
	if (!isNaN(version) && this.codeParser['v' + version]) {
		return this.codeParser['v' + version](this, str);
	} else {
		throw 'UnknownMapCodeVersion';
	}
};

Maze.prototype.codeParser =  {
	v2 : function (maze, str) {
		var parseData = function (data) {
			maze.size = {
				width  : data[0],
				height : data[1]
			};
			maze.diff.startCoord = {
				x : data[2],
				y : data[3]
			};
			maze.diff.finishCoord = {
				x : data[4],
				y : data[5]
			};
		};
		var re = /^([a-f0-9]{2})([a-f0-9]{12})([a-f0-9]+)$/i;
		var parts = str.match(re);
		if (!parts) {
			throw 'WrongMapCode';
		}

		parseData(parts[2].match(/([a-f0-9]{2})/ig).map(function (value) {
			return value.hexToDec();
		}));
		var symbC = (maze.size.width / 2).ceil();
		for (var i = 0; i < parts[3].length/symbC; i++) {
			maze.newLine();
			var binLine = parts[3].substr(i*symbC, symbC).hexToBin();
			var cellStr = binLine.match(/.{2}/g);
			if (maze.size.width % 2) {
				cellStr.shift();
			}
			for (var k = 0; k < cellStr.length; k++) {
				var cell = maze.addCell();
				cell.fromString(cellStr[k]);
			}
		}
		maze.complete();
		return maze;
	}
};



Cell.prototype.fromString = function (str) {
	var nTop  = this.getNeighbour('top');
	var nLeft = this.getNeighbour('left');
	this.setWall('top'   ,  nTop ?  nTop.walls.bottom : true);
	this.setWall('left'  , nLeft ? nLeft.walls.right  : true);
	this.setWall('right' , str.charAt(0) == '1');
	this.setWall('bottom', str.charAt(1) == '1');
};

// ./lib/extend/TombRaider.js 
var TombRaider = function (maze, x, y) {
	this.maze  = maze;
	this.dir   = 'top';
	this.cells = [];
	this.coord = {
		x : x,
		y : y
	};
}

TombRaider.prototype = new Unit;

TombRaider.prototype.next = function () {
	var cell = this.searchUnvisited();
	this.getCell().trStone = true;
	if (cell) {
		this.cells.push(this.getCell());
		this.move(cell);
		return true;
	} else if (this.cells.length) {
		cell = this.cells.pop();
		this.move(cell);
	} else {
		return false;
	}
}

TombRaider.prototype.searchUnvisited = function () {
	var cell = this.getCell();
	for (var i = 0; i < 4; i++) {
		var nb = cell.getNeighbour(dirShift(i), true);
		if (nb && !nb.trStone && !nb.diff.isStart) {
			return nb;
		}
	}
	return null;
}

TombRaider.prototype.highlight = function () {
	for (var i = 0; i < this.cells.length; i++ ) {
		this.cells[i].getHtmlElem().css({'background':'#eef'});
	}
}

// ./lib/extend/Utils.js 
var dirShift = function (dir, shift) {
	var func = arguments.callee;
	if (shift == undefined) {
		return func ('top', dir);
	}
	if (isNaN(shift)) {
		if (dir == shift) {
			return 0;
		}
		var s = 0;
		while (true) {
			if (func(dir, ++s) == shift) {
				return s;
			}
			if (s > 3) {
				return false;
			}
		}
	} else {
		shift = (shift < 0) ? 4 - (Math.abs(shift)%4) : shift%4;
		var dirs    = ['top',     'right',     'bottom',     'left'    ];
		var indexes = {'top' : 0, 'right' : 1, 'bottom' : 2, 'left' : 3};
		var index = (shift+indexes[dir]) % 4;
		return dirs[index];
	}
};

var getStripWidth = function (maze, rays) {
	return (maze.cfg.width / rays.length).round(1);
};

var coordsEquals = function (a, b) {
	return (a.x == b.x && a.y == b.y);
};


var moveTo = function (key, value) {
	var d = function (str) {
		return decodeURIComponent(str);
	};
	var uri = window.location.href.split('?')[0];
	if (typeof key == 'string') {
		var k = key;
		key = {};
		key[k] = value;
	}
	var q = [];
	for (var i in key) {
		q.push(d(i) + '=' + d(key[i]));
	}
	window.location = uri + '?' + q.join('&');
};

var $_GET = (function() {
	var uri = decodeURIComponent(location.search), result = {};

	// Если не только знак вопроса
	if (uri.length > 1) {
		// Обрезаем знак вопроса и парсим
		uri = uri.substring(1).split("&");
		for (var i in uri) {
			var temp = uri[i].split("=");
			var qnm  = temp[0];
			// Если будет запрос вида ?query=x=y& , то "query" должен вернуть "x=y";
			if (temp[1]) {
				var value = temp.splice(1, temp.length - 1).join("=");
				if (!result[qnm] || result[qnm] === true) {
					// Просто присваиваем
					result[qnm] = value;
				} else if ($.isArray(result[qnm])) {
					// Если уже есть массив с таким именем
					result[qnm].push(value);
				} else {
					// Если уже есть такой елемент
					result[qnm] = [result[qnm], value]
				}
			} else if (qnm && !result[qnm]) {
				// Если будет запрос вида ?query& , то "query" должен вернуть true;
				// if(qnm) для того, чтобы && не считалось, как $_GET[""] = true;
				// Если данная переменная уже была ранее, то просто забить
				result[qnm] = true;
			}
		}
		return result;
	} else return {};
})();

String.prototype.binToHex = function () {
	if (this.match(/[^01]/)) {
		throw 'NotBin';
	}

	var str = this;
	while (str.length % 4) {
		str = '0' + str;
	}

	return str.match(/.{4}/g).map(function (i) {
		return {
			'0000' : '0', '0001' : '1', '0010' : '2', '0011' : '3',
			'0100' : '4', '0101' : '5', '0110' : '6', '0111' : '7',
			'1000' : '8', '1001' : '9', '1010' : 'a', '1011' : 'b',
			'1100' : 'c', '1101' : 'd', '1110' : 'e', '1111' : 'f'
		}[i];
	}).join('');
};

String.prototype.hexToBin = function () {
	var str = this.toLowerCase();
	if (str.match(/[^0-9a-f]/)) {
		throw 'NotHex';
	}

	return str.split('').map(function (i) {
		return {
			'0' : '0000', '1' : '0001', '2' : '0010', '3' : '0011',
			'4' : '0100', '5' : '0101', '6' : '0110', '7' : '0111',
			'8' : '1000', '9' : '1001', 'a' : '1010', 'b' : '1011',
			'c' : '1100', 'd' : '1101', 'e' : '1110', 'f' : '1111'
		}[i];
	}).join('');
};

String.prototype.hexToDec = function () {
	return parseInt(this, 16);
};

String.prototype.decToHex = function () {
	return Number(this).decToHex();
};

String.prototype.replaceAll = function (find, replace) {
	return this.split(find).join(replace);
};

Number.prototype.decToHex = function () {
	return this.round(0).toString(16);
};

Number.prototype.toColor = function (color) {
	var hex = this.decToHex();
	if (this <= 255) {
		while (hex.length < 2) {
			hex = '0' + hex;
		}
		return color == 'red'   ? '#' + hex + '0000'      :
		       color == 'green' ? '#' + '00' + hex + '00' :
		       color == 'blue'  ? '#' + '0000' + hex      :
			                      '#' + hex + hex + hex;
	} else {
		while (hex.length < 6) {
			hex = '0' + hex;
		}
		return '#' + hex;
	}
};

var is_numeric = function (mixed_var) {
    return (['number', 'string'].has(typeof(mixed_var)) && mixed_var !== '' && !isNaN(mixed_var));
};

Array.prototype.map = function (fn) {
	for (var i = 0; i < this.length; i++) {
		this[i] = fn(this[i]);
	}
	return this;
};

Array.prototype.has = function () {
	var a = arguments;
	for (var i = 0; i < a.length; i++) {
		if (this.search(a[i]) !== false) {
			return true;
		}
	}
	return false;
};

Array.prototype.search = function (elem) {
	for (var i = 0; i < this.length; i++) {
		if (elem === this[i]) {
			return i;
		}
	}
	return false;
};

Math.degree = function (degree) {
	var d = Math.PI / 180;
	return (isNaN(degree)) ? d : d * degree;
};

Math.degreeSingle = function (degree) {
	degree %= this.degree(360);
	return (degree < 0) ? this.degree(360) + degree : degree;
};

Math.getDegree = function (radian) {
	return radian / Math.PI * 180;
};

Number.prototype.between = function (n1, n2, equals) {
	return (equals == 'L' && this == n1) ||
	       (equals == 'R' && this == n2) ||
	       (this > n1 && this < n2) ||
	       (equals === true && (this == n1 || this == n2));
};

Number.prototype.round = function (digits) {
	return parseFloat(this.toFixed(digits * 1));
};

// "this.toFixed is not a function" without this string
Math.abs((0).round());

(function () {
	var funcs = ['tan', 'sin', 'cos', 'abs', 'degree', 'degreeSingle', 'getDegree', 'sqrt', 'ceil', 'floor', 'log'];

	for (var i = funcs.length; i--;) {
		var f = funcs[i];
		Number.prototype[f] = (function (f) {
			return function () {
				return Math[f](this);
			}
		})(f);
	}
})();

// ./lib/output/Maze.js 
Maze.prototype.mapOutput = function () {
	$('body').append(this.mapRender());
	return this;
}

Unit.prototype.mapRender = function () {
	return '<div class="unit unit-'+ this.dir +'"></div>';
}

Unit.prototype.mapOutput = function () {
	if (this.htmlElem) {
		this.htmlElem.remove();
	}
	this.htmlElem = $(this.mapRender())
		.appendTo(this.getCell().getHtmlElem());
	return this;
}

// ./lib/canvas/Canvas.js 
Canvas = function (maze, obj) {
	this.maze = maze;
	this.obj  = obj;
	obj.width  = maze.cfg.width;
	obj.height = maze.cfg.height;
	this.ctx  = obj.getContext('2d');
};

Canvas.prototype = {
	getContext : function () {
		return this.ctx;
	}
};

// ./lib/canvas/ImagePreloader.js 
function ImagePreloader (images, onloadFunc) {
	this.ready = false;

	var errors = 0;
	var aborts = 0;
	var loaded = 0;

	var processedImages = 0;
	var numberImages    = 0;

	var imagesArray = {};

	for ( var i in images ) {
		numberImages++;
		var oImage = new Image;
		oImage.onload  = function() {
			loaded++;
			onProcessed();
		};
		oImage.onerror = function() {
			errors++;
			onProcessed();
		};
		oImage.onabort = function() {
			aborts++;
			onProcessed();
		};
		oImage.src = images[i];
		imagesArray[i] = oImage;
	}

	var onProcessed = function() {
    	if ( ++processedImages == numberImages ) {
			this.ready = true;
			onloadFunc(imagesArray);
			if (console) {
				console.info(
					"Image preloading has completed;\n" +
					"Images preloaded: " + loaded + "; " +
					"Errors: " + errors + "; Aborts: " + aborts
				);
			}
		}
	};
}

// ./lib/canvas/view.js 
Unit.prototype.rcCanvasRaysTexture = function (rays) {
	var unit = this;
	unit.rcCanvasRaysInit(function (images) {
		var ctx    = unit.canvas.getContext();
		var cfg    = unit.maze.cfg;
		var width  = cfg.width;
		var height = cfg.height;
		var stripWidth = getStripWidth(unit.maze, rays);

		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		for (var i = 0; i < rays.length; i++) {
			var last = rays[i].last;
			var x = rays[i].dist;
			var L = rays[i].length;
			var texture = last.diff.isStart  ? 'startWall' :
						  last.diff.isFinish ? 'finishWall' :
										  'mainWall';
			if (last.coord.x == 13 && last.coord.y == 13 && rays[i].wall == 'left') {
				texture = 'hellWall';
			}
			if (last.coord.x == 2 && last.coord.y == 2 && !$_GET['Lab'] && rays[i].wall == 'bottom') {
				texture = 'q1Wall';
			}
			var im = images[texture];
			var ihw  = (height / L);
			var top  = (height - ihw) / 2;
			var texX = (im.width - x*im.width).round(3);
			var texW = (stripWidth*im.width/ihw).round(3);
			if (texX+texW > im.width) {
				texX = (texX - im.width).round().abs();
			}

			ctx.drawImage(im, texX, 0, texW, im.height, (i*stripWidth).floor(), top, stripWidth, ihw);

			if (cfg.light) {
				var opacity = L < 0.5 ? 200 : 200/(L+0.5);
				opacity += dirShift(unit.dir, rays[i].wall) % 2 ? 0 : 30;
				opacity = 1 - (opacity/200);
				opacity*= opacity;
				ctx.fillStyle = "rgba(0,0,0," + opacity.toFixed(2) + ")";         // " + opacity.toFixed(2) + "
				ctx.fillRect((i*stripWidth).floor(), top, stripWidth, ihw);
			}
		}
	});
	return this;
};

Unit.prototype.rcCanvasRaysInit = function (fn) {
	var unit = this;
	if (unit.rcCanvasRaysImages) {
		fn(unit.rcCanvasRaysImages);
	} else {
		unit.rcCanvasLines = {};
		ImagePreloader({
			'hellWall'   : 'img/wall-hell.png',
			'q1Wall'     : 'img/wall-q1.png',
			'mainWall'   : 'img/wall.png',
			'startWall'  : 'img/wall-green.png',
			'finishWall' : 'img/wall-red.png'
		}, function (images) {
			unit.rcCanvasRaysImages = images;
			fn(images);
		});
	}
};

Unit.prototype.rcCanvasRaysPlain = function (rays) {
	var unit = this;
	unit.rcCanvasRaysInit(function (images) {
		var ctx    = unit.canvas.getContext();
		var cfg    = unit.maze.cfg;
		var height = cfg.height;
		var stripWidth = getStripWidth(unit.maze, rays);
		for (var i = 0; i < rays.length; i++) {
			var L = rays[i].length;
			var last = rays[i].last;
			var color = 200;
			if (cfg.light) {
				color = L < 0.5 ? color : color/(L+0.5);
				color += dirShift(unit.dir, rays[i].wall) % 2 ? 0 : 30;
			}
			color  = last.diff.isStart  ? (color/2).toColor('green') :
					 last.diff.isFinish ? color.toColor('red') :
										  color.toColor();
			if (!unit.rcCanvasLines[i]) {
				unit.rcCanvasLines = {
					L : L,
					color : color
				};
			} else {
				var rcl = unit.rcCanvasLines;
				if (rcl.L == L && rcl.color == color) {
					continue;
				}
			}
			var stripHeight = height / L;
			var stripTop    = (height - stripHeight) / 2;
			ctx.fillStyle = "black";
			ctx.fillRect(i*stripWidth, 0, stripWidth, height);
			ctx.fillStyle = color;
			ctx.fillRect(i*stripWidth, stripTop, stripWidth, stripHeight);
		}
	});
	return this;
};

// ./lib/rayCaster/cell.js 
/* data {
 *		wall
 *		angle
 *		size
 * }
 */

Cell.prototype.hasCorner = function (dir1, dir2) {
	return (
		this.walls[dir1] ||
		this.walls[dir2] ||
		this.getNeighbour(dir1).walls[dir2] ||
		this.getNeighbour(dir2).walls[dir1]
	);
}

Cell.prototype.getCornerNeighbour = function (dir1, dir2) {
	return this.hasCorner(dir1, dir2) ? null : 
		this.getNeighbour(dir1).getNeighbour(dir2);
}

Cell.prototype.rcFullRay = function (data) {
	// Этот код может показаться обфусцированным, я понимаю.
	// Но на самом деле достаточно посмотреть на рисунок
	var w, L, x, nb = null; // aim

	var sh = (data.wall + 2) % 4;
	var a  = (data.angle - (90 * sh).degree()).round(8).degreeSingle();
	var b  = (360).degree() - a;
	var k  = data.size;
	var j  = 1 - k;
	var n = a.tan().abs();
	var corner = false;

	
	if (k < 1) { // + Counting w, L, x
		if (0 == a.round(8)) { // p1
			w = 0;
			L = 1;
			x = k;
		} else if (a < (90).degree()) { // p2, p3, p4
			if (n > k) { // p4
				w = 1;
				L = k / a.sin();
				x = k / a.tan();
			} else { // p2, p3
				corner = (n == k);
				w = 0;
				L = (1 + n*n).sqrt();
				x = corner ? 1 : k - n;
			}
		} else if (a > (270).degree()) { // p5, p6, p7
			if (n > j) { // p5
				w = 3;
				L =       j / b.sin();
				x = 1 - ( j / b.tan() );
			} else {
				corner = (n == k);
				w = corner ? 3 : 0;
				L = (1 + n*n).sqrt();
				x = corner ? 1 : k + n;
			}
		} else {
			throw 'WrongAngleException : ' + a .getDegree();
		}
	} else if (k == 1) { // p8, p9, p10
		if (a == (45).degree()) { // p9
			corner = true;
			w = 0;
			L = (2).sqrt();
			x = 1;
		} else if (a > (45).degree()) { // p10
			w = 1;
			L = 1 / a.sin();
			x = 1 / a.tan();
		} else if (a < (45).degree()) { // p8
			w = 0;
			L = 1 / a.cos();
			x = 1 - a.tan();
		} else {
			throw 'WrongCornerAngleException : ' + a .getDegree();
		}
	} else {
		throw 'Wrong_K_LengthException : ' + k;
	} // - Counting w, L, x

	nb = corner ?
		this.getCornerNeighbour(
			dirShift (data.wall + 2 + w),
			dirShift (data.wall + 3 + w)
		) : this.getNeighbour( dirShift (data.wall + 2 + w), true);

	var result = {}
	if (nb) {
		result = nb.rcFullRay({
			wall  : data.wall + w,
			angle : data.angle,
			size  : x
		});
		L += result.length;
	}
	return $.extend({
		wall   : dirShift (data.wall + 2 + w),
		corner : corner,
		dist   : x,
		last   : this
	}, result, {
		length : L
	});
}

Cell.prototype.rcRay = function (data) {
	// TODO : from walls
	var x, L, cell;
	var j, k, index, w, a, result;
	var angle = data.angle.degreeSingle().getDegree().round(8);
	var tmp =
		(angle.between(  0,  90, 'L')) ? [  data.x,   data.y, 0] :
		(angle.between( 90, 180, 'L')) ? [  data.y, 1-data.x, 1] :
		(angle.between(180, 270, 'L')) ? [1-data.x, 1-data.y, 2] :
		(angle.between(270, 360, 'L')) ? [1-data.y,   data.x, 3] : null;

	if (tmp) {
		j     = tmp[0];
		k     = tmp[1];
		index = tmp[2];
	} else {
		throw 'WrongRayAngleException : ' + angle;
	}
	
	a = (angle % 90).degree();
	
	x = 1 - j - k * a.tan();

	if (a == 0) {
		w = 0;
		L = k;
		x = 1 - j;
	} else {
		if (x < 0) {
			w = 1;
			L = (1-j) / a.sin();
			x = (1-j) / a.tan() + (1 - k);
		} else {
			w = 0;
			L = k / a.cos();
		}
	}

	cell = this.getNeighbour(dirShift(w + index), true);
	if (cell) {
		result = cell.rcFullRay({
			wall  : w + index + 2,
			angle : data.angle,
			size  : x
		});
		L += result.length;
	}

	if (!isNaN(data.removeFish)) {
		L *= (data.angle - data.removeFish).abs().cos();
	}

	return $.extend({
		wall   : dirShift (w + index),
		corner : false,
		dist   : x,
		last   : this
	}, result, {
		length : L
	});
};

Cell.prototype.rcGetRays = function (data, light) {
	var cfg = this.maze.cfg, rays = [];
	if (light) {
		cfg = $.extend(cfg);
		// cfg.quality/=2;
	}
	for (var i = -cfg.angle/2; i < cfg.angle/2; i=(i+cfg.angle/cfg.quality).round(8)) {
		rays.push(this.rcRay({
			removeFish : data.angle,
			angle : i.degree() + data.angle,
			x     : data.x == undefined ? 0.5 : data.x,
			y     : data.y == undefined ? 0.5 : data.y
		}));
	}
	return rays;
}

// ./lib/rayCaster/unit.js 
Unit.prototype.rcRenderRotate = function (dir) {
	var unit  = this;
	var angle = unit.getViewAngle();
	var cfg   = unit.maze.cfg;
	var rotateFrames = cfg.rotateFrames + 1;
	var step  = (dir == 'right' ? 1 : -1) * (90).degree() / rotateFrames;
	var frame = 1;
	
	unit.rcFrameRender(function () {
		unit.rcRenderRays(unit.getCell().rcGetRays({
			angle : angle+(step*frame)
		}, frame != rotateFrames));

		if (++frame > rotateFrames) {
			unit.rcFrameRender()
		}
	});
	return this;
}

Unit.prototype.rcRenderView = function () {
	this.rcRenderRays(
		this.getCell().rcGetRays({
			angle : this.getViewAngle()
		})
	);
	return this;
}

Unit.prototype.rcRenderMove = function (back) {
	var unit   = this;
	var cfg    = unit.maze.cfg;
	// Unit looks to the dir...
	var shift  = dirShift(unit.dir);
	var angle  = this.getViewAngle();
	// Unit moves to the dir...
	var dir    = dirShift(shift + (back ? 2 : 0));
	// Unit in the
	var cell   = unit.getCell();
	// Unit moves to the
	var nbCell = cell.getNeighbour(dir, true);

	var moveFrames = cfg.moveFrames + 1;
	// Unit moves for one step on 
	var step   = (back ? -1 : 1) / moveFrames;

	// Start logic
	var frame  = 1;
	if (nbCell) {
		var distInCell = function (dist) {
			if (dist > 1) {
				return dist % 1;
			} else if (dist < 0) {
				return dist % 1 + 1;
			} else {
				return dist;
			}
		};

		unit.rcFrameRender(function () {
			var c = (frame * step);
			var x = 0.5, y = 0.5;
			if (shift % 2) { // 1, 3 Changing X while moving left or right
				// Add change if right or subtract if left
				x = distInCell(x + (shift == 1 ? c : -c));
			} else {         // 2, 4 Changing Y while moving top or bottom
				// Add change if bottom or subtract if top
				y = distInCell(y + (shift == 2 ? c : -c));
			}
			
			unit.rcRenderRays(
				cell.rcGetRays({
					angle : angle,
					x     : x,
					y     : y
				}, frame != moveFrames)
			);
			if (cell != nbCell && frame >= moveFrames / 2) {
				cell = nbCell;
			}
			if (++frame > moveFrames) {
				unit.rcFrameRender();
			}
		});
	}
	return this;
}

Unit.prototype.rcFrameRender = function (fn) {
	if (this.rcInterval) {
		clearInterval(this.rcInterval);
	}
	if (fn) {
		this.rcInterval = setInterval(fn, 1000/this.maze.cfg.fps);
	}
	return this;
}

// ./lib/rayCaster/view.js 
Unit.prototype.rcRenderRays = function (rays) {
	var cfg = this.maze.cfg;
	var engine = cfg.engine == 'Html' ? 'Html' : 'Canvas';
	var type   = cfg.texture ? 'Texture' : 'Plain';
	var method = 'rc' + engine + 'Rays' + type;
	this[method](rays);
	return this;
};

Unit.prototype.rcHtmlRaysTexture = function (rays) {
	var cfg    = this.maze.cfg;
	var width  = cfg.width;
	var height = cfg.height;
	var strips = this.rcGetImageStrips(rays);
	var stripWidth = getStripWidth(this.maze, rays);
	var ifChanged = function (elem, name, value) {
		if (elem.style[name] != value) {
			elem.style[name] = value;
		}
	};
	for (var i = 0; i < rays.length; i++) {
		if (!strips[i]) {
			break;
		}
		var last = rays[i].last;
		var x = rays[i].dist;
		var L = rays[i].length;
		var stripHeight = height / L;
		var stripTop    = (height - stripHeight) / 2;
		var sw = stripHeight * stripWidth;
		var texX = (x*sw).round()-3;
		if (texX.abs() > stripHeight * stripWidth) {
			texX += stripHeight * stripWidth;
		}
		if (texX > 0) {
			texX -= (stripHeight-1) * stripWidth;
		}

		var texture = last.diff.isStart  ? 'startWall' :
		              last.diff.isFinish ? 'finishWall' :
		                              'mainWall';

		if (last.coord.x == 13 && last.coord.y == 13 && rays[i].wall == 'left') {
			texture = 'hellWall';
		}
		if (last.coord.x == 2 && last.coord.y == 2 && !$_GET['Lab'] && rays[i].wall == 'bottom') {
			texture = 'q1Wall';
		}

		var img = strips[i].img;

		ifChanged(img,    'top', stripTop.round() + 'px');
		ifChanged(img, 'height', stripHeight.round() + 'px');
		ifChanged(img,  'width', (stripHeight * stripWidth).round() + 'px');
		ifChanged(img,   'left', texX.round() + 'px');

		var imageSrc = this.rcGetTextureSrc(texture);
		if (img.src != imageSrc) {
			img.src  = imageSrc;
		}
		
		if (!$.browser.msie && cfg.light) {
			var opacity = L < 0.5 ? 200 : 200/(L+0.5);
			opacity += dirShift(this.dir, rays[i].wall) % 2 ? 0 : 30;
			opacity /= 200;
			ifChanged(img, 'opacity', opacity.round(2));
		}
	}
	return this;
}

Unit.prototype.rcGetTextureSrc = function (name) {
	if (!this.rcTexture) {
		this.rcTexture = {};
		var data = {
			'hellWall'   : 'img/wall-hell.png',
			'q1Wall'     : 'img/wall-q1.png',
			'mainWall'   : 'img/wall.png',
			'startWall'  : 'img/wall-green.png',
			'finishWall' : 'img/wall-red.png'
		};
		for (var i in data) {
			this.rcTexture[i] = new Image;
			this.rcTexture[i].src = data[i];
		}
	}
	return this.rcTexture[name].src;
}

Unit.prototype.rcGetScreen = function () {
	var cfg = this.maze.cfg;
	if (!this.rcScreen) {
		this.rcScreen = $('<div class="rayCast">')
			.prependTo('body')
			.css({
				'background' : 'black',
				'height'   : cfg.height,
				'width'    : cfg.width,
				'margin'   : 2,
				'overflow' : 'hidden',
				'position' : 'relative'
			});
	}
	return this.rcScreen;
}

Unit.prototype.rcGetImageStrips = function (rays) {
	if (!this.rcImageStrips) {
		this.rcImageStrips = [];

		var cfg    = this.maze.cfg;
		var width  = cfg.width;
		var stripWidth = getStripWidth(this.maze, rays);

		var screen = this.rcGetScreen();
		for (var i=0; i < width; i+=stripWidth) {
			var strip = document.createElement("div");
			strip.style.position = "absolute";
			strip.style.left     = i.round() + "px";
			strip.style.width    = stripWidth.ceil()+"px";
			strip.style.height   = cfg.height.round()+"px";
			strip.style.overflow = "hidden";
			//strip.style.background = "black";

			var img = new Image();
			img.src = this.rcGetTextureSrc('mainWall');
			img.style.position = "absolute";
			img.style.left     = "0px";

			strip.appendChild(img);
			strip.img = img;
			
			this.rcImageStrips.push(strip);
			screen.append(strip);
		}
	}
	return this.rcImageStrips;
}

Unit.prototype.rcHtmlRaysPlain = function (rays) {
	var cfg    = this.maze.cfg;
	var width  = cfg.width;
	var height = cfg.height;

	if (!$('body > .rayCast')[0]) {
		$('<div class="rayCast">').prependTo('body').css({
			'background-color' : 'black',
			'height'   : height,
			'width'    : width,
			'margin'   : 2,
			'overflow' : 'hidden'
		});
	}
	var div = $('<div>');
	var rayWidth = Math.floor(width / rays.length * 75) / 75;
	for (var i = 0; i < rays.length; i++) {
		var last = rays[i].last;
		var L    = rays[i].length;
		var rayHeight = height / L;
		var rayMarg   = (height - rayHeight) / 2;
		var color = 200;
		if (cfg.light) {
			color = L < 0.5 ? color : color/(L+0.5);
			color += dirShift(this.dir, rays[i].wall) % 2 ? 0 : 30;
		}
		color  = last.diff.isStart  ? (color/2).toColor('green') :
		         last.diff.isFinish ? color.toColor('red') :
		                              color.toColor();
		div.append($('<div>').css({
			'background' : color,
			'float'  : 'left',
			'margin' : rayMarg + "px 0",
			'height' : rayHeight,
			'width'  : rayWidth
		}));
	}
	$('body .rayCast').empty().append(div);
	return this;
}

// ./lib/start/form.js 
var Start = Start || {};

Start.showForm = function () {
	var save = function () {
		$.cookie('resolution', $form.find('[name=resolution]').val());
		$.cookie('quality',    $form.find('[name=quality]'   ).val());
		$.cookie('engine',     $form.find('[name=engine]'    ).val());
		$.cookie('texture',    $form.find('[name=texture]'   ).attr('checked') ? 1 : 0);
		$.cookie('light',      $form.find('[name=light]'     ).attr('checked') ? 1 : 0);
	};
	var $form = $('div.form');
	$form.find('div').hide();
	$form.find('[name=run-game]').click(function () {
		save();
		moveTo({
			type : 'game'
		});
	});
	$form.find('[name=run-editor]').click(function () {
		save();
		moveTo({
			type : 'editor',
			w : $form.find('[name=w]').val(),
			h : $form.find('[name=h]').val()
		});
	});
	save();
	var showType = function () {
		if ($(this).val() == 'editor') {
			$form.children(".editor-params").slideDown();
			$form.children(".game-params").slideUp();
			$form.find(".game-params .params").slideUp();
		} else {
			$form.children(".editor-params").slideUp();
			$form.children(".game-params").slideDown();
		}
	};
	$form.find("[name=type]").change(showType).change();
}

// ./lib/start/mapEditor.js 
var Start = Start || {};

Start.mapEditor = function (code) {
	var maze = new Maze;
	(typeof code == 'string') ? maze.fromString(code) :
		maze.mapEditor($_GET['w'] || 8, $_GET['h'] || 6);
	maze.mapOutput().getCell(1, 1).setActive();
	$('div.main').html('Стрелочками - двигаемся, awsd - ставим стены. <br />z - старт(зеленый). x - финиш(красный). enter - пройти');
	var arrows = {37:'left',38:'top',39:'right',40:'bottom'};
	$
		.keyboard('(arrows)', function (e) {
			var dir = arrows[e[0].keyCode];
			var nb  = maze.diff.active.getNeighbour(dir);
			if (nb) {
				nb.setActive();
			}
		})
		.keyboard('[a|w|d|s], shift+(arrows)', function (e, bind) {
			var dir = (bind.keys.group == 1) ? arrows[e[1].keyCode] :
				{65:'left',87:'top',68:'right',83:'bottom'}[e[0].keyCode];
			maze.diff.active.changeWall(dir);
		})
		.keyboard('z', function () {
			maze.diff.active.setDiff('start');
		})
		.keyboard('x', function () {
			maze.diff.active.setDiff('finish');
		})
		.keyboard('enter', function () {
			try {
				moveTo({
					'type' : 'game',
					'code' : maze.getCode()
				});
			} catch (e) {
				alert({
					'EmptyStart'  : 'Вы не указали начало',
					'EmptyFinish' : 'Вы не указали конец',
					'StartFinishEquals' : 'Начало и конец совпадают'
				}[e] || e)
			}
		});
}


// ./lib/start/standartMaze.js 
var Start = Start || {};

Start.standartMaze = function (str) {
	var sw  = new StopWatch;
	var maze = (new Maze).fromString(str);
	if ($.cookie('resolution')) {
		var res = $.cookie('resolution').split('x');
		maze.setConfig({
			width   : res[0],
			height  : res[1],
			texture : $.cookie('texture'),
			engine  : $.cookie('engine'),
			light   : $.cookie('light'),
			quality : res[0] / $.cookie('quality')
		});
	}
	var unit = (new Unit (maze))
		.toStart();
	if (maze.cfg.engine == 'Canvas') {
		unit.canvas =  new Canvas(maze, document.getElementById('canvas'));
	}
	unit.rcRenderView();
		
	$.keyboard('[aleft|aright|a|d]', function (e) {
			sw.start();
			var dir = e[0].is('aleft', 'a') ? 'left' : 'right';
			unit
				.rcRenderRotate(dir)
				.rotate(dir);
		})
	 .keyboard('[aup|adown|w|s]', function (e) {
		sw.start();
		var back = e[0].is('adown', 's');
		unit
			.rcRenderMove(back)
			.move(back);
		if (unit.finish()) {
			unit.noticeAboutFinish(sw);
		}
	})
	.keyboard('c', function () {
		var unit = (new TombRaider (maze)).toStart();

		while (unit.next()) {
			if (unit.finish()) {
				alert('Я смог пройти!');
				return;
			}
		}
		
		alert('Я не смог пройти!');
	});
};

// ./lib/start/tombRaiderMaze.js 
var Start = Start || {};

Start.tombRaiderMaze = function (str) {
	var maze = (new Maze)
		.fromString(str)
		.mapOutput();
	var unit = (new TombRaider (maze))
		.toStart();

	while (unit.next()) {
		if (unit.finish()) {
			unit.highlight();
			break;
		}
	}
};

// ./lib/init.js 
$.keyboard({
	preventDefault : true
});

var Croft = function () {
	return $_GET['tr'] && 'f358130105f10a910fdbd6781aea5d62' ==
		$.md5(prompt ('Лара отказывается идти туда без оружия.')) &&
		confirm("Вы действительно хотите, чтобы Лара сделала это за вас?");
};

$(function () {
	if ($_GET['type']) {
		var method = Croft() ? 'tombRaiderMaze' : 'standartMaze';
		if ($_GET['type'] == 'editor') {
			Start.mapEditor($_GET['code']);
		} else if ($_GET['code']) {
			Start[method]($_GET['code']);
			$('body').append(
				$('<a>trimIt!</a>').attr('href', 'http://tr.im/marklet?url=' + encodeURIComponent(location.href))	
			);
		} else {
			Start[method](
				mazes[$_GET['lab'] * 1] || mazes[0]
			);
		}
		$('body').append(
			$('<br /><a>На главную</a>').attr('href', './')	
		);
	} else {
		Start.showForm();
	}
});

// ./lib/mazes.js 
window.mazes = [
"0206050105060115c958068a8c880",
"02071504040412051422882aa82ae82d78155c055815c505a022682978254c2598215c28542e152a542a982a282ae80820",
"02120c0202110b055161614b11ca1e858c5fa8794a856ae51c9d5e94c58505a6aa1c2a2966718aab5aa1e89f85ea878857177c5c856555d5c808000000",
"0218100403160c155455155554815557855558a95581e56568a507a5a15578869635e555689a5e11551578aa17a955a15cab65e585e888a5a156956aa596a11a55eb5487aa6955a558a1eaa562d5a8a97a95a9c5e8a55e95a555e8955656d5557c000200000000",
"02241806051c12855585555558555560a161d45c585d5855a85c755d5629587a16ac17188557a56a1e6a9583aa9545d5ae4daa14a1e785855a8986aa58a8a1e1d56aa7aaa1587aa57855aa95e9e85c97a55c5dea55787a1558585e1579472a1e841e294a8875a1e787a08aa6a3a9567896d7a8aaaa7aa7195e5e15b8aa9d4e61c5478a855c7a5561e5a1d5e9a5551c55a855f855a795548956aa157a62955558a53a9e5569aa57685ca1ce15556a9e95aa1875331551ea87159aa8164c55685e95c56aa5873155a9565571e785a59561e559555c95d48000a0002000020000"
];

// 0.0009148120880127