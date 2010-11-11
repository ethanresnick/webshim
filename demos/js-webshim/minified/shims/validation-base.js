jQuery.webshims.ready("es5",function(a,j,w){var p=j.validityMessages,n=a.support,u=false,q=document;if(n.validity)u=!w.noHTMLExtFixes;a.extend(a.expr.filters,{valid:function(c){return(a.attr(c,"validity")||{valid:true}).valid},invalid:function(c){return!a.expr.filters.valid(c)},willValidate:function(c){return a.attr(c,"willValidate")}});j.triggerInlineForm=function(){var c=function(d){if(typeof d!="string"||d.indexOf("-")!==-1||d.indexOf(".")!==-1||d.indexOf('"')!==-1)return"";return"var "+d+' = this.form["'+
d+'"];'};return function(d,b){var h=d["on"+b]||d.getAttribute("on"+b)||"",i;b=a.Event({type:b,target:d[0],currentTarget:d[0]});if(h&&typeof h=="string"&&d.form&&d.form.elements){var l="";i=0;for(var o=d.form.elements,f=o.length;i<f;i++){var k=o[i].name,r=o[i].id;if(k)l+=c(k);if(r&&r!==k)l+=c(r)}i=function(){eval(l+h)}.call(d,b)}a(d).trigger(b);return i}}();j.validityAlert=function(){var c=!a.browser.msie||parseInt(a.browser.version,10)>7?"span":"label",d={hideDelay:5E3,showFor:function(f,k,r){f=a(f);
var t=(f.data("inputUIReplace")||{visual:f}).visual;o();d.clear();this.getMessage(f,k);this.position(t);this.show();if(this.hideDelay)h=setTimeout(i,this.hideDelay);if(!r){f=a("input, select, textarea, .ui-slider-handle",t).filter(":visible:first");f[0]||(f=t);b.attr("for",j.getID(f));f.focus();a(q).bind("focusout.validityalert",i)}},getMessage:function(f,k){a("> span",b).text(k||f.attr("validationMessage"))},position:function(f){var k=f.offset();k.top+=f.outerHeight();b.css(k)},show:function(){b.css("display")===
"none"?b.fadeIn():b.fadeTo(400,1)},hide:function(){d.clear();b.fadeOut()},clear:function(){clearTimeout(h);a(q).unbind("focusout.validityalert");b.stop().removeAttr("for")},alert:a("<"+c+' class="validity-alert" role="alert"><span class="va-box" /></'+c+">").css({position:"absolute",display:"none"})},b=d.alert,h=false,i=a.proxy(d,"hide"),l=false,o=function(){if(!l){l=true;a(function(){b.appendTo("body")})}};return d}();p.en=p.en||p["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};p["en-US"]=p["en-US"]||p.en;p[""]=p[""]||p["en-US"];p.de=p.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var y=p[""];a(q).bind("htmlExtLangChange",function(){j.activeLang(p,"validation-base",function(c){y=c})});j.createValidationMessage=function(c,d){var b=y[d];if(b&&typeof b!=="string")b=b[(c.getAttribute("type")||"").toLowerCase()]||b.defaultMessage;b&&["value","min","max","title","maxlength","label"].forEach(function(h){if(b.indexOf("{%"+h)!==-1){var i=(h=="label"?a.trim(a("label[for="+c.id+"]",c.form).text()).replace(/\*$|:$/,""):a.attr(c,h))||
"";b=b.replace("{%"+h+"}",i);if("value"==h)b=b.replace("{%valueLen}",i.length)}});return b||""};a.each(n.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(c,d){j.attr(d,{elementNames:["input","select","textarea"],getter:function(b){var h="";if(!a.attr(b,"willValidate"))return h;var i=a.attr(b,"validity")||{valid:1};if(i.valid)return h;if(i.customError||d==="validationMessage")if(h="validationMessage"in b?b.validationMessage:a.data(b,"customvalidationMessage"))return h;
a.each(i,function(l,o){if(!(l=="valid"||!o))if(h=j.createValidationMessage(b,l))return false});return h||""}})});var B=n.validity&&(j.overrideValidationMessages||!n.requiredSelect||!n.inputUI);j.addMethod("setCustomValidity",function(c){c+="";if(this.setCustomValidity){this.setCustomValidity(c);if(B){a.data(this,"hasCustomError",!!c);testValidity(this)}}else a.data(this,"customvalidationMessage",""+c)});(function(){var c,d=[],b="value"in q.createElement("output")&&"list"in q.createElement("input"),
h,i;if(u&&w.addEventListener){var l={timer:void 0,prevented:false};w.addEventListener("submit",function(f){!l.prevented&&f.target.checkValidity&&a.attr(f.target,"novalidate")==null&&a(f.target).checkValidity()},true);var o=function(f){if(a.attr(f.target,"formnovalidate")!=null){l.timer&&clearTimeout(l.timer);l.prevented=true;l.timer=setTimeout(function(){l.prevented=false},20)}};w.addEventListener("click",o,true);w.addEventListener("touchstart",o,true);w.addEventListener("touchend",o,true)}a(q).bind("invalid",
function(f){if(u&&a.attr(f.target,"validity").valid){f.stopImmediatePropagation();return false}if(!c){if((i=f.target.form)&&u){var k=a(i).bind("submit.preventInvalidSubmit",function(r){if(a.attr(i,"novalidate")==null){r.stopImmediatePropagation();return false}}).data("events").submit;k&&k.length>1&&k.unshift(k.pop())}c=a.Event("firstinvalid");a(f.target).trigger(c)}c&&c.isDefaultPrevented()&&f.preventDefault();if(!n.validity||d.indexOf(f.target)==-1)d.push(f.target);else u&&f.stopImmediatePropagation();
f.extraData="fix";clearTimeout(h);h=setTimeout(function(){var r={type:"lastinvalid",cancelable:false,invalidlist:a(d)};u&&!b&&q.activeElement&&c&&c.target!==q.activeElement&&!a.data(c.target,"maybePreventedinvalid")&&j.validityAlert.showFor(c.target);c=false;d=[];a(i).unbind("submit.preventInvalidSubmit");a(f.target).trigger(r,r)},9)})})();(function(){if(!(!u||n.fieldsetValidation)){var c=function(d){var b=(a.attr(d,"validity")||{valid:true}).valid;!b&&d.checkValidity()&&a(d).trigger("invalid");return b};
j.addMethod("checkValidity",function(){if(this.elements||a.nodeName(this,"fieldset")){var d=true;a(this.elements||"input, textarea, select",this).each(function(){c(this)||(d=false)});return d}else if(this.checkValidity)return c(this)})}})();(function(){if(n.validity){var c=j.inputTypes,d={};j.addInputType=function(e,m){c[e]=m};j.addValidityRule=function(e,m){d[e]=m};j.addValidityRule("typeMismatch",function(e,m,g,s){if(m==="")return false;s=s.typeMismatch;if(!("type"in g))g.type=(e[0].getAttribute("type")||
"").toLowerCase();if(c[g.type]&&c[g.type].mismatch)s=c[g.type].mismatch(m,e);return s});var b=j.overrideValidationMessages,h=!n.requiredSelect||!n.inputUI||b,i=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],l=a.attr,o=a.fn.val,f=b?{value:1,checked:1}:{value:1},k=b?["textarea"]:[],r={radio:1,checkbox:1},t=function(e,m){if(e.form){var g=(e.getAttribute&&e.getAttribute("type")||e.type||"").toLowerCase();if(!b)if(!(!n.requiredSelect&&
g=="select-one")&&!c[g])return;b&&!m&&r[g]&&e.name?a(q.getElementsByName(e.name)).each(function(){a.attr(this,"validity")}):a.attr(e,"validity")}};if(!n.requiredSelect||b){a.extend(f,{required:1,size:1,multiple:1,selectedIndex:1});k.push("select")}if(!n.inputUI||b){a.extend(f,{min:1,max:1,step:1});k.push("input")}if(!n.requiredSelect){j.createBooleanAttrs("required",["select"]);j.addValidityRule("valueMissing",function(e,m,g,s){if(g.nodeName=="select"&&!m&&e.attr("required")&&e[0].size<2){if(!g.type)g.type=
e[0].type;if(g.type=="select-one"&&a("> option:first-child:not(:disabled)",e).attr("selected"))return true}return s.valueMissing})}if(h){j.attr("validity",{elementNames:k,getter:function(e){var m=e.validity;if(!m)return m;var g={};i.forEach(function(v){g[v]=m[v]});if(!a.attr(e,"willValidate"))return g;var s=a(e),C={type:(e.getAttribute&&e.getAttribute("type")||"").toLowerCase(),nodeName:(e.nodeName||"").toLowerCase()},D=o.call(s),E=!!a.data(e,"hasCustomError"),z;g.customError=E;if(g.valid&&g.customError)g.valid=
false;else if(!g.valid){var A=true;a.each(g,function(v,x){if(x)return A=false});if(A)g.valid=true}a.each(d,function(v,x){g[v]=x(s,D,C,g);if(g[v]&&(g.valid||!z&&b)){e.setCustomValidity(j.createValidationMessage(e,v));g.valid=false;z=true}});g.valid&&e.setCustomValidity("");return g}});a.fn.val=function(){var e=o.apply(this,arguments);this.each(function(){t(this)});return e};a.attr=function(e,m,g){var s=l.apply(this,arguments);f[m]&&g!==void 0&&e.form&&t(e);return s};if(q.addEventListener){q.addEventListener("change",
function(e){t(e.target)},true);n.inputUI||q.addEventListener("input",function(e){t(e.target)},true)}j.addReady(function(e){a(k.join(","),e).each(function(){t(this,true)})})}}})();j.createReadyEvent("validation-base")},true);
