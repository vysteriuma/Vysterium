(()=>{"use strict";const e=self.Ultraviolet,t=self.UVClient,a=self.index$config,r=self.index$bareData,o=self.index$bareURL,n=self.index$cookies;if("object"!=typeof r||"string"!=typeof o||"string"!=typeof n)throw new TypeError("Unable to load global UV data");function i(s){if("index"in s&&s.index instanceof e)return!1;s.document&&s.window&&s.document.querySelectorAll("script[index-script]").forEach((e=>e.remove()));const l=!s.window,d="index",c="index$",u=new e(a),h=new t(s),{HTMLMediaElement:m,HTMLScriptElement:v,HTMLAudioElement:p,HTMLVideoElement:g,HTMLInputElement:b,HTMLEmbedElement:f,HTMLTrackElement:y,HTMLAnchorElement:_,HTMLIFrameElement:w,HTMLAreaElement:S,HTMLLinkElement:k,HTMLBaseElement:P,HTMLFormElement:U,HTMLImageElement:M,HTMLSourceElement:x}=s;h.nativeMethods.defineProperty(s,"index",{value:u,enumerable:!1}),u.meta.origin=location.origin,u.location=h.location.emulate((e=>"about:srcdoc"===e?new URL(e):(e.startsWith("blob:")&&(e=e.slice("blob:".length)),new URL(u.sourceUrl(e)))),(e=>u.rewriteUrl(e)));let E=n;u.meta.url=u.location,u.domain=u.meta.url.host,u.blobUrls=new s.Map,u.referrer="",u.cookies=[],u.localStorageObj={},u.sessionStorageObj={};const O=new e.BareClient(o,r);if("about:srcdoc"===u.location.href&&(u.meta=s.parent.index.meta),s.EventTarget&&(u.addEventListener=s.EventTarget.prototype.addEventListener,u.removeListener=s.EventTarget.prototype.removeListener,u.dispatchEvent=s.EventTarget.prototype.dispatchEvent),h.nativeMethods.defineProperty(h.storage.storeProto,"index$storageObj",{get(){return this===h.storage.sessionStorage?u.sessionStorageObj:this===h.storage.localStorage?u.localStorageObj:void 0},enumerable:!1}),s.localStorage){for(const e in s.localStorage)e.startsWith(c+u.location.origin+"@")&&(u.localStorageObj[e.slice((c+u.location.origin+"@").length)]=s.localStorage.getItem(e));u.lsWrap=h.storage.emulate(h.storage.localStorage,u.localStorageObj)}if(s.sessionStorage){for(const e in s.sessionStorage)e.startsWith(c+u.location.origin+"@")&&(u.sessionStorageObj[e.slice((c+u.location.origin+"@").length)]=s.sessionStorage.getItem(e));u.ssWrap=h.storage.emulate(h.storage.sessionStorage,u.sessionStorageObj)}let $=s.document?h.node.baseURI.get.call(s.document):s.location.href,j=u.sourceUrl($);h.nativeMethods.defineProperty(u.meta,"base",{get:()=>s.document?(h.node.baseURI.get.call(s.document)!==$&&($=h.node.baseURI.get.call(s.document),j=u.sourceUrl($)),j):u.meta.url.href}),u.methods={setSource:"index$setSource",source:"index$source",location:"index$location",function:"index$function",string:"index$string",eval:"index$eval",parent:"index$parent",top:"index$top"},u.filterKeys=[d,u.methods.setSource,u.methods.source,u.methods.location,u.methods.function,u.methods.string,u.methods.eval,u.methods.parent,u.methods.top,"index$protocol","index$storageObj","index$url","index$modifiedStyle","index$config","index$dispatched","Ultraviolet","indexHook"],h.on("wrap",((e,t)=>{h.nativeMethods.defineProperty(t,"name",h.nativeMethods.getOwnPropertyDescriptor(e,"name")),h.nativeMethods.defineProperty(t,"length",h.nativeMethods.getOwnPropertyDescriptor(e,"length")),h.nativeMethods.defineProperty(t,u.methods.string,{enumerable:!1,value:h.nativeMethods.fnToString.call(e)}),h.nativeMethods.defineProperty(t,u.methods.function,{enumerable:!1,value:e})})),h.fetch.on("request",(e=>{e.data.input=u.rewriteUrl(e.data.input)})),h.fetch.on("requestUrl",(e=>{e.data.value=u.sourceUrl(e.data.value)})),h.fetch.on("responseUrl",(e=>{e.data.value=u.sourceUrl(e.data.value)})),h.xhr.on("open",(e=>{e.data.input=u.rewriteUrl(e.data.input)})),h.xhr.on("responseUrl",(e=>{e.data.value=u.sourceUrl(e.data.value)})),h.workers.on("worker",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.workers.on("addModule",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.workers.on("importScripts",(e=>{for(const t in e.data.scripts)e.data.scripts[t]=u.rewriteUrl(e.data.scripts[t])})),h.workers.on("postMessage",(e=>{let t=e.data.origin;e.data.origin="*",e.data.message={__data:e.data.message,__origin:u.meta.url.origin,__to:t}})),h.navigator.on("sendBeacon",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.document.on("getCookie",(e=>{e.data.value=E})),h.document.on("setCookie",(e=>{Promise.resolve(u.cookie.setCookies(e.data.value,u.db,u.meta)).then((()=>{u.cookie.db().then((e=>{u.cookie.getCookies(e).then((e=>{E=u.cookie.serialize(e,u.meta,!0)}))}))}));const t=u.cookie.setCookie(e.data.value)[0];t.path||(t.path="/"),t.domain||(t.domain=u.meta.url.hostname),u.cookie.validateCookie(t,u.meta,!0)&&(E.length&&(E+="; "),E+=`${t.name}=${t.value}`),e.respondWith(e.data.value)})),h.element.on("setInnerHTML",(e=>{switch(e.that.tagName){case"SCRIPT":e.data.value=u.js.rewrite(e.data.value);break;case"STYLE":e.data.value=u.rewriteCSS(e.data.value);break;default:e.data.value=u.rewriteHtml(e.data.value)}})),h.element.on("getInnerHTML",(e=>{if("SCRIPT"===e.that.tagName)e.data.value=u.js.source(e.data.value);else e.data.value=u.sourceHtml(e.data.value)})),h.element.on("setOuterHTML",(e=>{e.data.value=u.rewriteHtml(e.data.value,{document:"HTML"===e.that.tagName})})),h.element.on("getOuterHTML",(e=>{switch(e.that.tagName){case"HEAD":e.data.value=u.sourceHtml(e.data.value.replace(/<head(.*)>(.*)<\/head>/s,"<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s,"<head$1>$2</head>");break;case"BODY":e.data.value=u.sourceHtml(e.data.value.replace(/<body(.*)>(.*)<\/body>/s,"<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s,"<body$1>$2</body>");break;default:e.data.value=u.sourceHtml(e.data.value,{document:"HTML"===e.that.tagName})}})),h.document.on("write",(e=>{if(!e.data.html.length)return!1;e.data.html=[u.rewriteHtml(e.data.html.join(""))]})),h.document.on("writeln",(e=>{if(!e.data.html.length)return!1;e.data.html=[u.rewriteHtml(e.data.html.join(""))]})),h.element.on("insertAdjacentHTML",(e=>{e.data.html=u.rewriteHtml(e.data.html)})),h.eventSource.on("construct",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.eventSource.on("url",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.idb.on("idbFactoryOpen",(e=>{"__op"!==e.data.name&&(e.data.name=`${u.meta.url.origin}@${e.data.name}`)})),h.idb.on("idbFactoryName",(e=>{e.data.value=e.data.value.slice(u.meta.url.origin.length+1)})),h.history.on("replaceState",(e=>{e.data.url&&(e.data.url=u.rewriteUrl(e.data.url,"index"in e.that?e.that.index.meta:u.meta))})),h.history.on("pushState",(e=>{e.data.url&&(e.data.url=u.rewriteUrl(e.data.url,"index"in e.that?e.that.index.meta:u.meta))})),h.element.on("getAttribute",(e=>{h.element.hasAttribute.call(e.that,u.attributePrefix+"-attr-"+e.data.name)&&e.respondWith(e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name))})),h.message.on("postMessage",(e=>{let t=e.data.origin,a=u.call;e.that&&(a=e.that.index$source.call),e.data.origin="*",e.data.message={__data:e.data.message,__origin:(e.that||e.target).index$source.location.origin,__to:t},e.respondWith(a(e.target,l?[e.data.message,e.data.transfer]:[e.data.message,e.data.origin,e.data.transfer],e.that))})),h.message.on("data",(e=>{const{value:t}=e.data;"object"==typeof t&&"__data"in t&&"__origin"in t&&e.respondWith(t.__data)})),h.message.on("origin",(e=>{const t=h.message.messageData.get.call(e.that);"object"==typeof t&&t.__data&&t.__origin&&e.respondWith(t.__origin)})),h.overrideDescriptor(s,"origin",{get:()=>u.location.origin}),h.node.on("baseURI",(e=>{e.data.value.startsWith(s.location.origin)&&(e.data.value=u.sourceUrl(e.data.value))})),h.element.on("setAttribute",(e=>{if(e.that instanceof m&&"src"===e.data.name&&e.data.value.startsWith("blob:"))return e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name,e.data.value),void(e.data.value=u.blobUrls.get(e.data.value));u.attrs.isUrl(e.data.name)&&(e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteUrl(e.data.value)),u.attrs.isStyle(e.data.name)&&(e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteCSS(e.data.value,{context:"declarationList"})),u.attrs.isHtml(e.data.name)&&(e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteHtml(e.data.value,{...u.meta,document:!0,injectHead:u.createHtmlInject(u.handlerScript,u.bundleScript,u.clientScript,u.configScript,o,r,E,s.location.href)})),u.attrs.isSrcset(e.data.name)&&(e.target.call(e.that,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.html.wrapSrcset(e.data.value.toString())),u.attrs.isForbidden(e.data.name)&&(e.data.name=u.attributePrefix+"-attr-"+e.data.name)})),h.element.on("audio",(e=>{e.data.url=u.rewriteUrl(e.data.url)})),h.element.hookProperty([_,S,k,P],"href",{get:(e,t)=>u.sourceUrl(e.call(t)),set:(e,t,[a])=>{h.element.setAttribute.call(t,u.attributePrefix+"-attr-href",a),e.call(t,u.rewriteUrl(a))}}),h.element.hookProperty([v,p,g,m,M,b,f,w,y,x],"src",{get:(e,t)=>u.sourceUrl(e.call(t)),set:(e,t,[a])=>{if(new String(a).toString().trim().startsWith("blob:")&&t instanceof m)return h.element.setAttribute.call(t,u.attributePrefix+"-attr-src",a),e.call(t,u.blobUrls.get(a)||a);h.element.setAttribute.call(t,u.attributePrefix+"-attr-src",a),e.call(t,u.rewriteUrl(a))}}),h.element.hookProperty([U],"action",{get:(e,t)=>u.sourceUrl(e.call(t)),set:(e,t,[a])=>{h.element.setAttribute.call(t,u.attributePrefix+"-attr-action",a),e.call(t,u.rewriteUrl(a))}}),h.element.hookProperty([M],"srcset",{get:(e,t)=>h.element.getAttribute.call(t,u.attributePrefix+"-attr-srcset")||e.call(t),set:(e,t,[a])=>{h.element.setAttribute.call(t,u.attributePrefix+"-attr-srcset",a),e.call(t,u.html.wrapSrcset(a.toString()))}}),h.element.hookProperty(v,"integrity",{get:(e,t)=>h.element.getAttribute.call(t,u.attributePrefix+"-attr-integrity"),set:(e,t,[a])=>{h.element.setAttribute.call(t,u.attributePrefix+"-attr-integrity",a)}}),h.element.hookProperty(w,"sandbox",{get:(e,t)=>h.element.getAttribute.call(t,u.attributePrefix+"-attr-sandbox")||e.call(t),set:(e,t,[a])=>{h.element.setAttribute.call(t,u.attributePrefix+"-attr-sandbox",a)}});const T=w&&Object.getOwnPropertyDescriptor(w.prototype,"contentWindow").get;function L(e){const t=T.call(e);if(!t.index)try{i(t)}catch(e){console.error("catastrophic failure"),console.error(e)}}function H(e,t){const a=`on${t}`,r=new WeakMap;Reflect.defineProperty(e,a,{enumerable:!0,configurable:!0,get(){return r.has(this)?r.get(this):null},set(e){"function"==typeof e&&(r.has(this)&&this.removeEventListener(t,r.get(this)),r.set(this,e),this.addEventListener(t,e))}})}h.element.hookProperty(w,"contentWindow",{get:(e,t)=>(L(t),e.call(t))}),h.element.hookProperty(w,"contentDocument",{get:(e,t)=>(L(t),e.call(t))}),h.element.hookProperty(w,"srcdoc",{get:(e,t)=>h.element.getAttribute.call(t,u.attributePrefix+"-attr-srcdoc")||e.call(t),set:(e,t,[a])=>{e.call(t,u.rewriteHtml(a,{document:!0,injectHead:u.createHtmlInject(u.handlerScript,u.bundleScript,u.clientScript,u.configScript,o,r,E,s.location.href)}))}}),h.node.on("getTextContent",(e=>{"SCRIPT"===e.that.tagName&&(e.data.value=u.js.source(e.data.value))})),h.node.on("setTextContent",(e=>{"SCRIPT"===e.that.tagName&&(e.data.value=u.js.rewrite(e.data.value))})),"serviceWorker"in s.navigator&&delete s.Navigator.prototype.serviceWorker,h.document.on("getDomain",(e=>{e.data.value=u.domain})),h.document.on("setDomain",(e=>{if(!e.data.value.toString().endsWith(u.meta.url.hostname.split(".").slice(-2).join(".")))return e.respondWith("");e.respondWith(u.domain=e.data.value)})),h.document.on("url",(e=>{e.data.value=u.location.href})),h.document.on("documentURI",(e=>{e.data.value=u.location.href})),h.document.on("referrer",(e=>{e.data.value=u.referrer||u.sourceUrl(e.data.value)})),h.document.on("parseFromString",(e=>{if("text/html"!==e.data.type)return!1;e.data.string=u.rewriteHtml(e.data.string,{...u.meta,document:!0})})),h.attribute.on("getValue",(e=>{h.element.hasAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name)&&(e.data.value=h.element.getAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name))})),h.attribute.on("setValue",(e=>{u.attrs.isUrl(e.data.name)&&(h.element.setAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteUrl(e.data.value)),u.attrs.isStyle(e.data.name)&&(h.element.setAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteCSS(e.data.value,{context:"declarationList"})),u.attrs.isHtml(e.data.name)&&(h.element.setAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.rewriteHtml(e.data.value,{...u.meta,document:!0,injectHead:u.createHtmlInject(u.handlerScript,u.bundleScript,u.clientScript,u.configScript,o,r,E,s.location.href)})),u.attrs.isSrcset(e.data.name)&&(h.element.setAttribute.call(e.that.ownerElement,u.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=u.html.wrapSrcset(e.data.value.toString()))})),h.url.on("createObjectURL",(e=>{let t=e.target.call(e.that,e.data.object);if(t.startsWith("blob:"+location.origin)){let a="blob:"+("about:blank"!==u.meta.url.href?u.meta.url.origin:s.parent.index.meta.url.origin)+t.slice("blob:".length+location.origin.length);u.blobUrls.set(a,t),e.respondWith(a)}else e.respondWith(t)})),h.url.on("revokeObjectURL",(e=>{if(u.blobUrls.has(e.data.url)){const t=e.data.url;e.data.url=u.blobUrls.get(e.data.url),u.blobUrls.delete(t)}})),h.storage.on("get",(e=>{e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("set",(e=>{e.that.index$storageObj&&(e.that.index$storageObj[e.data.name]=e.data.value),e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("delete",(e=>{e.that.index$storageObj&&delete e.that.index$storageObj[e.data.name],e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("getItem",(e=>{e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("setItem",(e=>{e.that.index$storageObj&&(e.that.index$storageObj[e.data.name]=e.data.value),e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("removeItem",(e=>{e.that.index$storageObj&&delete e.that.index$storageObj[e.data.name],e.data.name=c+u.meta.url.origin+"@"+e.data.name})),h.storage.on("clear",(e=>{if(e.that.index$storageObj)for(const t of h.nativeMethods.keys.call(null,e.that.index$storageObj))delete e.that.index$storageObj[t],h.storage.removeItem.call(e.that,c+u.meta.url.origin+"@"+t),e.respondWith()})),h.storage.on("length",(e=>{e.that.index$storageObj&&e.respondWith(h.nativeMethods.keys.call(null,e.that.index$storageObj).length)})),h.storage.on("key",(e=>{e.that.index$storageObj&&e.respondWith(h.nativeMethods.keys.call(null,e.that.index$storageObj)[e.data.index]||null)}));const W=["ws:","wss:"];class C extends EventTarget{#e;#t;#a="blob";#r="";#o="";#n="";async#i(e,t){const a={};Reflect.setPrototypeOf(a,null),a.Origin=u.meta.url.origin,a["User-Agent"]=navigator.userAgent,""!==E&&(a.Cookie=E.toString()),this.#e=await O.createWebSocket(e,a,t),this.#e.binaryType=this.#a,this.#e.addEventListener("message",(e=>{this.dispatchEvent(new MessageEvent("message",e))})),this.#e.addEventListener("open",(async e=>{this.dispatchEvent(new Event("open",e))})),this.#e.addEventListener("error",(e=>{this.dispatchEvent(new ErrorEvent("error",e))})),this.#e.addEventListener("close",(e=>{this.dispatchEvent(new Event("close",e))}));const r=await this.#e.meta;r.headers.has("sec-websocket-protocol")&&(this.#r=r.headers.get("sec-websocket-protocol")),r.headers.has("sec-websocket-extensions")&&(this.#o=r.headers.get("sec-websocket-extensions"));let o=r.rawHeaders["set-cookie"]||[];Array.isArray(o)||(o=[]);for(const e of o)document.cookie=e}get url(){return this.#n}constructor(...e){if(super(),!e.length)throw new DOMException("Failed to construct 'WebSocket': 1 argument required, but only 0 present.");const[t,a]=e;let r;try{r=new URL(t)}catch(e){throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${t}' is invalid.`)}if(!W.includes(r.protocol))throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${r.protocol}' is not allowed.`);this.#t=this.#i(r,a)}get protocol(){return this.#r}get extensions(){return this.#o}get readyState(){return this.#e?this.#e.readyState:C.CONNECTING}get binaryType(){return this.#a}set binaryType(e){this.#a=e,this.#e&&(this.#e.binaryType=e)}send(e){if(!this.#e)throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");this.#e.send(e)}close(e,t){if(void 0!==e&&("number"!=typeof e&&(e=0),1e3!==e&&(e<3e3||e>4999)))throw new DOMException(`Failed to execute 'close' on 'WebSocket': The code must be either 1000, or between 3000 and 4999. ${e} is neither.`);this.#t.then((()=>this.#e.close(e,t)))}}H(C.prototype,"close"),H(C.prototype,"open"),H(C.prototype,"message"),H(C.prototype,"error");for(const e of["url","protocol","extensions","readyState","binaryType"]){const t=Object.getOwnPropertyDescriptor(s.WebSocket.prototype,e),a=Object.getOwnPropertyDescriptor(C.prototype,e);a?.get&&t?.get&&h.emit("wrap",a.get,t.get),a?.set&&t?.set&&h.emit("wrap",a.get,t.get)}if(h.emit("wrap",s.WebSocket.prototype.send,C.prototype.send),h.emit("wrap",s.WebSocket.prototype.close,C.prototype.close),h.override(s,"WebSocket",((e,t,a)=>new C(...a)),!0),C.prototype.constructor=s.WebSocket,h.function.on("function",(e=>{e.data.script=u.rewriteJS(e.data.script)})),h.function.on("toString",(e=>{u.methods.string in e.that&&e.respondWith(e.that[u.methods.string])})),h.object.on("getOwnPropertyNames",(e=>{e.data.names=e.data.names.filter((e=>!u.filterKeys.includes(e)))})),h.object.on("getOwnPropertyDescriptors",(e=>{for(const t of u.filterKeys)delete e.data.descriptors[t]})),h.style.on("setProperty",(e=>{h.style.dashedUrlProps.includes(e.data.property)&&(e.data.value=u.rewriteCSS(e.data.value,{context:"value",...u.meta}))})),h.style.on("getPropertyValue",(e=>{h.style.dashedUrlProps.includes(e.data.property)&&e.respondWith(u.sourceCSS(e.target.call(e.that,e.data.property),{context:"value",...u.meta}))})),"CSS2Properties"in s)for(const e of h.style.urlProps)h.overrideDescriptor(s.CSS2Properties.prototype,e,{get:(e,t)=>u.sourceCSS(e.call(t),{context:"value",...u.meta}),set:(e,t,a)=>{e.call(t,u.rewriteCSS(a,{context:"value",...u.meta}))}});else"HTMLElement"in s&&h.overrideDescriptor(s.HTMLElement.prototype,"style",{get:(e,t)=>{const a=e.call(t);if(!a.index$modifiedStyle)for(const e of h.style.urlProps)h.nativeMethods.defineProperty(a,e,{enumerable:!0,configurable:!0,get(){const t=h.style.getPropertyValue.call(this,e)||"";return u.sourceCSS(t,{context:"value",...u.meta})},set(t){h.style.setProperty.call(this,h.style.propToDashed[e]||e,u.rewriteCSS(t,{context:"value",...u.meta}))}}),h.nativeMethods.defineProperty(a,"index$modifiedStyle",{enumerable:!1,value:!0});return a}});h.style.on("setCssText",(e=>{e.data.value=u.rewriteCSS(e.data.value,{context:"declarationList",...u.meta})})),h.style.on("getCssText",(e=>{e.data.value=u.sourceCSS(e.data.value,{context:"declarationList",...u.meta})})),u.addEventListener.call(s,"hashchange",(e=>{if(e.index$dispatched)return!1;e.stopImmediatePropagation();const t=s.location.hash;h.history.replaceState.call(s.history,"","",e.oldURL),u.location.hash=t})),h.location.on("hashchange",((e,t,a)=>{if(a.HashChangeEvent&&h.history.replaceState){h.history.replaceState.call(s.history,"","",u.rewriteUrl(t));const r=new a.HashChangeEvent("hashchange",{newURL:t,oldURL:e});h.nativeMethods.defineProperty(r,"index$dispatched",{value:!0,enumerable:!1}),u.dispatchEvent.call(s,r)}})),h.fetch.overrideRequest(),h.fetch.overrideUrl(),h.xhr.overrideOpen(),h.xhr.overrideResponseUrl(),h.element.overrideHtml(),h.element.overrideAttribute(),h.element.overrideInsertAdjacentHTML(),h.element.overrideAudio(),h.node.overrideBaseURI(),h.node.overrideTextContent(),h.attribute.overrideNameValue(),h.document.overrideDomain(),h.document.overrideURL(),h.document.overrideDocumentURI(),h.document.overrideWrite(),h.document.overrideReferrer(),h.document.overrideParseFromString(),h.storage.overrideMethods(),h.storage.overrideLength(),h.object.overrideGetPropertyNames(),h.object.overrideGetOwnPropertyDescriptors(),h.idb.overrideName(),h.idb.overrideOpen(),h.history.overridePushState(),h.history.overrideReplaceState(),h.eventSource.overrideConstruct(),h.eventSource.overrideUrl(),h.url.overrideObjectURL(),h.document.overrideCookie(),h.message.overridePostMessage(),h.message.overrideMessageOrigin(),h.message.overrideMessageData(),h.workers.overrideWorker(),h.workers.overrideAddModule(),h.workers.overrideImportScripts(),h.workers.overridePostMessage(),h.style.overrideSetGetProperty(),h.style.overrideCssText(),h.navigator.overrideSendBeacon(),h.function.overrideFunction(),h.function.overrideToString(),h.location.overrideWorkerLocation((e=>new URL(u.sourceUrl(e)))),h.overrideDescriptor(s,"localStorage",{get:(e,t)=>(t||s).index.lsWrap}),h.overrideDescriptor(s,"sessionStorage",{get:(e,t)=>(t||s).index.ssWrap}),h.override(s,"open",((e,t,a)=>{if(!a.length)return e.apply(t,a);let[r]=a;return r=u.rewriteUrl(r),e.call(t,r)})),u.$wrap=function(e){return"location"===e?u.methods.location:"eval"===e?u.methods.eval:e},u.$get=function(e){return e===s.location?u.location:e===s.eval?u.eval:e===s.parent?s.index$parent:e===s.top?s.index$top:e},u.eval=h.wrap(s,"eval",((e,t,a)=>{if(!a.length||"string"!=typeof a[0])return e.apply(t,a);let[r]=a;return r=u.rewriteJS(r),e.call(t,r)})),u.call=function(e,t,a){return a?e.apply(a,t):e(...t)},u.call$=function(e,t,a=[]){return e[t].apply(e,a)},h.nativeMethods.defineProperty(s.Object.prototype,d,{get:()=>u,enumerable:!1}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.setSource,{value:function(e){return h.nativeMethods.isExtensible(this)?(h.nativeMethods.defineProperty(this,u.methods.source,{value:e,writable:!0,enumerable:!1}),this):this},enumerable:!1}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.source,{value:u,writable:!0,enumerable:!1}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.location,{configurable:!0,get(){return this===s.document||this===s?u.location:this.location},set(e){this===s.document||this===s?u.location.href=e:this.location=e}}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.parent,{configurable:!0,get(){const e=this.parent;if(this===s)try{return"index"in e?e:this}catch(e){return this}return e},set(e){this.parent=e}}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.top,{configurable:!0,get(){const e=this.top;if(this===s){if(e===this.parent)return this[u.methods.parent];try{if("index"in e)return e;{let t=this;for(;t.parent!==e;)t=t.parent;return"index"in t?t:this}}catch(e){return this}}return e},set(e){this.top=e}}),h.nativeMethods.defineProperty(s.Object.prototype,u.methods.eval,{configurable:!0,get(){return this===s?u.eval:this.eval},set(e){this.eval=e}})}self.index||i(self),self.indexHook=i})();
//# sourceMappingURL=uv.handler.js.map