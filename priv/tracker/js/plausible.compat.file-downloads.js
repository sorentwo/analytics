!function(){"use strict";var t,e,i,o=window.location,n=window.document,r=n.getElementById("plausible"),p=r.getAttribute("data-api")||(t=r.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function l(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return l("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return l("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props));var a=new XMLHttpRequest;a.open("POST",p,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4==a.readyState&&e&&e.callback&&e.callback()}}}var s=r.getAttribute("file-types"),c=s&&s.split(",")||["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"];function d(t){for(var e,i,a=t.target,n="auxclick"==t.type&&2==t.which,r="click"==t.type;a&&(void 0===a.tagName||"a"!=a.tagName.toLowerCase()||!a.href);)a=a.parentNode;a&&a.href&&(e=a.href,i=e.split(".").pop(),c.some(function(t){return t==i}))&&((n||r)&&plausible("File Download",{props:{url:a.href}}),a.target&&!a.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){o.href=a.href},150),t.preventDefault()))}n.addEventListener("click",d),n.addEventListener("auxclick",d);var u=window.plausible&&window.plausible.q||[];window.plausible=a;for(var w,f=0;f<u.length;f++)a.apply(this,u[f]);function h(){w!==o.pathname&&(w=o.pathname,a("pageview"))}var v,g=window.history;g.pushState&&(v=g.pushState,g.pushState=function(){v.apply(this,arguments),h()},window.addEventListener("popstate",h)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){w||"visible"!==n.visibilityState||h()}):h()}();