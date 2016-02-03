var Demandbase=window.Demandbase||{};Demandbase.Config={clientId:"0CiRlDNS",key:"e3a48c09c25196444c90c75530cdd14c",ads:{pixels:{ad:"1424298344",rt:"1424298379",cn:null}},analytics:{fieldMap:null},forms:{companyID:null,emailID:null},conditions:[],segments:[],content:[]};"use strict";"undefined"===typeof window.console&&(window.console={log:function(){},debug:function(){}});"undefined"===typeof window.localStorage&&(window.localStorage={getItem:function(){},setItem:function(){}});
"undefined"===typeof JSON&&(JSON={stringify:function(){},parse:function(){}});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c=this.length>>>0,d=Number(b)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d++)if(d in this&&this[d]===a)return d;return-1});Demandbase.Connectors=window.Demandbase.Connectors||{};
Demandbase.utils={name:"Demandbase API Utilities",logging:Demandbase.Config.logging||!1,debug:Demandbase.Config.debug||!1,callbackStack:[],isCurrentPage:function(a,b){function c(a){return 0===a.indexOf("//")?a.substring(2,a.length):a.replace(/^.*?:\/\//g,"")}function d(a){-1!==a.indexOf(e,a.length-e.length)&&(a=a.substring(0,a.length-1));-1!==a.indexOf("/",a.length-1)&&(a=a.substring(0,a.length-1));return a}if(!a)return!1;var e="#",g=document.location.hash,h=document.location.search,f=document.location.href;
window.top!==window.self&&(f=document.referrer);b&&(h=b.indexOf(e),-1===h&&(h=b.length),g=b.substring(b.indexOf(e),b.length),h=b.substring(b.indexOf("?"),h),f=b);a=c(a);a=a.replace(/^(www\.)/g,"");a=d(a);f=c(f);f=f.replace(/^(www\.)/g,"");f=d(f);-1===a.indexOf(e)&&-1!==f.indexOf(e)&&(f=f.substring(0,f.length-g.length));-1===a.indexOf("?")&&-1!==f.indexOf("?")&&(f=f.substring(0,f.length-h.length));f=d(f);return f===a},isFormPage:function(){var a=Demandbase.Config.forms.emailFields||[];Demandbase.Config.forms.emailID&&
a.push(Demandbase.Config.forms.emailID);for(var b=0;b<a.length;b++)if(this.getElementByIdOrName(a[b]))return!0;return!1},flattenData:function(a){for(var b in a)if("object"==typeof a[b]&&null!==a[b]&&a.hasOwnProperty(b)){for(var c in a[b])a[b+"_"+c]=a[b][c];delete a[b]}return a},getElementByIdOrName:function(a){var b=null;a&&((b=document.getElementById(a)||null)||(b=document.getElementsByName(a)[0]||null));return b},getQueryParam:function(a){var b={},c=window.location.search.substring(1),d=c.split("&");
if(!c)return"";for(c=0;c<d.length;c++){var e=d[c].split("=");b[e[0]]=e[1]}return b[a]||""},log:function(a){("undefined"!==typeof window.console&&(this.logging||"true"===this.getQueryParam("db_logging"))||Demandbase.Config.logging)&&window.console.log("DB: "+a)},callback:function(a){try{var b=Demandbase.utils.callbackStack;Demandbase.utils.log("Running Demandbase.utils.callback");for(var c in b){var d=b[c];"function"===typeof d&&(d.call(Demandbase,a),this.log("Running callback..."))}}catch(e){this.log(e+
" : "+e.stack),this.debug&&alert(e.stack)}},registerCallback:function(a){try{var b=Demandbase.utils.callbackStack,c=Demandbase.IP.CompanyProfile;-1==b.indexOf(a)&&b.push(a);c&&a.call(Demandbase,c)}catch(d){this.log(d+" : "+d.stack),this.debug&&alert(d.stack)}},getAttrValue:function(a,b){var c=Demandbase.Config.nonCompanyDefault||Demandbase.utils.tokens.DFLT_NON_COMPANY,d=Demandbase.Config.nonWatchDefault||Demandbase.utils.tokens.DFLT_NON_AW,e={city:"registry_city",state:"registry_state",zip:"registry_zip_code",
country:"registry_country_code",country_name:"registry_country",latitude:"registry_latitude",longitude:"registry_longitude"}[b]||"",e=a[b]||a[e]||c,c=(a.company_name||c)!==c;return!1===a[b]?"false":-1!==b.indexOf("watch_list_")&&c?a[b]||d:e},loadDebugFile:function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0],c=Demandbase.Config.clientId+".js";a.async=!0;a.id="db_debug_lib";a.src=this.tokens.PROTOCOL+"scripts.demandbase.com/"+c;b.parentNode.insertBefore(a,b);
this.log("Loaded Debug library...")},loadScript:function(a,b,c){if(a){c=document.createElement("script");var d=document.getElementsByTagName("script")[0],e="https:"==document.location.protocol?"https:":"http:";c.async=!0;"undefined"!==typeof b&&b&&(c.id=b);0==a.indexOf("//")?a=e+a:0!==a.indexOf("http:")&&0!==a.indexOf("https:")&&(a=e+"//"+a);c.src=a;d.parentNode.insertBefore(c,d);this.log("Loaded: "+a)}else this.log("URL not provided.")},loadFormModule:function(a){var b=!1;if(b="function"===typeof Demandbase.Config.isFormPage?
Demandbase.Config.isFormPage():Demandbase.utils.isFormPage()){var c=this.tokens.URL_FORM_MODULE;"undefined"!==typeof a&&"undefined"!==typeof a.debug&&a.debug&&(c=this.tokens.URL_FORM_MODULE_DEBUG);"undefined"!==typeof window.MktoForms2&&"undefined"!==typeof window.MktoForms2.whenReady?MktoForms2.whenReady(function(a){Demandbase.utils.loadScript(c,"db_form_module")}):this.loadScript(c,"db_form_module");Demandbase.Connectors.initWebForm=function(a){Demandbase.Connectors.WebForm.connect(a||Demandbase.Config.forms||
{})}}},events:{add:function(a){try{var b=!0;if(this.isValid(a)){var c=a.type||Demandbase.utils.tokens.DFLT_EVENT_TYPE,d=a.elements,e=d.constructor;if(e===HTMLCollection||e===NodeList)for(var g in d)a=!1,d.hasOwnProperty(g)&&(a=this._attachListener(d[g]),a||(b=!1,Demandbase.utils.log("Event not added to"+d[g])));else return this._attachListener(a.elements,c,a.listener)}else return Demandbase.utils.log("Invalid event object."),!1;return b}catch(h){this.log(h+" : "+h.stack),this.debug&&alert(h.stack)}},
_attachListener:function(a,b,c){try{var d=!1;if(a)if(a instanceof jQuery){if("undefined"!==typeof a.on)a.on(b,c);else a.bind(b,c);d=!0;Demandbase.utils.log("Event Listener bind to: "+a+" on event "+b);a.attr("demandbase_event",!0)}else a.addEventListener?(a.addEventListener(b,function(){c.call()},!1),Demandbase.utils.log("Event Listener added to: "+a+" on event "+b),d=!0):a.attachEvent?(a.attachEvent(b,function(){c.call()}),Demandbase.utils.log("Event Attached to: "+a+" on event "+b),d=!0):Demandbase.utils.log("ERROR: no event attached to element: "+
a),d&&a.setAttribute("demandbase_event",!0);else return Demandbase.utils.log("Event not registered - invalid element/s."),null;return d}catch(e){this.log(e+" : "+e.stack),this.debug&&alert(e.stack)}},isValid:function(a){for(var b=!1,c=["elements","listener"],d=a.elements||null,e=a.listener||null,g=0;g<c.length;g++)if("undefined"===typeof a[c[g]])return Demandbase.utils.log("Invalid Event object. Missing: "+c[g]),!1;(d instanceof jQuery||d instanceof Node||d instanceof NodeList||d instanceof HTMLElement||
d instanceof HTMLCollection||d instanceof Window||d instanceof Document||"function"===typeof d)&&"function"===typeof e?b=!0:Demandbase.utils.log("Element is not proper instance type.");return b}},tokens:{ERR_NO_AUTH_KEY:"ERR_NO_AUTH_KEY",ERR_NO_PIXEL_ID:"ERR_NO_PIXEL_ID",QS_USE_TEST_IP:"db_useTestIp",QS_USE_TEST_DOMAIN:"db_useTestDomain",QS_QUERY_IP:"db_ip",QS_QUERY_DOMAIN:"db_domain",QS_ENABLE_LOG:"db_logging",QS_ENABLE_DEBUG:"db_debug",DFLT_NON_COMPANY:"(Non-Company Visitor)",DFLT_NON_AW:"(Non-AccountWatch Visitor)",
DFLT_EVENT_TYPE:"click",URL_FORM_MODULE:"scripts.demandbase.com/forms.min.js",URL_FORM_MODULE_DEBUG:"scripts.demandbase.com/forms.js",URL_IP_API:"api.demandbase.com/api/v2/ip.json",URL_DOMAIN_API:"api.demandbase.com/api/v1/domain.json",URL_AD_PIXEL:"a.company-target.com/pixel?type=js&id=",URL_CURRENT:function(){var a=document.URL;window.top!==window.self&&(a=document.referrer);return a=encodeURIComponent(a)}(),PROTOCOL:function(){return"https:"==document.location.protocol?"https://":"http://"}()}};
Demandbase.IP={name:"Demandbase IP API Wrapper",key:Demandbase.Config.key||Demandbase.Config.analytics.key||Demandbase.Config.ads.key||Demandbase.Config.forms.key||Demandbase.utils.tokens.ERR_NO_AUTH_KEY,CompanyProfile:null,useTestValue:Demandbase.utils.getQueryParam(Demandbase.utils.tokens.QS_USE_TEST_IP)||Demandbase.Config.useTestIp||!1,testValue:Demandbase.utils.getQueryParam(Demandbase.utils.tokens.QS_QUERY_IP)||Demandbase.Config.testIp||"No Test IP Set",_callback:function(a){if(!a)return"";try{var b=
Demandbase.utils;this.CompanyProfile=a=b.flattenData(a);b.callback(a);"undefined"==typeof Demandbase.Connectors.WebForm&&b.loadFormModule({debug:Demandbase.Config.debug||!1})}catch(c){Demandbase.utils.log("IP API Error: "+c+" : "+c.stack)}},load:function(a,b){try{if(this.key!==Demandbase.utils.tokens.ERR_NO_AUTH_KEY||"undefined"!==typeof a){var c,d=document.URL,e="undefined"!==typeof a?a:this.key,g="undefined"!==typeof b&&!1===b?"Demandbase.Ads.track":"Demandbase.IP._callback";window.top!==window.self&&
(d=document.referrer);d=encodeURIComponent(d);c=Demandbase.utils.tokens.URL_IP_API+"?key="+e+"&referrer="+encodeURIComponent(document.referrer)+"&page="+d+"&page_title="+encodeURIComponent(document.title)+"&callback="+g;this.useTestValue&&(c=c+"&query="+this.testValue);Demandbase.utils.log("Calling IP API...");Demandbase.utils.loadScript(c,"db_ip_api")}else Demandbase.utils.log("IP API query cancelled - check auth key.")}catch(h){Demandbase.utils.log("IP API Error: "+h+" : "+h.stack)}}};
Demandbase.Domain={name:"Demandbase Domain API Wrapper",key:Demandbase.Config.key||Demandbase.Config.analytics.key||Demandbase.Config.ads.key||Demandbase.Config.forms.key||Demandbase.utils.tokens.ERR_NO_AUTH_KEY,CompanyProfile:null,useTestValue:Demandbase.utils.getQueryParam(Demandbase.utils.tokens.QS_USE_TEST_DOMAIN)||Demandbase.Config.useTestDomain||!1,testValue:Demandbase.utils.getQueryParam(Demandbase.utils.tokens.QS_QUERY_DOMAIN)||Demandbase.Config.testDomain||"No Test Domain Set",_callback:function(a){try{var b=
Demandbase.utils;a.domain||a.person?(a=a.domain||a.person,this.CompanyProfile=a=b.flattenData(a)):Demandbase.utils.log("Demandbase.Domain: No company profile available for domain: "+this.getDomain())}catch(c){Demandbase.utils.log("Domain API Error: "+c+" : "+c.stack)}},load:function(){if("function"===typeof Demandbase.Config.getDomain&&this.key!==Demandbase.utils.tokens.ERR_NO_AUTH_KEY){var a;a=document.URL;window.top!==window.self&&(a=document.referrer);a=encodeURIComponent(a);a=Demandbase.utils.tokens.URL_DOMAIN_API+
"?key="+this.key+"&referrer="+encodeURIComponent(document.referrer)+"&page="+a+"&page_title="+encodeURIComponent(document.title)+"&callback=Demandbase.Domain._callback";a=this.useTestValue?a+"&query="+this.testValue:a+"&query="+this.getDomain();Demandbase.utils.loadScript(a,"db_domain_api");Demandbase.utils.log("Calling Domain API...")}else Demandbase.utils.log("Domain API query cancelled - check auth key or Config.getDomain")},getDomain:function(a){try{if(this.useTestValue)return this.testValue;
if("function"===typeof Demandbase.Config.getDomain)return Demandbase.Config.getDomain.call(Demandbase);Demandbase.utils.log("Warning: Config.getDomain fcn not defined.");return"getVisitorDomain function is not defined"}catch(b){Demandbase.utils.log("getDomain Error: "+b+" : "+b.stack)}}};(function(){Demandbase.init=function(){Demandbase.IP.load();"function"===typeof Demandbase.Config.getDomain&&Demandbase.Config.getDomain()&&Demandbase.Domain.load();Demandbase._isInitialized=!0}})();
(function(){var a=Demandbase.utils.callback;Demandbase.utils.callback=function(b){Demandbase.utils.log("Setup callback extender...");"function"===typeof Demandbase.Config.callback&&Demandbase.Config.callback.call(Demandbase,b);a.apply(Demandbase.utils,[b])}})();Demandbase.init();
Demandbase.Ads={name:"Demandbase Ad Connector",version:"4.1",pixels:Demandbase.Config.ads.pixels||{},conversionTriggers:Demandbase.Config.ads.conversionTriggers||{},track:function(a){try{Demandbase.Ads._log("tracked.")}catch(b){Demandbase.Ads._log("Error: "+b)}},trackConversion:function(){this._loadPixel("cn")},load:function(){try{this._setCampaign(),this.loadPixels(),this._setEvents(),Demandbase.utils.registerCallback(this.track),"undefined"!==typeof Demandbase.Config.ads.reportingOnly&&!0===Demandbase.Config.ads.reportingOnly&&
Demandbase.Config.ads.key!==Demandbase.IP.key&&Demandbase.IP.load(Demandbase.Config.ads.key,!1)}catch(a){this._log("Error: "+a)}},loadPixels:function(){try{this._loadPixel("ad"),this.isConversionPage()?this.trackConversion():this._loadPixel("rt")}catch(a){this._log("Error: "+a+" : "+a.stack)}},isConversionPage:function(a){if("undefined"!==typeof this.conversionTriggers.pages){var b=Demandbase.utils;pagesList=a?[a]:this.conversionTriggers.pages;for(var c in pagesList)if(pagesList.hasOwnProperty(c)&&
b.isCurrentPage(pagesList[c]))return!0}return!1},_loadPixel:function(a){var b=this.pixels[a]||Demandbase.utils.tokens.ERR_NO_PIXEL_ID;if(b&&b!==Demandbase.utils.tokens.ERR_NO_PIXEL_ID){var c=document.createElement("img"),d=document.getElementsByTagName("body")[0],e=Demandbase.utils;c.setAttribute("style","display:none");c.setAttribute("alt","Demandbase pixel");c.id="db_pixel_"+a;c.src=e.tokens.PROTOCOL+e.tokens.URL_AD_PIXEL+b+"&page="+e.tokens.URL_CURRENT;"undefined"!==typeof d&&d||(d=document.getElementsByTagName("head")[0]);
d.appendChild(c);this._log("Loaded Pixel "+c.src)}},_setCampaign:function(){if("undefined"!==typeof Demandbase.Config.ads.campaigns)for(var a=Demandbase.Config.ads.campaigns||[],b=Demandbase.utils,c=0;c<a.length;c++)for(var d=a[c],e=d.pages||[],g=0;g<e.length;g++)if(b.isCurrentPage(e[g])){this.pixels=d.pixels;this.conversionTriggers=d.conversionTriggers;this._log("Campaign set to: "+d.name);return}},_setEvents:function(){if("undefined"!==typeof this.conversionTriggers.events){var a=this.conversionTriggers.events||
[],b;for(b in a)if(a.hasOwnProperty(b)){var c=a[b];c.listener||(c.trackConversion?c.listener=function(){Demandbase.Ads.trackConversion()}:c.virtualPageview?c.listener=function(){Demandbase.Ads.loadPixels();Demandbase.IP.load(void 0,!1)}:this._log("Define a listener function or set trackConversion or virtualPageview"));Demandbase.utils.events.add(c)}}else this._log("No events in conversionTriggers")},_log:function(a){Demandbase.utils.log("CTA: "+a)}};Demandbase.Ads.load();
"function"===typeof Demandbase.Config.onLoad&&Demandbase.Config.onLoad.call(Demandbase);
