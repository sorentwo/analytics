!function(){"use strict";var e,t,i,l=window.location,s=window.document,p=s.getElementById("plausible"),u=p.getAttribute("data-api")||(e=p.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event"),c=p&&p.getAttribute("data-exclude").split(",");function d(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return d("localStorage flag")}catch(e){}if(c)for(var i=0;i<c.length;i++)if("pageview"===e&&l.pathname.match(new RegExp("^"+c[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return d("exclusion rule");var n={};n.n=e,n.u=l.href,n.d=p.getAttribute("data-domain"),n.r=s.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var a=p.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),r=n.p||{};a.forEach(function(e){var t=e.replace("event-",""),i=p.getAttribute(e);r[t]=r[t]||i}),n.p=r,n.h=1;var o=new XMLHttpRequest;o.open("POST",u,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(n)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function w(){r=l.pathname,n("pageview")}window.addEventListener("hashchange",w),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){r||"visible"!==s.visibilityState||w()}):w()}();