var ss_form_element="suggestion_form";
var ss_form_element2="suggestion_form2";
var ss_form_elementH="suggestion_formH";
var ss_popup_element="search_suggest";
var ss_popup_element2="search_suggest2";
var ss_popup_elementH="search_suggestH";
var ss_seq=["g"];
var ss_g_one_name_to_display="Suggestion";
if(document.domain.indexOf("jp")>=0||window.location.href.indexOf("ja_jp")>0){ss_g_one_name_to_display="関連キーワード"
}else{if(document.domain.indexOf("cn")>=0||window.location.href.indexOf("zh_cn")>0){ss_g_one_name_to_display="建议"
}}var ss_g_more_names_to_display="Suggestions";
if(document.domain.indexOf("jp")>=0||window.location.href.indexOf("ja_jp")>0){ss_g_more_names_to_display="関連キーワード"
}else{if(document.domain.indexOf("cn")>=0||window.location.href.indexOf("zh_cn")>0){ss_g_more_names_to_display="建议"
}}var ss_g_max_to_display=10;
var ss_max_to_display=12;
var ss_wait_millisec=300;
var ss_delay_millisec=30;
var ss_gsa_host=null;
var SS_OUTPUT_FORMAT_LEGACY="legacy";
var SS_OUTPUT_FORMAT_OPEN_SEARCH="os";
var SS_OUTPUT_FORMAT_RICH="rich";
var ss_protocol=SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query=true;
var ss_non_query_empty_title="No Title";
var ss_allow_debug=false;
var ss_mode="";
var searchText="Search";
if(document.domain.indexOf("jp")>=0||window.location.href.indexOf("ja_jp")>0||window.location.href.indexOf("japan")>0){searchText="検索"
}else{if(document.domain.indexOf("cn")>=0||window.location.href.indexOf("zh_cn")>0||window.location.href.indexOf("china")>0){searchText="搜索"
}}function resetSearchField(a){if(a.value==searchText){a.value="";
a.style.color="#000"
}else{if(a.value==""){a.value=searchText;
a.style.color="#333"
}}}function isSearchFormCompleted(a){if((a.q.value=="Search"||a.q.value=="検索"||a.q.value=="搜索"||a.q.value=="")){a.q.value="";
a.pn.value="0"
}return true
}
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+yt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return kt(e.replace(z,"$1"),t,n,i)
}function st(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function lt(e){return e[b]=!0,e
}function ut(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ct(e,t){var n=e.split("|"),r=e.length;
while(r--){o.attrHandle[n[r]]=t
}}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ft(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function dt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ut(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return pt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:lt(function(e){return function(t){return at(e,t).length>0
}
}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:ht(function(){return[0]
}),last:ht(function(e,t){return[t-1]
}),eq:ht(function(e,t,n){return[0>n?n+t:n]
}),even:ht(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:ht(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}},o.pseudos.nth=o.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=ft(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=dt(n)
}function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function yt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function bt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t
},s,!0),p=vt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[vt(bt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
}f.push(n)
}}return bt(f)
}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=xt(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?lt(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=mt(e)),n=t.length;
while(n--){o=Tt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Ct(i,r))
}return o
};
function Nt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))
}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
}),ut(function(e){return null==e.getAttribute("disabled")
})||ct(B,function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return !l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];
while(t=a[r++]){o.hasClass(t)?o.removeClass(t):o.addClass(t)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
(function(a){a.flexslider=function(E,j){var b=a(E);
b.vars=a.extend({},a.flexslider.defaults,j);
var w=b.vars.namespace,F=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart" in window||F||window.DocumentTouch&&document instanceof DocumentTouch)&&b.vars.touch,D="click touchend MSPointerUp",B="",y,q=b.vars.direction==="vertical",A=b.vars.reverse,x=b.vars.itemWidth>0,e=b.vars.animation==="fade",z=b.vars.asNavFor!=="",C={},k=!0;
a.data(E,"flexslider",b);
C={init:function(){b.animating=!1;
b.currentSlide=parseInt(b.vars.startAt?b.vars.startAt:0);
isNaN(b.currentSlide)&&(b.currentSlide=0);
b.animatingTo=b.currentSlide;
b.atEnd=b.currentSlide===0||b.currentSlide===b.last;
b.containerSelector=b.vars.selector.substr(0,b.vars.selector.search(" "));
b.slides=a(b.vars.selector,b);
b.container=a(b.containerSelector,b);
b.count=b.slides.length;
b.syncExists=a(b.vars.sync).length>0;
b.vars.animation==="slide"&&(b.vars.animation="swing");
b.prop=q?"top":"marginLeft";
b.args={};
b.manualPause=!1;
b.stopped=!1;
b.started=!1;
b.startTimeout=null;
b.transitions=!b.vars.video&&!e&&b.vars.useCSS&&function(){var d=document.createElement("div"),c=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var f in c){if(d.style[c[f]]!==undefined){b.pfx=c[f].replace("Perspective","").toLowerCase();
b.prop="-"+b.pfx+"-transform";
return !0
}}return !1
}();
b.vars.controlsContainer!==""&&(b.controlsContainer=a(b.vars.controlsContainer).length>0&&a(b.vars.controlsContainer));
b.vars.manualControls!==""&&(b.manualControls=a(b.vars.manualControls).length>0&&a(b.vars.manualControls));
if(b.vars.randomize){b.slides.sort(function(){return Math.round(Math.random())-0.5
});
b.container.empty().append(b.slides)
}b.doMath();
b.setup("init");
b.vars.controlNav&&C.controlNav.setup();
b.vars.directionNav&&C.directionNav.setup();
b.vars.keyboard&&(a(b.containerSelector).length===1||b.vars.multipleKeyboard)&&a(document).bind("keyup",function(d){var c=d.keyCode;
if(!b.animating&&(c===39||c===37)){var f=c===39?b.getTarget("next"):c===37?b.getTarget("prev"):!1;
b.flexAnimate(f,b.vars.pauseOnAction)
}});
b.vars.mousewheel&&b.bind("mousewheel",function(h,d,l,c){h.preventDefault();
var f=d<0?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
});
b.vars.pausePlay&&C.pausePlay.setup();
b.vars.slideshow&&b.vars.pauseInvisible&&C.pauseInvisible.init();
if(b.vars.slideshow){b.vars.pauseOnHover&&b.hover(function(){!b.manualPlay&&!b.manualPause&&b.pause()
},function(){!b.manualPause&&!b.manualPlay&&!b.stopped&&b.play()
});
if(!b.vars.pauseInvisible||!C.pauseInvisible.isHidden()){b.vars.initDelay>0?b.startTimeout=setTimeout(b.play,b.vars.initDelay):b.play()
}}z&&C.asNav.setup();
g&&b.vars.touch&&C.touch();
(!e||e&&b.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",C.resize);
b.find("img").attr("draggable","false");
setTimeout(function(){b.vars.start(b)
},200)
},asNav:{setup:function(){b.asNav=!0;
b.animatingTo=Math.floor(b.currentSlide/b.move);
b.currentItem=b.currentSlide;
b.slides.removeClass(w+"active-slide").eq(b.currentItem).addClass(w+"active-slide");
if(!F){b.slides.click(function(c){c.preventDefault();
var h=a(this),d=h.index(),f=h.offset().left-a(b).scrollLeft();
if(f<=0&&h.hasClass(w+"active-slide")){b.flexAnimate(b.getTarget("prev"),!0)
}else{if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass(w+"active-slide")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,!1,!0,!0)
}}})
}else{E._slider=b;
b.slides.each(function(){var c=this;
c._gesture=new MSGesture;
c._gesture.target=c;
c.addEventListener("MSPointerDown",function(d){d.preventDefault();
d.currentTarget._gesture&&d.currentTarget._gesture.addPointer(d.pointerId)
},!1);
c.addEventListener("MSGestureTap",function(f){f.preventDefault();
var h=a(this),d=h.index();
if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass("active")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,!1,!0,!0)
}})
})
}}},controlNav:{setup:function(){b.manualControls?C.controlNav.setupManual():C.controlNav.setupPaging()
},setupPaging:function(){var d=b.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",p=1,h,m;
b.controlNavScaffold=a('<ol class="'+w+"control-nav "+w+d+'"></ol>');
if(b.pagingCount>1){for(var i=0;
i<b.pagingCount;
i++){m=b.slides.eq(i);
h=b.vars.controlNav==="thumbnails"?'<img src="'+m.attr("data-thumb")+'"/>':"<a>"+p+"</a>";
if("thumbnails"===b.vars.controlNav&&!0===b.vars.thumbCaptions){var c=m.attr("data-thumbcaption");
""!=c&&undefined!=c&&(h+='<span class="'+w+'caption">'+c+"</span>")
}b.controlNavScaffold.append("<li>"+h+"</li>");
p++
}}b.controlsContainer?a(b.controlsContainer).append(b.controlNavScaffold):b.append(b.controlNavScaffold);
C.controlNav.set();
C.controlNav.active();
b.controlNavScaffold.delegate("a, img",D,function(f){f.preventDefault();
if(B===""||B===f.type){var o=a(this),l=b.controlNav.index(o);
if(!o.hasClass(w+"active")){b.direction=l>b.currentSlide?"next":"prev";
b.flexAnimate(l,b.vars.pauseOnAction)
}}B===""&&(B=f.type);
C.setToClearWatchedEvent()
})
},setupManual:function(){b.controlNav=b.manualControls;
C.controlNav.active();
b.controlNav.bind(D,function(c){c.preventDefault();
if(B===""||B===c.type){var f=a(this),d=b.controlNav.index(f);
if(!f.hasClass(w+"active")){d>b.currentSlide?b.direction="next":b.direction="prev";
b.flexAnimate(d,b.vars.pauseOnAction)
}}B===""&&(B=c.type);
C.setToClearWatchedEvent()
})
},set:function(){var c=b.vars.controlNav==="thumbnails"?"img":"a";
b.controlNav=a("."+w+"control-nav li "+c,b.controlsContainer?b.controlsContainer:b)
},active:function(){b.controlNav.removeClass(w+"active").eq(b.animatingTo).addClass(w+"active")
},update:function(c,d){b.pagingCount>1&&c==="add"?b.controlNavScaffold.append(a("<li><a>"+b.count+"</a></li>")):b.pagingCount===1?b.controlNavScaffold.find("li").remove():b.controlNav.eq(d).closest("li").remove();
C.controlNav.set();
b.pagingCount>1&&b.pagingCount!==b.controlNav.length?b.update(d,c):C.controlNav.active()
}},directionNav:{setup:function(){var c=a('<ul class="'+w+'direction-nav"><li><a class="'+w+'prev" href="#">'+b.vars.prevText+'</a></li><li><a class="'+w+'next" href="#">'+b.vars.nextText+"</a></li></ul>");
if(b.controlsContainer){a(b.controlsContainer).append(c);
b.directionNav=a("."+w+"direction-nav li a",b.controlsContainer)
}else{b.append(c);
b.directionNav=a("."+w+"direction-nav li a",b)
}C.directionNav.update();
b.directionNav.bind(D,function(d){d.preventDefault();
var f;
if(B===""||B===d.type){f=a(this).hasClass(w+"next")?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
}B===""&&(B=d.type);
C.setToClearWatchedEvent()
})
},update:function(){var c=w+"disabled";
b.pagingCount===1?b.directionNav.addClass(c).attr("tabindex","-1"):b.vars.animationLoop?b.directionNav.removeClass(c).removeAttr("tabindex"):b.animatingTo===0?b.directionNav.removeClass(c).filter("."+w+"prev").addClass(c).attr("tabindex","-1"):b.animatingTo===b.last?b.directionNav.removeClass(c).filter("."+w+"next").addClass(c).attr("tabindex","-1"):b.directionNav.removeClass(c).removeAttr("tabindex")
}},pausePlay:{setup:function(){var c=a('<div class="'+w+'pauseplay"><a></a></div>');
if(b.controlsContainer){b.controlsContainer.append(c);
b.pausePlay=a("."+w+"pauseplay a",b.controlsContainer)
}else{b.append(c);
b.pausePlay=a("."+w+"pauseplay a",b)
}C.pausePlay.update(b.vars.slideshow?w+"pause":w+"play");
b.pausePlay.bind(D,function(d){d.preventDefault();
if(B===""||B===d.type){if(a(this).hasClass(w+"pause")){b.manualPause=!0;
b.manualPlay=!1;
b.pause()
}else{b.manualPause=!1;
b.manualPlay=!0;
b.play()
}}B===""&&(B=d.type);
C.setToClearWatchedEvent()
})
},update:function(c){c==="play"?b.pausePlay.removeClass(w+"pause").addClass(w+"play").html(b.vars.playText):b.pausePlay.removeClass(w+"play").addClass(w+"pause").html(b.vars.pauseText)
}},touch:function(){var G,h,r,c,N,K,t=!1,H=0,M=0,l=0;
if(!F){E.addEventListener("touchstart",s,!1);
function s(d){if(b.animating){d.preventDefault()
}else{if(window.navigator.msPointerEnabled||d.touches.length===1){b.pause();
c=q?b.h:b.w;
K=Number(new Date);
H=d.touches[0].pageX;
M=d.touches[0].pageY;
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c;
G=q?M:H;
h=q?H:M;
E.addEventListener("touchmove",J,!1);
E.addEventListener("touchend",I,!1)
}}}function J(d){H=d.touches[0].pageX;
M=d.touches[0].pageY;
N=q?G-M:G-H;
t=q?Math.abs(N)<Math.abs(H-h):Math.abs(N)<Math.abs(M-h);
var f=500;
if(!t||Number(new Date)-K>f){d.preventDefault();
if(!e&&b.transitions){b.vars.animationLoop||(N/=b.currentSlide===0&&N<0||b.currentSlide===b.last&&N>0?Math.abs(N)/c+2:1);
b.setProps(r+N,"setTouch")
}}}function I(i){E.removeEventListener("touchmove",J,!1);
if(b.animatingTo===b.currentSlide&&!t&&N!==null){var d=A?-N:N,f=d>0?b.getTarget("next"):b.getTarget("prev");
b.canAdvance(f)&&(Number(new Date)-K<550&&Math.abs(d)>50||Math.abs(d)>c/2)?b.flexAnimate(f,b.vars.pauseOnAction):e||b.flexAnimate(b.currentSlide,b.vars.pauseOnAction,!0)
}E.removeEventListener("touchend",I,!1);
G=null;
h=null;
N=null;
r=null
}}else{E.style.msTouchAction="none";
E._gesture=new MSGesture;
E._gesture.target=E;
E.addEventListener("MSPointerDown",L,!1);
E._slider=b;
E.addEventListener("MSGestureChange",O,!1);
E.addEventListener("MSGestureEnd",p,!1);
function L(d){d.stopPropagation();
if(b.animating){d.preventDefault()
}else{b.pause();
E._gesture.addPointer(d.pointerId);
l=0;
c=q?b.h:b.w;
K=Number(new Date);
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c
}}function O(i){i.stopPropagation();
var m=i.target._slider;
if(!m){return
}var f=-i.translationX,d=-i.translationY;
l+=q?d:f;
N=l;
t=q?Math.abs(l)<Math.abs(-f):Math.abs(l)<Math.abs(-d);
if(i.detail===i.MSGESTURE_FLAG_INERTIA){setImmediate(function(){E._gesture.stop()
});
return
}if(!t||Number(new Date)-K>500){i.preventDefault();
if(!e&&m.transitions){m.vars.animationLoop||(N=l/(m.currentSlide===0&&l<0||m.currentSlide===m.last&&l>0?Math.abs(l)/c+2:1));
m.setProps(r+N,"setTouch")
}}}function p(f){f.stopPropagation();
var m=f.target._slider;
if(!m){return
}if(m.animatingTo===m.currentSlide&&!t&&N!==null){var i=A?-N:N,d=i>0?m.getTarget("next"):m.getTarget("prev");
m.canAdvance(d)&&(Number(new Date)-K<550&&Math.abs(i)>50||Math.abs(i)>c/2)?m.flexAnimate(d,m.vars.pauseOnAction):e||m.flexAnimate(m.currentSlide,m.vars.pauseOnAction,!0)
}G=null;
h=null;
N=null;
r=null;
l=0
}}},resize:function(){if(!b.animating&&b.is(":visible")){x||b.doMath();
if(e){C.smoothHeight()
}else{if(x){b.slides.width(b.computedW);
b.update(b.pagingCount);
b.setProps()
}else{if(q){b.viewport.height(b.h);
b.setProps(b.h,"setTotal")
}else{b.vars.smoothHeight&&C.smoothHeight();
b.newSlides.width(b.computedW);
b.setProps(b.computedW,"setTotal")
}}}}},smoothHeight:function(d){if(!q||e){var c=e?b:b.viewport;
d?c.animate({height:b.slides.eq(b.animatingTo).height()},d):c.height(b.slides.eq(b.animatingTo).height())
}},sync:function(d){var f=a(b.vars.sync).data("flexslider"),c=b.animatingTo;
switch(d){case"animate":f.flexAnimate(c,b.vars.pauseOnAction,!1,!0);
break;
case"play":!f.playing&&!f.asNav&&f.play();
break;
case"pause":f.pause()
}},pauseInvisible:{visProp:null,init:function(){var d=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var c=0;
c<d.length;
c++){d[c]+"Hidden" in document&&(C.pauseInvisible.visProp=d[c]+"Hidden")
}if(C.pauseInvisible.visProp){var f=C.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(f,function(){C.pauseInvisible.isHidden()?b.startTimeout?clearTimeout(b.startTimeout):b.pause():b.started?b.play():b.vars.initDelay>0?setTimeout(b.play,b.vars.initDelay):b.play()
})
}},isHidden:function(){return document[C.pauseInvisible.visProp]||!1
}},setToClearWatchedEvent:function(){clearTimeout(y);
y=setTimeout(function(){B=""
},3000)
}};
b.flexAnimate=function(v,c,G,r,p){!b.vars.animationLoop&&v!==b.currentSlide&&(b.direction=v>b.currentSlide?"next":"prev");
z&&b.pagingCount===1&&(b.direction=b.currentItem<v?"next":"prev");
if(!b.animating&&(b.canAdvance(v,p)||G)&&b.is(":visible")){if(z&&r){var i=a(b.vars.asNavFor).data("flexslider");
b.atEnd=v===0||v===b.count-1;
i.flexAnimate(v,!0,!1,!0,p);
b.direction=b.currentItem<v?"next":"prev";
i.direction=b.direction;
if(Math.ceil((v+1)/b.visible)-1===b.currentSlide||v===0){b.currentItem=v;
b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide");
return !1
}b.currentItem=v;
b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide");
v=Math.floor(v/b.visible)
}b.animating=!0;
b.animatingTo=v;
c&&b.pause();
b.vars.before(b);
b.syncExists&&!p&&C.sync("animate");
b.vars.controlNav&&C.controlNav.active();
x||b.slides.removeClass(w+"active-slide").eq(v).addClass(w+"active-slide");
b.atEnd=v===0||v===b.last;
b.vars.directionNav&&C.directionNav.update();
if(v===b.last){b.vars.end(b);
b.vars.animationLoop||b.pause()
}if(!e){var d=q?b.slides.filter(":first").height():b.computedW,h,o,l;
if(x){h=b.vars.itemMargin;
l=(b.itemW+h)*b.move*b.animatingTo;
o=l>b.limit&&b.visible!==1?b.limit:l
}else{b.currentSlide===0&&v===b.count-1&&b.vars.animationLoop&&b.direction!=="next"?o=A?(b.count+b.cloneOffset)*d:0:b.currentSlide===b.last&&v===0&&b.vars.animationLoop&&b.direction!=="prev"?o=A?0:(b.count+1)*d:o=A?(b.count-1-v+b.cloneOffset)*d:(v+b.cloneOffset)*d
}b.setProps(o,"",b.vars.animationSpeed);
if(b.transitions){if(!b.vars.animationLoop||!b.atEnd){b.animating=!1;
b.currentSlide=b.animatingTo
}b.container.unbind("webkitTransitionEnd transitionend");
b.container.bind("webkitTransitionEnd transitionend",function(){b.wrapup(d)
})
}else{b.container.animate(b.args,b.vars.animationSpeed,b.vars.easing,function(){b.wrapup(d)
})
}}else{if(!g){b.slides.eq(b.currentSlide).css({zIndex:1}).animate({opacity:0},b.vars.animationSpeed,b.vars.easing);
b.slides.eq(v).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing,b.wrapup)
}else{b.slides.eq(b.currentSlide).css({opacity:0,zIndex:1});
b.slides.eq(v).css({opacity:1,zIndex:2});
b.wrapup(d)
}}b.vars.smoothHeight&&C.smoothHeight(b.vars.animationSpeed)
}};
b.wrapup=function(c){!e&&!x&&(b.currentSlide===0&&b.animatingTo===b.last&&b.vars.animationLoop?b.setProps(c,"jumpEnd"):b.currentSlide===b.last&&b.animatingTo===0&&b.vars.animationLoop&&b.setProps(c,"jumpStart"));
b.animating=!1;
b.currentSlide=b.animatingTo;
b.vars.after(b)
};
b.animateSlides=function(){!b.animating&&k&&b.flexAnimate(b.getTarget("next"))
};
b.pause=function(){clearInterval(b.animatedSlides);
b.animatedSlides=null;
b.playing=!1;
b.vars.pausePlay&&C.pausePlay.update("play");
b.syncExists&&C.sync("pause")
};
b.play=function(){b.playing&&clearInterval(b.animatedSlides);
b.animatedSlides=b.animatedSlides||setInterval(b.animateSlides,b.vars.slideshowSpeed);
b.started=b.playing=!0;
b.vars.pausePlay&&C.pausePlay.update("pause");
b.syncExists&&C.sync("play")
};
b.stop=function(){b.pause();
b.stopped=!0
};
b.canAdvance=function(d,c){var f=z?b.pagingCount-1:b.last;
return c?!0:z&&b.currentItem===b.count-1&&d===0&&b.direction==="prev"?!0:z&&b.currentItem===0&&d===b.pagingCount-1&&b.direction!=="next"?!1:d===b.currentSlide&&!z?!1:b.vars.animationLoop?!0:b.atEnd&&b.currentSlide===0&&d===f&&b.direction!=="next"?!1:b.atEnd&&b.currentSlide===f&&d===0&&b.direction==="next"?!1:!0
};
b.getTarget=function(c){b.direction=c;
return c==="next"?b.currentSlide===b.last?0:b.currentSlide+1:b.currentSlide===0?b.last:b.currentSlide-1
};
b.setProps=function(f,d,h){var c=function(){var m=f?f:(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo,l=function(){if(x){return d==="setTouch"?f:A&&b.animatingTo===b.last?0:A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:b.animatingTo===b.last?b.limit:m
}switch(d){case"setTotal":return A?(b.count-1-b.currentSlide+b.cloneOffset)*f:(b.currentSlide+b.cloneOffset)*f;
case"setTouch":return A?f:f;
case"jumpEnd":return A?f:b.count*f;
case"jumpStart":return A?b.count*f:f;
default:return f
}}();
return l*-1+"px"
}();
if(b.transitions){c=q?"translate3d(0,"+c+",0)":"translate3d("+c+",0,0)";
h=h!==undefined?h/1000+"s":"0s";
b.container.css("-"+b.pfx+"-transition-duration",h)
}b.args[b.prop]=c;
(b.transitions||h===undefined)&&b.container.css(b.args)
};
b.setup=function(c){if(!e){var f,d;
if(c==="init"){b.viewport=a('<div class="'+w+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(b).append(b.container);
b.cloneCount=0;
b.cloneOffset=0;
if(A){d=a.makeArray(b.slides).reverse();
b.slides=a(d);
b.container.empty().append(b.slides)
}}if(b.vars.animationLoop&&!x){b.cloneCount=2;
b.cloneOffset=1;
c!=="init"&&b.container.find(".clone").remove();
b.container.append(b.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(b.slides.last().clone().addClass("clone").attr("aria-hidden","true"))
}b.newSlides=a(b.vars.selector,b);
f=A?b.count-1-b.currentSlide+b.cloneOffset:b.currentSlide+b.cloneOffset;
if(q&&!x){b.container.height((b.count+b.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){b.newSlides.css({display:"block"});
b.doMath();
b.viewport.height(b.h);
b.setProps(f*b.h,"init")
},c==="init"?100:0)
}else{b.container.width((b.count+b.cloneCount)*200+"%");
b.setProps(f*b.computedW,"init");
setTimeout(function(){b.doMath();
b.newSlides.css({width:b.computedW,"float":"left",display:"block"});
b.vars.smoothHeight&&C.smoothHeight()
},c==="init"?100:0)
}}else{b.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
c==="init"&&(g?b.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+b.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(b.currentSlide).css({opacity:1,zIndex:2}):b.slides.css({opacity:0,display:"block",zIndex:1}).eq(b.currentSlide).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing));
b.vars.smoothHeight&&C.smoothHeight()
}x||b.slides.removeClass(w+"active-slide").eq(b.currentSlide).addClass(w+"active-slide")
};
b.doMath=function(){var f=b.slides.first(),d=b.vars.itemMargin,h=b.vars.minItems,c=b.vars.maxItems;
b.w=b.viewport===undefined?b.width():b.viewport.width();
b.h=f.height();
b.boxPadding=f.outerWidth()-f.width();
if(x){b.itemT=b.vars.itemWidth+d;
b.minW=h?h*b.itemT:b.w;
b.maxW=c?c*b.itemT-d:b.w;
b.itemW=b.minW>b.w?(b.w-d*(h-1))/h:b.maxW<b.w?(b.w-d*(c-1))/c:b.vars.itemWidth>b.w?b.w:b.vars.itemWidth;
b.visible=Math.floor(b.w/b.itemW);
b.move=b.vars.move>0&&b.vars.move<b.visible?b.vars.move:b.visible;
b.pagingCount=Math.ceil((b.count-b.visible)/b.move+1);
b.last=b.pagingCount-1;
b.limit=b.pagingCount===1?0:b.vars.itemWidth>b.w?b.itemW*(b.count-1)+d*(b.count-1):(b.itemW+d)*b.count-b.w-d
}else{b.itemW=b.w;
b.pagingCount=b.count;
b.last=b.count-1
}b.computedW=b.itemW-b.boxPadding
};
b.update=function(d,c){b.doMath();
if(!x){d<b.currentSlide?b.currentSlide+=1:d<=b.currentSlide&&d!==0&&(b.currentSlide-=1);
b.animatingTo=b.currentSlide
}if(b.vars.controlNav&&!b.manualControls){if(c==="add"&&!x||b.pagingCount>b.controlNav.length){C.controlNav.update("add")
}else{if(c==="remove"&&!x||b.pagingCount<b.controlNav.length){if(x&&b.currentSlide>b.last){b.currentSlide-=1;
b.animatingTo-=1
}C.controlNav.update("remove",b.last)
}}}b.vars.directionNav&&C.directionNav.update()
};
b.addSlide=function(d,f){var c=a(d);
b.count+=1;
b.last=b.count-1;
q&&A?f!==undefined?b.slides.eq(b.count-f).after(c):b.container.prepend(c):f!==undefined?b.slides.eq(f).before(c):b.container.append(c);
b.update(f,"add");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.added(b)
};
b.removeSlide=function(c){var d=isNaN(c)?b.slides.index(a(c)):c;
b.count-=1;
b.last=b.count-1;
isNaN(c)?a(c,b.slides).remove():q&&A?b.slides.eq(b.last).remove():b.slides.eq(c).remove();
b.doMath();
b.update(d,"remove");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.removed(b)
};
C.init()
};
a(window).blur(function(b){focused=!1
}).focus(function(b){focused=!0
});
a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};
a.fn.flexslider=function(b){b===undefined&&(b={});
if(typeof b=="object"){return this.each(function(){var f=a(this),e=b.selector?b.selector:".slides > li",d=f.find(e);
if(d.length===1&&b.allowOneSlide===!0||d.length===0){d.fadeIn(400);
b.start&&b.start(f)
}else{f.data("flexslider")===undefined&&new a.flexslider(this,b)
}})
}var c=a(this).data("flexslider");
switch(b){case"play":c.play();
break;
case"pause":c.pause();
break;
case"stop":c.stop();
break;
case"next":c.flexAnimate(c.getTarget("next"),!0);
break;
case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);
break;
default:typeof b=="number"&&c.flexAnimate(b,!0)
}}
})(jQuery);
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{b(jQuery)
}}(function(c){var a=c.scrollTo=function(e,d,f){return c(window).scrollTo(e,d,f)
};
a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1,limit:true};
a.window=function(d){return c(window)._scrollable()
};
c.fn._scrollable=function(){return this.map(function(){var e=this,f=!e.nodeName||c.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!f){return e
}var d=(e.contentWindow||e).document||e.ownerDocument||e;
return/webkit/i.test(navigator.userAgent)||d.compatMode=="BackCompat"?d.body:d.documentElement
})
};
c.fn.scrollTo=function(i,e,d){if(typeof e=="object"){d=e;
e=0
}if(typeof d=="function"){d={onAfter:d}
}if(i=="max"){i=9000000000
}d=c.extend({},a.defaults,d);
e=e||d.duration;
d.queue=d.queue&&d.axis.length>1;
if(d.queue){e/=2
}d.offset=b(d.offset);
d.over=b(d.over);
return this._scrollable().each(function(){if(i==null){return
}var n=this,j=c(n),k=i,h,f={},m=j.is("html,body");
switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);
break
}k=m?c(k):c(k,this);
if(!k.length){return
}case"object":if(k.is||k.style){h=(k=c(k)).offset()
}}var l=c.isFunction(d.offset)&&d.offset(n,k)||d.offset;
c.each(d.axis.split(""),function(t,r){var p=r=="x"?"Left":"Top",v=p.toLowerCase(),s="scroll"+p,q=n[s],o=a.max(n,r);
if(h){f[s]=h[v]+(m?0:q-j.offset()[v]);
if(d.margin){f[s]-=parseInt(k.css("margin"+p))||0;
f[s]-=parseInt(k.css("border"+p+"Width"))||0
}f[s]+=l[v]||0;
if(d.over[v]){f[s]+=k[r=="x"?"width":"height"]()*d.over[v]
}}else{var u=k[v];
f[s]=u.slice&&u.slice(-1)=="%"?parseFloat(u)/100*o:u
}if(d.limit&&/^\d+$/.test(f[s])){f[s]=f[s]<=0?0:Math.min(f[s],o)
}if(!t&&d.queue){if(q!=f[s]){g(d.onAfterFirst)
}delete f[s]
}});
g(d.onAfter);
function g(o){j.animate(f,e,d.easing,o&&function(){o.call(this,k,d)
})
}}).end()
};
a.max=function(h,g){var k=g=="x"?"Width":"Height",f="scroll"+k;
if(!c(h).is("html,body")){return h[f]-c(h)[k.toLowerCase()]()
}var j="client"+k,i=h.ownerDocument.documentElement,e=h.ownerDocument.body;
return Math.max(i[f],e[f])-Math.min(i[j],e[j])
};
function b(d){return c.isFunction(d)||typeof d=="object"?d:{top:d,left:d}
}return a
}));
jQuery.noConflict();
(function(a){window.blip=a;
a(document).ready(function(){Altera=window.Altera||{};
a(".altera-header-nav").on("click touchend",".header-dropdown a",function(j){j.preventDefault();
j.stopPropagation();
var i=a(j.target).closest("a").attr("href");
if(a(i).hasClass("active")){a(".altera-header-nav .tray.active, .altera-header-nav .header-dropdown.active").removeClass("active")
}else{a(".altera-header-nav .tray.active, .altera-header-nav .header-dropdown.active").removeClass("active");
a(j.target).closest(".header-dropdown").addClass("active");
a(i).addClass("active")
}});
a(".altera-social-nav").on("click","a.st_sharethis_custom",function(i){i.preventDefault()
});
Altera.globalNavDebounce=null;
Altera.clearGlobalNavDebounce=function(){if(Altera.globalNavDebounce){window.clearTimeout(Altera.globalNavDebounce);
Altera.globalNavDebounce=null
}};
a(".content-primary-nav .navTriggers li a").on("mouseenter",function(i){Altera.clearGlobalNavDebounce();
Altera.globalNavDebounce=window.setTimeout(function(){var j=a(i.target).parent();
idx=j.index(),navTray=a(".navTray").eq(idx),navTrayCarat=navTray.children(".navTrayHeader").children(".navTrayCarat");
a(".content-primary-nav li a").removeClass("active");
a(i.target).addClass("active");
a(".navTray").removeClass("active");
navTrayCarat.css({left:(j.position().left+(j.width()/2-navTrayCarat.width()/2))+"px"});
navTray.addClass("active")
},150)
});
a(".content-primary-nav .navTriggers li a").on("touchend",function(j){j.preventDefault();
j.stopPropagation();
var i=a(j.target).parent();
idx=i.index(),navTray=a(".navTray").eq(idx),navTrayCarat=navTray.children(".navTrayHeader").children(".navTrayCarat");
a(".content-primary-nav li a").removeClass("active");
a(j.target).addClass("active");
a(".navTray").removeClass("active");
navTrayCarat.css({left:(i.position().left+(i.width()/2-navTrayCarat.width()/2))+"px"});
navTray.addClass("active")
});
a(".content-primary-nav .navTriggers li a").on("mouseleave",function(i){Altera.clearGlobalNavDebounce();
Altera.globalNavDebounce=window.setTimeout(function(){a(".content-primary-nav li a").removeClass("active");
a(".navTray").removeClass("active")
},150)
});
a(".navTray").on("mouseenter",function(i){Altera.clearGlobalNavDebounce()
});
a(".navTray").on("mouseleave",function(i){Altera.clearGlobalNavDebounce();
Altera.globalNavDebounce=window.setTimeout(function(){a(".content-primary-nav li a").removeClass("active");
a(".navTray").removeClass("active")
},150)
});
a(".navTray .icon-close").click(function(i){Altera.clearGlobalNavDebounce();
Altera.globalNavDebounce=window.setTimeout(function(){a(".content-primary-nav li a").removeClass("active");
a(".navTray").removeClass("active")
},150)
});
var v=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1);
a(".tab-navigator").on("click","li",function(y){if(!a(y.currentTarget).hasClass("active")){try{var j=a(y.currentTarget).closest(".tab-navigator"),t=a(y.currentTarget).closest(".tabbed-container"),i=j.children("li").index(y.currentTarget);
if(sessionStorage){sessionStorage.tab_container=v+":"+i
}j.children("li.active").removeClass("active");
t.find(".tab-item.active").removeClass("active");
a(y.currentTarget).addClass("active");
t.find(".tab-items .tab-item").eq(i).addClass("active")
}catch(y){}}});
var c;
if(sessionStorage){c=sessionStorage.tab_container
}var x=c==null?"":c.substring(0,c.indexOf(":"));
var o=c==null||v!=x?"0":c.substring(c.indexOf(":")+1);
a(".tab-navigator li").eq(o).click();
a("body").on("click",".featurePanel .showHideFeatures",function(y){y.preventDefault();
var i=a(y.target).closest(".featurePanel"),j=i.children(".panelBody"),t=a(y.target).parent();
j.slideToggle().promise().then(function(){if(j.is(":visible")){t.children(".showHideFeatures.show").hide();
t.children(".showHideFeatures.hide").show();
if(sessionStorage){sessionStorage.showHideFeatures=v+":showHideFeatures-show"
}}else{t.children(".showHideFeatures.hide").hide();
t.children(".showHideFeatures.show").show();
if(sessionStorage){sessionStorage.showHideFeatures=v+":showHideFeatures-hide"
}}})
});
var p;
if(sessionStorage){p=sessionStorage.showHideFeatures
}var l=p==null?"":p.substring(0,p.indexOf(":"));
var k=p==null||v!=l?"showHideFeatures-show":p.substring(p.indexOf(":")+1);
if(k=="showHideFeatures-hide"){a(".featurePanel .panelBody").hide();
a(".featurePanel .showHideFeatures.show").show();
a(".featurePanel .showHideFeatures.hide").hide()
}for(var u=0;
u<a("table.striped").length;
u++){var n=a("table.striped").eq(u);
var d=n.children("tbody").children("tr");
for(var s=0;
s<d.length;
s++){if(s%2!=0){d.eq(s).children("td").addClass("stripe")
}}}a(".footer .endYear").html(new Date().getFullYear());
a("video").on("play",function(y){console.log("vid play event captured",y.target);
var t=a("video").not(y.target);
for(var j=0;
j<t.length;
j++){t[j].pause()
}});
if(a(".tab-page-tab-content").length||a(".content-body-cols").length){var g=a('<a href="#" class="skipUp"></a>');
var b=25;
var f=a('<a href="#" class="skipDown"></a>');
var e=25;
var m=(a(".tab-page-tab-content").length)?a(".tab-page-tab-content"):a(".content-body-cols");
console.log("!!!! container=",m);
var q;
var r;
var h=false;
g.css({position:"fixed",bottom:b});
f.css({position:"fixed",top:e});
function w(){g.css({left:m.offset().left+m.width()+15});
f.css({left:m.offset().left+m.width()+15})
}m.append(g);
w();
if(a("#documentation_begin").length||a('[name="documentation_begin"]').length){h=(a("#documentation_begin").length)?a("#documentation_begin"):a('[name="documentation_begin"]');
m.append(f)
}a(document).on("click",".skipUp",function(i){i.preventDefault();
a(window).scrollTo(m,800)
});
a(document).on("click",".skipDown",function(i){i.preventDefault();
a(window).scrollTo(h,800)
});
a(window).on("scroll",function(i){q=(a(window).scrollTop()+a(window).height())-(m.offset().top+m.height());
r=m.offset().top-a(window).scrollTop();
if(a(window).scrollTop()>m.offset().top){g.fadeIn();
if(q+25>b){g.css({bottom:q+25})
}else{g.css({bottom:b})
}}else{g.fadeOut()
}if((!!h)&&a(window).scrollTop()<h.offset().top-a(window).height()/4){f.fadeIn()
}else{f.fadeOut()
}if(r+e>=e){f.css({top:r+e})
}else{f.css({top:e})
}});
a(window).on("resize",function(i){w()
})
}else{if(false){}}})
})(jQuery);
function isValidEmail(c){var e=false;
var a="";
var d="";
var b="";
if(c!=""&&c.length>5){a=c.indexOf("@");
d=c.substr(a+1);
b=d.indexOf(".")+a+1;
if(a>=1&&a<b&&b+1<c.length){e=true
}if(c.lastIndexOf(".")+1==c.length||c.lastIndexOf("@")+1==c.length||c.replace(/^\s+|\s+$/g,"").indexOf(" ")!=-1){e=false
}}return e
}function getURLParameter(a){var d=window.location.search.substring(1);
var c=d.split("&");
for(var b=0;
b<c.length;
b++){var e=c[b].split("=");
if(e[0]==a){return e[1]
}}}function setLanguageToggleLinks(a,g,e){var c=""+location;
var d=c;
var f=c;
var b=c;
if(c.indexOf(".com.cn")>0){d=c.replace(".com.cn",".com");
f=c.replace(".com.cn",".co.jp")
}else{if(c.indexOf(".co.jp")>0){d=c.replace(".co.jp",".com");
b=c.replace(".co.jp",".com.cn")
}else{if(c.indexOf(".com")>0){f=c.replace(".com",".co.jp");
b=c.replace(".com",".com.cn")
}}}if($("#en_us-lang-toggle").length>0){if(a=="VALID"){$("#en_us-lang-toggle").attr("href",d);
$("#en_us-lang-toggle").removeClass("disabled")
}else{$("#en_us-lang-toggle").addClass("disabled");
$("#en_us-lang-toggle").removeAttr("href")
}}if($("#ja_jp-lang-toggle").length>0){if(g=="VALID"){$("#ja_jp-lang-toggle").attr("href",f);
$("#ja_jp-lang-toggle").removeClass("disabled")
}else{$("#ja_jp-lang-toggle").addClass("disabled");
$("#ja_jp-lang-toggle").removeAttr("href")
}}if($("#zh_cn-lang-toggle").length>0){if(e=="VALID"){$("#zh_cn-lang-toggle").attr("href",b);
$("#zh_cn-lang-toggle").removeClass("disabled")
}else{$("#zh_cn-lang-toggle").addClass("disabled");
$("#zh_cn-lang-toggle").removeAttr("href")
}}}$(window).load(function(){$feedback_control=$("li.feedback_link");
if($feedback_control.length>0){$altr_url=$("#altr_url");
$altr_feedback=$("#altr_feedback");
$altr_contactform=$("#altr_contactform");
var a=$altr_feedback.closest(".responsive").html();
$altr_url.val(location.href);
$feedback_control.toggle(function(){$altr_feedback.animate({opacity:"1"},500);
$altr_feedback.addClass("open");
if(typeof(a)=="undefined"){$altr_feedback.css({left:($(this).offset().left+10-($altr_feedback.width()/2))+"px",top:($(this).offset().top-$altr_feedback.height()-50)+"px"}).show()
}else{$altr_feedback.css({left:($(this).offset().left+10-($altr_feedback.width()/2))+"px",top:($(this).offset().top-$altr_feedback.height()-70)+"px"}).show()
}},function(){$altr_feedback.animate({opacity:"0"},500);
$altr_feedback.removeClass("open")
});
$("input#altr_sendbutton").hover(function(){$(this).addClass("hover")
},function(){$(this).removeClass("hover")
});
$("#altr_sendbutton").click(function(){var b="/bin/feedback";
$str=$altr_contactform.serializeArray();
$.ajax({url:b,type:"POST",data:$str,success:function(d,e,c){$altr_contactform.hide();
if(d=="success"){$("#altr_contact-thankyou").show();
if(typeof(a)=="undefined"){$altr_feedback.css({left:($feedback_control.offset().left+10-($altr_feedback.width()/2))+"px",top:($feedback_control.offset().top-$("#altr_contact-thankyou").height()-57)+"px"})
}else{$altr_feedback.css({left:($feedback_control.offset().left+10-($altr_feedback.width()/2))+"px",top:($feedback_control.offset().top-$("#altr_contact-thankyou").height()-77)+"px"})
}$altr_feedback.show()
}else{$("#altr_contact-error").show()
}}});
return false
})
}});
var ss_cached=[];
var ss_qbackup=null;
var ss_qshown=null;
var ss_loc=-1;
var ss_waiting=0;
var ss_painting=false;
var ss_key_handling_queue=null;
var ss_painting_queue=null;
var ss_dismissed=false;
var ss_panic=false;
var SS_ROW_CLASS="ss-gac-a";
var SS_ROW_SELECTED_CLASS="ss-gac-b";
if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;
a<this.length;
a++){if(this[a]==b){return a
}}return -1
}
}var ss_debug=new ss_Debugger();
function ss_composeSuggestUri(d,e){var b=e.site?e.site.value:null;
var a=e.client?e.client.value:null;
if(!d||!b||!a){return null
}var f=(e.access&&e.access.value)?e.access.value:"p";
var c="/bin/gsasuggest";
if(SS_OUTPUT_FORMAT_LEGACY==ss_protocol){c=c+"?token="+encodeURIComponent(d)+"&max_matches="+ss_g_max_to_display
}else{c=c+"?q="+encodeURIComponent(d)+"&max="+ss_g_max_to_display
}c=c+"&mode="+ss_mode+"&site="+encodeURIComponent(b)+"&client="+encodeURIComponent(a)+"&access="+encodeURIComponent(f)+"&format="+encodeURIComponent(ss_protocol);
return c
}function ss_suggest(qVal){var startTimeMs=new Date().getTime();
if(!ss_cached[qVal]){ss_cached[qVal]={}
}var suggestForm=document.getElementById(ss_form_element);
var uri=ss_composeSuggestUri(qVal,suggestForm);
if(!uri){return
}var url=ss_gsa_host?"http://"+ss_gsa_host+uri:uri;
if(ss_panic){alert("ss_suggest() AJAX: "+url)
}var xmlhttp=XH_XmlHttpCreate();
var handler=function(){if(xmlhttp.readyState==XML_READY_STATE_COMPLETED){if(ss_panic){alert("ss_suggest() AJAX: "+xmlhttp.responseText)
}var suggested;
try{suggested=eval("("+xmlhttp.responseText+")")
}catch(e){ss_cached[qVal].g=null;
ss_show(qVal);
return
}if(ss_use.g){try{switch(ss_protocol){case SS_OUTPUT_FORMAT_LEGACY:default:var suggestions=suggested;
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){ss_cached[qVal].g[si]={q:suggestions[si]};
found=true
}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_OPEN_SEARCH:if(suggested.length>1){var suggestions=suggested[1];
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si]&&suggestions[si]!=suggested[0]){ss_cached[qVal].g[si]={q:suggestions[si]};
found=true
}else{if((suggested.length>3)&&ss_allow_non_query){var title=(suggested[2].length>si)?null:suggested[2][si];
var url=(suggested[3].length>si)?null:suggested[3][si];
if(url){title=!title?ss_non_query_empty_title:title;
ss_cached[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_RICH:var suggestions=suggested.results;
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si].name&&suggestions[si].name!=suggested.query){ss_cached[qVal].g[si]={q:suggestions[si].name};
found=true
}else{if(ss_allow_non_query){var title=suggestions[si].content;
var url=suggestions[si].moreDetailsUrl;
if(url){title=!title?ss_non_query_empty_title:title;
ss_cached[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break
}}catch(e){ss_cached[qVal].g=null
}}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){var stopTimeMs=new Date().getTime();
ss_debug.addRequestDebugLine(qVal,"suggest",stopTimeMs-startTimeMs,ss_cached[qVal])
}ss_show(qVal)
}};
XH_XmlHttpPOST(xmlhttp,url,"",handler)
}function ss_processed(a){if(!ss_cached[a]&&ss_use.g){return false
}return true
}function ss_handleAllKey(c){var a=(window.event)?window.event.keyCode:c.keyCode;
switch(a){case 40:case 38:break;
case 9:ss_qbackup=null;
ss_dismissed=true;
ss_clear(true);
case 16:ss_qbackup=null;
ss_dismissed=true;
var b=document.getElementById(ss_form_element).q.value;
if(!ss_processed(b)){if(ss_panic){alert("run ajax when key off")
}ss_suggest(b)
}break;
case 113:if(!ss_allow_debug){break
}if(ss_debug&&ss_debug.getDebugMode()){ss_debug.deactivateConsole()
}else{ss_debug.activateConsole()
}break;
default:break
}}function ss_handleKey(g){var c=(window.event)?window.event.keyCode:g.keyCode;
var i=document.getElementById(ss_form_element);
var h=(!ss_qbackup)?i.q.value:ss_qbackup;
var f=0;
var d=document.getElementById(ss_popup_element);
switch(c){case 40:ss_dismissed=false;
if(ss_processed(h)){f=ss_countSuggestions(h);
if(f>0){if(d.style.visibility=="hidden"){ss_show(h);
break
}if(ss_qbackup){ss_loc++
}else{ss_qbackup=h;
ss_loc=1
}while(ss_loc>=f+1){ss_loc-=f
}var k=d.getElementsByTagName("tr");
for(var j=1;
j<=k.length-1;
j++){if(j==ss_loc){k[j].className=SS_ROW_SELECTED_CLASS
}else{k[j].className=SS_ROW_CLASS
}}var b=ss_locateSuggestion(h,ss_loc);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackup
}}}else{if(ss_panic){alert("run ajax when key down")
}ss_suggest(h)
}break;
case 38:ss_dismissed=false;
if(ss_processed(h)){f=ss_countSuggestions(h);
if(f>0){if(d.style.visibility=="hidden"){ss_show(h);
break
}if(ss_qbackup){ss_loc--
}else{ss_qbackup=h;
ss_loc=-1
}while(ss_loc<0){ss_loc+=f
}var k=d.getElementsByTagName("tr");
for(var j=0;
j<=k.length-1;
j++){if(j==ss_loc){k[j].className=SS_ROW_SELECTED_CLASS
}else{k[j].className=SS_ROW_CLASS
}}if(ss_loc>0){var b=ss_locateSuggestion(h,ss_loc);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackup
}}}}else{if(ss_panic){alert("run ajax when key up")
}ss_suggest(h)
}break;
case 13:var a=null;
if(ss_processed(h)&&ss_qbackup&&ss_loc>-1){var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.u){a=b.u
}}ss_qbackup=null;
ss_dismissed=true;
ss_clear();
if(a){window.location.href=a
}break;
case 27:if(ss_qbackup){i.q.value=ss_qbackup;
ss_qbackup=null
}ss_dismissed=true;
ss_clear();
break;
case 37:case 39:case 9:case 16:break;
default:ss_dismissed=false;
if(i.q.value==ss_qshown){}else{if(ss_key_handling_queue){clearTimeout(ss_key_handling_queue)
}ss_qbackup=null;
ss_loc=-1;
ss_waiting++;
if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addWaitDebugLine(i.q.value,"queue",ss_wait_millisec)
}ss_key_handling_queue=setTimeout('ss_handleQuery("'+ss_escape(i.q.value)+'", '+ss_waiting+")",ss_wait_millisec)
}break
}}function ss_handleQuery(b,a){if(a!=ss_waiting){return
}ss_waiting=0;
if(b==""){ss_clear()
}else{if(!ss_processed(b)){if(ss_panic){alert("run ajax when key change")
}ss_suggest(b)
}else{ss_show(b)
}}}function ss_sf(){document.getElementById(ss_form_element).q.focus();
ss_dismissed=false
}function ss_clear(b){ss_qshown=null;
var a=document.getElementById(ss_form_element);
var c=(!ss_qbackup)?a.q.value:ss_qbackup;
ss_hide(c);
if(!b){ss_sf()
}}function ss_hide(a){var b=document.getElementById(ss_popup_element);
if(b.style.visibility=="visible"){if(ss_panic){alert("close suggestion box")
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addHideDebugLine(a,"hide")
}b.style.visibility="hidden"
}}function ss_show(l){var i=document.getElementById(ss_form_element).q.value;
if(i!=l){if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addHideDebugLine(l,"skip")
}return
}var f=new Date().getTime();
if(ss_dismissed){ss_qshown=null;
ss_hide(l);
return
}if(!ss_processed(l)){return
}if(l==""){ss_hide(l);
return
}var h=ss_cached[l]?ss_cached[l].g:null;
var o=false;
if(ss_use.g&&h){o=true
}if(!o){ss_qshown=null;
ss_hide(l);
return
}if(ss_painting){if(ss_painting_queue){clearTimeout(ss_painting_queue)
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addWaitDebugLine(l,"delay",ss_delay_millisec)
}ss_painting_queue=setTimeout('ss_show("'+ss_escape(l)+'")',ss_delay_millisec);
return
}else{ss_painting=true
}var e=document.getElementById(ss_popup_element);
for(var n=e.rows.length-1;
n>-1;
n--){e.deleteRow(n)
}var b=0;
if(h&&h.length>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var j="";
if(h.length==1){j=ss_g_one_name_to_display
}else{j=ss_g_more_names_to_display
}var d=document.createElement("td");
d.appendChild(document.createTextNode(j));
d.className="ss-gac-c";
q.appendChild(d);
var p=document.createElement("td");
p.className="ss-gac-d";
p.onclick=function(){ss_qbackup=null;
ss_clear();
var g=document.getElementById(ss_form_element).q.value;
if(!ss_processed(g)){ss_dismissed=true;
if(ss_panic){alert("run ajax when mouse close")
}ss_suggest(g)
}};
var c=document.createElement("div");
c.className="icon-closeSearch";
var a=document.createElement("span");
c.appendChild(a);
p.appendChild(c);
q.appendChild(p)
}for(var m=0;
m<ss_seq.length;
m++){switch(ss_seq[m]){case"g":b+=ss_showSuggestion(h,b,e,l);
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){break
}}if(b>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var p=document.createElement("td");
p.colSpan=2;
q.appendChild(p);
e.style.visibility="visible";
ss_qshown=l;
if(ss_panic){alert("open suggestion box for "+l)
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){var k=new Date().getTime();
ss_debug.addShowDebugLine(l,k-f,ss_cached[l],b)
}}else{ss_hide(l)
}ss_painting=false
}function ss_showSuggestion(h,a,d,j){if(ss_max_to_display>0&&a>=ss_max_to_display){return 0
}if(h&&h.length>0){lqry=j.toLowerCase().replace(/\"/g,"");
for(var e=0;
e<h.length;
e++){var k=d.insertRow(-1);
k.onclick=ss_handleMouseC;
k.onmousemove=ss_handleMouseM;
k.className=SS_ROW_CLASS;
var f=document.createElement("td");
if(h[e].q){var c="<b>"+h[e].q.substr(0,lqry.length)+"</b>";
if(h[e].q.length>lqry.length){c+=h[e].q.substring(lqry.length)
}f.innerHTML=c
}else{f.innerHTML="<i>"+h[e].t+"</i>"
}f.className="ss-gac-c";
k.appendChild(f);
var b=document.createElement("td");
b.className="ss-gac-d";
k.appendChild(b);
if(ss_max_to_display>0&&a+e+1>=ss_max_to_display){return e+1
}}return h.length
}return 0
}function ss_handleMouseM(){var c=document.getElementById(ss_form_element);
var e=document.getElementById(ss_popup_element);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this&&d[a].className!=SS_ROW_SELECTED_CLASS){d[a].className=SS_ROW_SELECTED_CLASS;
if(!ss_qbackup){ss_qbackup=c.q.value
}ss_loc=a;
var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.q){c.q.value=b.q
}else{c.q.value=ss_qbackup
}}else{if(d[a]!=this){d[a].className=SS_ROW_CLASS
}}}ss_sf();
return true
}function ss_handleMouseC(){var c=document.getElementById(ss_form_element);
var e=document.getElementById(ss_popup_element);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this){if(!ss_qbackup){ss_qbackup=c.q.value
}ss_loc=a;
var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.q){c.q.value=b.q;
c.submit()
}else{c.q.value=ss_qbackup;
if(b.u){window.location.href=b.u
}}break
}}}function ss_countSuggestions(c){var b=0;
for(var a=0;
a<ss_seq.length;
a++){switch(ss_seq[a]){case"g":b+=ss_cached[c].g?ss_cached[c].g.length:0;
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){return ss_max_to_display
}}return b
}function ss_locateSuggestion(e,g){var c=1;
var b=0;
var a=null;
for(var f=0;
f<=ss_seq.length;
f++){switch(ss_seq[f]){case"g":b+=ss_cached[e].g?ss_cached[e].g.length:0;
break
}if(g>=c&&g<=b){switch(ss_seq[f]){case"g":var d=ss_cached[e].g[g-c].q;
if(d){return{q:d}
}else{return{u:ss_cached[e].g[g-c].u}
}}break
}c=b
}return null
}function ss_escape(a){return a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')
}function ss_escapeDbg(d){var b="";
var c=d.split("");
for(var a=0;
a<c.length;
a++){switch(c[a]){case"&":b+="&amp;";
break;
case"<":b+="&lt;";
break;
case">":b+="&gt;";
break;
default:b+=c[a];
break
}}return b
}function ss_Debugger(){this.debugMode=false
}ss_Debugger.DEBUG_CONSOLE_ID="ss_debug_console";
ss_Debugger.DEBUG_CONTENT_ID="ss_debug_content";
ss_Debugger.DEBUG_TOGGLE_ID="ss_debug_toggle";
ss_Debugger.prototype.getDebugMode=function(){return this.debugMode
};
ss_Debugger.prototype.activateConsole=function(){var c=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(c){c.style.display="block"
}else{var b=document.createElement("div");
b.id=ss_Debugger.DEBUG_CONSOLE_ID;
b.zIndex=100;
b.className="expanded";
var g=document.createElement("h1");
g.appendChild(document.createTextNode("GSA Suggest Debug Console"));
g.style.display="inline";
b.appendChild(g);
var f=document.createElement("div");
var d=document.createElement("button");
d.onclick=function(j){var k=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(k){for(var i=k.rows.length-1;
i>0;
i--){k.deleteRow(i)
}}};
d.appendChild(document.createTextNode("Clear console"));
f.appendChild(d);
d=document.createElement("button");
d.onclick=function(i){ss_cached=[]
};
d.appendChild(document.createTextNode("Clear cache"));
f.appendChild(d);
d=document.createElement("button");
d.id=ss_Debugger.DEBUG_TOGGLE_ID;
d.onclick=function(k){var j=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(j){var i=document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
if(j.className.indexOf("expanded")!=-1){j.className=j.className.replace(/expanded/,"contracted");
i.innerHTML="Maximize"
}else{j.className=j.className.replace(/contracted/,"expanded");
i.innerHTML="Minimize"
}}};
d.appendChild(document.createTextNode("Minimize"));
f.appendChild(d);
f.style.display="inline";
b.appendChild(f);
b.appendChild(document.createElement("br"));
var h=document.createElement("table");
h.id=ss_Debugger.DEBUG_CONTENT_ID;
var a=h.insertRow(-1);
var e=document.createElement("th");
e.innerHTML="Query";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Type";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Time";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="g";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Total";
a.appendChild(e);
b.appendChild(h);
document.body.appendChild(b)
}this.debugMode=true
};
ss_Debugger.prototype.deactivateConsole=function(){var a=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(a){a.style.display="none"
}this.debugMode=false
};
ss_Debugger.prototype.addRequestDebugLine=function(c,b,f,e){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var g=document.createElement("td");
g.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(g);
g=document.createElement("td");
g.innerHTML=b;
a.appendChild(g);
g=document.createElement("td");
g.className="no";
g.innerHTML=f+" ms";
a.appendChild(g);
switch(b){case"suggest":g=document.createElement("td");
g.className="no";
g.innerHTML=(e.g?e.g.length:0);
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break;
default:g=document.createElement("td");
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break
}}};
ss_Debugger.prototype.addShowDebugLine=function(c,e,g,b){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>show</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=(g?(g.g?g.g.length:0):0);
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=b;
a.appendChild(f)
}};
ss_Debugger.prototype.addHideDebugLine=function(c,b){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var e=document.createElement("td");
e.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(e);
e=document.createElement("td");
e.innerHTML="<i>"+b+"</i>";
a.appendChild(e);
e=document.createElement("td");
e.className="no";
e.innerHTML="0 ms";
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e)
}};
ss_Debugger.prototype.addWaitDebugLine=function(c,b,e){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>"+b+"</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f)
}};
var ss_use={};
ss_use.g=ss_seq.indexOf("g")>=0?true:false;
document.onkeyup=ss_handleAllKey;
var ss_cachedH=[];
var ss_qbackupH=null;
var ss_qshownH=null;
var ss_locH=-1;
var ss_waitingH=0;
var ss_paintingH=false;
var ss_key_handling_queueH=null;
var ss_painting_queueH=null;
var ss_dismissedH=false;
var ss_panicH=false;
var SS_ROW_CLASSH="ss-gac-a";
var SS_ROW_SELECTED_CLASSH="ss-gac-b";
if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;
a<this.length;
a++){if(this[a]==b){return a
}}return -1
}
}var ss_debugH=new ss_DebuggerH();
function ss_composeSuggestUriH(d,e){var b=e.site?e.site.value:null;
var a=e.client?e.client.value:null;
if(!d||!b||!a){return null
}var f=(e.access&&e.access.value)?e.access.value:"p";
var c="/bin/gsasuggest";
if(SS_OUTPUT_FORMAT_LEGACY==ss_protocol){c=c+"?token="+encodeURIComponent(d)+"&max_matches="+ss_g_max_to_display
}else{c=c+"?q="+encodeURIComponent(d)+"&max="+ss_g_max_to_display
}c=c+"&mode="+ss_mode+"&site="+encodeURIComponent(b)+"&client="+encodeURIComponent(a)+"&access="+encodeURIComponent(f)+"&format="+encodeURIComponent(ss_protocol);
return c
}function ss_suggestH(qVal){var startTimeMs=new Date().getTime();
if(!ss_cachedH[qVal]){ss_cachedH[qVal]={}
}var suggestForm=document.getElementById(ss_form_elementH);
var uri=ss_composeSuggestUriH(qVal,suggestForm);
if(!uri){return
}var url=ss_gsa_host?"http://"+ss_gsa_host+uri:uri;
if(ss_panicH){alert("ss_suggestH() AJAX: "+url)
}var xmlhttp=XH_XmlHttpCreate();
var handler=function(){if(xmlhttp.readyState==XML_READY_STATE_COMPLETED){if(ss_panicH){alert("ss_suggestH() AJAX: "+xmlhttp.responseText)
}var suggested;
try{suggested=eval("("+xmlhttp.responseText+")")
}catch(e){ss_cachedH[qVal].g=null;
ss_showH(qVal);
return
}if(ss_useH.g){try{switch(ss_protocol){case SS_OUTPUT_FORMAT_LEGACY:default:var suggestions=suggested;
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){ss_cachedH[qVal].g[si]={q:suggestions[si]};
found=true
}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_OPEN_SEARCH:if(suggested.length>1){var suggestions=suggested[1];
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si]&&suggestions[si]!=suggested[0]){ss_cachedH[qVal].g[si]={q:suggestions[si]};
found=true
}else{if((suggested.length>3)&&ss_allow_non_query){var title=(suggested[2].length>si)?null:suggested[2][si];
var url=(suggested[3].length>si)?null:suggested[3][si];
if(url){title=!title?ss_non_query_empty_title:title;
ss_cachedH[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_RICH:var suggestions=suggested.results;
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si].name&&suggestions[si].name!=suggested.query){ss_cachedH[qVal].g[si]={q:suggestions[si].name};
found=true
}else{if(ss_allow_non_query){var title=suggestions[si].content;
var url=suggestions[si].moreDetailsUrl;
if(url){title=!title?ss_non_query_empty_title:title;
ss_cachedH[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break
}}catch(e){ss_cachedH[qVal].g=null
}}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){var stopTimeMs=new Date().getTime();
ss_debugH.addRequestDebugLine(qVal,"suggest",stopTimeMs-startTimeMs,ss_cachedH[qVal])
}ss_showH(qVal)
}};
XH_XmlHttpPOST(xmlhttp,url,"",handler)
}function ss_processedH(a){if(!ss_cachedH[a]&&ss_useH.g){return false
}return true
}function ss_handleAllKeyH(c){var a=(window.event)?window.event.keyCode:c.keyCode;
switch(a){case 40:case 38:break;
case 9:ss_qbackupH=null;
ss_dismissedH=true;
ss_clearH(true);
case 16:ss_qbackupH=null;
ss_dismissedH=true;
var b=document.getElementById(ss_form_elementH).q.value;
if(!ss_processedH(b)){if(ss_panicH){alert("run ajax when key off")
}ss_suggestH(b)
}break;
case 113:if(!ss_allow_debug){break
}if(ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.deactivateConsole()
}else{ss_debugH.activateConsole()
}break;
default:break
}}function ss_handleKeyH(g){var c=(window.event)?window.event.keyCode:g.keyCode;
var i=document.getElementById(ss_form_elementH);
var h=(!ss_qbackupH)?i.q.value:ss_qbackupH;
var f=0;
var d=document.getElementById(ss_popup_elementH);
switch(c){case 40:ss_dismissedH=false;
if(ss_processedH(h)){f=ss_countSuggestionsH(h);
if(f>0){if(d.style.visibility=="hidden"){ss_showH(h);
break
}if(ss_qbackupH){ss_locH++
}else{ss_qbackupH=h;
ss_locH=1
}while(ss_locH>=f+1){ss_locH-=f
}var k=d.getElementsByTagName("tr");
for(var j=1;
j<=k.length-1;
j++){if(j==ss_locH){k[j].className=SS_ROW_SELECTED_CLASSH
}else{k[j].className=SS_ROW_CLASSH
}}var b=ss_locateSuggestionH(h,ss_locH);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackupH
}}}else{if(ss_panicH){alert("run ajax when key down")
}ss_suggestH(h)
}break;
case 38:ss_dismissedH=false;
if(ss_processedH(h)){f=ss_countSuggestionsH(h);
if(f>0){if(d.style.visibility=="hidden"){ss_showH(h);
break
}if(ss_qbackupH){ss_locH--
}else{ss_qbackupH=h;
ss_locH=-1
}while(ss_locH<0){ss_locH+=f
}var k=d.getElementsByTagName("tr");
for(var j=0;
j<=k.length-1;
j++){if(j==ss_locH){k[j].className=SS_ROW_SELECTED_CLASSH
}else{k[j].className=SS_ROW_CLASSH
}}var b=ss_locateSuggestionH(h,ss_locH);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackupH
}}}else{if(ss_panicH){alert("run ajax when key up")
}ss_suggestH(h)
}break;
case 13:var a=null;
if(ss_processedH(h)&&ss_qbackupH&&ss_locH>-1){var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.u){a=b.u
}}ss_qbackupH=null;
ss_dismissedH=true;
ss_clearH();
if(a){window.location.href=a
}break;
case 27:if(ss_qbackupH){i.q.value=ss_qbackupH;
ss_qbackupH=null
}ss_dismissedH=true;
ss_clearH();
break;
case 37:case 39:case 9:case 16:break;
default:ss_dismissedH=false;
if(i.q.value==ss_qshownH){}else{if(ss_key_handling_queueH){clearTimeout(ss_key_handling_queueH)
}ss_qbackupH=null;
ss_locH=-1;
ss_waitingH++;
if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addWaitDebugLine(i.q.value,"queue",ss_wait_millisec)
}ss_key_handling_queueH=setTimeout('ss_handleQueryH("'+ss_escapeH(i.q.value)+'", '+ss_waitingH+")",ss_wait_millisec)
}break
}}function ss_handleQueryH(b,a){if(a!=ss_waitingH){return
}ss_waitingH=0;
if(b==""){ss_clearH()
}else{if(!ss_processedH(b)){if(ss_panicH){alert("run ajax when key change")
}ss_suggestH(b)
}else{ss_showH(b)
}}}function ss_sfH(){document.getElementById(ss_form_elementH).q.focus();
ss_dismissedH=false
}function ss_clearH(b){ss_qshownH=null;
var a=document.getElementById(ss_form_elementH);
var c=(!ss_qbackupH)?a.q.value:ss_qbackupH;
ss_hideH(c);
if(!b){ss_sfH()
}}function ss_hideH(a){var b=document.getElementById(ss_popup_elementH);
if(b.style.visibility=="visible"){if(ss_panicH){alert("close suggestion box")
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addHideDebugLine(a,"hide")
}b.style.visibility="hidden"
}}function ss_showH(l){var i=document.getElementById(ss_form_elementH).q.value;
if(i!=l){if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addHideDebugLine(l,"skip")
}return
}var f=new Date().getTime();
if(ss_dismissedH){ss_qshownH=null;
ss_hideH(l);
return
}if(!ss_processedH(l)){return
}if(l==""){ss_hideH(l);
return
}var h=ss_cachedH[l]?ss_cachedH[l].g:null;
var o=false;
if(ss_useH.g&&h){o=true
}if(!o){ss_qshownH=null;
ss_hideH(l);
return
}if(ss_paintingH){if(ss_painting_queueH){clearTimeout(ss_painting_queueH)
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addWaitDebugLine(l,"delay",ss_delay_millisec)
}ss_painting_queueH=setTimeout('ss_showH("'+ss_escapeH(l)+'")',ss_delay_millisec);
return
}else{ss_paintingH=true
}var e=document.getElementById(ss_popup_elementH);
for(var n=e.rows.length-1;
n>-1;
n--){e.deleteRow(n)
}var b=0;
if(h&&h.length>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var j="";
if(h.length==1){j=ss_g_one_name_to_display
}else{j=ss_g_more_names_to_display
}var d=document.createElement("td");
d.appendChild(document.createTextNode(j));
d.className="ss-gac-c";
q.appendChild(d);
var p=document.createElement("td");
p.className="ss-gac-d";
p.onclick=function(){ss_qbackupH=null;
ss_clearH();
var g=document.getElementById(ss_form_elementH).q.value;
if(!ss_processedH(g)){ss_dismissedH=true;
if(ss_panicH){alert("run ajax when mouse close")
}ss_suggestH(g)
}};
var c=document.createElement("div");
c.className="icon-closeSearch";
var a=document.createElement("span");
c.appendChild(a);
p.appendChild(c);
q.appendChild(p)
}for(var m=0;
m<ss_seq.length;
m++){switch(ss_seq[m]){case"g":b+=ss_showSuggestionH(h,b,e,l);
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){break
}}if(b>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var p=document.createElement("td");
p.colSpan=2;
q.appendChild(p);
e.style.visibility="visible";
ss_qshownH=l;
if(ss_panicH){alert("open suggestion box for "+l)
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){var k=new Date().getTime();
ss_debugH.addShowDebugLine(l,k-f,ss_cachedH[l],b)
}}else{ss_hideH(l)
}ss_paintingH=false
}function ss_showSuggestionH(h,a,d,j){if(ss_max_to_display>0&&a>=ss_max_to_display){return 0
}if(h&&h.length>0){lqry=j.toLowerCase().replace(/\"/g,"");
for(var e=0;
e<h.length;
e++){var k=d.insertRow(-1);
k.onclick=ss_handleMouseCH;
k.onmousemove=ss_handleMouseMH;
k.className=SS_ROW_CLASSH;
var f=document.createElement("td");
if(h[e].q){var c="<b>"+h[e].q.substr(0,lqry.length)+"</b>";
if(h[e].q.length>lqry.length){c+=h[e].q.substring(lqry.length)
}f.innerHTML=c
}else{f.innerHTML="<i>"+h[e].t+"</i>"
}f.className="ss-gac-c";
k.appendChild(f);
var b=document.createElement("td");
b.className="ss-gac-d";
k.appendChild(b);
if(ss_max_to_display>0&&a+e+1>=ss_max_to_display){return e+1
}}return h.length
}return 0
}function ss_handleMouseMH(){var c=document.getElementById(ss_form_elementH);
var e=document.getElementById(ss_popup_elementH);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this&&d[a].className!=SS_ROW_SELECTED_CLASSH){d[a].className=SS_ROW_SELECTED_CLASSH;
if(!ss_qbackupH){ss_qbackupH=c.q.value
}ss_locH=a;
var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.q){c.q.value=b.q
}else{c.q.value=ss_qbackupH
}}else{if(d[a]!=this){d[a].className=SS_ROW_CLASSH
}}}ss_sfH();
return true
}function ss_handleMouseCH(){var c=document.getElementById(ss_form_elementH);
var e=document.getElementById(ss_popup_elementH);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this){if(!ss_qbackupH){ss_qbackupH=c.q.value
}ss_locH=a;
var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.q){c.q.value=b.q;
c.submit()
}else{c.q.value=ss_qbackupH;
if(b.u){window.location.href=b.u
}}break
}}}function ss_countSuggestionsH(c){var b=0;
for(var a=0;
a<ss_seq.length;
a++){switch(ss_seq[a]){case"g":b+=ss_cachedH[c].g?ss_cachedH[c].g.length:0;
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){return ss_max_to_display
}}return b
}function ss_locateSuggestionH(e,g){var c=1;
var b=0;
var a=null;
for(var f=0;
f<=ss_seq.length;
f++){switch(ss_seq[f]){case"g":b+=ss_cachedH[e].g?ss_cachedH[e].g.length:0;
break
}if(g>=c&&g<=b){switch(ss_seq[f]){case"g":var d=ss_cachedH[e].g[g-c].q;
if(d){return{q:d}
}else{return{u:ss_cachedH[e].g[g-c].u}
}}break
}c=b
}return null
}function ss_escapeH(a){return a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')
}function ss_escapeDbgH(d){var b="";
var c=d.split("");
for(var a=0;
a<c.length;
a++){switch(c[a]){case"&":b+="&amp;";
break;
case"<":b+="&lt;";
break;
case">":b+="&gt;";
break;
default:b+=c[a];
break
}}return b
}function ss_DebuggerH(){this.debugMode=false
}ss_DebuggerH.DEBUG_CONSOLE_ID="ss_debug_console";
ss_DebuggerH.DEBUG_CONTENT_ID="ss_debug_content";
ss_DebuggerH.DEBUG_TOGGLE_ID="ss_debug_toggle";
ss_DebuggerH.prototype.getDebugMode=function(){return this.debugMode
};
ss_DebuggerH.prototype.activateConsole=function(){var c=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(c){c.style.display="block"
}else{var b=document.createElement("div");
b.id=ss_DebuggerH.DEBUG_CONSOLE_ID;
b.zIndex=100;
b.className="expanded";
var g=document.createElement("h1");
g.appendChild(document.createTextNode("GSA Suggest Debug Console"));
g.style.display="inline";
b.appendChild(g);
var f=document.createElement("div");
var d=document.createElement("button");
d.onclick=function(j){var k=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(k){for(var i=k.rows.length-1;
i>0;
i--){k.deleteRow(i)
}}};
d.appendChild(document.createTextNode("Clear console"));
f.appendChild(d);
d=document.createElement("button");
d.onclick=function(i){ss_cachedH=[]
};
d.appendChild(document.createTextNode("Clear cache"));
f.appendChild(d);
d=document.createElement("button");
d.id=ss_DebuggerH.DEBUG_TOGGLE_ID;
d.onclick=function(k){var j=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(j){var i=document.getElementById(ss_DebuggerH.DEBUG_TOGGLE_ID);
if(j.className.indexOf("expanded")!=-1){j.className=j.className.replace(/expanded/,"contracted");
i.innerHTML="Maximize"
}else{j.className=j.className.replace(/contracted/,"expanded");
i.innerHTML="Minimize"
}}};
d.appendChild(document.createTextNode("Minimize"));
f.appendChild(d);
f.style.display="inline";
b.appendChild(f);
b.appendChild(document.createElement("br"));
var h=document.createElement("table");
h.id=ss_DebuggerH.DEBUG_CONTENT_ID;
var a=h.insertRow(-1);
var e=document.createElement("th");
e.innerHTML="Query";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Type";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Time";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="g";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Total";
a.appendChild(e);
b.appendChild(h);
document.body.appendChild(b)
}this.debugMode=true
};
ss_DebuggerH.prototype.deactivateConsole=function(){var a=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(a){a.style.display="none"
}this.debugMode=false
};
ss_DebuggerH.prototype.addRequestDebugLine=function(c,b,f,e){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var g=document.createElement("td");
g.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(g);
g=document.createElement("td");
g.innerHTML=b;
a.appendChild(g);
g=document.createElement("td");
g.className="no";
g.innerHTML=f+" ms";
a.appendChild(g);
switch(b){case"suggest":g=document.createElement("td");
g.className="no";
g.innerHTML=(e.g?e.g.length:0);
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break;
default:g=document.createElement("td");
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break
}}};
ss_DebuggerH.prototype.addShowDebugLine=function(c,e,g,b){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>show</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=(g?(g.g?g.g.length:0):0);
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=b;
a.appendChild(f)
}};
ss_DebuggerH.prototype.addHideDebugLine=function(c,b){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var e=document.createElement("td");
e.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(e);
e=document.createElement("td");
e.innerHTML="<i>"+b+"</i>";
a.appendChild(e);
e=document.createElement("td");
e.className="no";
e.innerHTML="0 ms";
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e)
}};
ss_DebuggerH.prototype.addWaitDebugLine=function(c,b,e){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>"+b+"</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f)
}};
var ss_useH={};
ss_useH.g=ss_seq.indexOf("g")>=0?true:false;
document.onkeyup=ss_handleAllKeyH;
var XH_ieProgId_;
var XML_READY_STATE_UNINITIALIZED=0;
var XML_READY_STATE_LOADING=1;
var XML_READY_STATE_LOADED=2;
var XML_READY_STATE_INTERACTIVE=3;
var XML_READY_STATE_COMPLETED=4;
function XH_XmlHttpInit_(){var d=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
if(typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){for(var a=0;
a<d.length;
a++){var b=d[a];
try{new ActiveXObject(b);
XH_ieProgId_=b;
break
}catch(c){}}if(!XH_ieProgId_){throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed.")
}}}XH_XmlHttpInit_();
function XH_XmlHttpCreate(){if(XH_ieProgId_){return new ActiveXObject(XH_ieProgId_)
}else{return new XMLHttpRequest()
}}function XH_XmlHttpGET(a,b,c){a.open("GET",b,true);
a.onreadystatechange=c;
XH_XmlHttpSend(a,null)
}function XH_XmlHttpPOST(a,b,d,c){a.open("POST",b,true);
a.onreadystatechange=c;
a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
XH_XmlHttpSend(a,d)
}function XH_XmlHttpOpen(a,d,b,c){a.open(d,b,true);
a.onreadystatechange=c
}function XH_XmlHttpSetRequestHeader(a,b,c){a.setRequestHeader(b,c)
}function XH_XmlHttpSend(a,b){try{a.send(b)
}catch(c){log("XMLHttpSend failed "+c.toString()+"<br>"+c.stack);
throw c
}}function XH_XmlHttpAbort(a){SafeTimeout(window,function(){a.onreadystatechange=function(){}
},0);
if(a.readyState<XML_READY_STATE_COMPLETED){a.abort()
}}window.REMODAL_GLOBALS={DEFAULTS:{hashTracking:false}};
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)
}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)
}(this,function(A,I){function R(f){if(z&&"none"===f.css("animation-name")&&"none"===f.css("-webkit-animation-name")&&"none"===f.css("-moz-animation-name")&&"none"===f.css("-o-animation-name")&&"none"===f.css("-ms-animation-name")){return 0
}var p,l,c,d,m=f.css("animation-duration")||f.css("-webkit-animation-duration")||f.css("-moz-animation-duration")||f.css("-o-animation-duration")||f.css("-ms-animation-duration")||"0s",g=f.css("animation-delay")||f.css("-webkit-animation-delay")||f.css("-moz-animation-delay")||f.css("-o-animation-delay")||f.css("-ms-animation-delay")||"0s",h=f.css("animation-iteration-count")||f.css("-webkit-animation-iteration-count")||f.css("-moz-animation-iteration-count")||f.css("-o-animation-iteration-count")||f.css("-ms-animation-iteration-count")||"1";
for(m=m.split(", "),g=g.split(", "),h=h.split(", "),d=0,l=m.length,p=Number.NEGATIVE_INFINITY;
l>d;
d++){c=parseFloat(m[d])*parseInt(h[d],10)+parseFloat(g[d]),c>p&&(p=c)
}return c
}function U(){if(I(document.body).height()<=I(window).height()){return 0
}var f,g,c=document.createElement("div"),d=document.createElement("div");
return c.style.visibility="hidden",c.style.width="100px",document.body.appendChild(c),f=c.offsetWidth,c.style.overflow="scroll",d.style.width="100%",c.appendChild(d),g=d.offsetWidth,c.parentNode.removeChild(c),f-g
}function L(){if(!k){var c,f,a=I("html"),g=K("is-locked"),d=U();
if(!a.hasClass(g)){f=I(document.body),c=parseInt(f.css("padding-right"),10)+d,f.css("padding-right",c+"px"),a.addClass(g);
I("#altera-header").css("padding-right",d+"px")
}}}function H(){if(!k){var c,d,a=I("html"),f=K("is-locked");
a.hasClass(f)&&(d=I(document.body),c=parseInt(d.css("padding-right"),10)-U(),d.css("padding-right",c+"px"),a.removeClass(f),I("#altera-header").css("padding-right",0))
}}function B(f,l,g,c){var d=K("is",l),h=[K("is",b.CLOSING),K("is",b.OPENING),K("is",b.CLOSED),K("is",b.OPENED)].join(" ");
f.$bg.removeClass(h).addClass(d),f.$overlay.removeClass(h).addClass(d),f.$wrapper.removeClass(h).addClass(d),f.$modal.removeClass(h).addClass(d),f.state=l,!g&&f.$modal.trigger({type:l,reason:c},[{reason:c}])
}function F(e,c,d){var h=0,f=function(a){a.target===this&&h++
},g=function(a){a.target===this&&0===--h&&(I.each(["$bg","$overlay","$wrapper","$modal"],function(i,l){d[l].off(w+" "+D)
}),c())
};
I.each(["$bg","$overlay","$wrapper","$modal"],function(a,i){d[i].on(w,f).on(D,g)
}),e(),0===R(d.$bg)&&0===R(d.$overlay)&&0===R(d.$wrapper)&&0===R(d.$modal)&&(I.each(["$bg","$overlay","$wrapper","$modal"],function(a,i){d[i].off(w+" "+D)
}),c())
}function S(a){a.state!==b.CLOSED&&(I.each(["$bg","$overlay","$wrapper","$modal"],function(d,c){a[c].off(w+" "+D)
}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),H(),B(a,b.CLOSED,!0))
}function T(f){var l,g,c,d,h={};
for(f=f.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),l=f.split(","),d=0,g=l.length;
g>d;
d++){l[d]=l[d].split(":"),c=l[d][1],("string"==typeof c||c instanceof String)&&(c="true"===c||("false"===c?!1:c)),("string"==typeof c||c instanceof String)&&(c=isNaN(c)?c:+c),h[l[d][0]]=c
}return h
}function K(){for(var a=M,c=0;
c<arguments.length;
++c){a+="-"+arguments[c]
}return a
}function J(){var f,g,c=location.hash.replace("#","");
if(c){try{g=I("[data-"+P+"-id="+c.replace(new RegExp("/","g"),"\\/")+"]")
}catch(d){}g&&g.length&&(f=I[P].lookup[g.data(P)],f&&f.settings.hashTracking&&f.open())
}else{x&&x.state===b.OPENED&&x.settings.hashTracking&&x.close()
}}function G(f,g){var c=I(document.body),d=this;
d.settings=I.extend({},j,g),d.index=I[P].lookup.push(d)-1,d.state=b.CLOSED,d.$overlay=I("."+K("overlay")),d.$overlay.length||(d.$overlay=I("<div>").addClass(K("overlay")+" "+K("is",b.CLOSED)).hide(),c.append(d.$overlay)),d.$bg=I("."+K("bg")).addClass(K("is",b.CLOSED)),d.$modal=f.addClass(M+" "+K("is-initialized")+" "+d.settings.modifier+" "+K("is",b.CLOSED)).attr("tabindex","-1"),d.$wrapper=I("<div>").addClass(K("wrapper")+" "+d.settings.modifier+" "+K("is",b.CLOSED)).hide().append(d.$modal),c.append(d.$wrapper),d.$wrapper.on("click."+M,"[data-"+P+'-action="close"]',function(a){a.preventDefault(),d.close()
}),d.$wrapper.on("click."+M,"[data-"+P+'-action="cancel"]',function(a){a.preventDefault(),d.$modal.trigger(q.CANCELLATION),d.settings.closeOnCancel&&d.close(q.CANCELLATION)
}),d.$wrapper.on("click."+M,"[data-"+P+'-action="confirm"]',function(a){a.preventDefault(),d.$modal.trigger(q.CONFIRMATION),d.settings.closeOnConfirm&&d.close(q.CONFIRMATION)
}),d.$wrapper.on("click."+M,function(a){var h=I(a.target);
h.hasClass(K("wrapper"))&&d.settings.closeOnOutsideClick&&d.close()
})
}var x,Q,P="remodal",M=A.REMODAL_GLOBALS&&A.REMODAL_GLOBALS.NAMESPACE||P,w=I.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+M
}).join(" "),D=I.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+M
}).join(" "),j=I.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},A.REMODAL_GLOBALS&&A.REMODAL_GLOBALS.DEFAULTS),b={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},q={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},z=function(){var a=document.createElement("div").style;
return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName
}(),k=/iPad|iPhone|iPod/.test(navigator.platform);
G.prototype.open=function(){var a,c=this;
c.state!==b.OPENING&&c.state!==b.CLOSING&&(a=c.$modal.attr("data-"+P+"-id"),a&&c.settings.hashTracking&&(Q=I(window).scrollTop(),location.hash=a),x&&x!==c&&S(x),x=c,L(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),F(function(){B(c,b.OPENING)
},function(){B(c,b.OPENED)
},c))
},G.prototype.close=function(a){var c=this;
c.state!==b.OPENING&&c.state!==b.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-"+P+"-id")===location.hash.substr(1)&&(location.hash="",I(window).scrollTop(Q)),F(function(){B(c,b.CLOSING,!1,a)
},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),H(),B(c,b.CLOSED,!1,a)
},c))
},G.prototype.getState=function(){return this.state
},G.prototype.destroy=function(){var a,c=I[P].lookup;
S(this),this.$wrapper.remove(),delete c[this.index],a=I.grep(c,function(d){return !!d
}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(K("is",b.CLOSING)+" "+K("is",b.OPENING)+" "+K("is",b.CLOSED)+" "+K("is",b.OPENED)))
},I[P]={lookup:[]},I.fn[P]=function(d){var f,c;
return this.each(function(a,e){c=I(e),null==c.data(P)?(f=new G(c,d),c.data(P,f.index),f.settings.hashTracking&&c.attr("data-"+P+"-id")===location.hash.substr(1)&&f.open()):f=I[P].lookup[c.data(P)]
}),f
},I(document).ready(function(){I(document).on("click","[data-"+P+"-target]",function(f){f.preventDefault();
var g=f.currentTarget,c=g.getAttribute("data-"+P+"-target"),d=I("[data-"+P+"-id="+c+"]");
I[P].lookup[d.data(P)].open()
}),I(document).find("."+M).each(function(f,g){var c=I(g),d=c.data(P+"-options");
d?("string"==typeof d||d instanceof String)&&(d=T(d)):d={},c[P](d)
}),I(document).on("keydown."+M,function(a){x&&x.settings.closeOnEscape&&x.state===b.OPENED&&27===a.keyCode&&x.close()
}),I(window).on("hashchange."+M,J)
})
});
!function(G,A){function b(a){a=a.split(" ");
for(var d={},c=a.length,f=[];
c--;
){d.hasOwnProperty(a[c])||(d[a[c]]=1,f.unshift(a[c]))
}return f.join(" ")
}var m="file:"===G.location.protocol,w=A.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),k=Array.prototype.forEach||function(a,d){if(void 0===this||null===this||"function"!=typeof a){throw new TypeError
}var c,f=this.length>>>0;
for(c=0;
f>c;
++c){c in this&&a.call(d,this[c],c,this)
}},D={},q=0,H=[],F=[],C={},z=function(a){return a.cloneNode(!0)
},j=function(a,c){F[a]=F[a]||[],F[a].push(c)
},B=function(a){for(var d=0,c=F[a].length;
c>d;
d++){!function(f){setTimeout(function(){F[a][f](z(D[a]))
},0)
}(d)
}},E=function(d,c){if(void 0!==D[d]){D[d] instanceof SVGSVGElement?c(z(D[d])):j(d,c)
}else{if(!G.XMLHttpRequest){return c("Browser does not support XMLHttpRequest"),!1
}D[d]={},j(d,c);
var a=new XMLHttpRequest;
a.onreadystatechange=function(){if(4===a.readyState){if(404===a.status||null===a.responseXML){return c("Unable to load SVG file: "+d),m&&c("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),c(),!1
}if(!(200===a.status||m&&0===a.status)){return c("There was a problem injecting the SVG: "+a.status+" "+a.statusText),!1
}if(a.responseXML instanceof Document){D[d]=a.responseXML.documentElement
}else{if(DOMParser&&DOMParser instanceof Function){var f;
try{var g=new DOMParser;
f=g.parseFromString(a.responseText,"text/xml")
}catch(e){f=void 0
}if(!f||f.getElementsByTagName("parsererror").length){return c("Unable to parse SVG file: "+d),!1
}D[d]=f.documentElement
}}B(d)
}},a.open("GET",d),a.overrideMimeType&&a.overrideMimeType("text/xml"),a.send()
}},x=function(i,l,c,d){var g=i.getAttribute("data-src")||i.getAttribute("src");
if(!/\.svg/i.test(g)){return void d("Attempted to inject a file with a non-svg extension: "+g)
}if(!w){var h=i.getAttribute("data-fallback")||i.getAttribute("data-png");
return void (h?(i.setAttribute("src",h),d(null)):c?(i.setAttribute("src",c+"/"+g.split("/").pop().replace(".svg",".png")),d(null)):d("This browser does not support SVG and no PNG fallback was defined."))
}-1===H.indexOf(i)&&(H.push(i),i.setAttribute("src",""),E(g,function(Q){if("undefined"==typeof Q||"string"==typeof Q){return d(Q),!1
}var Y=i.getAttribute("id");
Y&&Q.setAttribute("id",Y);
var L=i.getAttribute("title");
L&&Q.setAttribute("title",L);
var W=[].concat(Q.getAttribute("class")||[],"injected-svg",i.getAttribute("class")||[]).join(" ");
Q.setAttribute("class",b(W));
var I=i.getAttribute("style");
I&&Q.setAttribute("style",I);
var R=[].filter.call(i.attributes,function(a){return/^data-\w[\w\-]*$/.test(a.name)
});
k.call(R,function(a){a.name&&a.value&&Q.setAttribute(a.name,a.value)
});
var U,N,X,r,K,t={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};
Object.keys(t).forEach(function(a){U=a,X=t[a],N=Q.querySelectorAll("defs "+U+"[id]");
for(var v=0,p=N.length;
p>v;
v++){r=N[v].id,K=r+"-"+q;
var M;
k.call(X,function(S){M=Q.querySelectorAll("["+S+'*="'+r+'"]');
for(var V=0,T=M.length;
T>V;
V++){M[V].setAttribute(S,"url(#"+K+")")
}}),N[v].id=K
}}),Q.removeAttribute("xmlns:a");
for(var s,n,O=Q.querySelectorAll("script"),P=[],u=0,f=O.length;
f>u;
u++){n=O[u].getAttribute("type"),n&&"application/ecmascript"!==n&&"application/javascript"!==n||(s=O[u].innerText||O[u].textContent,P.push(s),Q.removeChild(O[u]))
}if(P.length>0&&("always"===l||"once"===l&&!C[g])){for(var o=0,e=P.length;
e>o;
o++){new Function(P[o])(G)
}C[g]=!0
}var J=Q.querySelectorAll("style");
k.call(J,function(a){a.textContent+=""
}),i.parentNode.replaceChild(Q,i),delete H[H.indexOf(i)],i=null,q++,d(Q)
}))
},y=function(g,o,h){o=o||{};
var p=o.evalScripts||"always",f=o.pngFallback||!1,d=o.each;
if(void 0!==g.length){var c=0;
k.call(g,function(a){x(a,p,f,function(i){d&&"function"==typeof d&&d(i),h&&g.length===++c&&h(c)
})
})
}else{g?x(g,p,f,function(a){d&&"function"==typeof d&&d(a),h&&h(1),g=null
}):h&&h(0)
}};
"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=y:"function"==typeof define&&define.amd?define(function(){return y
}):"object"==typeof G&&(G.SVGInjector=y)
}(window,document);
(function(r,p,n){var w="placeholder" in p.createElement("input"),t="placeholder" in p.createElement("textarea"),o=n.fn,u=n.valHooks,l,m;
if(w&&t){m=o.placeholder=function(){return this
};
m.input=m.textarea=true
}else{m=o.placeholder=function(){var a=this;
a.filter((w?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":v,"blur.placeholder":s}).data("placeholder-enabled",true).trigger("blur.placeholder");
return a
};
m.input=w;
m.textarea=t;
l={get:function(a){var b=n(a);
return b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value
},set:function(a,c){var b=n(a);
if(!b.data("placeholder-enabled")){return a.value=c
}if(c==""){a.value=c;
if(a!=p.activeElement){s.call(a)
}}else{if(b.hasClass("placeholder")){v.call(a,true,c)||(a.value=c)
}else{a.value=c
}}return b
}};
w||(u.input=l);
t||(u.textarea=l);
n(function(){n(p).delegate("form","submit.placeholder",function(){var a=n(".placeholder",this).each(v);
setTimeout(function(){a.each(s)
},10)
})
});
n(r).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""
})
})
}function q(a){var b={},c=/^jQuery\d+$/;
n.each(a.attributes,function(d,e){if(e.specified&&!c.test(e.name)){b[e.name]=e.value
}});
return b
}function v(a,d){var b=this,c=n(b);
if(b.value==c.attr("placeholder")&&c.hasClass("placeholder")){if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));
if(a===true){return c[0].value=d
}c.focus()
}else{b.value="";
c.removeClass("placeholder");
b==p.activeElement&&b.select()
}}}function s(){var c,b=this,d=n(b),a=d,e=this.id;
if(b.value==""){if(b.type=="password"){if(!d.data("placeholder-textinput")){try{c=d.clone().attr({type:"text"})
}catch(f){c=n("<input>").attr(n.extend(q(this),{type:"text"}))
}c.removeAttr("name").data({"placeholder-password":true,"placeholder-id":e}).bind("focus.placeholder",v);
d.data({"placeholder-textinput":c,"placeholder-id":e}).before(c)
}d=d.removeAttr("id").hide().prev().attr("id",e).show()
}d.addClass("placeholder");
d[0].value=d.attr("placeholder")
}else{d.removeClass("placeholder")
}}}(this,document,jQuery));
var AMK=AMK||{};
(function(a){AMK.initHeader=function(){var c=a(document).scrollTop(),d=a("#altera-header"),b=d.outerHeight();
a(window).scroll(function(){var e=a(document).scrollTop();
if(e>b){d.addClass("is-transitioning")
}else{d.removeClass("is-transitioning")
}c=a(document).scrollTop()
})
};
AMK.initLocalization=function(){var d="",b="",c=a(".lang-selector");
c.on("click",function(f){f.preventDefault();
var e=a(this).data("lang");
c.removeClass("active");
a(this).addClass("active");
if(e=="cn"){d="zh_CN";
b="zh-cn"
}else{if(e=="jp"){d="ja_JP";
b="ja-jp"
}else{d="en_US";
b="en-us"
}}document.cookie="languageT="+d+";path=/;domain=altera.com";
document.location=this.href
})
};
AMK.initSvgInjection=function(){var b=document.querySelectorAll("img.icon-svg");
SVGInjector(b)
};
AMK.initPrimaryMenu=function(){var d=a("#primary-menu"),b=d.find(".nav-tabs li"),c=d.find(".nav-panes > div");
b.each(function(f){var e=a(this);
e.click(function(g){b.removeClass("active");
e.addClass("active");
c.hide();
c.eq(f).show();
return false
})
})
};
AMK.initHeaderLogin=function(b){var c=AMK.getCookie("userName");
if(AMK.notEmpty(c)){c=c.replace(/"/g," ");
a(".header-login-label").text("Welcome, "+c)
}};
AMK.initForms=function(c){var b=a.extend({data_type:"json",form_wrap:".form-wrap",results_wrap:".form-ajax-results",loading:".loading",global_errors:".global-errors",field_error:".error",field_match_error:".error-match",form_row:".form-row",form_col:".form-cell"},c);
a('form [aria-required="true"]').blur(function(){if(a(this).val()!=""){var d=a(this).closest(b.form_col);
d=(d.length>0)?d:a(this).closest(b.form_row);
d.removeClass("error")
}});
a("form").submit(function(){var e=a(this).hasClass("validate-form")?AMK.validateForm(a(this),b):true;
if(e){if(a(this).hasClass("ajax-form")){return AMK.submitAjax(a(this),b)
}else{return true
}}else{var d=a(b.field_error+":visible").eq(0);
return false
}});
a("input, textarea").placeholder()
};
AMK.validateForm=function(c,b){var d=true;
c.find(b.global_errors).empty();
c.find(b.form_col).removeClass("error");
c.find('[aria-required="true"]:visible').each(function(){var e=a(this),i=e.val().trim(),h=e.attr("placeholder"),g=(typeof h!="undefined")?h:null,f=e.closest(b.form_col);
f=(f.length>0)?f:e.closest(b.form_row);
if(i==""||i==g){d=false;
f.addClass("error")
}if(e.data("validateEmail")==true){if(!AMK.checkEmail(i)){d=false;
f.addClass("error")
}}});
return d
};
AMK.checkEmail=function(c){var b=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(b.test(c)){return true
}else{return false
}};
AMK.getCookie=function(b){var c=new RegExp(b+"=([^;]+)");
var d=c.exec(document.cookie);
return(d!=null)?unescape(d[1]):null
};
AMK.notEmpty=function(b){return(b!=null&&b!=""&&typeof b!="undefined")?true:false
};
AMK.isTouchDevice=function(){try{document.createEvent("TouchEvent");
return true
}catch(b){return false
}};
a(document).ready(function(){AMK.initForms();
AMK.initHeader();
AMK.initPrimaryMenu();
AMK.initHeaderLogin();
AMK.initSvgInjection();
AMK.initLocalization()
})
})(jQuery);