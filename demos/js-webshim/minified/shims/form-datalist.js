jQuery.webshims.register("form-datalist",function(b,g,n,i,j){g.propTypes.element=function(h){g.createPropDefault(h,"attr");if(!h.prop)h.prop={get:function(){var g=h.attr.get.call(this);g&&(g=b("#"+g)[0])&&h.propNodeName&&!b.nodeName(g,h.propNodeName)&&(g=null);return g||null},writeable:!1}};(function(){if(!Modernizr.datalist){var h=0,o={submit:1,button:1,reset:1,hidden:1,range:1,date:1},l=b.browser.msie&&parseInt(b.browser.version,10)<7,k={},m=function(a){if(!a)return[];if(k[a])return k[a];var b;
g.ready("json-storage",function(){try{b=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}k[a]=b||[]});return b||[]},p={_create:function(a){if(!o[(a.input.getAttribute("type")||"").toLowerCase()||a.input.type]){var e=a.datalist,c=b.data(a.input,"datalistWidget");if(e&&c&&c.datalist!==e)c.datalist=e,c.id=a.id,c._resetListCached();else if(e){if(!(c&&c.datalist===e)){h++;var d=this;this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(b.proxy(d,"hideList"),9)};
this.datalist=e;this.id=a.id;this.hasViewableData=!0;this._autocomplete=b.attr(a.input,"autocomplete");b.data(a.input,"datalistWidget",this);this.shadowList=b('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=a.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseover.datalistWidget mousedown.datalistWidget click.datalistWidget",function(a){var c=b("li:not(.hidden-item)",d.shadowList),e=a.type=="mousedown"||a.type=="click";d.markItem(c.index(a.target),e,c);a.type==
"click"&&d.hideList();return a.type!="mousedown"}).bind("focusout",this.timedHide);a.input.setAttribute("autocomplete","off");b(a.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",b.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(a){var c=a.keyCode;if(c==40&&!d.showList())return d.markItem(d.index+1,!0),!1;if(d.isListVisible){if(c==38)return d.markItem(d.index-1,!0),!1;if(!a.shiftKey&&(c==33||c==36))return d.markItem(0,!0),!1;if(!a.shiftKey&&(c==34||c==35))return a=
b("li:not(.hidden-item)",d.shadowList),d.markItem(a.length-1,!0,a),!1;if(c==13||c==27)return c==13&&(a=b("li.active-item:not(.hidden-item)",d.shadowList),a[0]&&(b.prop(d.input,"value",a.attr("data-value")),b(d.input).triggerHandler("updateInput"))),d.hideList(),!1}}).bind("focus.datalistWidget",function(){b(this).hasClass("list-focus")&&d.showList()}).bind("blur.datalistWidget",this.timedHide);b(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",b.proxy(this,
"_resetListCached"));this._resetListCached();a.input.form&&a.input.id&&b(a.input.form).bind("submit.datalistWidget"+a.input.id,function(){var c=b.prop(a.input,"value");d.storedOptions=m(a.input.name||a.input.id);if(c&&d.storedOptions.indexOf(c)==-1){d.storedOptions.push(c);var c=a.input.name||a.input.id,e=d.storedOptions;if(c){e=e||[];try{localStorage.setItem("storedDatalistOptions"+c,JSON.stringify(e))}catch(g){}}}});b(n).bind("unload",function(){d.destroy()})}}else c&&c.destroy()}},destroy:function(){var a=
b.attr(this.input,"autocomplete");b(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();b(i).unbind(".datalist"+this.id);this.input.form&&this.input.id&&b(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");a===j?this.input.removeAttribute("autocomplete"):b(this.input).attr("autocomplete",a)},_resetListCached:function(a){var b=this;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";if(!this.updateTimer)this.updateTimer=
setTimeout(function(){b.updateListOptions(a&&i.activeElement==b.input);b=null},0)},updateListOptions:function(a){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:b.curCSS(this.input,"fontSize"),fontFamily:b.curCSS(this.input,"fontFamily")});for(var e=[],c=[],d=[],f,g=b("option",this.datalist),h=0,i=b("option",this.datalist).length;h<i;h++){f=g[h];if(f.disabled)return;f={value:b(f).val()||"",text:b.trim(b.attr(f,"label")||f.textContent||f.innerText||
b.text([f])||""),className:f.className||"",style:b.attr(f,"style")||""};if(!f.text)f.text=f.value;c[h]=f.value;d[h]=f}this.storedOptions=m(this.input.name||this.input.id);this.storedOptions.forEach(function(a){c.indexOf(a)==-1&&d.push({value:a,text:a,className:"",style:""})});d.forEach(function(a,b){var c=a.value.indexOf('"')!=-1?"'"+a.value+"'":'"'+a.value+'"';e[b]="<li data-value="+c+' class="'+a.className+'" style="'+a.style+'" tabindex="-1" role="listitem">'+a.text+"</li>"});this.arrayOptions=
d;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+e.join("\n")+"</ul>");b.fn.bgIframe&&l&&this.shadowList.bgIframe();(a||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var a=b.prop(this.input,"value").toLowerCase();if(!(a===this.lastUpdatedValue||this.lastUnfoundValue&&a.indexOf(this.lastUnfoundValue)===0)){this.lastUpdatedValue=a;var e=!1,c=b("li",this.shadowList);a?this.arrayOptions.forEach(function(d,f){if(!("lowerText"in
d))d.lowerText=d.text.toLowerCase(),d.lowerValue=d.value.toLowerCase();d.lowerText.indexOf(a)!==-1||d.lowerValue.indexOf(a)!==-1?(b(c[f]).removeClass("hidden-item"),e=!0):b(c[f]).addClass("hidden-item")}):(c.removeClass("hidden-item"),e=!0);(this.hasViewableData=e)?this.showList():(this.lastUnfoundValue=a,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var a=this,e=b(this.input).offset();
e.top+=b(this.input).outerHeight();e.width=b(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);l&&(this.shadowList.css("height","auto"),this.shadowList.height()>250&&this.shadowList.css("height",220));this.shadowList.css(e).addClass("datalist-visible");this.isListVisible=!0;b(i).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(c){c.target===a.input||a.shadowList[0]===c.target||b.contains(a.shadowList[0],
c.target)?(clearTimeout(a.hideTimer),setTimeout(function(){clearTimeout(a.hideTimer)},0)):a.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");this.index=-1;this.isListVisible=!1;b(this.input).removeAttr("aria-activedescendant");b(i).unbind(".datalist"+this.id);return!0},scrollIntoView:function(a){var e=b("> ul",this.shadowList),c=a.position();c.top-=
(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);c.top<0?this.shadowList.scrollTop(this.shadowList.scrollTop()+c.top-2):(c.top+=a.outerHeight(),a=this.shadowList.height(),c.top>a&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(c.top-a)+2))},markItem:function(a,e,c){c=c||b("li:not(.hidden-item)",this.shadowList);if(c.length)a<0?a=c.length-1:a>=c.length&&(a=0),c.removeClass("active-item"),this.shadowList.addClass("list-item-active"),
c=c.filter(":eq("+a+")").addClass("active-item"),e&&(b.prop(this.input,"value",c.attr("data-value")),b.attr(this.input,"aria-activedescendant",b.webshims.getID(c)),b(this.input).triggerHandler("updateInput"),this.scrollIntoView(c)),this.index=a}};(function(){g.defineNodeNameProperties("input",{list:{attr:{get:function(){var a=g.contentAttr(this,"list");return a==null?j:a},set:function(a){g.contentAttr(this,"list",a);g.objectCreate(p,j,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,
reflect:!0,propType:"element",propNodeName:"datalist"},selectedOption:{prop:{writeable:!1,get:function(){var a=b.prop(this,"list"),e=null,c;if(!a)return e;c=b.attr(this,"value");if(!c)return e;a=b.prop(a,"options");if(!a.length)return e;b.each(a,function(a,f){if(c==b.prop(f,"value"))return e=f,!1});return e}}},autocomplete:{attr:{get:function(){var a=b.data(this,"datalistWidget");return a?a._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(a){var e=
b.data(this,"datalistWidget");e?(e._autocomplete=a,a=="off"&&e.hideList()):"autocomplete"in this?this.autocomplete=a:this.setAttribute("autocomplete",a)}}}});g.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=b("select",this);return a[0]?a[0].options:[]}}});g.addReady(function(a,e){e.filter("select, option").each(function(){var a=this.parentNode,d=b.nodeName(a,"datalist");if(a&&!d)a=a.parentNode,d=b.nodeName(a,"datalist");a&&d&&b(a).triggerHandler("updateDatalist")})})})()}})()});