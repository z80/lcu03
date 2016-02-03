(function(a){a.merge=function(c,b){var d={},e;
for(e in c){if(c.hasOwnProperty(e)){d[e]=c[e]
}}for(e in b){if(b.hasOwnProperty(e)){d[e]=b[e]
}}return d
};
a.getArrayDifference=function(d,c){if(!d instanceof Array){throw new TypeError("Expected Array for a")
}if(!c instanceof Array){throw new TypeError("Expected Array for b")
}var f,e=[],g=[];
for(f=0;
f<c.length;
f++){e[c[f]]=true
}for(f=0;
f<d.length;
f++){if(!e[d[f]]){g.push(d[f])
}}return g
};
a.CookieManager={getCookie:function(b){if(!b||!this.cookieExists(b)){return null
}var d=decodeURIComponent(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+encodeURIComponent(b).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"));
var c=new Cookie(b,d);
return c
},setCookie:function(b){if(!b.name||/^(?:expires|max\-age|path|domain|secure)$/.test(b.name)){return
}var c="";
if(b.expires){switch(typeof b.expires){case"number":c="; max-age="+b.expires;
break;
case"String":c="; expires="+b.expires;
break;
case"object":if(b.expires.hasOwnProperty("toGMTString")){c="; expires="+b.expires.toGMTString()
}break
}}document.cookie=encodeURIComponent(b.name)+"="+encodeURIComponent(b.value)+c+(b.domain?"; domain="+b.domain:"")+(b.path?"; path="+b.path:"")+(b.secure?"; secure":"")
},removeCookie:function(b){if(!b||!this.cookieExists(b)){return
}var c=new Date();
c.setDate(c.getDate()-1);
document.cookie=encodeURIComponent(b)+"=; expires="+c.toGMTString()+";"
},cookieExists:function(b){return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(b).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)
},cookiesEnabled:function(){var c=new Cookie("browsermap_test_cookie","browsermap_test_cookie",10,"/");
this.setCookie(c);
var b=this.getCookie("browsermap_test_cookie");
if(b!==null){this.removeCookie("browsermap_test_cookie");
return true
}return false
}};
a.File={getFileExtension:function(b){var c="";
if(b&&b!==""&&b.indexOf(".")!=-1){c=b.substring(b.lastIndexOf(".")+1,b.length)
}return c
},removeSelectorsFromFile:function(b){if(b&&b!==""){var c=b.split(".");
if(c.length>2){return c[0]+"."+c[c.length-1]
}}return b
}};
a.Url={getDomainFromURL:function(b){var d="";
b=b.replace(/http:\/\/|https:\/\//,"");
var c=b.indexOf("/");
if(c==-1){d=b
}else{d=b.substring(0,c)
}return d
},decodeURLParameterValue:function(b){return decodeURIComponent(b.replace(/\+/g," "))
},getURLParameters:function(c){var e={},b=this;
var d=function(f,g,h){e[g]=b.decodeURLParameterValue(h)
};
c.replace(/[?&]+([^=&]+)=([^&]*)/gi,d);
return e
},getValueForParameter:function(b,c){return this.getURLParameters(b)[c]
},getURLParametersString:function(b){var c="";
if(b&&b!==""&&b.lastIndexOf("?")!=-1){c=b.substring(b.lastIndexOf("?"),b.length)
}return c
},getFileFromURL:function(b){var c="";
if(b&&b!==""){b=b.replace("https://","");
b=b.replace("http://","");
b=b.replace(a.Url.getURLParametersString(b),"");
if(b.lastIndexOf("/")!=-1&&b[b.lastIndexOf("/")+1]!="?"){c=b.substring(b.lastIndexOf("/")+1,b.length)
}}return c
},getFolderPathFromURL:function(c){var b="";
var d=c;
d=d.replace("https://","");
d=d.replace("http://","");
if(d&&d!==""&&d.lastIndexOf("/")!=-1){b=d.substring(0,d.lastIndexOf("/")+1);
b=c.substring(0,c.indexOf(b))+b
}return b
},getSelectorsFromURL:function(b){var d=[];
if(b&&b!==""){b=b.replace("https://","");
b=b.replace("http://","");
if(b.lastIndexOf("?")!=-1){b=b.substring(0,b.lastIndexOf("?"))
}if(b.lastIndexOf("/")!=-1){b=b.substring(b.lastIndexOf("/")+1,b.length);
var e=b.split(".");
if(e.length>2){for(var c=1;
c<e.length-1;
c++){d.push(e[c])
}}}}return d
},addSelectorsToURL:function(b,d){var c=this.getFileFromURL(b),e=a.Url.getURLParametersString(b);
c=a.File.removeSelectorsFromFile(c);
if(c&&c!==""){var f=this.getFolderPathFromURL(b);
var h=a.File.getFileExtension(c);
c=c.replace("."+h,"");
var g=f+c;
if(d.length>0){g+="."
}g+=d.join(".");
if(h&&h!==""){g+="."+h
}g+=e;
return g
}return b
},qualifyURL:function(b){var d=null,c;
if(b){c=document.createElement("div");
c.innerHTML='<a href="'+encodeURI(b)+'">x</a>';
d=c.firstChild.href
}return d
},getCanonicalURL:function(){var f=document.getElementsByTagName("head")[0],b,d,e,c;
if(f){b=f.getElementsByTagName("link");
if(b){for(d=0;
d<b.length;
d++){e=b[d];
if(e.rel&&e.rel==="canonical"){c=e.href;
break
}}}}return c
}}
})(window.BrowserMapUtil=window.BrowserMapUtil||{});
function Cookie(b,d,a,f,c,e){if(!(this instanceof Cookie)){return new Cookie(b,d,a,f,c,e)
}this.name=b;
this.value=d;
this.expires=a;
this.path=f;
this.domain=c;
this.secure=e
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){if(this===null){throw new TypeError()
}var d=Object(this);
var a=d.length>>>0;
if(a===0){return -1
}var e=0;
if(arguments.length>0){e=Number(arguments[1]);
if(e!=e){e=0
}else{if(e!==0&&e!=Infinity&&e!=-Infinity){e=(e>0||-1)*Math.floor(Math.abs(e))
}}}if(e>=a){return -1
}var b=e>=0?e:Math.max(a-Math.abs(e),0);
for(;
b<a;
b++){if(b in d&&d[b]===c){return b
}}return -1
}
}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}(function(l){var m="BMAP_",b="device",c="device",f="language",d=false,g=false,a=null,j={},k={},e={},h={};
l.THE_ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING=42;
l.VERSION="1.2.0";
var i="data-bmap-devgroups";
l.getProbingResults=function(){var o={},n;
for(n in k){if(k.hasOwnProperty(n)){o[n]=l.probe(n)
}}return o
};
l.config=function(n){if(n.cookiePrefix!==null){m=n.cookiePrefix
}if(n.deviceGroupCookieName!==null){b=n.deviceGroupCookieName
}if(n.deviceOverrideParameter!==null){c=n.deviceOverrideParameter
}if(n.languageOverrideParameter!==null){f=n.languageOverrideParameter
}if(n.enableForwardingWhenCookiesDisabled!==null){d=n.enableForwardingWhenCookiesDisabled
}};
l.getAllAlternateSites=function(){var o=[],n,p,s,t,q=false,u,r;
q=navigator.appVersion.indexOf("MSIE 7")!==-1;
t=document.getElementsByTagName("head")[0];
if(t){n=t.getElementsByTagName("link");
for(p=0;
p<n.length;
p++){s=n[p];
r=s.getAttribute(i);
if(s.rel=="alternate"&&r&&r!==""){if(q){u=BrowserMapUtil.Url.qualifyURL(s.href)
}else{u=s.href
}o.push({id:s.id,href:u,hreflang:s.hreflang,devgroups:r})
}}}return o
};
l.getAlternateSite=function(r,n){var p=l.getAllAlternateSites(),x=0,z=null,y=null,o=0,u=window.location.href,v=BrowserMapUtil.Url.getURLParametersString(u),s,q,t,w;
if(v&&v!==""){u=u.substring(0,u.indexOf(v))
}for(s=0;
s<p.length;
s++){t=0;
w=p[s].devgroups.split(",");
for(q=0;
q<w.length;
q++){if(r.indexOf(w[q].trim())!==-1){t++
}}if(typeof n=="function"&&t>0){if(n(p[s])){t++
}}if(t>x){z=p[s];
x=t
}if(p[s].href==u){o=t;
y=p[s]
}}if(o==x){z=y
}return z
};
l.getDeviceGroupsInRankingOrder=function(){var o=[],n;
for(n in h){if(h.hasOwnProperty(n)){o.push(h[n])
}}o.sort(function(q,p){return q.ranking-p.ranking
});
return o
};
l.probe=function(n){if(!k[n]){return null
}if(!e.hasOwnProperty(n)){e[n]=k[n]()
}return e[n]
};
l.getNewURL=function(p,n,u){var q=null,v=l.getAlternateSite(n,function(w){if(a&&w.hreflang&&w.hreflang.lastIndexOf(a)===0){return true
}}),o,r,t=BrowserMapUtil.Url.getURLParametersString(p),s=p.replace(t,"");
if(v){q=v.href
}if(!q){for(o=0;
o<n.length;
o++){r=l.getDeviceGroupByName(n[o]);
if(r){q=r.url;
if(q){break
}}}}if(!q){q=BrowserMapUtil.Url.addSelectorsToURL(s,u)
}if(t){q+=t
}return q
};
l.removeOverride=function(){var q=BrowserMapUtil.CookieManager.getCookie("o_"+m+b),r=window.location.href,p=BrowserMapUtil.Url.getURLParametersString(r),o,n;
if(q){BrowserMapUtil.CookieManager.removeCookie(m+b);
BrowserMapUtil.CookieManager.removeCookie(q.name);
q.name=m+b;
q.path="/";
BrowserMapUtil.CookieManager.setCookie(q)
}if(p){o=c+"="+BrowserMapUtil.Url.getValueForParameter(r,c);
r=r.replace(p,"");
n=p.indexOf(o);
if(n!==-1){if(p.length>n+o.length){if(p[n-1]=="?"){p=p.replace(o+"&","")
}else{p=p.replace("&"+o,"")
}}else{p=p.replace("?"+o,"")
}}r+=p
}window.location=r
};
l.forwardRequest=function(){var x=window.location.href,p=BrowserMapUtil.Url.getValueForParameter(x,c),o=[],D=[],u=BrowserMapUtil.CookieManager.getCookie("o_"+m+b),r=BrowserMapUtil.CookieManager.getCookie(m+b),C=[],w,y,v,s,t,B,n,A,z,q=BrowserMapUtil.Url.getCanonicalURL();
if(l.isEnabled()){a=BrowserMapUtil.Url.getValueForParameter(x,f);
if(p){o=p.split(",");
if(o.length>0){if(BrowserMapUtil.CookieManager.cookiesEnabled()){if(!u&&!r){u=new Cookie();
u.name="o_"+m+b;
u.path="/";
l.matchDeviceGroups();
for(y in j){if(j.hasOwnProperty(y)){C.push(j[y].name)
}}if(p!==C.join(",")){u.value=C.join(",");
BrowserMapUtil.CookieManager.setCookie(u)
}}else{if(!u){if(r.value!==o.join(",")){r.name="o_"+r.name;
r.path="/";
BrowserMapUtil.CookieManager.setCookie(r)
}}}r=new Cookie();
r.name=m+b;
r.value=o.join(",");
r.path="/";
BrowserMapUtil.CookieManager.setCookie(r);
if(u){if(u.value==r.value){BrowserMapUtil.CookieManager.removeCookie(u.name)
}}}}}if(r!==null||p){v=l.getDeviceGroups();
if(o.length===0){o=r.value.split(",")
}j={};
for(w=0;
w<o.length;
w++){s=o[w].trim();
if(v.hasOwnProperty(s)){if(v[s].isSelector){D.push(s)
}j[s]=v[s]
}}if(p&&r===null&&d){t=BrowserMapUtil.Url.getDomainFromURL(window.location.href);
B=document.getElementsByTagName("a");
for(w=0;
w<B.length;
w++){n=B[w].href;
if(n&&n.indexOf(t)!==-1){A=BrowserMapUtil.Url.getURLParametersString(n);
if(A){if(A.indexOf(f+"="+p)==-1){B[w].href=n+"&"+c+"="+p
}}else{B[w].href=n+"?"+c+"="+p
}}}}}else{l.matchDeviceGroups();
for(y in j){if(j.hasOwnProperty(y)){if(j[y].isSelector){D.push(j[y].name)
}o.push(j[y].name)
}}r=new Cookie();
r.name=m+b;
r.value=o.join(",");
r.path="/";
BrowserMapUtil.CookieManager.setCookie(r)
}z=l.getNewURL(x,o,D);
if(x!==z&&q!==z){window.location=z
}}};
l.clearProbeCache=function(){e={}
};
l.addDeviceGroup=function(n){if(typeof n.ranking!=="number"){throw new TypeError("Expected a Number for device group "+n.name+" ranking")
}if(typeof n.testFunction!=="function"){throw new TypeError("Expected a Function for device group "+n.name+" testFunction")
}h[n.name]=n
};
l.addProbe=function(o,n){if(typeof o!=="string"||o.length<1){throw new TypeError("invalid probe name")
}if(typeof n!=="function"){throw new TypeError("invalid probe function")
}if(!k.hasOwnProperty(o)){k[o]=n
}return l
};
l.getMatchedDeviceGroups=function(){return j
};
l.getDeviceGroups=function(){return h
};
l.matchDeviceGroups=function(){var n=l.getDeviceGroupsInRankingOrder(),o,p;
for(o=0;
o<n.length;
o++){p=n[o];
if(!!p.testFunction.call()){j[p.name]=p
}}g=true
};
l.getDeviceGroupByName=function(n){return h[n]
};
l.isEnabled=function(){var q=document.getElementsByTagName("head")[0],r,p,o,n;
if(q){r=q.getElementsByTagName("meta");
for(p=0;
p<r.length;
p++){if((n=r[p])&&(o=n.getAttribute("name"))){if(o==="browsermap.enabled"&&n.getAttribute("content")==="false"){return false
}}}}return true
};
return l
})(window.BrowserMap=window.BrowserMap||{});
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
window.Modernizr=function(an,am,al){function I(b){af.cssText=b
}function H(d,c){return I(ac.join(d+";")+(c||""))
}function Y(d,c){return typeof d===c
}function W(d,c){return !!~(""+d).indexOf(c)
}function U(e,c){for(var f in e){if(af[e[f]]!==al){return c=="pfx"?e[f]:!0
}}return !1
}function S(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==al){return j===!1?g[i]:Y(h,"function")?h.bind(j||c):h
}}return !1
}function Q(g,f,j){var i=g.charAt(0).toUpperCase()+g.substr(1),h=(g+" "+aa.join(i+" ")+i).split(" ");
return Y(f,"string")||Y(f,"undefined")?U(h,f):(h=(g+" "+Z.join(i+" ")+i).split(" "),S(h,f,j))
}var ak="2.5.3",aj={},ai=am.documentElement,ah="modernizr",ag=am.createElement(ah),af=ag.style,ae,ad={}.toString,ac=" -webkit- -moz- -o- -ms- ".split(" "),ab="Webkit Moz O ms",aa=ab.split(" "),Z=ab.toLowerCase().split(" "),X={},V={},T={},R=[],P=R.slice,O,M=function(t,s,r,q){var p,o,n,g=am.createElement("div"),f=am.body,b=f?f:am.createElement("body");
if(parseInt(r,10)){while(r--){n=am.createElement("div"),n.id=q?q[r]:ah+(r+1),g.appendChild(n)
}}return p=["&#173;","<style>",t,"</style>"].join(""),g.id=ah,(f?g:b).innerHTML+=p,b.appendChild(g),f||(b.style.background="",ai.appendChild(b)),o=s(g,t),f?g.parentNode.removeChild(g):b.parentNode.removeChild(b),!!o
},K={}.hasOwnProperty,J;
!Y(K,"undefined")&&!Y(K.call,"undefined")?J=function(d,c){return K.call(d,c)
}:J=function(d,c){return c in d&&Y(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=P.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(P.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(P.call(arguments)))
};
return f
});
var N=function(h,e){var b=h.join(""),a=e.length;
M(b,function(o,n){var m=am.styleSheets[am.styleSheets.length-1],l=m?m.cssRules&&m.cssRules[0]?m.cssRules[0].cssText:m.cssText||"":"",k=o.childNodes,g={};
while(a--){g[k[a].id]=k[a]
}aj.touch="ontouchstart" in an||an.DocumentTouch&&am instanceof DocumentTouch||(g.touch&&g.touch.offsetTop)===9,aj.csstransforms3d=(g.csstransforms3d&&g.csstransforms3d.offsetLeft)===9&&g.csstransforms3d.offsetHeight===3
},a,e)
}([,["@media (",ac.join("touch-enabled),("),ah,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",ac.join("transform-3d),("),ah,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")],[,"touch","csstransforms3d"]);
X.touch=function(){return aj.touch
},X.csstransforms3d=function(){var b=!!Q("perspective");
return b&&"webkitPerspective" in ai.style&&(b=aj.csstransforms3d),b
};
for(var L in X){J(X,L)&&(O=L.toLowerCase(),aj[O]=X[L](),R.push((aj[O]?"":"no-")+O))
}return I(""),ag=ae=null,aj._version=ak,aj._prefixes=ac,aj._domPrefixes=Z,aj._cssomPrefixes=aa,aj.testProp=function(b){return U([b])
},aj.testAllProps=Q,aj.testStyles=M,aj
}(this,this.document);
BrowserMap.addProbe("BrowserMap.version",function(){return BrowserMap.VERSION
}).addProbe("Modernizr.touch",function(){return Modernizr.touch
}).addProbe("Modernizr.csstransforms3d",function(){return Modernizr.csstransforms3d
}).addProbe("window.devicePixelRatio",function(){return window.devicePixelRatio
}).addProbe("window.orientation",function(){return window.orientation
}).addProbe("navigator.vendor",function(){return navigator.vendor
}).addProbe("navigator.platform",function(){return navigator.platform
}).addProbe("navigator.appName",function(){return navigator.appName
}).addProbe("navigator.appVersion",function(){return navigator.appVersion
}).addProbe("navigator.appCodeName",function(){return navigator.appCodeName
}).addProbe("navigator.userAgent",function(){return navigator.userAgent
}).addProbe("screenWidth",function(){return screen.width
}).addProbe("screenHeight",function(){return screen.height
}).addProbe("clientWidth",function(){return document.documentElement.clientWidth
}).addProbe("orientation",function(){var a="";
if(window.innerWidth>window.innerHeight){a="landscape"
}else{a="portrait"
}return a
}).addProbe("portrait",function(){return BrowserMap.probe("orientation")=="portrait"
}).addProbe("landscape",function(){return BrowserMap.probe("orientation")=="landscape"
}).addProbe("screenWidthDependingOnOrientation",function(){var a=0;
if(BrowserMap.probe("orientation")==="portrait"){a=screen.width>screen.height?screen.height:screen.width
}else{a=screen.width<screen.height?screen.height:screen.width
}return a
}).addProbe("clientWidthDependingOnOrientation",function(){var a=0;
if(BrowserMap.probe("orientation")=="portrait"){a=document.documentElement.clientWidth<document.documentElement.clientHeight?document.documentElement.clientWidth:document.documentElement.clientHeight
}else{a=document.documentElement.clientWidth>document.documentElement.clientHeight?document.documentElement.clientWidth:document.documentElement.clientHeight
}return a
}).addProbe("devicePixelRatio",function(){var c=window.matchMedia,b=-1,e;
if(c){for(var a=0.5;
a<=3;
a+=0.05){var d=Math.round(a*100)/100;
if(c("(max-resolution: "+d+"dppx),                     (max-resolution: "+d*96+"dpi),                     (-webkit-max-device-pixel-ratio: "+d+"),                     (-o-device-pixel-ratio: "+d+")").matches){b=d;
break
}}}e=BrowserMap.probe("navigator.userAgent");
if(e.indexOf("BlackBerry")!=-1||e.indexOf("Windows Phone")!=-1){b=Math.round(BrowserMap.probe("screenWidthDependingOnOrientation")/BrowserMap.probe("clientWidthDependingOnOrientation")*100)/100
}return b
}).addProbe("canResizeBrowserWindow",function(){return Math.round(BrowserMap.probe("screenWidthDependingOnOrientation")/BrowserMap.probe("devicePixelRatio"))-BrowserMap.THE_ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING>BrowserMap.probe("clientWidth")
});
BrowserMap.addDeviceGroup({ranking:0,name:"smartphone",description:"Smartphone",testFunction:function(){if(BrowserMap.probe("clientWidth")>480&&BrowserMap.probe("portrait")){return false
}if(BrowserMap.probe("clientWidth")>=900&&BrowserMap.probe("landscape")){return false
}if(BrowserMap.probe("canResizeBrowserWindow")){return false
}return true
},isSelector:true});
BrowserMap.addDeviceGroup({ranking:10,name:"tablet",description:"Standard Tablet",testFunction:function(){if(BrowserMap.probe("portrait")&&BrowserMap.probe("clientWidth")<=480){return false
}if(BrowserMap.probe("landscape")&&BrowserMap.probe("clientWidth")<900){return false
}if(!Modernizr.touch){return false
}if(BrowserMap.probe("canResizeBrowserWindow")){return false
}return true
},isSelector:true});
BrowserMap.addDeviceGroup({ranking:20,name:"highResolutionDisplay",description:"High Resolution Display",testFunction:function(){return BrowserMap.probe("devicePixelRatio")>=2
},isSelector:true});
BrowserMap.addDeviceGroup({ranking:30,name:"browser",description:"Modern desktop browser",testFunction:function(){if(BrowserMap.probe("portrait")&&BrowserMap.probe("clientWidth")<720){return false
}if(BrowserMap.probe("landscape")&&BrowserMap.probe("clientWidth")<1200){return false
}return Modernizr.csstransforms3d&&!Modernizr.touch
},isSelector:false});
BrowserMap.addDeviceGroup({ranking:Number.MAX_VALUE,name:"oldBrowser",description:"Old desktop browser",testFunction:function(){for(var a in BrowserMap.getMatchedDeviceGroups()){if(BrowserMap.getMatchedDeviceGroups().hasOwnProperty(a)){return false
}}return true
},isSelector:false});
BrowserMap.forwardRequest();