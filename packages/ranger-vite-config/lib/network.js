var drawChart = (function (exports) {
    'use strict';

    var n,l$1,u$2,i$1,o$1,r$1,f$2,e$1,c$2={},s$1=[],a$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y$2(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$2:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function g$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function m$2(n,l){if(null==l)return n.__?m$2(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m$2(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function w$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!x$2.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x$2);}function x$2(){var n,u,t,o,r,e,c,s,a;for(i$1.sort(f$2);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,s=[],a=[],(c=t.__P)&&((o=v$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),L(c,o,r,t.__n,void 0!==c.ownerSVGElement,32&r.__u?[e]:null,s,null==e?m$2(r):e,!!(32&r.__u),a),o.__.__k[o.__i]=o,M(s,o,a),o.__e!=e&&k$1(o)),i$1.length>u&&i$1.sort(f$2));x$2.__r=0;}function C(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s$1,b=l.length;for(u.__d=e,P(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c$2:g[y.__i]||c$2,y.__i=v,L(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&z$1(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=S(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_;}function P(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,i):h$1(i)?d$1(g$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=H(i,u,r=t+a,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:a=f<r&&f==r-1?f-r:0,f!==t+a&&(i.__u|=65536))):(o=u[t])&&null==o.key&&o.__e&&(o.__e==n.__d&&(n.__d=m$2(o)),N(o,o,!1),u[t]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$2(o)),N(o,o));}function S(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=S(t[i],l,u));return l}return n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e),l&&l.nextSibling}function H(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$2.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?D:A,o)):n.removeEventListener(l,o?D:A,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function A(n){var u=this.l[n.type+!1];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l$1.event?l$1.event(n):n)}function D(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,k,w,x,P,S,$,H,I,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(w=u.props,x=(a=A.contextType)&&i[a.__c],P=a?x?x.props.value:a.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(w,P):(u.__c=p=new b$1(w,P),p.constructor=A,p.render=O),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=P,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,A.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==A.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,P)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,P),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m);});}if(p.context=P,p.props=w,p.__P=n,p.__e=!1,$=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),C(n,h$1(T=null!=a&&a.type===g$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),k&&(p.__E=p.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=j$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function M(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)z$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function j$1(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,k=t.props,w=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(w);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,w.is&&w),r=null,e=!1;}if(null===x)k===w||e&&l.data===w||(l.data=w);else {if(r=r&&n.call(l.childNodes),k=t.props||c$2,!e&&null!=r)for(k={},a=0;a<l.attributes.length;a++)k[(_=l.attributes[a]).name]=_.value;for(a in k)_=k[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in w||T$1(l,a,null,_,o));for(a in w)_=w[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||k[a]===_||T$1(l,a,_,k[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),C(l,h$1(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m$2(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p$1(r[a]);e||(a="value",void 0!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==k[a])&&T$1(l,a,g,k[a],!1),a="checked",void 0!==b&&b!==l[a]&&T$1(l,a,b,k[a],!1));}return l}function z$1(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function N(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||z$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&N(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function q$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L(t,u=(!o&&i||t).__k=y$2(g$1,null,[u]),r||c$2,c$2,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}function F$1(n,l){var u={__c:l="__cC"+e$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$1(this));},b$1.prototype.render=g$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},x$2.__r=0,e$1=0;

    var f$1=0;function u$1(e,t,n,o,i,u){var a,c,p={};for(c in t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f$1,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

    const LABELS = {
        renderedLength: "Rendered",
        gzipLength: "Gzip",
        brotliLength: "Brotli",
    };
    const getAvailableSizeOptions = (options) => {
        const availableSizeProperties = ["renderedLength"];
        if (options.gzip) {
            availableSizeProperties.push("gzipLength");
        }
        if (options.brotli) {
            availableSizeProperties.push("brotliLength");
        }
        return availableSizeProperties;
    };

    var t,r,u,i,o=0,f=[],c$1=[],e=l$1.__b,a$1=l$1.__r,v=l$1.diffed,l=l$1.__c,m$1=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$1}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function _(n){return o=5,F(function(){return {current:n}},[])}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a$1&&a$1(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$1,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$1&&(n.__=n.__V),n.i=void 0,n.__V=c$1;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m$1&&m$1(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

    function ascending(a, b) {
      return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function descending(a, b) {
      return a == null || b == null ? NaN
        : b < a ? -1
        : b > a ? 1
        : b >= a ? 0
        : NaN;
    }

    function bisector(f) {
      let compare1, compare2, delta;

      // If an accessor is specified, promote it to a comparator. In this case we
      // can test whether the search value is (self-) comparable. We can’t do this
      // for a comparator (except for specific, known comparators) because we can’t
      // tell if the comparator is symmetric, and an asymmetric comparator can’t be
      // used to test whether a single value is comparable.
      if (f.length !== 2) {
        compare1 = ascending;
        compare2 = (d, x) => ascending(f(d), x);
        delta = (d, x) => f(d) - x;
      } else {
        compare1 = f === ascending || f === descending ? f : zero$1;
        compare2 = f;
        delta = f;
      }

      function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) <= 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
      }

      return {left, center, right};
    }

    function zero$1() {
      return 0;
    }

    function number$1(x) {
      return x === null ? NaN : +x;
    }

    const ascendingBisect = bisector(ascending);
    const bisectRight = ascendingBisect.right;
    bisector(number$1).center;
    var bisect = bisectRight;

    const e10 = Math.sqrt(50),
        e5 = Math.sqrt(10),
        e2 = Math.sqrt(2);

    function tickSpec(start, stop, count) {
      const step = (stop - start) / Math.max(0, count),
          power = Math.floor(Math.log10(step)),
          error = step / Math.pow(10, power),
          factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
      let i1, i2, inc;
      if (power < 0) {
        inc = Math.pow(10, -power) / factor;
        i1 = Math.round(start * inc);
        i2 = Math.round(stop * inc);
        if (i1 / inc < start) ++i1;
        if (i2 / inc > stop) --i2;
        inc = -inc;
      } else {
        inc = Math.pow(10, power) * factor;
        i1 = Math.round(start / inc);
        i2 = Math.round(stop / inc);
        if (i1 * inc < start) ++i1;
        if (i2 * inc > stop) --i2;
      }
      if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
      return [i1, i2, inc];
    }

    function ticks(start, stop, count) {
      stop = +stop, start = +start, count = +count;
      if (!(count > 0)) return [];
      if (start === stop) return [start];
      const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
      if (!(i2 >= i1)) return [];
      const n = i2 - i1 + 1, ticks = new Array(n);
      if (reverse) {
        if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
        else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
      } else {
        if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
        else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
      }
      return ticks;
    }

    function tickIncrement(start, stop, count) {
      stop = +stop, start = +start, count = +count;
      return tickSpec(start, stop, count)[2];
    }

    function tickStep(start, stop, count) {
      stop = +stop, start = +start, count = +count;
      const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
      return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
    }

    function max(values, valueof) {
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      }
      return max;
    }

    function initRange(domain, range) {
      switch (arguments.length) {
        case 0: break;
        case 1: this.range(domain); break;
        default: this.range(range).domain(domain); break;
      }
      return this;
    }

    function initInterpolator(domain, interpolator) {
      switch (arguments.length) {
        case 0: break;
        case 1: {
          if (typeof domain === "function") this.interpolator(domain);
          else this.range(domain);
          break;
        }
        default: {
          this.domain(domain);
          if (typeof interpolator === "function") this.interpolator(interpolator);
          else this.range(interpolator);
          break;
        }
      }
      return this;
    }

    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }

    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }

    function Color() {}

    var darker = 0.7;
    var brighter = 1 / darker;

    var reI = "\\s*([+-]?\\d+)\\s*",
        reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        reHex = /^#([0-9a-f]{3,8})$/,
        reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
        reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
        reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
        reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
        reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
        reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };

    define(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor, this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex, // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });

    function color_formatHex() {
      return this.rgb().formatHex();
    }

    function color_formatHex8() {
      return this.rgb().formatHex8();
    }

    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }

    function color_formatRgb() {
      return this.rgb().formatRgb();
    }

    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
          : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
          : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
          : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
          : null) // invalid hex
          : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
          : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
          : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
          : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
          : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
          : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
          : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
          : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
          : null;
    }

    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }

    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }

    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb;
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }

    function rgb$1(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }

    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }

    define(Rgb, rgb$1, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return (-0.5 <= this.r && this.r < 255.5)
            && (-0.5 <= this.g && this.g < 255.5)
            && (-0.5 <= this.b && this.b < 255.5)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex, // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));

    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }

    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }

    function rgb_formatRgb() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
    }

    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }

    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }

    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }

    function hsla(h, s, l, a) {
      if (a <= 0) h = s = l = NaN;
      else if (l <= 0 || l >= 1) h = s = NaN;
      else if (s <= 0) h = NaN;
      return new Hsl(h, s, l, a);
    }

    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl;
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2;
      if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }

    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }

    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }

    define(Hsl, hsl, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb() {
        var h = this.h % 360 + (this.h < 0) * 360,
            s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
            l = this.l,
            m2 = l + (l < 0.5 ? l : 1 - l) * s,
            m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl() {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
      }
    }));

    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }

    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }

    /* From FvD 13.37, CSS Color Module Level 3 */
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60
          : h < 180 ? m2
          : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
          : m1) * 255;
    }

    var constant$1 = x => () => x;

    function linear(a, d) {
      return function(t) {
        return a + t * d;
      };
    }

    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
      };
    }

    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
      };
    }

    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
    }

    var rgb = (function rgbGamma(y) {
      var color = gamma(y);

      function rgb(start, end) {
        var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }

      rgb.gamma = rgbGamma;

      return rgb;
    })(1);

    function numberArray(a, b) {
      if (!b) b = [];
      var n = a ? Math.min(b.length, a.length) : 0,
          c = b.slice(),
          i;
      return function(t) {
        for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
      };
    }

    function isNumberArray(x) {
      return ArrayBuffer.isView(x) && !(x instanceof DataView);
    }

    function genericArray(a, b) {
      var nb = b ? b.length : 0,
          na = a ? Math.min(nb, a.length) : 0,
          x = new Array(na),
          c = new Array(nb),
          i;

      for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
      for (; i < nb; ++i) c[i] = b[i];

      return function(t) {
        for (i = 0; i < na; ++i) c[i] = x[i](t);
        return c;
      };
    }

    function date(a, b) {
      var d = new Date;
      return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
      };
    }

    function interpolateNumber(a, b) {
      return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
      };
    }

    function object(a, b) {
      var i = {},
          c = {},
          k;

      if (a === null || typeof a !== "object") a = {};
      if (b === null || typeof b !== "object") b = {};

      for (k in b) {
        if (k in a) {
          i[k] = interpolate(a[k], b[k]);
        } else {
          c[k] = b[k];
        }
      }

      return function(t) {
        for (k in i) c[k] = i[k](t);
        return c;
      };
    }

    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        reB = new RegExp(reA.source, "g");

    function zero(b) {
      return function() {
        return b;
      };
    }

    function one(b) {
      return function(t) {
        return b(t) + "";
      };
    }

    function string(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
          am, // current match in a
          bm, // current match in b
          bs, // string preceding current number in b, if any
          i = -1, // index in s
          s = [], // string constants and placeholders
          q = []; // number interpolators

      // Coerce inputs to strings.
      a = a + "", b = b + "";

      // Interpolate pairs of numbers in a & b.
      while ((am = reA.exec(a))
          && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) { // a string precedes the next number in b
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
          if (s[i]) s[i] += bm; // coalesce with previous string
          else s[++i] = bm;
        } else { // interpolate non-matching numbers
          s[++i] = null;
          q.push({i: i, x: interpolateNumber(am, bm)});
        }
        bi = reB.lastIndex;
      }

      // Add remains of b.
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      // Special optimization for only a single match.
      // Otherwise, interpolate each of the numbers and rejoin the string.
      return s.length < 2 ? (q[0]
          ? one(q[0].x)
          : zero(b))
          : (b = q.length, function(t) {
              for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            });
    }

    function interpolate(a, b) {
      var t = typeof b, c;
      return b == null || t === "boolean" ? constant$1(b)
          : (t === "number" ? interpolateNumber
          : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
          : b instanceof color ? rgb
          : b instanceof Date ? date
          : isNumberArray(b) ? numberArray
          : Array.isArray(b) ? genericArray
          : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
          : interpolateNumber)(a, b);
    }

    function interpolateRound(a, b) {
      return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
      };
    }

    function constants$3(x) {
      return function() {
        return x;
      };
    }

    function number(x) {
      return +x;
    }

    var unit = [0, 1];

    function identity$1(x) {
      return x;
    }

    function normalize(a, b) {
      return (b -= (a = +a))
          ? function(x) { return (x - a) / b; }
          : constants$3(isNaN(b) ? NaN : 0.5);
    }

    function clamper(a, b) {
      var t;
      if (a > b) t = a, a = b, b = t;
      return function(x) { return Math.max(a, Math.min(b, x)); };
    }

    // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
    // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
    function bimap(domain, range, interpolate) {
      var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
      if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
      else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
      return function(x) { return r0(d0(x)); };
    }

    function polymap(domain, range, interpolate) {
      var j = Math.min(domain.length, range.length) - 1,
          d = new Array(j),
          r = new Array(j),
          i = -1;

      // Reverse descending domains.
      if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
      }

      while (++i < j) {
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
      }

      return function(x) {
        var i = bisect(domain, x, 1, j) - 1;
        return r[i](d[i](x));
      };
    }

    function copy$1(source, target) {
      return target
          .domain(source.domain())
          .range(source.range())
          .interpolate(source.interpolate())
          .clamp(source.clamp())
          .unknown(source.unknown());
    }

    function transformer$1() {
      var domain = unit,
          range = unit,
          interpolate$1 = interpolate,
          transform,
          untransform,
          unknown,
          clamp = identity$1,
          piecewise,
          output,
          input;

      function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
      }

      function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
      }

      scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
      };

      scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
      };

      scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
      };

      scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
      };

      scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
      };

      scale.interpolate = function(_) {
        return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
      };

      scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };

      return function(t, u) {
        transform = t, untransform = u;
        return rescale();
      };
    }

    function formatDecimal(x) {
      return Math.abs(x = Math.round(x)) >= 1e21
          ? x.toLocaleString("en").replace(/,/g, "")
          : x.toString(10);
    }

    // Computes the decimal coefficient and exponent of the specified number x with
    // significant digits p, where x is positive and p is in [1, 21] or undefined.
    // For example, formatDecimalParts(1.23) returns ["123", 0].
    function formatDecimalParts(x, p) {
      if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
      var i, coefficient = x.slice(0, i);

      // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
      // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
      return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
      ];
    }

    function exponent(x) {
      return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
    }

    function formatGroup(grouping, thousands) {
      return function(value, width) {
        var i = value.length,
            t = [],
            j = 0,
            g = grouping[0],
            length = 0;

        while (i > 0 && g > 0) {
          if (length + g + 1 > width) g = Math.max(1, width - length);
          t.push(value.substring(i -= g, i + g));
          if ((length += g + 1) > width) break;
          g = grouping[j = (j + 1) % grouping.length];
        }

        return t.reverse().join(thousands);
      };
    }

    function formatNumerals(numerals) {
      return function(value) {
        return value.replace(/[0-9]/g, function(i) {
          return numerals[+i];
        });
      };
    }

    // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
    var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function formatSpecifier(specifier) {
      if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
      var match;
      return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
      });
    }

    formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

    function FormatSpecifier(specifier) {
      this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
      this.align = specifier.align === undefined ? ">" : specifier.align + "";
      this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
      this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
      this.zero = !!specifier.zero;
      this.width = specifier.width === undefined ? undefined : +specifier.width;
      this.comma = !!specifier.comma;
      this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
      this.trim = !!specifier.trim;
      this.type = specifier.type === undefined ? "" : specifier.type + "";
    }

    FormatSpecifier.prototype.toString = function() {
      return this.fill
          + this.align
          + this.sign
          + this.symbol
          + (this.zero ? "0" : "")
          + (this.width === undefined ? "" : Math.max(1, this.width | 0))
          + (this.comma ? "," : "")
          + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
          + (this.trim ? "~" : "")
          + this.type;
    };

    // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
    function formatTrim(s) {
      out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
          case ".": i0 = i1 = i; break;
          case "0": if (i0 === 0) i0 = i; i1 = i; break;
          default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
        }
      }
      return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
    }

    var prefixExponent;

    function formatPrefixAuto(x, p) {
      var d = formatDecimalParts(x, p);
      if (!d) return x + "";
      var coefficient = d[0],
          exponent = d[1],
          i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
          n = coefficient.length;
      return i === n ? coefficient
          : i > n ? coefficient + new Array(i - n + 1).join("0")
          : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
          : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
    }

    function formatRounded(x, p) {
      var d = formatDecimalParts(x, p);
      if (!d) return x + "";
      var coefficient = d[0],
          exponent = d[1];
      return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
          : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
          : coefficient + new Array(exponent - coefficient.length + 2).join("0");
    }

    var formatTypes = {
      "%": (x, p) => (x * 100).toFixed(p),
      "b": (x) => Math.round(x).toString(2),
      "c": (x) => x + "",
      "d": formatDecimal,
      "e": (x, p) => x.toExponential(p),
      "f": (x, p) => x.toFixed(p),
      "g": (x, p) => x.toPrecision(p),
      "o": (x) => Math.round(x).toString(8),
      "p": (x, p) => formatRounded(x * 100, p),
      "r": formatRounded,
      "s": formatPrefixAuto,
      "X": (x) => Math.round(x).toString(16).toUpperCase(),
      "x": (x) => Math.round(x).toString(16)
    };

    function identity(x) {
      return x;
    }

    var map = Array.prototype.map,
        prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

    function formatLocale(locale) {
      var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
          currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
          currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
          decimal = locale.decimal === undefined ? "." : locale.decimal + "",
          numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
          percent = locale.percent === undefined ? "%" : locale.percent + "",
          minus = locale.minus === undefined ? "−" : locale.minus + "",
          nan = locale.nan === undefined ? "NaN" : locale.nan + "";

      function newFormat(specifier) {
        specifier = formatSpecifier(specifier);

        var fill = specifier.fill,
            align = specifier.align,
            sign = specifier.sign,
            symbol = specifier.symbol,
            zero = specifier.zero,
            width = specifier.width,
            comma = specifier.comma,
            precision = specifier.precision,
            trim = specifier.trim,
            type = specifier.type;

        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";

        // The "" type, and any invalid type, is an alias for ".12~g".
        else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
            suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = formatTypes[type],
            maybeSuffix = /[defgprs%]/.test(type);

        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6
            : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
            : Math.max(0, Math.min(20, precision));

        function format(value) {
          var valuePrefix = prefix,
              valueSuffix = suffix,
              i, n, c;

          if (type === "c") {
            valueSuffix = formatType(value) + valueSuffix;
            value = "";
          } else {
            value = +value;

            // Determine the sign. -0 is not less than 0, but 1 / -0 is!
            var valueNegative = value < 0 || 1 / value < 0;

            // Perform the initial formatting.
            value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

            // Trim insignificant zeros.
            if (trim) value = formatTrim(value);

            // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
            if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

            // Compute the prefix and suffix.
            valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
            valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

            // Break the formatted value into the integer “value” part that can be
            // grouped, and fractional or exponential “suffix” part that is not.
            if (maybeSuffix) {
              i = -1, n = value.length;
              while (++i < n) {
                if (c = value.charCodeAt(i), 48 > c || c > 57) {
                  valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                  value = value.slice(0, i);
                  break;
                }
              }
            }
          }

          // If the fill character is not "0", grouping is applied before padding.
          if (comma && !zero) value = group(value, Infinity);

          // Compute the padding.
          var length = valuePrefix.length + value.length + valueSuffix.length,
              padding = length < width ? new Array(width - length + 1).join(fill) : "";

          // If the fill character is "0", grouping is applied after padding.
          if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

          // Reconstruct the final output based on the desired alignment.
          switch (align) {
            case "<": value = valuePrefix + value + valueSuffix + padding; break;
            case "=": value = valuePrefix + padding + value + valueSuffix; break;
            case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
            default: value = padding + valuePrefix + value + valueSuffix; break;
          }

          return numerals(value);
        }

        format.toString = function() {
          return specifier + "";
        };

        return format;
      }

      function formatPrefix(specifier, value) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
            e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
            k = Math.pow(10, -e),
            prefix = prefixes[8 + e / 3];
        return function(value) {
          return f(k * value) + prefix;
        };
      }

      return {
        format: newFormat,
        formatPrefix: formatPrefix
      };
    }

    var locale;
    var format;
    var formatPrefix;

    defaultLocale({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });

    function defaultLocale(definition) {
      locale = formatLocale(definition);
      format = locale.format;
      formatPrefix = locale.formatPrefix;
      return locale;
    }

    function precisionFixed(step) {
      return Math.max(0, -exponent(Math.abs(step)));
    }

    function precisionPrefix(step, value) {
      return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
    }

    function precisionRound(step, max) {
      step = Math.abs(step), max = Math.abs(max) - step;
      return Math.max(0, exponent(max) - exponent(step)) + 1;
    }

    function tickFormat(start, stop, count, specifier) {
      var step = tickStep(start, stop, count),
          precision;
      specifier = formatSpecifier(specifier == null ? ",f" : specifier);
      switch (specifier.type) {
        case "s": {
          var value = Math.max(Math.abs(start), Math.abs(stop));
          if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
          return formatPrefix(specifier, value);
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
          if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
          break;
        }
        case "f":
        case "%": {
          if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
          break;
        }
      }
      return format(specifier);
    }

    function linearish(scale) {
      var domain = scale.domain;

      scale.ticks = function(count) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
      };

      scale.tickFormat = function(count, specifier) {
        var d = domain();
        return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
      };

      scale.nice = function(count) {
        if (count == null) count = 10;

        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;

        if (stop < start) {
          step = start, start = stop, stop = step;
          step = i0, i0 = i1, i1 = step;
        }
        
        while (maxIter-- > 0) {
          step = tickIncrement(start, stop, count);
          if (step === prestep) {
            d[i0] = start;
            d[i1] = stop;
            return domain(d);
          } else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
          } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
          } else {
            break;
          }
          prestep = step;
        }

        return scale;
      };

      return scale;
    }

    function transformPow(exponent) {
      return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
      };
    }

    function transformSqrt(x) {
      return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
    }

    function transformSquare(x) {
      return x < 0 ? -x * x : x * x;
    }

    function powish(transform) {
      var scale = transform(identity$1, identity$1),
          exponent = 1;

      function rescale() {
        return exponent === 1 ? transform(identity$1, identity$1)
            : exponent === 0.5 ? transform(transformSqrt, transformSquare)
            : transform(transformPow(exponent), transformPow(1 / exponent));
      }

      scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
      };

      return linearish(scale);
    }

    function pow() {
      var scale = powish(transformer$1());

      scale.copy = function() {
        return copy$1(scale, pow()).exponent(scale.exponent());
      };

      initRange.apply(scale, arguments);

      return scale;
    }

    function sqrt() {
      return pow.apply(null, arguments).exponent(0.5);
    }

    function transformer() {
      var x0 = 0,
          x1 = 1,
          t0,
          t1,
          k10,
          transform,
          interpolator = identity$1,
          clamp = false,
          unknown;

      function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
      }

      scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
      };

      scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
      };

      scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
      };

      function range(interpolate) {
        return function(_) {
          var r0, r1;
          return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
        };
      }

      scale.range = range(interpolate);

      scale.rangeRound = range(interpolateRound);

      scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };

      return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
      };
    }

    function copy(source, target) {
      return target
          .domain(source.domain())
          .interpolator(source.interpolator())
          .clamp(source.clamp())
          .unknown(source.unknown());
    }

    function sequential() {
      var scale = linearish(transformer()(identity$1));

      scale.copy = function() {
        return copy(scale, sequential());
      };

      return initInterpolator.apply(scale, arguments);
    }

    function tree_add(d) {
      const x = +this._x.call(null, d),
          y = +this._y.call(null, d);
      return add(this.cover(x, y), x, y, d);
    }

    function add(tree, x, y, d) {
      if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

      var parent,
          node = tree._root,
          leaf = {data: d},
          x0 = tree._x0,
          y0 = tree._y0,
          x1 = tree._x1,
          y1 = tree._y1,
          xm,
          ym,
          xp,
          yp,
          right,
          bottom,
          i,
          j;

      // If the tree is empty, initialize the root as a leaf.
      if (!node) return tree._root = leaf, tree;

      // Find the existing leaf for the new point, or add it.
      while (node.length) {
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
      }

      // Is the new point is exactly coincident with the existing point?
      xp = +tree._x.call(null, node.data);
      yp = +tree._y.call(null, node.data);
      if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

      // Otherwise, split the leaf node until the old and new point are separated.
      do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
      return parent[j] = node, parent[i] = leaf, tree;
    }

    function addAll(data) {
      var d, i, n = data.length,
          x,
          y,
          xz = new Array(n),
          yz = new Array(n),
          x0 = Infinity,
          y0 = Infinity,
          x1 = -Infinity,
          y1 = -Infinity;

      // Compute the points and their extent.
      for (i = 0; i < n; ++i) {
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }

      // If there were no (valid) points, abort.
      if (x0 > x1 || y0 > y1) return this;

      // Expand the tree to cover the new points.
      this.cover(x0, y0).cover(x1, y1);

      // Add the new points.
      for (i = 0; i < n; ++i) {
        add(this, xz[i], yz[i], data[i]);
      }

      return this;
    }

    function tree_cover(x, y) {
      if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

      var x0 = this._x0,
          y0 = this._y0,
          x1 = this._x1,
          y1 = this._y1;

      // If the quadtree has no extent, initialize them.
      // Integer extent are necessary so that if we later double the extent,
      // the existing quadrant boundaries don’t change due to floating point error!
      if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
      }

      // Otherwise, double repeatedly to cover.
      else {
        var z = x1 - x0 || 1,
            node = this._root,
            parent,
            i;

        while (x0 > x || x >= x1 || y0 > y || y >= y1) {
          i = (y < y0) << 1 | (x < x0);
          parent = new Array(4), parent[i] = node, node = parent, z *= 2;
          switch (i) {
            case 0: x1 = x0 + z, y1 = y0 + z; break;
            case 1: x0 = x1 - z, y1 = y0 + z; break;
            case 2: x1 = x0 + z, y0 = y1 - z; break;
            case 3: x0 = x1 - z, y0 = y1 - z; break;
          }
        }

        if (this._root && this._root.length) this._root = node;
      }

      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      return this;
    }

    function tree_data() {
      var data = [];
      this.visit(function(node) {
        if (!node.length) do data.push(node.data); while (node = node.next)
      });
      return data;
    }

    function tree_extent(_) {
      return arguments.length
          ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
          : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
    }

    function Quad(node, x0, y0, x1, y1) {
      this.node = node;
      this.x0 = x0;
      this.y0 = y0;
      this.x1 = x1;
      this.y1 = y1;
    }

    function tree_find(x, y, radius) {
      var data,
          x0 = this._x0,
          y0 = this._y0,
          x1,
          y1,
          x2,
          y2,
          x3 = this._x1,
          y3 = this._y1,
          quads = [],
          node = this._root,
          q,
          i;

      if (node) quads.push(new Quad(node, x0, y0, x3, y3));
      if (radius == null) radius = Infinity;
      else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
      }

      while (q = quads.pop()) {

        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node)
            || (x1 = q.x0) > x3
            || (y1 = q.y0) > y3
            || (x2 = q.x1) < x0
            || (y2 = q.y1) < y0) continue;

        // Bisect the current quadrant.
        if (node.length) {
          var xm = (x1 + x2) / 2,
              ym = (y1 + y2) / 2;

          quads.push(
            new Quad(node[3], xm, ym, x2, y2),
            new Quad(node[2], x1, ym, xm, y2),
            new Quad(node[1], xm, y1, x2, ym),
            new Quad(node[0], x1, y1, xm, ym)
          );

          // Visit the closest quadrant first.
          if (i = (y >= ym) << 1 | (x >= xm)) {
            q = quads[quads.length - 1];
            quads[quads.length - 1] = quads[quads.length - 1 - i];
            quads[quads.length - 1 - i] = q;
          }
        }

        // Visit this point. (Visiting coincident points isn’t necessary!)
        else {
          var dx = x - +this._x.call(null, node.data),
              dy = y - +this._y.call(null, node.data),
              d2 = dx * dx + dy * dy;
          if (d2 < radius) {
            var d = Math.sqrt(radius = d2);
            x0 = x - d, y0 = y - d;
            x3 = x + d, y3 = y + d;
            data = node.data;
          }
        }
      }

      return data;
    }

    function tree_remove(d) {
      if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

      var parent,
          node = this._root,
          retainer,
          previous,
          next,
          x0 = this._x0,
          y0 = this._y0,
          x1 = this._x1,
          y1 = this._y1,
          x,
          y,
          xm,
          ym,
          right,
          bottom,
          i,
          j;

      // If the tree is empty, initialize the root as a leaf.
      if (!node) return this;

      // Find the leaf node for the point.
      // While descending, also retain the deepest parent with a non-removed sibling.
      if (node.length) while (true) {
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
      }

      // Find the point to remove.
      while (node.data !== d) if (!(previous = node, node = node.next)) return this;
      if (next = node.next) delete node.next;

      // If there are multiple coincident points, remove just the point.
      if (previous) return (next ? previous.next = next : delete previous.next), this;

      // If this is the root point, remove it.
      if (!parent) return this._root = next, this;

      // Remove this leaf.
      next ? parent[i] = next : delete parent[i];

      // If the parent now contains exactly one leaf, collapse superfluous parents.
      if ((node = parent[0] || parent[1] || parent[2] || parent[3])
          && node === (parent[3] || parent[2] || parent[1] || parent[0])
          && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
      }

      return this;
    }

    function removeAll(data) {
      for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
      return this;
    }

    function tree_root() {
      return this._root;
    }

    function tree_size() {
      var size = 0;
      this.visit(function(node) {
        if (!node.length) do ++size; while (node = node.next)
      });
      return size;
    }

    function tree_visit(callback) {
      var quads = [], q, node = this._root, child, x0, y0, x1, y1;
      if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
      while (q = quads.pop()) {
        if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
          var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
          if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
        }
      }
      return this;
    }

    function tree_visitAfter(callback) {
      var quads = [], next = [], q;
      if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
      while (q = quads.pop()) {
        var node = q.node;
        if (node.length) {
          var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
          if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
        }
        next.push(q);
      }
      while (q = next.pop()) {
        callback(q.node, q.x0, q.y0, q.x1, q.y1);
      }
      return this;
    }

    function defaultX(d) {
      return d[0];
    }

    function tree_x(_) {
      return arguments.length ? (this._x = _, this) : this._x;
    }

    function defaultY(d) {
      return d[1];
    }

    function tree_y(_) {
      return arguments.length ? (this._y = _, this) : this._y;
    }

    function quadtree(nodes, x, y) {
      var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
      return nodes == null ? tree : tree.addAll(nodes);
    }

    function Quadtree(x, y, x0, y0, x1, y1) {
      this._x = x;
      this._y = y;
      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      this._root = undefined;
    }

    function leaf_copy(leaf) {
      var copy = {data: leaf.data}, next = copy;
      while (leaf = leaf.next) next = next.next = {data: leaf.data};
      return copy;
    }

    var treeProto = quadtree.prototype = Quadtree.prototype;

    treeProto.copy = function() {
      var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          node = this._root,
          nodes,
          child;

      if (!node) return copy;

      if (!node.length) return copy._root = leaf_copy(node), copy;

      nodes = [{source: node, target: copy._root = new Array(4)}];
      while (node = nodes.pop()) {
        for (var i = 0; i < 4; ++i) {
          if (child = node.source[i]) {
            if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
            else node.target[i] = leaf_copy(child);
          }
        }
      }

      return copy;
    };

    treeProto.add = tree_add;
    treeProto.addAll = addAll;
    treeProto.cover = tree_cover;
    treeProto.data = tree_data;
    treeProto.extent = tree_extent;
    treeProto.find = tree_find;
    treeProto.remove = tree_remove;
    treeProto.removeAll = removeAll;
    treeProto.root = tree_root;
    treeProto.size = tree_size;
    treeProto.visit = tree_visit;
    treeProto.visitAfter = tree_visitAfter;
    treeProto.x = tree_x;
    treeProto.y = tree_y;

    function constant(x) {
      return function() {
        return x;
      };
    }

    function jiggle(random) {
      return (random() - 0.5) * 1e-6;
    }

    function x$1(d) {
      return d.x + d.vx;
    }

    function y$1(d) {
      return d.y + d.vy;
    }

    function forceCollide(radius) {
      var nodes,
          radii,
          random,
          strength = 1,
          iterations = 1;

      if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);

      function force() {
        var i, n = nodes.length,
            tree,
            node,
            xi,
            yi,
            ri,
            ri2;

        for (var k = 0; k < iterations; ++k) {
          tree = quadtree(nodes, x$1, y$1).visitAfter(prepare);
          for (i = 0; i < n; ++i) {
            node = nodes[i];
            ri = radii[node.index], ri2 = ri * ri;
            xi = node.x + node.vx;
            yi = node.y + node.vy;
            tree.visit(apply);
          }
        }

        function apply(quad, x0, y0, x1, y1) {
          var data = quad.data, rj = quad.r, r = ri + rj;
          if (data) {
            if (data.index > node.index) {
              var x = xi - data.x - data.vx,
                  y = yi - data.y - data.vy,
                  l = x * x + y * y;
              if (l < r * r) {
                if (x === 0) x = jiggle(random), l += x * x;
                if (y === 0) y = jiggle(random), l += y * y;
                l = (r - (l = Math.sqrt(l))) / l * strength;
                node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                node.vy += (y *= l) * r;
                data.vx -= x * (r = 1 - r);
                data.vy -= y * r;
              }
            }
            return;
          }
          return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
      }

      function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for (var i = quad.r = 0; i < 4; ++i) {
          if (quad[i] && quad[i].r > quad.r) {
            quad.r = quad[i].r;
          }
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
      };

      force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
      };

      force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
      };

      return force;
    }

    function index(d) {
      return d.index;
    }

    function find(nodeById, nodeId) {
      var node = nodeById.get(nodeId);
      if (!node) throw new Error("node not found: " + nodeId);
      return node;
    }

    function forceLink(links) {
      var id = index,
          strength = defaultStrength,
          strengths,
          distance = constant(30),
          distances,
          nodes,
          count,
          bias,
          random,
          iterations = 1;

      if (links == null) links = [];

      function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
      }

      function force(alpha) {
        for (var k = 0, n = links.length; k < iterations; ++k) {
          for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || jiggle(random);
            y = target.y + target.vy - source.y - source.vy || jiggle(random);
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
          }
        }
      }

      function initialize() {
        if (!nodes) return;

        var i,
            n = nodes.length,
            m = links.length,
            nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
            link;

        for (i = 0, count = new Array(n); i < m; ++i) {
          link = links[i], link.index = i;
          if (typeof link.source !== "object") link.source = find(nodeById, link.source);
          if (typeof link.target !== "object") link.target = find(nodeById, link.target);
          count[link.source.index] = (count[link.source.index] || 0) + 1;
          count[link.target.index] = (count[link.target.index] || 0) + 1;
        }

        for (i = 0, bias = new Array(m); i < m; ++i) {
          link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        }

        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
      }

      function initializeStrength() {
        if (!nodes) return;

        for (var i = 0, n = links.length; i < n; ++i) {
          strengths[i] = +strength(links[i], i, links);
        }
      }

      function initializeDistance() {
        if (!nodes) return;

        for (var i = 0, n = links.length; i < n; ++i) {
          distances[i] = +distance(links[i], i, links);
        }
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
      };

      force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
      };

      force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initializeStrength(), force) : strength;
      };

      force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : constant(+_), initializeDistance(), force) : distance;
      };

      return force;
    }

    var noop = {value: () => {}};

    function dispatch() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }

    function Dispatch(_) {
      this._ = _;
    }

    function parseTypenames(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: name};
      });
    }

    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._,
            T = parseTypenames(typename + "", _),
            t,
            i = -1,
            n = T.length;

        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
          return;
        }

        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
        }

        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };

    function get(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
          return c.value;
        }
      }
    }

    function set(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
          type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
          break;
        }
      }
      if (callback != null) type.push({name: name, value: callback});
      return type;
    }

    var frame = 0, // is an animation frame pending?
        timeout = 0, // is a timeout pending?
        interval = 0, // are any timers active?
        pokeDelay = 1000, // how frequently we check for clock skew
        taskHead,
        taskTail,
        clockLast = 0,
        clockNow = 0,
        clockSkew = 0,
        clock = typeof performance === "object" && performance.now ? performance : Date,
        setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

    function now() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }

    function clearNow() {
      clockNow = 0;
    }

    function Timer() {
      this._call =
      this._time =
      this._next = null;
    }

    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };

    function timer(callback, delay, time) {
      var t = new Timer;
      t.restart(callback, delay, time);
      return t;
    }

    function timerFlush() {
      now(); // Get the current time, if not already set.
      ++frame; // Pretend we’ve set an alarm, if we haven’t already.
      var t = taskHead, e;
      while (t) {
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
      }
      --frame;
    }

    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }

    function poke() {
      var now = clock.now(), delay = now - clockLast;
      if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
    }

    function nap() {
      var t0, t1 = taskHead, t2, time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time) time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }

    function sleep(time) {
      if (frame) return; // Soonest alarm already set, or will be.
      if (timeout) timeout = clearTimeout(timeout);
      var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
      if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
      } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }

    // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296; // 2^32

    function lcg() {
      let s = 1;
      return () => (s = (a * s + c) % m) / m;
    }

    function x(d) {
      return d.x;
    }

    function y(d) {
      return d.y;
    }

    var initialRadius = 10,
        initialAngle = Math.PI * (3 - Math.sqrt(5));

    function forceSimulation(nodes) {
      var simulation,
          alpha = 1,
          alphaMin = 0.001,
          alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
          alphaTarget = 0,
          velocityDecay = 0.6,
          forces = new Map(),
          stepper = timer(step),
          event = dispatch("tick", "end"),
          random = lcg();

      if (nodes == null) nodes = [];

      function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
          stepper.stop();
          event.call("end", simulation);
        }
      }

      function tick(iterations) {
        var i, n = nodes.length, node;

        if (iterations === undefined) iterations = 1;

        for (var k = 0; k < iterations; ++k) {
          alpha += (alphaTarget - alpha) * alphaDecay;

          forces.forEach(function(force) {
            force(alpha);
          });

          for (i = 0; i < n; ++i) {
            node = nodes[i];
            if (node.fx == null) node.x += node.vx *= velocityDecay;
            else node.x = node.fx, node.vx = 0;
            if (node.fy == null) node.y += node.vy *= velocityDecay;
            else node.y = node.fy, node.vy = 0;
          }
        }

        return simulation;
      }

      function initializeNodes() {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.index = i;
          if (node.fx != null) node.x = node.fx;
          if (node.fy != null) node.y = node.fy;
          if (isNaN(node.x) || isNaN(node.y)) {
            var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
            node.x = radius * Math.cos(angle);
            node.y = radius * Math.sin(angle);
          }
          if (isNaN(node.vx) || isNaN(node.vy)) {
            node.vx = node.vy = 0;
          }
        }
      }

      function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
      }

      initializeNodes();

      return simulation = {
        tick: tick,

        restart: function() {
          return stepper.restart(step), simulation;
        },

        stop: function() {
          return stepper.stop(), simulation;
        },

        nodes: function(_) {
          return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },

        alpha: function(_) {
          return arguments.length ? (alpha = +_, simulation) : alpha;
        },

        alphaMin: function(_) {
          return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },

        alphaDecay: function(_) {
          return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },

        alphaTarget: function(_) {
          return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },

        velocityDecay: function(_) {
          return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },

        randomSource: function(_) {
          return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },

        force: function(name, _) {
          return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
        },

        find: function(x, y, radius) {
          var i = 0,
              n = nodes.length,
              dx,
              dy,
              d2,
              node,
              closest;

          if (radius == null) radius = Infinity;
          else radius *= radius;

          for (i = 0; i < n; ++i) {
            node = nodes[i];
            dx = x - node.x;
            dy = y - node.y;
            d2 = dx * dx + dy * dy;
            if (d2 < radius) closest = node, radius = d2;
          }

          return closest;
        },

        on: function(name, _) {
          return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
      };
    }

    function forceManyBody() {
      var nodes,
          node,
          random,
          alpha,
          strength = constant(-30),
          strengths,
          distanceMin2 = 1,
          distanceMax2 = Infinity,
          theta2 = 0.81;

      function force(_) {
        var i, n = nodes.length, tree = quadtree(nodes, x, y).visitAfter(accumulate);
        for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
      }

      function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;

        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
          for (x = y = i = 0; i < 4; ++i) {
            if ((q = quad[i]) && (c = Math.abs(q.value))) {
              strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            }
          }
          quad.x = x / weight;
          quad.y = y / weight;
        }

        // For leaf nodes, accumulate forces from coincident quadrants.
        else {
          q = quad;
          q.x = q.data.x;
          q.y = q.data.y;
          do strength += strengths[q.data.index];
          while (q = q.next);
        }

        quad.value = strength;
      }

      function apply(quad, x1, _, x2) {
        if (!quad.value) return true;

        var x = quad.x - node.x,
            y = quad.y - node.y,
            w = x2 - x1,
            l = x * x + y * y;

        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
          if (l < distanceMax2) {
            if (x === 0) x = jiggle(random), l += x * x;
            if (y === 0) y = jiggle(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
            node.vx += x * quad.value * alpha / l;
            node.vy += y * quad.value * alpha / l;
          }
          return true;
        }

        // Otherwise, process points directly.
        else if (quad.length || l >= distanceMax2) return;

        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
          if (x === 0) x = jiggle(random), l += x * x;
          if (y === 0) y = jiggle(random), l += y * y;
          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }

        do if (quad.data !== node) {
          w = strengths[quad.data.index] * alpha / l;
          node.vx += x * w;
          node.vy += y * w;
        } while (quad = quad.next);
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
      };

      force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
      };

      force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
      };

      return force;
    }

    function forceX(x) {
      var strength = constant(0.1),
          nodes,
          strengths,
          xz;

      if (typeof x !== "function") x = constant(x == null ? 0 : +x);

      function force(alpha) {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for (i = 0; i < n; ++i) {
          strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
      }

      force.initialize = function(_) {
        nodes = _;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), initialize(), force) : x;
      };

      return force;
    }

    function forceY(y) {
      var strength = constant(0.1),
          nodes,
          strengths,
          yz;

      if (typeof y !== "function") y = constant(y == null ? 0 : +y);

      function force(alpha) {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for (i = 0; i < n; ++i) {
          strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
      }

      force.initialize = function(_) {
        nodes = _;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), initialize(), force) : y;
      };

      return force;
    }

    const COLOR_BASE = "#cecece";

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    var utils$3 = {};

    const WIN_SLASH = '\\\\/';
    const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

    /**
     * Posix glob regex
     */

    const DOT_LITERAL = '\\.';
    const PLUS_LITERAL = '\\+';
    const QMARK_LITERAL = '\\?';
    const SLASH_LITERAL = '\\/';
    const ONE_CHAR = '(?=.)';
    const QMARK = '[^/]';
    const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    const NO_DOT = `(?!${DOT_LITERAL})`;
    const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    const STAR = `${QMARK}*?`;
    const SEP = '/';

    const POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR,
      SEP
    };

    /**
     * Windows glob regex
     */

    const WINDOWS_CHARS = {
      ...POSIX_CHARS,

      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
      SEP: '\\'
    };

    /**
     * POSIX Bracket Regex
     */

    const POSIX_REGEX_SOURCE$1 = {
      alnum: 'a-zA-Z0-9',
      alpha: 'a-zA-Z',
      ascii: '\\x00-\\x7F',
      blank: ' \\t',
      cntrl: '\\x00-\\x1F\\x7F',
      digit: '0-9',
      graph: '\\x21-\\x7E',
      lower: 'a-z',
      print: '\\x20-\\x7E ',
      punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
      space: ' \\t\\r\\n\\v\\f',
      upper: 'A-Z',
      word: 'A-Za-z0-9_',
      xdigit: 'A-Fa-f0-9'
    };

    var constants$2 = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,

      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,

      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        '***': '*',
        '**/**': '**',
        '**/**/**': '**'
      },

      // Digits
      CHAR_0: 48, /* 0 */
      CHAR_9: 57, /* 9 */

      // Alphabet chars.
      CHAR_UPPERCASE_A: 65, /* A */
      CHAR_LOWERCASE_A: 97, /* a */
      CHAR_UPPERCASE_Z: 90, /* Z */
      CHAR_LOWERCASE_Z: 122, /* z */

      CHAR_LEFT_PARENTHESES: 40, /* ( */
      CHAR_RIGHT_PARENTHESES: 41, /* ) */

      CHAR_ASTERISK: 42, /* * */

      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38, /* & */
      CHAR_AT: 64, /* @ */
      CHAR_BACKWARD_SLASH: 92, /* \ */
      CHAR_CARRIAGE_RETURN: 13, /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
      CHAR_COLON: 58, /* : */
      CHAR_COMMA: 44, /* , */
      CHAR_DOT: 46, /* . */
      CHAR_DOUBLE_QUOTE: 34, /* " */
      CHAR_EQUAL: 61, /* = */
      CHAR_EXCLAMATION_MARK: 33, /* ! */
      CHAR_FORM_FEED: 12, /* \f */
      CHAR_FORWARD_SLASH: 47, /* / */
      CHAR_GRAVE_ACCENT: 96, /* ` */
      CHAR_HASH: 35, /* # */
      CHAR_HYPHEN_MINUS: 45, /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
      CHAR_LEFT_CURLY_BRACE: 123, /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
      CHAR_LINE_FEED: 10, /* \n */
      CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
      CHAR_PERCENT: 37, /* % */
      CHAR_PLUS: 43, /* + */
      CHAR_QUESTION_MARK: 63, /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
      CHAR_RIGHT_CURLY_BRACE: 125, /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
      CHAR_SEMICOLON: 59, /* ; */
      CHAR_SINGLE_QUOTE: 39, /* ' */
      CHAR_SPACE: 32, /*   */
      CHAR_TAB: 9, /* \t */
      CHAR_UNDERSCORE: 95, /* _ */
      CHAR_VERTICAL_LINE: 124, /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

      /**
       * Create EXTGLOB_CHARS
       */

      extglobChars(chars) {
        return {
          '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
          '?': { type: 'qmark', open: '(?:', close: ')?' },
          '+': { type: 'plus', open: '(?:', close: ')+' },
          '*': { type: 'star', open: '(?:', close: ')*' },
          '@': { type: 'at', open: '(?:', close: ')' }
        };
      },

      /**
       * Create GLOB_CHARS
       */

      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };

    (function (exports) {

    	const {
    	  REGEX_BACKSLASH,
    	  REGEX_REMOVE_BACKSLASH,
    	  REGEX_SPECIAL_CHARS,
    	  REGEX_SPECIAL_CHARS_GLOBAL
    	} = constants$2;

    	exports.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
    	exports.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
    	exports.isRegexChar = str => str.length === 1 && exports.hasRegexChars(str);
    	exports.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
    	exports.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

    	exports.removeBackslashes = str => {
    	  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
    	    return match === '\\' ? '' : match;
    	  });
    	};

    	exports.supportsLookbehinds = () => {
    	  const segs = process.version.slice(1).split('.').map(Number);
    	  if (segs.length === 3 && segs[0] >= 9 || (segs[0] === 8 && segs[1] >= 10)) {
    	    return true;
    	  }
    	  return false;
    	};

    	exports.escapeLast = (input, char, lastIdx) => {
    	  const idx = input.lastIndexOf(char, lastIdx);
    	  if (idx === -1) return input;
    	  if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
    	  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    	};

    	exports.removePrefix = (input, state = {}) => {
    	  let output = input;
    	  if (output.startsWith('./')) {
    	    output = output.slice(2);
    	    state.prefix = './';
    	  }
    	  return output;
    	};

    	exports.wrapOutput = (input, state = {}, options = {}) => {
    	  const prepend = options.contains ? '' : '^';
    	  const append = options.contains ? '' : '$';

    	  let output = `${prepend}(?:${input})${append}`;
    	  if (state.negated === true) {
    	    output = `(?:^(?!${output}).*$)`;
    	  }
    	  return output;
    	};

    	exports.basename = (path, { windows } = {}) => {
    	  if (windows) {
    	    return path.replace(/[\\/]$/, '').replace(/.*[\\/]/, '');
    	  } else {
    	    return path.replace(/\/$/, '').replace(/.*\//, '');
    	  }
    	}; 
    } (utils$3));

    const utils$2 = utils$3;
    const {
      CHAR_ASTERISK,             /* * */
      CHAR_AT,                   /* @ */
      CHAR_BACKWARD_SLASH,       /* \ */
      CHAR_COMMA,                /* , */
      CHAR_DOT,                  /* . */
      CHAR_EXCLAMATION_MARK,     /* ! */
      CHAR_FORWARD_SLASH,        /* / */
      CHAR_LEFT_CURLY_BRACE,     /* { */
      CHAR_LEFT_PARENTHESES,     /* ( */
      CHAR_LEFT_SQUARE_BRACKET,  /* [ */
      CHAR_PLUS,                 /* + */
      CHAR_QUESTION_MARK,        /* ? */
      CHAR_RIGHT_CURLY_BRACE,    /* } */
      CHAR_RIGHT_PARENTHESES,    /* ) */
      CHAR_RIGHT_SQUARE_BRACKET  /* ] */
    } = constants$2;

    const isPathSeparator = code => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };

    const depth = token => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };

    /**
     * Quickly scans a glob pattern and returns an object with a handful of
     * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
     * `glob` (the actual pattern), and `negated` (true if the path starts with `!`).
     *
     * ```js
     * const pm = require('picomatch');
     * console.log(pm.scan('foo/bar/*.js'));
     * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
     * ```
     * @param {String} `str`
     * @param {Object} `options`
     * @return {Object} Returns an object with tokens and regex source string.
     * @api public
     */

    const scan$1 = (input, options) => {
      const opts = options || {};

      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];

      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: '', depth: 0, isGlob: false };

      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };

      while (index < length) {
        code = advance();
        let next;

        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();

          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }

        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;

          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }

            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }

            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;

              if (scanToEnd === true) {
                continue;
              }

              break;
            }

            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;

              if (scanToEnd === true) {
                continue;
              }

              break;
            }

            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;

              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: '', depth: 0, isGlob: false };

          if (finished === true) continue;
          if (prev === CHAR_DOT && index === (start + 1)) {
            start += 2;
            continue;
          }

          lastIndex = index + 1;
          continue;
        }

        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS
            || code === CHAR_AT
            || code === CHAR_ASTERISK
            || code === CHAR_QUESTION_MARK
            || code === CHAR_EXCLAMATION_MARK;

          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;

            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }

                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }

        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }
          break;
        }

        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }
          break;
        }

        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }

            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;

              if (scanToEnd === true) {
                continue;
              }
              break;
            }
          }
        }

        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }

        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;

          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }

              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }

        if (isGlob === true) {
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }
      }

      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }

      let base = str;
      let prefix = '';
      let glob = '';

      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }

      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = '';
        glob = str;
      } else {
        base = str;
      }

      if (base && base !== '' && base !== '/' && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }

      if (opts.unescape === true) {
        if (glob) glob = utils$2.removeBackslashes(glob);

        if (base && backslashes === true) {
          base = utils$2.removeBackslashes(base);
        }
      }

      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated
      };

      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }

      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;

        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== '') {
            parts.push(value);
          }
          prevIndex = i;
        }

        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);

          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }

        state.slashes = slashes;
        state.parts = parts;
      }

      return state;
    };

    var scan_1 = scan$1;

    const constants$1 = constants$2;
    const utils$1 = utils$3;

    /**
     * Constants
     */

    const {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants$1;

    /**
     * Helpers
     */

    const expandRange = (args, options) => {
      if (typeof options.expandRange === 'function') {
        return options.expandRange(...args, options);
      }

      args.sort();
      const value = `[${args.join('-')}]`;

      try {
        /* eslint-disable-next-line no-new */
        new RegExp(value);
      } catch (ex) {
        return args.map(v => utils$1.escapeRegex(v)).join('..');
      }

      return value;
    };

    /**
     * Create the message for a syntax error
     */

    const syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };

    /**
     * Parse the given input string.
     * @param {String} input
     * @param {Object} options
     * @return {Object}
     */

    const parse$1 = (input, options) => {
      if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
      }

      input = REPLACEMENTS[input] || input;

      const opts = { ...options };
      const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }

      const bos = { type: 'bos', value: '', output: opts.prepend || '' };
      const tokens = [bos];

      const capture = opts.capture ? '' : '?:';

      // create constants based on platform, for windows or posix
      const PLATFORM_CHARS = constants$1.globChars(opts.windows);
      const EXTGLOB_CHARS = constants$1.extglobChars(PLATFORM_CHARS);

      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;

      const globstar = (opts) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };

      const nodot = opts.dot ? '' : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;

      if (opts.capture) {
        star = `(${star})`;
      }

      // minimatch options support
      if (typeof opts.noext === 'boolean') {
        opts.noextglob = opts.noext;
      }

      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: '',
        output: '',
        prefix: '',
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };

      input = utils$1.removePrefix(input, state);
      len = input.length;

      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;

      /**
       * Tokenizing helpers
       */

      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index];
      const remaining = () => input.slice(state.index + 1);
      const consume = (value = '', num = 0) => {
        state.consumed += value;
        state.index += num;
      };
      const append = token => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };

      const negate = () => {
        let count = 1;

        while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
          advance();
          state.start++;
          count++;
        }

        if (count % 2 === 0) {
          return false;
        }

        state.negated = true;
        state.start++;
        return true;
      };

      const increment = type => {
        state[type]++;
        stack.push(type);
      };

      const decrement = type => {
        state[type]--;
        stack.pop();
      };

      /**
       * Push tokens onto the tokens array. This helper speeds up
       * tokenizing by 1) helping us avoid backtracking as much as possible,
       * and 2) helping us avoid creating extra tokens when consecutive
       * characters are plain text. This improves performance and simplifies
       * lookbehinds.
       */

      const push = tok => {
        if (prev.type === 'globstar') {
          const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
          const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

          if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = 'star';
            prev.value = '*';
            prev.output = star;
            state.output += prev.output;
          }
        }

        if (extglobs.length && tok.type !== 'paren' && !EXTGLOB_CHARS[tok.value]) {
          extglobs[extglobs.length - 1].inner += tok.value;
        }

        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === 'text' && tok.type === 'text') {
          prev.value += tok.value;
          prev.output = (prev.output || '') + tok.value;
          return;
        }

        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };

      const extglobOpen = (type, value) => {
        const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? '(' : '') + token.open;

        increment('parens');
        push({ type, value, output: state.output ? '' : ONE_CHAR });
        push({ type: 'paren', extglob: true, value: advance(), output });
        extglobs.push(token);
      };

      const extglobClose = token => {
        let output = token.close + (opts.capture ? ')' : '');

        if (token.type === 'negate') {
          let extglobStar = star;

          if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
            extglobStar = globstar(opts);
          }

          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }

          if (token.prev.type === 'bos' && eos()) {
            state.negatedExtglob = true;
          }
        }

        push({ type: 'paren', extglob: true, value, output });
        decrement('parens');
      };

      /**
       * Fast paths
       */

      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;

        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === '\\') {
            backslashes = true;
            return m;
          }

          if (first === '?') {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : '');
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
            }
            return QMARK.repeat(chars.length);
          }

          if (first === '.') {
            return DOT_LITERAL.repeat(chars.length);
          }

          if (first === '*') {
            if (esc) {
              return esc + first + (rest ? star : '');
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });

        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, '');
          } else {
            output = output.replace(/\\+/g, m => {
              return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
            });
          }
        }

        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }

        state.output = utils$1.wrapOutput(output, state, options);
        return state;
      }

      /**
       * Tokenize input until we reach end-of-string
       */

      while (!eos()) {
        value = advance();

        if (value === '\u0000') {
          continue;
        }

        /**
         * Escaped characters
         */

        if (value === '\\') {
          const next = peek();

          if (next === '/' && opts.bash !== true) {
            continue;
          }

          if (next === '.' || next === ';') {
            continue;
          }

          if (!next) {
            value += '\\';
            push({ type: 'text', value });
            continue;
          }

          // collapse slashes to reduce potential for exploits
          const match = /^\\+/.exec(remaining());
          let slashes = 0;

          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += '\\';
            }
          }

          if (opts.unescape === true) {
            value = advance() || '';
          } else {
            value += advance() || '';
          }

          if (state.brackets === 0) {
            push({ type: 'text', value });
            continue;
          }
        }

        /**
         * If we're inside a regex character class, continue
         * until we reach the closing bracket.
         */

        if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
          if (opts.posix !== false && value === ':') {
            const inner = prev.value.slice(1);
            if (inner.includes('[')) {
              prev.posix = true;

              if (inner.includes(':')) {
                const idx = prev.value.lastIndexOf('[');
                const pre = prev.value.slice(0, idx);
                const rest = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();

                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }

          if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
            value = `\\${value}`;
          }

          if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
            value = `\\${value}`;
          }

          if (opts.posix === true && value === '!' && prev.value === '[') {
            value = '^';
          }

          prev.value += value;
          append({ value });
          continue;
        }

        /**
         * If we're inside a quoted string, continue
         * until we reach the closing double quote.
         */

        if (state.quotes === 1 && value !== '"') {
          value = utils$1.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }

        /**
         * Double quotes
         */

        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: 'text', value });
          }
          continue;
        }

        /**
         * Parentheses
         */

        if (value === '(') {
          increment('parens');
          push({ type: 'paren', value });
          continue;
        }

        if (value === ')') {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError('opening', '('));
          }

          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }

          push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
          decrement('parens');
          continue;
        }

        /**
         * Square brackets
         */

        if (value === '[') {
          if (opts.nobracket === true || !remaining().includes(']')) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError('closing', ']'));
            }

            value = `\\${value}`;
          } else {
            increment('brackets');
          }

          push({ type: 'bracket', value });
          continue;
        }

        if (value === ']') {
          if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
            push({ type: 'text', value, output: `\\${value}` });
            continue;
          }

          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError('opening', '['));
            }

            push({ type: 'text', value, output: `\\${value}` });
            continue;
          }

          decrement('brackets');

          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
            value = `/${value}`;
          }

          prev.value += value;
          append({ value });

          // when literal brackets are explicitly disabled
          // assume we should match with a regex character class
          if (opts.literalBrackets === false || utils$1.hasRegexChars(prevValue)) {
            continue;
          }

          const escaped = utils$1.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);

          // when literal brackets are explicitly enabled
          // assume we should escape the brackets to match literal characters
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }

          // when the user specifies nothing, try to match both
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }

        /**
         * Braces
         */

        if (value === '{' && opts.nobrace !== true) {
          increment('braces');

          const open = {
            type: 'brace',
            value,
            output: '(',
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };

          braces.push(open);
          push(open);
          continue;
        }

        if (value === '}') {
          const brace = braces[braces.length - 1];

          if (opts.nobrace === true || !brace) {
            push({ type: 'text', value, output: value });
            continue;
          }

          let output = ')';

          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];

            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === 'brace') {
                break;
              }
              if (arr[i].type !== 'dots') {
                range.unshift(arr[i].value);
              }
            }

            output = expandRange(range, opts);
            state.backtrack = true;
          }

          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = '\\{';
            value = output = '\\}';
            state.output = out;
            for (const t of toks) {
              state.output += (t.output || t.value);
            }
          }

          push({ type: 'brace', value, output });
          decrement('braces');
          braces.pop();
          continue;
        }

        /**
         * Pipes
         */

        if (value === '|') {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: 'text', value });
          continue;
        }

        /**
         * Commas
         */

        if (value === ',') {
          let output = value;

          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === 'braces') {
            brace.comma = true;
            output = '|';
          }

          push({ type: 'comma', value, output });
          continue;
        }

        /**
         * Slashes
         */

        if (value === '/') {
          // if the beginning of the glob is "./", advance the start
          // to the current index, and don't add the "./" characters
          // to the state. This greatly simplifies lookbehinds when
          // checking for BOS characters like "!" and "." (not "./")
          if (prev.type === 'dot' && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = '';
            state.output = '';
            tokens.pop();
            prev = bos; // reset "prev" to the first token
            continue;
          }

          push({ type: 'slash', value, output: SLASH_LITERAL });
          continue;
        }

        /**
         * Dots
         */

        if (value === '.') {
          if (state.braces > 0 && prev.type === 'dot') {
            if (prev.value === '.') prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = 'dots';
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }

          if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
            push({ type: 'text', value, output: DOT_LITERAL });
            continue;
          }

          push({ type: 'dot', value, output: DOT_LITERAL });
          continue;
        }

        /**
         * Question marks
         */

        if (value === '?') {
          const isGroup = prev && prev.value === '(';
          if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
            extglobOpen('qmark', value);
            continue;
          }

          if (prev && prev.type === 'paren') {
            const next = peek();
            let output = value;

            if (next === '<' && !utils$1.supportsLookbehinds()) {
              throw new Error('Node.js v10 or higher is required for regex lookbehinds');
            }

            if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
              output = `\\${value}`;
            }

            push({ type: 'text', value, output });
            continue;
          }

          if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
            push({ type: 'qmark', value, output: QMARK_NO_DOT });
            continue;
          }

          push({ type: 'qmark', value, output: QMARK });
          continue;
        }

        /**
         * Exclamation
         */

        if (value === '!') {
          if (opts.noextglob !== true && peek() === '(') {
            if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
              extglobOpen('negate', value);
              continue;
            }
          }

          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }

        /**
         * Plus
         */

        if (value === '+') {
          if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
            extglobOpen('plus', value);
            continue;
          }

          if ((prev && prev.value === '(') || opts.regex === false) {
            push({ type: 'plus', value, output: PLUS_LITERAL });
            continue;
          }

          if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
            push({ type: 'plus', value });
            continue;
          }

          push({ type: 'plus', value: PLUS_LITERAL });
          continue;
        }

        /**
         * Plain text
         */

        if (value === '@') {
          if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
            push({ type: 'at', extglob: true, value, output: '' });
            continue;
          }

          push({ type: 'text', value });
          continue;
        }

        /**
         * Plain text
         */

        if (value !== '*') {
          if (value === '$' || value === '^') {
            value = `\\${value}`;
          }

          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }

          push({ type: 'text', value });
          continue;
        }

        /**
         * Stars
         */

        if (prev && (prev.type === 'globstar' || prev.star === true)) {
          prev.type = 'star';
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }

        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen('star', value);
          continue;
        }

        if (prev.type === 'star') {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }

          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === 'slash' || prior.type === 'bos';
          const afterStar = before && (before.type === 'star' || before.type === 'globstar');

          if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
            push({ type: 'star', value, output: '' });
            continue;
          }

          const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
          const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
          if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
            push({ type: 'star', value, output: '' });
            continue;
          }

          // strip consecutive `/**/`
          while (rest.slice(0, 3) === '/**') {
            const after = input[state.index + 4];
            if (after && after !== '/') {
              break;
            }
            rest = rest.slice(3);
            consume('/**', 3);
          }

          if (prior.type === 'bos' && eos()) {
            prev.type = 'globstar';
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }

          if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;

            prev.type = 'globstar';
            prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }

          if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
            const end = rest[1] !== void 0 ? '|$' : '';

            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;

            prev.type = 'globstar';
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;

            state.output += prior.output + prev.output;
            state.globstar = true;

            consume(value + advance());

            push({ type: 'slash', value: '/', output: '' });
            continue;
          }

          if (prior.type === 'bos' && rest[0] === '/') {
            prev.type = 'globstar';
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: 'slash', value: '/', output: '' });
            continue;
          }

          // remove single star from output
          state.output = state.output.slice(0, -prev.output.length);

          // reset previous token to globstar
          prev.type = 'globstar';
          prev.output = globstar(opts);
          prev.value += value;

          // reset output with globstar
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }

        const token = { type: 'star', value, output: star };

        if (opts.bash === true) {
          token.output = '.*?';
          if (prev.type === 'bos' || prev.type === 'slash') {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }

        if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }

        if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
          if (prev.type === 'dot') {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;

          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;

          } else {
            state.output += nodot;
            prev.output += nodot;
          }

          if (peek() !== '*') {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }

        push(token);
      }

      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
        state.output = utils$1.escapeLast(state.output, '[');
        decrement('brackets');
      }

      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
        state.output = utils$1.escapeLast(state.output, '(');
        decrement('parens');
      }

      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
        state.output = utils$1.escapeLast(state.output, '{');
        decrement('braces');
      }

      if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
        push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
      }

      // rebuild the output if we had to backtrack at any point
      if (state.backtrack === true) {
        state.output = '';

        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;

          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }

      return state;
    };

    /**
     * Fast paths for creating regular expressions for common glob patterns.
     * This can significantly speed up processing and has very little downside
     * impact when none of the fast paths match.
     */

    parse$1.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }

      input = REPLACEMENTS[input] || input;

      // create constants based on platform, for windows or posix
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants$1.globChars(opts.windows);

      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? '' : '?:';
      const state = { negated: false, prefix: '' };
      let star = opts.bash === true ? '.*?' : STAR;

      if (opts.capture) {
        star = `(${star})`;
      }

      const globstar = (opts) => {
        if (opts.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };

      const create = str => {
        switch (str) {
          case '*':
            return `${nodot}${ONE_CHAR}${star}`;

          case '.*':
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;

          case '*.*':
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

          case '*/*':
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

          case '**':
            return nodot + globstar(opts);

          case '**/*':
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

          case '**/*.*':
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

          case '**/.*':
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;

            const source = create(match[1]);
            if (!source) return;

            return source + DOT_LITERAL + match[2];
          }
        }
      };

      const output = utils$1.removePrefix(input, state);
      let source = create(output);

      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }

      return source;
    };

    var parse_1 = parse$1;

    const scan = scan_1;
    const parse = parse_1;
    const utils = utils$3;
    const constants = constants$2;
    const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

    /**
     * Creates a matcher function from one or more glob patterns. The
     * returned function takes a string to match as its first argument,
     * and returns true if the string is a match. The returned matcher
     * function also takes a boolean as the second argument that, when true,
     * returns an object with additional information.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch(glob[, options]);
     *
     * const isMatch = picomatch('*.!(*a)');
     * console.log(isMatch('a.a')); //=> false
     * console.log(isMatch('a.b')); //=> true
     * ```
     * @name picomatch
     * @param {String|Array} `globs` One or more glob patterns.
     * @param {Object=} `options`
     * @return {Function=} Returns a matcher function.
     * @api public
     */

    const picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map(input => picomatch(input, options, returnState));
        const arrayMatcher = str => {
          for (const isMatch of fns) {
            const state = isMatch(str);
            if (state) return state;
          }
          return false;
        };
        return arrayMatcher;
      }

      const isState = isObject(glob) && glob.tokens && glob.input;

      if (glob === '' || (typeof glob !== 'string' && !isState)) {
        throw new TypeError('Expected pattern to be a non-empty string');
      }

      const opts = options || {};
      const posix = opts.windows;
      const regex = isState
        ? picomatch.compileRe(glob, options)
        : picomatch.makeRe(glob, options, false, true);

      const state = regex.state;
      delete regex.state;

      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }

      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };

        if (typeof opts.onResult === 'function') {
          opts.onResult(result);
        }

        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }

        if (isIgnored(input)) {
          if (typeof opts.onIgnore === 'function') {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }

        if (typeof opts.onMatch === 'function') {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };

      if (returnState) {
        matcher.state = state;
      }

      return matcher;
    };

    /**
     * Test `input` with the given `regex`. This is used by the main
     * `picomatch()` function to test the input string.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch.test(input, regex[, options]);
     *
     * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
     * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
     * ```
     * @param {String} `input` String to test.
     * @param {RegExp} `regex`
     * @return {Object} Returns an object with matching info.
     * @api public
     */

    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== 'string') {
        throw new TypeError('Expected input to be a string');
      }

      if (input === '') {
        return { isMatch: false, output: '' };
      }

      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = (match && format) ? format(input) : input;

      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }

      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }

      return { isMatch: Boolean(match), match, output };
    };

    /**
     * Match the basename of a filepath.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch.matchBase(input, glob[, options]);
     * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
     * ```
     * @param {String} `input` String to test.
     * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
     * @return {Boolean}
     * @api public
     */

    picomatch.matchBase = (input, glob, options) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(utils.basename(input));
    };

    /**
     * Returns true if **any** of the given glob `patterns` match the specified `string`.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch.isMatch(string, patterns[, options]);
     *
     * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
     * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
     * ```
     * @param {String|Array} str The string to test.
     * @param {String|Array} patterns One or more glob patterns to use for matching.
     * @param {Object} [options] See available [options](#options).
     * @return {Boolean} Returns true if any patterns match `str`
     * @api public
     */

    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

    /**
     * Parse a glob pattern to create the source string for a regular
     * expression.
     *
     * ```js
     * const picomatch = require('picomatch');
     * const result = picomatch.parse(pattern[, options]);
     * ```
     * @param {String} `pattern`
     * @param {Object} `options`
     * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
     * @api public
     */

    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };

    /**
     * Scan a glob pattern to separate the pattern into segments.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch.scan(input[, options]);
     *
     * const result = picomatch.scan('!./foo/*.js');
     * console.log(result);
     * { prefix: '!./',
     *   input: '!./foo/*.js',
     *   start: 3,
     *   base: 'foo',
     *   glob: '*.js',
     *   isBrace: false,
     *   isBracket: false,
     *   isGlob: true,
     *   isExtglob: false,
     *   isGlobstar: false,
     *   negated: true }
     * ```
     * @param {String} `input` Glob pattern to scan.
     * @param {Object} `options`
     * @return {Object} Returns an object with
     * @api public
     */

    picomatch.scan = (input, options) => scan(input, options);

    /**
     * Create a regular expression from a parsed glob pattern.
     *
     * ```js
     * const picomatch = require('picomatch');
     * const state = picomatch.parse('*.js');
     * // picomatch.compileRe(state[, options]);
     *
     * console.log(picomatch.compileRe(state));
     * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
     * ```
     * @param {String} `state` The object returned from the `.parse` method.
     * @param {Object} `options`
     * @return {RegExp} Returns a regex created from the given pattern.
     * @api public
     */

    picomatch.compileRe = (parsed, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return parsed.output;
      }

      const opts = options || {};
      const prepend = opts.contains ? '' : '^';
      const append = opts.contains ? '' : '$';

      let source = `${prepend}(?:${parsed.output})${append}`;
      if (parsed && parsed.negated === true) {
        source = `^(?!${source}).*$`;
      }

      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = parsed;
      }

      return regex;
    };

    picomatch.makeRe = (input, options, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== 'string') {
        throw new TypeError('Expected a non-empty string');
      }

      const opts = options || {};
      let parsed = { negated: false, fastpaths: true };
      let prefix = '';
      let output;

      if (input.startsWith('./')) {
        input = input.slice(2);
        prefix = parsed.prefix = './';
      }

      if (opts.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
        output = parse.fastpaths(input, options);
      }

      if (output === undefined) {
        parsed = parse(input, options);
        parsed.prefix = prefix + (parsed.prefix || '');
      } else {
        parsed.output = output;
      }

      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };

    /**
     * Create a regular expression from the given regex source string.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch.toRegex(source[, options]);
     *
     * const { output } = picomatch.parse('*.js');
     * console.log(picomatch.toRegex(output));
     * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
     * ```
     * @param {String} `source` Regular expression source string.
     * @param {Object} `options`
     * @return {RegExp}
     * @api public
     */

    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };

    /**
     * Picomatch constants.
     * @return {Object}
     */

    picomatch.constants = constants;

    /**
     * Expose "picomatch"
     */

    var picomatch_1 = picomatch;

    var picomatchBrowser = picomatch_1;

    var pm = /*@__PURE__*/getDefaultExportFromCjs(picomatchBrowser);

    function isArray(arg) {
        return Array.isArray(arg);
    }
    function ensureArray(thing) {
        if (isArray(thing))
            return thing;
        if (thing == null)
            return [];
        return [thing];
    }
    const globToTest = (glob) => {
        const pattern = glob;
        const fn = pm(pattern, { dot: true });
        return {
            test: (what) => {
                const result = fn(what);
                return result;
            },
        };
    };
    const testTrue = {
        test: () => true,
    };
    const getMatcher = (filter) => {
        const bundleTest = "bundle" in filter && filter.bundle != null ? globToTest(filter.bundle) : testTrue;
        const fileTest = "file" in filter && filter.file != null ? globToTest(filter.file) : testTrue;
        return { bundleTest, fileTest };
    };
    const createFilter = (include, exclude) => {
        const includeMatchers = ensureArray(include).map(getMatcher);
        const excludeMatchers = ensureArray(exclude).map(getMatcher);
        return (bundleId, id) => {
            for (let i = 0; i < excludeMatchers.length; ++i) {
                const { bundleTest, fileTest } = excludeMatchers[i];
                if (bundleTest.test(bundleId) && fileTest.test(id))
                    return false;
            }
            for (let i = 0; i < includeMatchers.length; ++i) {
                const { bundleTest, fileTest } = includeMatchers[i];
                if (bundleTest.test(bundleId) && fileTest.test(id))
                    return true;
            }
            return !includeMatchers.length;
        };
    };

    const throttleFilter = (callback, limit) => {
        let waiting = false;
        return (val) => {
            if (!waiting) {
                callback(val);
                waiting = true;
                setTimeout(() => {
                    waiting = false;
                }, limit);
            }
        };
    };
    const prepareFilter = (filt) => {
        if (filt === "")
            return [];
        return (filt
            .split(",")
            // remove spaces before and after
            .map((entry) => entry.trim())
            // unquote "
            .map((entry) => entry.startsWith('"') && entry.endsWith('"') ? entry.substring(1, entry.length - 1) : entry)
            // unquote '
            .map((entry) => entry.startsWith("'") && entry.endsWith("'") ? entry.substring(1, entry.length - 1) : entry)
            // remove empty strings
            .filter((entry) => entry)
            // parse bundle:file
            .map((entry) => entry.split(":"))
            // normalize entry just in case
            .flatMap((entry) => {
            if (entry.length === 0)
                return [];
            let bundle = null;
            let file = null;
            if (entry.length === 1 && entry[0]) {
                file = entry[0];
                return [{ file, bundle }];
            }
            bundle = entry[0] || null;
            file = entry.slice(1).join(":") || null;
            return [{ bundle, file }];
        }));
    };
    const useFilter = () => {
        const [includeFilter, setIncludeFilter] = h("");
        const [excludeFilter, setExcludeFilter] = h("");
        const setIncludeFilterTrottled = F(() => throttleFilter(setIncludeFilter, 200), []);
        const setExcludeFilterTrottled = F(() => throttleFilter(setExcludeFilter, 200), []);
        const isIncluded = F(() => createFilter(prepareFilter(includeFilter), prepareFilter(excludeFilter)), [includeFilter, excludeFilter]);
        const getModuleFilterMultiplier = T((bundleId, data) => {
            return isIncluded(bundleId, data.id) ? 1 : 0;
        }, [isIncluded]);
        return {
            getModuleFilterMultiplier,
            includeFilter,
            excludeFilter,
            setExcludeFilter: setExcludeFilterTrottled,
            setIncludeFilter: setIncludeFilterTrottled,
        };
    };

    const PLACEHOLDER = "*/**/file.js";
    const SideBar = ({ availableSizeProperties, sizeProperty, setSizeProperty, onExcludeChange, onIncludeChange, }) => {
        const [includeValue, setIncludeValue] = h("");
        const [excludeValue, setExcludeValue] = h("");
        const handleSizePropertyChange = (sizeProp) => () => {
            if (sizeProp !== sizeProperty) {
                setSizeProperty(sizeProp);
            }
        };
        const handleIncludeChange = (event) => {
            const value = event.currentTarget.value;
            setIncludeValue(value);
            onIncludeChange(value);
        };
        const handleExcludeChange = (event) => {
            const value = event.currentTarget.value;
            setExcludeValue(value);
            onExcludeChange(value);
        };
        return (u$1("aside", { className: "sidebar", children: [u$1("div", { className: "size-selectors", children: availableSizeProperties.length > 1 &&
                        availableSizeProperties.map((sizeProp) => {
                            const id = `selector-${sizeProp}`;
                            return (u$1("div", { className: "size-selector", children: [u$1("input", { type: "radio", id: id, checked: sizeProp === sizeProperty, onChange: handleSizePropertyChange(sizeProp) }), u$1("label", { htmlFor: id, children: LABELS[sizeProp] })] }, sizeProp));
                        }) }), u$1("div", { className: "module-filters", children: [u$1("div", { className: "module-filter", children: [u$1("label", { htmlFor: "module-filter-exclude", children: "Exclude" }), u$1("input", { type: "text", id: "module-filter-exclude", value: excludeValue, onInput: handleExcludeChange, placeholder: PLACEHOLDER })] }), u$1("div", { className: "module-filter", children: [u$1("label", { htmlFor: "module-filter-include", children: "Include" }), u$1("input", { type: "text", id: "module-filter-include", value: includeValue, onInput: handleIncludeChange, placeholder: PLACEHOLDER })] })] })] }));
    };

    const Tooltip_marginX = 10;
    const Tooltip_marginY = 30;
    const Tooltip = ({ node, visible }) => {
        const { data } = q(StaticContext);
        const ref = _(null);
        const [style, setStyle] = h({});
        const content = F(() => {
            if (!node)
                return null;
            return (u$1(g$1, { children: [u$1("div", { children: node.id }), node.uid && (u$1("div", { children: [u$1("div", { children: [u$1("b", { children: "Imported By" }), ":"] }), data.nodeMetas[node.uid].importedBy.map(({ uid }) => {
                                const { id } = data.nodeMetas[uid];
                                return u$1("div", { children: id }, id);
                            })] }))] }));
        }, [data, node]);
        const updatePosition = (mouseCoords) => {
            if (!ref.current)
                return;
            const pos = {
                left: mouseCoords.x + Tooltip_marginX,
                top: mouseCoords.y + Tooltip_marginY,
            };
            const boundingRect = ref.current.getBoundingClientRect();
            if (pos.left + boundingRect.width > window.innerWidth) {
                // Shifting horizontally
                pos.left = window.innerWidth - boundingRect.width;
            }
            if (pos.top + boundingRect.height > window.innerHeight) {
                // Flipping vertically
                pos.top = mouseCoords.y - Tooltip_marginY - boundingRect.height;
            }
            setStyle(pos);
        };
        p(() => {
            const handleMouseMove = (event) => {
                updatePosition({
                    x: event.pageX,
                    y: event.pageY,
                });
            };
            document.addEventListener("mousemove", handleMouseMove, true);
            return () => {
                document.removeEventListener("mousemove", handleMouseMove, true);
            };
        }, []);
        return (u$1("div", { className: `tooltip ${visible ? "" : "tooltip-hidden"}`, ref: ref, style: style, children: content }));
    };

    class Transform {
        constructor(k, x, y) {
            this.k = k;
            this.x = x;
            this.y = y;
        }
        scaled(k) {
            return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
        }
        translated(x, y) {
            return x === 0 && y === 0
                ? this
                : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
        }
        invertPoint(location) {
            return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
        }
        toString() {
            return "translate(" + String(this.x) + "," + String(this.y) + ") scale(" + String(this.k) + ")";
        }
    }
    const identityTransform = new Transform(1, 0, 0);

    const noEvent = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
    };
    const translate = (transform, p0, p1) => {
        const x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
    };
    const Network = ({ links, nodes, onNodeHover, onNodeDblClick, getColor, onCanvasClick, onNodeClick, }) => {
        const { width, height } = q(StaticContext);
        const [transform, setTransform] = h(identityTransform);
        const startPosRef = _();
        const [dragging, setDragging] = h(false);
        const handleMouseDown = (event) => {
            if (event.ctrlKey || event.button) {
                // context menu
                return;
            }
            noEvent(event);
            startPosRef.current = transform.invertPoint([event.clientX, event.clientY]);
            setDragging(true);
        };
        const handleMouseMove = (event) => {
            noEvent(event);
            if (!startPosRef.current || !dragging)
                return;
            setTransform(translate(transform, [event.clientX, event.clientY], startPosRef.current));
        };
        const handleMouseUp = (event) => {
            noEvent(event);
            if (!dragging)
                return;
            setDragging(false);
        };
        return (u$1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `${-width / 2} ${-height / 2} ${width} ${height}`, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onClick: onCanvasClick, children: u$1("g", { transform: transform.toString(), children: [u$1("g", { stroke: "#fff", "stroke-opacity": "0.9", children: links.map((link) => {
                            return (u$1("line", { "stroke-width": "1", x1: link.source.x, y1: link.source.y, x2: link.target.x, y2: link.target.y }, `${link.source.uid} - ${link.target.uid}`));
                        }) }), u$1("g", { stroke: "#fff", "stroke-width": "1.5", children: nodes.map((node) => {
                            return (u$1("circle", { className: "node", r: node.radius, fill: getColor(node), cx: node.x, cy: node.y, onMouseOver: (evt) => {
                                    noEvent(evt);
                                    onNodeHover(node);
                                }, onClick: (evt) => {
                                    noEvent(evt);
                                    onNodeClick(node);
                                }, onDblClick: (evt) => {
                                    noEvent(evt);
                                    onNodeDblClick(node);
                                } }, node.uid));
                        }) })] }) }));
    };

    const Chart = ({ links, nodes, onNodeExclude, getColor, onNodeSelect, }) => {
        const [showTooltip, setShowTooltip] = h(false);
        const [tooltipNode, setTooltipNode] = h(undefined);
        p(() => {
            const handleMouseOut = () => {
                setShowTooltip(false);
            };
            document.addEventListener("mouseover", handleMouseOut);
            return () => {
                document.removeEventListener("mouseover", handleMouseOut);
            };
        }, []);
        return (u$1(g$1, { children: [u$1(Network, { links: links, nodes: nodes, onNodeHover: (node) => {
                        setTooltipNode(node);
                        setShowTooltip(true);
                    }, onNodeDblClick: onNodeExclude, onNodeClick: (node) => onNodeSelect(node.uid), onCanvasClick: () => {
                        onNodeSelect(undefined);
                    }, getColor: getColor }), u$1(Tooltip, { visible: showTooltip, node: tooltipNode })] }));
    };

    const createRainbowColor = (groups) => {
        const groupColor = new Map();
        const groupNames = Object.keys(groups);
        const colorScale = sequential([0, groupNames.length], (n) => hsl(360 * n, 0.3, 0.5));
        groupNames.forEach((c, id) => {
            groupColor.set(c, colorScale(id).toString());
        });
        const getBackgroundColor = (node) => {
            const colorStr = groupColor.get(node.group);
            const hslColor = hsl(colorStr);
            hslColor.l = node.renderedLength === 0 ? 0.9 : hslColor.l;
            return hslColor;
        };
        return (node) => {
            const backgroundColor = getBackgroundColor(node);
            return backgroundColor.toString();
        };
    };

    const Main = () => {
        const { nodes, data, width, height, nodeGroups, groupLayers, groups } = q(StaticContext);
        const sizeScale = F(() => {
            const maxLines = max(nodes, (d) => d.renderedLength);
            const size = sqrt().domain([1, maxLines]).range([5, 30]);
            return size;
        }, [nodes]);
        const getModuleColor = F(() => {
            return createRainbowColor(groups);
        }, [groups]);
        const [excludedNodes, setExcludedNodes] = h([]);
        const [selectedNode, setSelectedNode] = h();
        const { getModuleFilterMultiplier, setExcludeFilter, setIncludeFilter } = useFilter();
        const getColor = (node) => {
            if (selectedNode != null) {
                if (node.uid === selectedNode ||
                    data.nodeMetas[selectedNode].importedBy.some(({ uid }) => node.uid === uid)) {
                    return getModuleColor(node);
                }
                return COLOR_BASE;
            }
            else {
                return getModuleColor(node);
            }
        };
        const processedNodes = F(() => {
            var _a;
            const newNodes = [];
            for (const node of nodes) {
                //if (node.renderedLength === 0) continue;
                if (excludedNodes.includes(node.uid))
                    continue;
                const bundleId = (_a = Object.entries(node.moduleParts).find(([bundleId, uid]) => uid == node.uid)) === null || _a === void 0 ? void 0 : _a[0];
                const filterMultiplier = getModuleFilterMultiplier(bundleId, node);
                if (filterMultiplier === 0)
                    continue;
                const nodeGroup = nodeGroups[node.uid];
                const layerIndex = groupLayers.findIndex((layer) => layer.includes(nodeGroup));
                const groupId = groupLayers[layerIndex].indexOf(nodeGroup);
                const groupsTotal = groupLayers[layerIndex].length;
                newNodes.push(Object.assign(Object.assign({}, node), { x: layerIndex * Math.cos((groupId / groupsTotal) * 2 * Math.PI) * 200, y: layerIndex * Math.sin((groupId / groupsTotal) * 2 * Math.PI) * 200, radius: sizeScale(node.renderedLength) }));
            }
            return newNodes;
        }, [excludedNodes, getModuleFilterMultiplier, groupLayers, nodeGroups, nodes, sizeScale]);
        const links = F(() => {
            const nodesCache = Object.fromEntries(processedNodes.map((d) => [d.uid, d]));
            return Object.entries(data.nodeMetas)
                .flatMap(([sourceUid, { imported }]) => {
                return imported.map(({ uid: targetUid }) => {
                    return {
                        source: nodesCache[sourceUid],
                        target: nodesCache[targetUid],
                        value: 1,
                    };
                });
            })
                .filter(({ source, target }) => {
                return source && target;
            });
        }, [data.nodeMetas, processedNodes]);
        const [animatedNodes, setAnimatedNodes] = h([]);
        p(() => {
            const simulation = forceSimulation()
                .force("collision", forceCollide().radius((node) => node.radius))
                .force("charge", forceManyBody().strength(-30))
                .force("link", forceLink(links)
                .strength((link) => {
                if (nodeGroups[link.source.uid] === nodeGroups[link.target.uid]) {
                    return 1;
                }
                else {
                    return 0.1;
                }
            })
                .iterations(2))
                .force("x", forceX(0))
                .force("y", forceY(0));
            simulation.on("tick", () => {
                setAnimatedNodes([...simulation.nodes()]);
            });
            simulation.nodes([...processedNodes]);
            // simulation.tick(1).stop();
            simulation.alphaMin(0.03).restart();
            return () => simulation.stop();
        }, [nodeGroups, height, links, processedNodes, width]);
        return (u$1(g$1, { children: [u$1(SideBar, { sizeProperty: "renderedLength", availableSizeProperties: ["renderedLength"], setSizeProperty: () => { }, onExcludeChange: setExcludeFilter, onIncludeChange: setIncludeFilter }), u$1(Chart, { nodes: animatedNodes, onNodeExclude: (node) => setExcludedNodes([...excludedNodes, node.uid]), links: links, getColor: getColor, onNodeSelect: (uid) => setSelectedNode(uid === selectedNode ? undefined : uid) })] }));
    };

    const NODE_MODULES = /.*(?:\/|\\\\)?node_modules(?:\/|\\\\)([^/\\]+)(?:\/|\\\\).+/;

    const StaticContext = F$1({});
    const createNodeInfo = (data, availableSizeProperties, uid) => {
        var _a, _b;
        const meta = data.nodeMetas[uid];
        const entries = Object.values(meta.moduleParts).map((partUid) => data.nodeParts[partUid]);
        const sizes = Object.fromEntries(availableSizeProperties.map((key) => [key, 0]));
        for (const renderInfo of entries) {
            for (const sizeKey of availableSizeProperties) {
                sizes[sizeKey] += (_a = renderInfo[sizeKey]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        const match = NODE_MODULES.exec(meta.id);
        return Object.assign(Object.assign(Object.assign({ uid }, sizes), meta), { group: (_b = match === null || match === void 0 ? void 0 : match[1]) !== null && _b !== void 0 ? _b : "" });
    };
    const drawChart = (parentNode, data, width, height) => {
        var _a, _b;
        const availableSizeProperties = getAvailableSizeOptions(data.options);
        const nodeGroups = {};
        const groups = { "": 0 };
        let groupId = 1;
        const nodes = [];
        for (const uid of Object.keys(data.nodeMetas)) {
            const node = createNodeInfo(data, availableSizeProperties, uid);
            nodes.push(node);
            nodeGroups[uid] = node.group;
            groups[node.group] = (_a = groups[node.group]) !== null && _a !== void 0 ? _a : groupId++;
        }
        const groupLinks = { "": new Set() };
        for (const [sourceUid, { imported }] of Object.entries(data.nodeMetas)) {
            for (const { uid: targetUid } of imported) {
                const sourceGroup = nodeGroups[sourceUid];
                const targetGroup = nodeGroups[targetUid];
                if (!(sourceGroup in groupLinks)) {
                    groupLinks[sourceGroup] = new Set();
                }
                groupLinks[sourceGroup].add(targetGroup);
            }
        }
        const groupLayers = [[""]];
        const seen = new Set([""]);
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const lastLayer = groupLayers[groupLayers.length - 1];
            const newLayer = new Set();
            for (const currentGroup of lastLayer) {
                for (const targetGroup of (_b = groupLinks[currentGroup]) !== null && _b !== void 0 ? _b : []) {
                    if (seen.has(targetGroup)) {
                        continue;
                    }
                    seen.add(targetGroup);
                    newLayer.add(targetGroup);
                }
            }
            if (newLayer.size === 0) {
                break;
            }
            groupLayers.push([...newLayer]);
        }
        q$1(u$1(StaticContext.Provider, { value: {
                data,
                width,
                height,
                nodes,
                nodeGroups,
                groups,
                groupLayers,
            }, children: u$1(Main, {}) }), parentNode);
    };

    exports.StaticContext = StaticContext;
    exports.default = drawChart;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
