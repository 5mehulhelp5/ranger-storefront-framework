var drawChart = (function (exports) {
  'use strict';

  var n,l$1,u$2,i$1,o$1,r$1,f$2,e$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$2:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function g$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function m$1(n,l){if(null==l)return n.__?m$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m$1(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function w$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!x.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x);}function x(){var n,u,t,o,r,e,c,s,a;for(i$1.sort(f$2);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,s=[],a=[],(c=t.__P)&&((o=v$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),L(c,o,r,t.__n,void 0!==c.ownerSVGElement,32&r.__u?[e]:null,s,null==e?m$1(r):e,!!(32&r.__u),a),o.__.__k[o.__i]=o,M(s,o,a),o.__e!=e&&k$1(o)),i$1.length>u&&i$1.sort(f$2));x.__r=0;}function C(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s$1,b=l.length;for(u.__d=e,P(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c$1:g[y.__i]||c$1,y.__i=v,L(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&z$1(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=S(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_;}function P(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,i):h$1(i)?d$1(g$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=H(i,u,r=t+a,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:a=f<r&&f==r-1?f-r:0,f!==t+a&&(i.__u|=65536))):(o=u[t])&&null==o.key&&o.__e&&(o.__e==n.__d&&(n.__d=m$1(o)),N(o,o,!1),u[t]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$1(o)),N(o,o));}function S(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=S(t[i],l,u));return l}return n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e),l&&l.nextSibling}function H(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?D:A,o)):n.removeEventListener(l,o?D:A,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function A(n){var u=this.l[n.type+!1];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l$1.event?l$1.event(n):n)}function D(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,k,w,x,P,S,$,H,I,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(w=u.props,x=(a=A.contextType)&&i[a.__c],P=a?x?x.props.value:a.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(w,P):(u.__c=p=new b$1(w,P),p.constructor=A,p.render=O),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=P,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,A.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==A.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,P)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,P),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m);});}if(p.context=P,p.props=w,p.__P=n,p.__e=!1,$=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),C(n,h$1(T=null!=a&&a.type===g$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),k&&(p.__E=p.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=j$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function M(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)z$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function j$1(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,k=t.props,w=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(w);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,w.is&&w),r=null,e=!1;}if(null===x)k===w||e&&l.data===w||(l.data=w);else {if(r=r&&n.call(l.childNodes),k=t.props||c$1,!e&&null!=r)for(k={},a=0;a<l.attributes.length;a++)k[(_=l.attributes[a]).name]=_.value;for(a in k)_=k[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in w||T$1(l,a,null,_,o));for(a in w)_=w[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||k[a]===_||T$1(l,a,_,k[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),C(l,h$1(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m$1(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p$1(r[a]);e||(a="value",void 0!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==k[a])&&T$1(l,a,g,k[a],!1),a="checked",void 0!==b&&b!==l[a]&&T$1(l,a,b,k[a],!1));}return l}function z$1(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function N(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||z$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&N(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function q$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L(t,u=(!o&&i||t).__k=y(g$1,null,[u]),r||c$1,c$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}function F$1(n,l){var u={__c:l="__cC"+e$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$1(this));},b$1.prototype.render=g$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0,e$1=0;

  var f$1=0;function u$1(e,t,n,o,i,u){var a,c,p={};for(c in t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f$1,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

  function count$1(node) {
    var sum = 0,
        children = node.children,
        i = children && children.length;
    if (!i) sum = 1;
    else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }

  function node_count() {
    return this.eachAfter(count$1);
  }

  function node_each(callback, that) {
    let index = -1;
    for (const node of this) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_eachBefore(callback, that) {
    var node = this, nodes = [node], children, i, index = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index, this);
      if (children = node.children) {
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
      }
    }
    return this;
  }

  function node_eachAfter(callback, that) {
    var node = this, nodes = [node], next = [], children, i, n, index = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_find(callback, that) {
    let index = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  }

  function node_sum(value) {
    return this.eachAfter(function(node) {
      var sum = +value(node.data) || 0,
          children = node.children,
          i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  }

  function node_sort(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  function node_path(end) {
    var start = this,
        ancestor = leastCommonAncestor(start, end),
        nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  }

  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(),
        bNodes = b.ancestors(),
        c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }

  function node_ancestors() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  function node_descendants() {
    return Array.from(this);
  }

  function node_leaves() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  function node_links() {
    var root = this, links = [];
    root.each(function(node) {
      if (node !== root) { // Don’t include the root’s parent, if any.
        links.push({source: node.parent, target: node});
      }
    });
    return links;
  }

  function* node_iterator() {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        yield node;
        if (children = node.children) {
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
        }
      }
    } while (next.length);
  }

  function hierarchy(data, children) {
    if (data instanceof Map) {
      data = [undefined, data];
      if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
      children = objectChildren;
    }

    var root = new Node$1(data),
        node,
        nodes = [root],
        child,
        childs,
        i,
        n;

    while (node = nodes.pop()) {
      if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node$1(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }

    return root.eachBefore(computeHeight);
  }

  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }

  function objectChildren(d) {
    return d.children;
  }

  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }

  function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
  }

  function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && (node.height < ++height));
  }

  function Node$1(data) {
    this.data = data;
    this.depth =
    this.height = 0;
    this.parent = null;
  }

  Node$1.prototype = hierarchy.prototype = {
    constructor: Node$1,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    find: node_find,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy,
    [Symbol.iterator]: node_iterator
  };

  function roundNode(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  }

  function treemapDice(parent, x0, y0, x1, y1) {
    var nodes = parent.children,
        node,
        i = -1,
        n = nodes.length,
        k = parent.value && (x1 - x0) / parent.value;

    while (++i < n) {
      node = nodes[i], node.y0 = y0, node.y1 = y1;
      node.x0 = x0, node.x1 = x0 += node.value * k;
    }
  }

  function partition() {
    var dx = 1,
        dy = 1,
        padding = 0,
        round = false;

    function partition(root) {
      var n = root.height + 1;
      root.x0 =
      root.y0 = padding;
      root.x1 = dx;
      root.y1 = dy / n;
      root.eachBefore(positionNode(dy, n));
      if (round) root.eachBefore(roundNode);
      return root;
    }

    function positionNode(dy, n) {
      return function(node) {
        if (node.children) {
          treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
        }
        var x0 = node.x0,
            y0 = node.y0,
            x1 = node.x1 - padding,
            y1 = node.y1 - padding;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
      };
    }

    partition.round = function(x) {
      return arguments.length ? (round = !!x, partition) : round;
    };

    partition.size = function(x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
    };

    partition.padding = function(x) {
      return arguments.length ? (padding = +x, partition) : padding;
    };

    return partition;
  }

  function constant$1(x) {
    return function constant() {
      return x;
    };
  }

  const abs = Math.abs;
  const atan2 = Math.atan2;
  const cos = Math.cos;
  const max = Math.max;
  const min = Math.min;
  const sin = Math.sin;
  const sqrt$1 = Math.sqrt;

  const epsilon$1 = 1e-12;
  const pi$1 = Math.PI;
  const halfPi = pi$1 / 2;
  const tau$1 = 2 * pi$1;

  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
  }

  function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
  }

  const pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;

  function append(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += arguments[i] + strings[i];
    }
  }

  function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k = 10 ** d;
    return function(strings) {
      this._ += strings[0];
      for (let i = 1, n = strings.length; i < n; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }

  class Path {
    constructor(digits) {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
      this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x, y) {
      this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(x, y) {
      this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
      this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
      this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

      // Is the radius negative? Error.
      if (r < 0) throw new Error(`negative radius: ${r}`);

      let x0 = this._x1,
          y0 = this._y1,
          x21 = x2 - x1,
          y21 = y2 - y1,
          x01 = x0 - x1,
          y01 = y0 - y1,
          l01_2 = x01 * x01 + y01 * y01;

      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._append`M${this._x1 = x1},${this._y1 = y1}`;
      }

      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon));

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._append`L${this._x1 = x1},${this._y1 = y1}`;
      }

      // Otherwise, draw an arc!
      else {
        let x20 = x2 - x0,
            y20 = y2 - y0,
            l21_2 = x21 * x21 + y21 * y21,
            l20_2 = x20 * x20 + y20 * y20,
            l21 = Math.sqrt(l21_2),
            l01 = Math.sqrt(l01_2),
            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
            t01 = l / l01,
            t21 = l / l21;

        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
        }

        this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
      }
    }
    arc(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;

      // Is the radius negative? Error.
      if (r < 0) throw new Error(`negative radius: ${r}`);

      let dx = r * Math.cos(a0),
          dy = r * Math.sin(a0),
          x0 = x + dx,
          y0 = y + dy,
          cw = 1 ^ ccw,
          da = ccw ? a0 - a1 : a1 - a0;

      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._append`M${x0},${y0}`;
      }

      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._append`L${x0},${y0}`;
      }

      // Is this arc empty? We’re done.
      if (!r) return;

      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;

      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
      }

      // Is this arc non-empty? Draw an arc!
      else if (da > epsilon) {
        this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
      }
    }
    rect(x, y, w, h) {
      this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
      return this._;
    }
  }

  function withPath(shape) {
    let digits = 3;

    shape.digits = function(_) {
      if (!arguments.length) return digits;
      if (_ == null) {
        digits = null;
      } else {
        const d = Math.floor(_);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
        digits = d;
      }
      return shape;
    };

    return () => new Path(digits);
  }

  function arcInnerRadius(d) {
    return d.innerRadius;
  }

  function arcOuterRadius(d) {
    return d.outerRadius;
  }

  function arcStartAngle(d) {
    return d.startAngle;
  }

  function arcEndAngle(d) {
    return d.endAngle;
  }

  function arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
  }

  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0,
        x32 = x3 - x2, y32 = y3 - y2,
        t = y32 * x10 - x32 * y10;
    if (t * t < epsilon$1) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
  }

  // Compute perpendicular offset line of length rc.
  // http://mathworld.wolfram.com/Circle-LineIntersection.html
  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1,
        y01 = y0 - y1,
        lo = (cw ? rc : -rc) / sqrt$1(x01 * x01 + y01 * y01),
        ox = lo * y01,
        oy = -lo * x01,
        x11 = x0 + ox,
        y11 = y0 + oy,
        x10 = x1 + ox,
        y10 = y1 + oy,
        x00 = (x11 + x10) / 2,
        y00 = (y11 + y10) / 2,
        dx = x10 - x11,
        dy = y10 - y11,
        d2 = dx * dx + dy * dy,
        r = r1 - rc,
        D = x11 * y10 - x10 * y11,
        d = (dy < 0 ? -1 : 1) * sqrt$1(max(0, r * r * d2 - D * D)),
        cx0 = (D * dy - dx * d) / d2,
        cy0 = (-D * dx - dy * d) / d2,
        cx1 = (D * dy + dx * d) / d2,
        cy1 = (-D * dx + dy * d) / d2,
        dx0 = cx0 - x00,
        dy0 = cy0 - y00,
        dx1 = cx1 - x00,
        dy1 = cy1 - y00;

    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }

  function d3arc() {
    var innerRadius = arcInnerRadius,
        outerRadius = arcOuterRadius,
        cornerRadius = constant$1(0),
        padRadius = null,
        startAngle = arcStartAngle,
        endAngle = arcEndAngle,
        padAngle = arcPadAngle,
        context = null,
        path = withPath(arc);

    function arc() {
      var buffer,
          r,
          r0 = +innerRadius.apply(this, arguments),
          r1 = +outerRadius.apply(this, arguments),
          a0 = startAngle.apply(this, arguments) - halfPi,
          a1 = endAngle.apply(this, arguments) - halfPi,
          da = abs(a1 - a0),
          cw = a1 > a0;

      if (!context) context = buffer = path();

      // Ensure that the outer radius is always larger than the inner radius.
      if (r1 < r0) r = r1, r1 = r0, r0 = r;

      // Is it a point?
      if (!(r1 > epsilon$1)) context.moveTo(0, 0);

      // Or is it a circle or annulus?
      else if (da > tau$1 - epsilon$1) {
        context.moveTo(r1 * cos(a0), r1 * sin(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > epsilon$1) {
          context.moveTo(r0 * cos(a1), r0 * sin(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      }

      // Or is it a circular or annular sector?
      else {
        var a01 = a0,
            a11 = a1,
            a00 = a0,
            a10 = a1,
            da0 = da,
            da1 = da,
            ap = padAngle.apply(this, arguments) / 2,
            rp = (ap > epsilon$1) && (padRadius ? +padRadius.apply(this, arguments) : sqrt$1(r0 * r0 + r1 * r1)),
            rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
            rc0 = rc,
            rc1 = rc,
            t0,
            t1;

        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
        if (rp > epsilon$1) {
          var p0 = asin(rp / r0 * sin(ap)),
              p1 = asin(rp / r1 * sin(ap));
          if ((da0 -= p0 * 2) > epsilon$1) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > epsilon$1) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }

        var x01 = r1 * cos(a01),
            y01 = r1 * sin(a01),
            x10 = r0 * cos(a10),
            y10 = r0 * sin(a10);

        // Apply rounded corners?
        if (rc > epsilon$1) {
          var x11 = r1 * cos(a11),
              y11 = r1 * sin(a11),
              x00 = r0 * cos(a00),
              y00 = r0 * sin(a00),
              oc;

          // Restrict the corner radius according to the sector angle. If this
          // intersection fails, it’s probably because the arc is too small, so
          // disable the corner radius entirely.
          if (da < pi$1) {
            if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
              var ax = x01 - oc[0],
                  ay = y01 - oc[1],
                  bx = x11 - oc[0],
                  by = y11 - oc[1],
                  kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt$1(ax * ax + ay * ay) * sqrt$1(bx * bx + by * by))) / 2),
                  lc = sqrt$1(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = min(rc, (r0 - lc) / (kc - 1));
              rc1 = min(rc, (r1 - lc) / (kc + 1));
            } else {
              rc0 = rc1 = 0;
            }
          }
        }

        // Is the sector collapsed to a line?
        if (!(da1 > epsilon$1)) context.moveTo(x01, y01);

        // Does the sector’s outer ring have rounded corners?
        else if (rc1 > epsilon$1) {
          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

          // Have the corners merged?
          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

          // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
            context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
        }

        // Or is the outer ring just a circular arc?
        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

        // Is there no inner ring, and it’s a circular sector?
        // Or perhaps it’s an annular sector collapsed due to padding?
        if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);

        // Does the sector’s inner ring (or point) have rounded corners?
        else if (rc0 > epsilon$1) {
          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

          // Have the corners merged?
          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

          // Otherwise, draw the two corners and the ring.
          else {
            context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
            context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
            context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
          }
        }

        // Or is the inner ring just a circular arc?
        else context.arc(0, 0, r0, a10, a00, cw);
      }

      context.closePath();

      if (buffer) return context = null, buffer + "" || null;
    }

    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$1 / 2;
      return [cos(a) * r, sin(a) * r];
    };

    arc.innerRadius = function(_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : innerRadius;
    };

    arc.outerRadius = function(_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : outerRadius;
    };

    arc.cornerRadius = function(_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : cornerRadius;
    };

    arc.padRadius = function(_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), arc) : padRadius;
    };

    arc.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : startAngle;
    };

    arc.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : endAngle;
    };

    arc.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : padAngle;
    };

    arc.context = function(_) {
      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
    };

    return arc;
  }

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

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
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

  var constant = x => () => x;

  function linear$1(a, d) {
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
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
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
    return b == null || t === "boolean" ? constant(b)
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

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer() {
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

  function continuous() {
    return transformer()(identity$1, identity$1);
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

  var map$1 = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map$1.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity : formatNumerals(map$1.call(locale.numerals, String)),
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
  var format$1;
  var formatPrefix;

  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format$1 = locale.format;
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
    return format$1(specifier);
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

  function linear() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
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
    var scale = powish(transformer());

    scale.copy = function() {
      return copy(scale, pow()).exponent(scale.exponent());
    };

    initRange.apply(scale, arguments);

    return scale;
  }

  function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
  }

  const isModuleTree = (mod) => "children" in mod;

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

  let count = 0;
  class Id {
      constructor(id) {
          this._id = id;
          const url = new URL(window.location.href);
          url.hash = id;
          this._href = url.toString();
      }
      get id() {
          return this._id;
      }
      get href() {
          return this._href;
      }
      toString() {
          return `url(${this.href})`;
      }
  }
  function generateUniqueId(name) {
      count += 1;
      const id = ["O", name, count].filter(Boolean).join("-");
      return new Id(id);
  }

  var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

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

  const parse$2 = (input, options) => {
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

  parse$2.fastpaths = (input, options) => {
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

  var parse_1 = parse$2;

  const scan = scan_1;
  const parse$1 = parse_1;
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
    return parse$1(pattern, { ...options, fastpaths: false });
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
      output = parse$1.fastpaths(input, options);
    }

    if (output === undefined) {
      parsed = parse$1(input, options);
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

  var bytes$1 = {exports: {}};

  /*!
   * bytes
   * Copyright(c) 2012-2014 TJ Holowaychuk
   * Copyright(c) 2015 Jed Watson
   * MIT Licensed
   */

  /**
   * Module exports.
   * @public
   */

  bytes$1.exports = bytes;
  var format_1 = bytes$1.exports.format = format;
  bytes$1.exports.parse = parse;

  /**
   * Module variables.
   * @private
   */

  var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

  var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

  var map = {
    b:  1,
    kb: 1 << 10,
    mb: 1 << 20,
    gb: 1 << 30,
    tb: Math.pow(1024, 4),
    pb: Math.pow(1024, 5),
  };

  var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;

  /**
   * Convert the given value in bytes into a string or parse to string to an integer in bytes.
   *
   * @param {string|number} value
   * @param {{
   *  case: [string],
   *  decimalPlaces: [number]
   *  fixedDecimals: [boolean]
   *  thousandsSeparator: [string]
   *  unitSeparator: [string]
   *  }} [options] bytes options.
   *
   * @returns {string|number|null}
   */

  function bytes(value, options) {
    if (typeof value === 'string') {
      return parse(value);
    }

    if (typeof value === 'number') {
      return format(value, options);
    }

    return null;
  }

  /**
   * Format the given value in bytes into a string.
   *
   * If the value is negative, it is kept as such. If it is a float,
   * it is rounded.
   *
   * @param {number} value
   * @param {object} [options]
   * @param {number} [options.decimalPlaces=2]
   * @param {number} [options.fixedDecimals=false]
   * @param {string} [options.thousandsSeparator=]
   * @param {string} [options.unit=]
   * @param {string} [options.unitSeparator=]
   *
   * @returns {string|null}
   * @public
   */

  function format(value, options) {
    if (!Number.isFinite(value)) {
      return null;
    }

    var mag = Math.abs(value);
    var thousandsSeparator = (options && options.thousandsSeparator) || '';
    var unitSeparator = (options && options.unitSeparator) || '';
    var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
    var fixedDecimals = Boolean(options && options.fixedDecimals);
    var unit = (options && options.unit) || '';

    if (!unit || !map[unit.toLowerCase()]) {
      if (mag >= map.pb) {
        unit = 'PB';
      } else if (mag >= map.tb) {
        unit = 'TB';
      } else if (mag >= map.gb) {
        unit = 'GB';
      } else if (mag >= map.mb) {
        unit = 'MB';
      } else if (mag >= map.kb) {
        unit = 'KB';
      } else {
        unit = 'B';
      }
    }

    var val = value / map[unit.toLowerCase()];
    var str = val.toFixed(decimalPlaces);

    if (!fixedDecimals) {
      str = str.replace(formatDecimalsRegExp, '$1');
    }

    if (thousandsSeparator) {
      str = str.split('.').map(function (s, i) {
        return i === 0
          ? s.replace(formatThousandsRegExp, thousandsSeparator)
          : s
      }).join('.');
    }

    return str + unitSeparator + unit;
  }

  /**
   * Parse the string value into an integer in bytes.
   *
   * If no unit is given, it is assumed the value is in bytes.
   *
   * @param {number|string} val
   *
   * @returns {number|null}
   * @public
   */

  function parse(val) {
    if (typeof val === 'number' && !isNaN(val)) {
      return val;
    }

    if (typeof val !== 'string') {
      return null;
    }

    // Test if the string passed is valid
    var results = parseRegExp.exec(val);
    var floatValue;
    var unit = 'b';

    if (!results) {
      // Nothing could be extracted from the given string
      floatValue = parseInt(val, 10);
      unit = 'b';
    } else {
      // Retrieve the value and the unit
      floatValue = parseFloat(results[1]);
      unit = results[4].toLowerCase();
    }

    if (isNaN(floatValue)) {
      return null;
    }

    return Math.floor(map[unit] * floatValue);
  }

  const Tooltip = ({ node, root, sizeProperty }) => {
      const { availableSizeProperties, getModuleSize } = q(StaticContext);
      const content = F(() => {
          if (!node)
              return null;
          const mainSize = getModuleSize(node.data, sizeProperty);
          const percentageNum = (100 * mainSize) / getModuleSize(root.data, sizeProperty);
          const percentage = percentageNum.toFixed(2);
          const percentageString = percentage + "%";
          return (u$1(g$1, { children: [u$1("div", { className: "details-name", children: node.data.name }), u$1("div", { className: "details-percentage", children: percentageString }), availableSizeProperties.map((sizeProp) => {
                      if (sizeProp === sizeProperty) {
                          return (u$1("div", { className: "details-size", children: u$1("b", { children: [LABELS[sizeProp], ": ", format_1(getModuleSize(node.data, sizeProp))] }) }, sizeProp));
                      }
                      else {
                          return (u$1("div", { className: "details-size", children: [LABELS[sizeProp], ": ", format_1(getModuleSize(node.data, sizeProp))] }, sizeProp));
                      }
                  })] }));
      }, [availableSizeProperties, getModuleSize, node, root.data, sizeProperty]);
      return u$1("div", { className: "details", children: content });
  };

  const COLOR_DEFAULT_FILE = "#db7100";
  const COLOR_DEFAULT_OWN_SOURCE = "#487ea4";
  const COLOR_DEFAULT_VENDOR_SOURCE = "#599e59";
  const colorDefault = (node) => {
      if (node.children && node.children.length) {
          const parents = node.ancestors();
          const hasNodeModules = parents.some(({ data: { name } }) => name === "node_modules");
          return hasNodeModules ? COLOR_DEFAULT_VENDOR_SOURCE : COLOR_DEFAULT_OWN_SOURCE;
      }
      else {
          return COLOR_DEFAULT_FILE;
      }
  };

  const Node = ({ node, onMouseOver, onClick, path, highlighted, selected, }) => {
      return (u$1("path", { className: "node", d: path, "fill-rule": "evenodd", stroke: "#fff", fill: colorDefault(node), onMouseOver: (evt) => {
              evt.stopPropagation();
              onMouseOver(node);
          }, onClick: (evt) => {
              evt.stopPropagation();
              onClick(node);
          }, opacity: highlighted ? 1 : 0.3, "stroke-width": selected ? 3 : undefined }));
  };

  const SunBurst = ({ root, onNodeHover, isNodeHighlighted, selectedNode, onNodeClick, }) => {
      const { getModuleIds, size, arc, radius } = q(StaticContext);
      return (u$1("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${size} ${size}`, children: u$1("g", { transform: `translate(${radius},${radius})`, children: root.descendants().map((node) => {
                  return (u$1(Node, { node: node, onMouseOver: onNodeHover, path: arc(node), highlighted: isNodeHighlighted(node), selected: selectedNode === node, onClick: onNodeClick }, getModuleIds(node.data).nodeUid.id));
              }) }) }));
  };

  const Chart = ({ root, sizeProperty, selectedNode, setSelectedNode, }) => {
      const [tooltipNode, setTooltipNode] = h(root);
      const isNodeHighlighted = F(() => {
          const highlightedNodes = new Set(tooltipNode === root ? root.descendants() : tooltipNode.ancestors());
          return (node) => {
              return highlightedNodes.has(node);
          };
      }, [root, tooltipNode]);
      p(() => {
          const handleMouseOut = () => {
              setTooltipNode(root);
          };
          handleMouseOut();
          document.addEventListener("mouseover", handleMouseOut);
          return () => {
              document.removeEventListener("mouseover", handleMouseOut);
          };
      }, [root]);
      return (u$1(g$1, { children: [u$1(SunBurst, { root: root, onNodeHover: (node) => {
                      setTooltipNode(node);
                  }, isNodeHighlighted: isNodeHighlighted, selectedNode: selectedNode, onNodeClick: (node) => {
                      setSelectedNode(selectedNode === node ? undefined : node);
                  } }), u$1(Tooltip, { node: tooltipNode, root: root, sizeProperty: sizeProperty })] }));
  };

  const Main = () => {
      const { availableSizeProperties, rawHierarchy, getModuleSize, layout, data } = q(StaticContext);
      const [sizeProperty, setSizeProperty] = h(availableSizeProperties[0]);
      const [selectedNode, setSelectedNode] = h(undefined);
      const { getModuleFilterMultiplier, setExcludeFilter, setIncludeFilter } = useFilter();
      const getNodeSizeMultiplier = F(() => {
          if (selectedNode === undefined) {
              return () => 1;
          }
          else if (isModuleTree(selectedNode.data)) {
              const descendants = new Set(selectedNode.descendants().map((d) => d.data));
              return (node) => {
                  if (descendants.has(node)) {
                      return 3;
                  }
                  return 1;
              };
          }
          else {
              return (node) => {
                  if (node === selectedNode.data) {
                      return 3;
                  }
                  return 1;
              };
          }
      }, [selectedNode]);
      // root here always be the same as rawHierarchy even after layouting
      const root = F(() => {
          const rootWithSizesAndSorted = rawHierarchy
              .sum((node) => {
              var _a;
              if (isModuleTree(node))
                  return 0;
              const meta = data.nodeMetas[data.nodeParts[node.uid].metaUid];
              const bundleId = (_a = Object.entries(meta.moduleParts).find(([bundleId, uid]) => uid == node.uid)) === null || _a === void 0 ? void 0 : _a[0];
              const ownSize = getModuleSize(node, sizeProperty);
              const zoomMultiplier = getNodeSizeMultiplier(node);
              const filterMultiplier = getModuleFilterMultiplier(bundleId, meta);
              return ownSize * zoomMultiplier * filterMultiplier;
          })
              .sort((a, b) => getModuleSize(a.data, sizeProperty) - getModuleSize(b.data, sizeProperty));
          return layout(rootWithSizesAndSorted);
      }, [
          data,
          getModuleFilterMultiplier,
          getModuleSize,
          getNodeSizeMultiplier,
          layout,
          rawHierarchy,
          sizeProperty,
      ]);
      return (u$1(g$1, { children: [u$1(SideBar, { sizeProperty: sizeProperty, availableSizeProperties: availableSizeProperties, setSizeProperty: setSizeProperty, onExcludeChange: setExcludeFilter, onIncludeChange: setIncludeFilter }), u$1(Chart, { root: root, sizeProperty: sizeProperty, selectedNode: selectedNode, setSelectedNode: setSelectedNode })] }));
  };

  const StaticContext = F$1({});
  const drawChart = (parentNode, data, width, height) => {
      const availableSizeProperties = getAvailableSizeOptions(data.options);
      const layout = partition();
      const rawHierarchy = hierarchy(data.tree);
      const nodeSizesCache = new Map();
      const nodeIdsCache = new Map();
      const getModuleSize = (node, sizeKey) => { var _a, _b; return (_b = (_a = nodeSizesCache.get(node)) === null || _a === void 0 ? void 0 : _a[sizeKey]) !== null && _b !== void 0 ? _b : 0; };
      rawHierarchy.eachAfter((node) => {
          const nodeData = node.data;
          nodeIdsCache.set(nodeData, {
              nodeUid: generateUniqueId("node"),
          });
          const sizes = { renderedLength: 0, gzipLength: 0, brotliLength: 0 };
          if (isModuleTree(nodeData)) {
              for (const sizeKey of availableSizeProperties) {
                  sizes[sizeKey] = nodeData.children.reduce((acc, child) => getModuleSize(child, sizeKey) + acc, 0);
              }
          }
          else {
              for (const sizeKey of availableSizeProperties) {
                  sizes[sizeKey] = data.nodeParts[nodeData.uid][sizeKey];
              }
          }
          nodeSizesCache.set(nodeData, sizes);
      });
      const getModuleIds = (node) => nodeIdsCache.get(node);
      const size = Math.min(width, height);
      const radius = size / 2;
      const x = linear().range([0, 2 * Math.PI]);
      const y = sqrt().range([0, radius]);
      const arc = d3arc()
          .startAngle((d) => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
          .endAngle((d) => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
          .innerRadius((d) => y(d.y0))
          .outerRadius((d) => y(d.y1));
      q$1(u$1(StaticContext.Provider, { value: {
              data,
              availableSizeProperties,
              width,
              height,
              getModuleSize,
              rawHierarchy,
              layout,
              getModuleIds,
              arc,
              radius,
              size,
          }, children: u$1(Main, {}) }), parentNode);
  };

  exports.StaticContext = StaticContext;
  exports.default = drawChart;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
