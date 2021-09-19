// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hiwdO":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "9988fdb4c5fce5c2";
module.bundle.HMR_BUNDLE_ID = "27bf952e352a58ae";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["hiwdO"], null, "parcelRequire2041")
/*
 * anime.js v3.0.1
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ !function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.anime = e();
}(this, function() {
    "use strict";
    var n = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    }, e2 = {
        duration: 1000,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    }, r2 = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective"
    ], t3 = {
        CSS: {
        },
        springs: {
        }
    };
    function a3(n1, e1, r1) {
        return Math.min(Math.max(n1, e1), r1);
    }
    function o2(n1, e1) {
        return n1.indexOf(e1) > -1;
    }
    function i(n1, e1) {
        return n1.apply(null, e1);
    }
    var u = {
        arr: function(n1) {
            return Array.isArray(n1);
        },
        obj: function(n1) {
            return o2(Object.prototype.toString.call(n1), "Object");
        },
        pth: function(n1) {
            return u.obj(n1) && n1.hasOwnProperty("totalLength");
        },
        svg: function(n1) {
            return n1 instanceof SVGElement;
        },
        inp: function(n1) {
            return n1 instanceof HTMLInputElement;
        },
        dom: function(n1) {
            return n1.nodeType || u.svg(n1);
        },
        str: function(n1) {
            return "string" == typeof n1;
        },
        fnc: function(n1) {
            return "function" == typeof n1;
        },
        und: function(n1) {
            return (void 0) === n1;
        },
        hex: function(n1) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n1);
        },
        rgb: function(n1) {
            return /^rgb/.test(n1);
        },
        hsl: function(n1) {
            return /^hsl/.test(n1);
        },
        col: function(n1) {
            return u.hex(n1) || u.rgb(n1) || u.hsl(n1);
        },
        key: function(r1) {
            return !n.hasOwnProperty(r1) && !e2.hasOwnProperty(r1) && "targets" !== r1 && "keyframes" !== r1;
        }
    };
    function s(n1) {
        var e1 = /\(([^)]+)\)/.exec(n1);
        return e1 ? e1[1].split(",").map(function(n2) {
            return parseFloat(n2);
        }) : [];
    }
    function c(n1, e1) {
        var r1 = s(n1), o1 = a3(u.und(r1[0]) ? 1 : r1[0], 0.1, 100), i1 = a3(u.und(r1[1]) ? 100 : r1[1], 0.1, 100), c1 = a3(u.und(r1[2]) ? 10 : r1[2], 0.1, 100), f = a3(u.und(r1[3]) ? 0 : r1[3], 0.1, 100), l = Math.sqrt(i1 / o1), d = c1 / (2 * Math.sqrt(i1 * o1)), p = d < 1 ? l * Math.sqrt(1 - d * d) : 0, v = 1, h = d < 1 ? (d * l - f) / p : -f + l;
        function g(n2) {
            var r2 = e1 ? e1 * n2 / 1000 : n2;
            return r2 = d < 1 ? Math.exp(-r2 * d * l) * (v * Math.cos(p * r2) + h * Math.sin(p * r2)) : (v + h * r2) * Math.exp(-r2 * l), 0 === n2 || 1 === n2 ? n2 : 1 - r2;
        }
        return e1 ? g : function() {
            var e2 = t3.springs[n1];
            if (e2) return e2;
            for(var r2 = 0, a1 = 0;;)if (1 === g(r2 += 1 / 6)) {
                if ((++a1) >= 16) break;
            } else a1 = 0;
            var o2 = r2 * (1 / 6) * 1000;
            return t3.springs[n1] = o2, o2;
        };
    }
    function f1(n1, e1) {
        (void 0) === n1 && (n1 = 1), (void 0) === e1 && (e1 = 0.5);
        var r1 = a3(n1, 1, 10), t1 = a3(e1, 0.1, 2);
        return function(n2) {
            return 0 === n2 || 1 === n2 ? n2 : -r1 * Math.pow(2, 10 * (n2 - 1)) * Math.sin((n2 - 1 - t1 / (2 * Math.PI) * Math.asin(1 / r1)) * (2 * Math.PI) / t1);
        };
    }
    function l(n1) {
        return (void 0) === n1 && (n1 = 10), function(e1) {
            return Math.round(e1 * n1) * (1 / n1);
        };
    }
    var d = function() {
        var n1 = 11, e1 = 1 / (n1 - 1);
        function r1(n2, e2) {
            return 1 - 3 * e2 + 3 * n2;
        }
        function t1(n2, e2) {
            return 3 * e2 - 6 * n2;
        }
        function a1(n2) {
            return 3 * n2;
        }
        function o1(n2, e2, o2) {
            return ((r1(e2, o2) * n2 + t1(e2, o2)) * n2 + a1(e2)) * n2;
        }
        function i1(n2, e2, o2) {
            return 3 * r1(e2, o2) * n2 * n2 + 2 * t1(e2, o2) * n2 + a1(e2);
        }
        return function(r2, t2, a2, u1) {
            if (0 <= r2 && r2 <= 1 && 0 <= a2 && a2 <= 1) {
                var s1 = new Float32Array(n1);
                if (r2 !== t2 || a2 !== u1) for(var c1 = 0; c1 < n1; ++c1)s1[c1] = o1(c1 * e1, r2, a2);
                return function(n2) {
                    return r2 === t2 && a2 === u1 ? n2 : 0 === n2 || 1 === n2 ? n2 : o1(f2(n2), t2, u1);
                };
            }
            function f2(t3) {
                for(var u2 = 0, c2 = 1, f3 = n1 - 1; c2 !== f3 && s1[c2] <= t3; ++c2)u2 += e1;
                var l1 = u2 + (t3 - s1[--c2]) / (s1[c2 + 1] - s1[c2]) * e1, d1 = i1(l1, r2, a2);
                return d1 >= 0.001 ? (function(n2, e2, r3, t4) {
                    for(var a3 = 0; a3 < 4; ++a3){
                        var u3 = i1(e2, r3, t4);
                        if (0 === u3) return e2;
                        e2 -= (o1(e2, r3, t4) - n2) / u3;
                    }
                    return e2;
                })(t3, l1, r2, a2) : 0 === d1 ? l1 : (function(n2, e2, r3, t4, a3) {
                    for(var i2, u4, s2 = 0; (i2 = o1(u4 = e2 + (r3 - e2) / 2, t4, a3) - n2) > 0 ? r3 = u4 : e2 = u4, Math.abs(i2) > 0.0000001 && (++s2) < 10;);
                    return u4;
                })(t3, u2, u2 + e1, r2, a2);
            }
        };
    }(), p = function() {
        var n1 = [
            "Quad",
            "Cubic",
            "Quart",
            "Quint",
            "Sine",
            "Expo",
            "Circ",
            "Back",
            "Elastic"
        ], e1 = {
            In: [
                [
                    0.55,
                    0.085,
                    0.68,
                    0.53
                ],
                [
                    0.55,
                    0.055,
                    0.675,
                    0.19
                ],
                [
                    0.895,
                    0.03,
                    0.685,
                    0.22
                ],
                [
                    0.755,
                    0.05,
                    0.855,
                    0.06
                ],
                [
                    0.47,
                    0,
                    0.745,
                    0.715
                ],
                [
                    0.95,
                    0.05,
                    0.795,
                    0.035
                ],
                [
                    0.6,
                    0.04,
                    0.98,
                    0.335
                ],
                [
                    0.6,
                    -0.28,
                    0.735,
                    0.045
                ],
                f1
            ],
            Out: [
                [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ],
                [
                    0.215,
                    0.61,
                    0.355,
                    1
                ],
                [
                    0.165,
                    0.84,
                    0.44,
                    1
                ],
                [
                    0.23,
                    1,
                    0.32,
                    1
                ],
                [
                    0.39,
                    0.575,
                    0.565,
                    1
                ],
                [
                    0.19,
                    1,
                    0.22,
                    1
                ],
                [
                    0.075,
                    0.82,
                    0.165,
                    1
                ],
                [
                    0.175,
                    0.885,
                    0.32,
                    1.275
                ],
                function(n2, e2) {
                    return function(r1) {
                        return 1 - f1(n2, e2)(1 - r1);
                    };
                }
            ],
            InOut: [
                [
                    0.455,
                    0.03,
                    0.515,
                    0.955
                ],
                [
                    0.645,
                    0.045,
                    0.355,
                    1
                ],
                [
                    0.77,
                    0,
                    0.175,
                    1
                ],
                [
                    0.86,
                    0,
                    0.07,
                    1
                ],
                [
                    0.445,
                    0.05,
                    0.55,
                    0.95
                ],
                [
                    1,
                    0,
                    0,
                    1
                ],
                [
                    0.785,
                    0.135,
                    0.15,
                    0.86
                ],
                [
                    0.68,
                    -0.55,
                    0.265,
                    1.55
                ],
                function(n2, e2) {
                    return function(r1) {
                        return r1 < 0.5 ? f1(n2, e2)(2 * r1) / 2 : 1 - f1(n2, e2)(-2 * r1 + 2) / 2;
                    };
                }
            ]
        }, r1 = {
            linear: [
                0.25,
                0.25,
                0.75,
                0.75
            ]
        }, t1 = function(t2) {
            e1[t2].forEach(function(e2, a1) {
                r1["ease" + t2 + n1[a1]] = e2;
            });
        };
        for(var a1 in e1)t1(a1);
        return r1;
    }();
    function v(n1, e1) {
        if (u.fnc(n1)) return n1;
        var r1 = n1.split("(")[0], t1 = p[r1], a1 = s(n1);
        switch(r1){
            case "spring":
                return c(n1, e1);
            case "cubicBezier":
                return i(d, a1);
            case "steps":
                return i(l, a1);
            default:
                return u.fnc(t1) ? i(t1, a1) : i(d, t1);
        }
    }
    function h(n1) {
        try {
            return document.querySelectorAll(n1);
        } catch (n2) {
            return;
        }
    }
    function g(n1, e1) {
        for(var r1 = n1.length, t1 = arguments.length >= 2 ? arguments[1] : void 0, a1 = [], o1 = 0; o1 < r1; o1++)if (o1 in n1) {
            var i1 = n1[o1];
            e1.call(t1, i1, o1, n1) && a1.push(i1);
        }
        return a1;
    }
    function m(n1) {
        return n1.reduce(function(n2, e1) {
            return n2.concat(u.arr(e1) ? m(e1) : e1);
        }, []);
    }
    function y(n1) {
        return u.arr(n1) ? n1 : (u.str(n1) && (n1 = h(n1) || n1), n1 instanceof NodeList || n1 instanceof HTMLCollection ? [].slice.call(n1) : [
            n1
        ]);
    }
    function b(n1, e1) {
        return n1.some(function(n2) {
            return n2 === e1;
        });
    }
    function x(n1) {
        var e1 = {
        };
        for(var r1 in n1)e1[r1] = n1[r1];
        return e1;
    }
    function M(n1, e1) {
        var r1 = x(n1);
        for(var t1 in n1)r1[t1] = e1.hasOwnProperty(t1) ? e1[t1] : n1[t1];
        return r1;
    }
    function w(n1, e1) {
        var r1 = x(n1);
        for(var t1 in e1)r1[t1] = u.und(n1[t1]) ? e1[t1] : n1[t1];
        return r1;
    }
    function k(n1) {
        var e1, r1, t1, a1;
        return u.rgb(n1) ? (r1 = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e1 = n1)) ? "rgba(" + r1[1] + ",1)" : e1 : u.hex(n1) ? (t1 = n1.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n2, e2, r2, t2) {
            return e2 + e2 + r2 + r2 + t2 + t2;
        }), a1 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t1), "rgba(" + parseInt(a1[1], 16) + "," + parseInt(a1[2], 16) + "," + parseInt(a1[3], 16) + ",1)") : u.hsl(n1) ? (function(n2) {
            var e2, r2, t2, a2 = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n2) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n2), o1 = parseInt(a2[1], 10) / 360, i2 = parseInt(a2[2], 10) / 100, u1 = parseInt(a2[3], 10) / 100, s2 = a2[4] || 1;
            function c2(n3, e3, r3) {
                return r3 < 0 && (r3 += 1), r3 > 1 && (r3 -= 1), r3 < 1 / 6 ? n3 + 6 * (e3 - n3) * r3 : r3 < 0.5 ? e3 : r3 < 2 / 3 ? n3 + (e3 - n3) * (2 / 3 - r3) * 6 : n3;
            }
            if (0 == i2) e2 = r2 = t2 = u1;
            else {
                var f2 = u1 < 0.5 ? u1 * (1 + i2) : u1 + i2 - u1 * i2, l1 = 2 * u1 - f2;
                e2 = c2(l1, f2, o1 + 1 / 3), r2 = c2(l1, f2, o1), t2 = c2(l1, f2, o1 - 1 / 3);
            }
            return "rgba(" + 255 * e2 + "," + 255 * r2 + "," + 255 * t2 + "," + s2 + ")";
        })(n1) : void 0;
    }
    function C(n1) {
        var e1 = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n1);
        if (e1) return e1[2];
    }
    function O(n1, e1) {
        return u.fnc(n1) ? n1(e1.target, e1.id, e1.total) : n1;
    }
    function P(n1, e1) {
        return n1.getAttribute(e1);
    }
    function I(n1, e1, r1) {
        if (b([
            r1,
            "deg",
            "rad",
            "turn"
        ], C(e1))) return e1;
        var a1 = t3.CSS[e1 + r1];
        if (!u.und(a1)) return a1;
        var o1 = document.createElement(n1.tagName), i2 = n1.parentNode && n1.parentNode !== document ? n1.parentNode : document.body;
        i2.appendChild(o1), o1.style.position = "absolute", o1.style.width = 100 + r1;
        var s2 = 100 / o1.offsetWidth;
        i2.removeChild(o1);
        var c2 = s2 * parseFloat(e1);
        return t3.CSS[e1 + r1] = c2, c2;
    }
    function B(n1, e1, r1) {
        if (e1 in n1.style) {
            var t1 = e1.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), a1 = n1.style[e1] || getComputedStyle(n1).getPropertyValue(t1) || "0";
            return r1 ? I(n1, a1, r1) : a1;
        }
    }
    function D(n1, e1) {
        return u.dom(n1) && !u.inp(n1) && (P(n1, e1) || u.svg(n1) && n1[e1]) ? "attribute" : u.dom(n1) && b(r2, e1) ? "transform" : u.dom(n1) && "transform" !== e1 && B(n1, e1) ? "css" : null != n1[e1] ? "object" : void 0;
    }
    function T(n1) {
        if (u.dom(n1)) {
            for(var e1, r1 = n1.style.transform || "", t2 = /(\w+)\(([^)]*)\)/g, a2 = new Map; e1 = t2.exec(r1);)a2.set(e1[1], e1[2]);
            return a2;
        }
    }
    function F(n1, e2, r2, t3) {
        var a3, i2 = o2(e2, "scale") ? 1 : 0 + (o2(a3 = e2, "translate") || "perspective" === a3 ? "px" : o2(a3, "rotate") || o2(a3, "skew") ? "deg" : void 0), u1 = T(n1).get(e2) || i2;
        return r2 && (r2.transforms.list.set(e2, u1), r2.transforms.last = e2), t3 ? I(n1, u1, t3) : u1;
    }
    function N(n1, e2, r2, t3) {
        switch(D(n1, e2)){
            case "transform":
                return F(n1, e2, t3, r2);
            case "css":
                return B(n1, e2, r2);
            case "attribute":
                return P(n1, e2);
            default:
                return n1[e2] || 0;
        }
    }
    function A(n1, e2) {
        var r2 = /^(\*=|\+=|-=)/.exec(n1);
        if (!r2) return n1;
        var t3 = C(n1) || 0, a3 = parseFloat(e2), o1 = parseFloat(n1.replace(r2[0], ""));
        switch(r2[0][0]){
            case "+":
                return a3 + o1 + t3;
            case "-":
                return a3 - o1 + t3;
            case "*":
                return a3 * o1 + t3;
        }
    }
    function E(n1, e2) {
        if (u.col(n1)) return k(n1);
        var r2 = C(n1), t3 = r2 ? n1.substr(0, n1.length - r2.length) : n1;
        return e2 && !/\s/g.test(n1) ? t3 + e2 : t3;
    }
    function L(n1, e2) {
        return Math.sqrt(Math.pow(e2.x - n1.x, 2) + Math.pow(e2.y - n1.y, 2));
    }
    function S(n1) {
        for(var e2, r2 = n1.points, t3 = 0, a3 = 0; a3 < r2.numberOfItems; a3++){
            var o1 = r2.getItem(a3);
            a3 > 0 && (t3 += L(e2, o1)), e2 = o1;
        }
        return t3;
    }
    function j(n1) {
        if (n1.getTotalLength) return n1.getTotalLength();
        switch(n1.tagName.toLowerCase()){
            case "circle":
                return o3 = n1, 2 * Math.PI * P(o3, "r");
            case "rect":
                return 2 * P(a4 = n1, "width") + 2 * P(a4, "height");
            case "line":
                return L({
                    x: P(t4 = n1, "x1"),
                    y: P(t4, "y1")
                }, {
                    x: P(t4, "x2"),
                    y: P(t4, "y2")
                });
            case "polyline":
                return S(n1);
            case "polygon":
                return r3 = (e3 = n1).points, S(e3) + L(r3.getItem(r3.numberOfItems - 1), r3.getItem(0));
        }
        var e3, r3, t4, a4, o3;
    }
    function q(n1, e3) {
        var r3 = e3 || {
        }, t4 = r3.el || function(n2) {
            for(var e4 = n2.parentNode; u.svg(e4) && (e4 = e4.parentNode, u.svg(e4.parentNode)););
            return e4;
        }(n1), a4 = t4.getBoundingClientRect(), o3 = P(t4, "viewBox"), i2 = a4.width, s2 = a4.height, c2 = r3.viewBox || (o3 ? o3.split(" ") : [
            0,
            0,
            i2,
            s2
        ]);
        return {
            el: t4,
            viewBox: c2,
            x: c2[0] / 1,
            y: c2[1] / 1,
            w: i2 / c2[2],
            h: s2 / c2[3]
        };
    }
    function $(n1, e3) {
        function r3(r4) {
            (void 0) === r4 && (r4 = 0);
            var t4 = e3 + r4 >= 1 ? e3 + r4 : 0;
            return n1.el.getPointAtLength(t4);
        }
        var t4 = q(n1.el, n1.svg), a4 = r3(), o3 = r3(-1), i2 = r3(1);
        switch(n1.property){
            case "x":
                return (a4.x - t4.x) * t4.w;
            case "y":
                return (a4.y - t4.y) * t4.h;
            case "angle":
                return 180 * Math.atan2(i2.y - o3.y, i2.x - o3.x) / Math.PI;
        }
    }
    function X(n1, e3) {
        var r3 = /-?\d*\.?\d+/g, t4 = E(u.pth(n1) ? n1.totalLength : n1, e3) + "";
        return {
            original: t4,
            numbers: t4.match(r3) ? t4.match(r3).map(Number) : [
                0
            ],
            strings: u.str(n1) || e3 ? t4.split(r3) : []
        };
    }
    function Y(n1) {
        return g(n1 ? m(u.arr(n1) ? n1.map(y) : y(n1)) : [], function(n2, e3, r3) {
            return r3.indexOf(n2) === e3;
        });
    }
    function Z(n1) {
        var e3 = Y(n1);
        return e3.map(function(n2, r3) {
            return {
                target: n2,
                id: r3,
                total: e3.length,
                transforms: {
                    list: T(n2)
                }
            };
        });
    }
    function Q(n1, e3) {
        var r3 = x(e3);
        if (/^spring/.test(r3.easing) && (r3.duration = c(r3.easing)), u.arr(n1)) {
            var t4 = n1.length;
            2 === t4 && !u.obj(n1[0]) ? n1 = {
                value: n1
            } : u.fnc(e3.duration) || (r3.duration = e3.duration / t4);
        }
        var a4 = u.arr(n1) ? n1 : [
            n1
        ];
        return a4.map(function(n2, r4) {
            var t5 = u.obj(n2) && !u.pth(n2) ? n2 : {
                value: n2
            };
            return u.und(t5.delay) && (t5.delay = r4 ? 0 : e3.delay), u.und(t5.endDelay) && (t5.endDelay = r4 === a4.length - 1 ? e3.endDelay : 0), t5;
        }).map(function(n2) {
            return w(n2, r3);
        });
    }
    function V(n1, e3) {
        var r3 = [], t5 = e3.keyframes;
        for(var a4 in t5 && (e3 = w(function(n2) {
            for(var e4 = g(m(n2.map(function(n3) {
                return Object.keys(n3);
            })), function(n3) {
                return u.key(n3);
            }).reduce(function(n3, e5) {
                return n3.indexOf(e5) < 0 && n3.push(e5), n3;
            }, []), r4 = {
            }, t6 = function(t7) {
                var a5 = e4[t7];
                r4[a5] = n2.map(function(n3) {
                    var e5 = {
                    };
                    for(var r5 in n3)u.key(r5) ? r5 == a5 && (e5.value = n3[r5]) : e5[r5] = n3[r5];
                    return e5;
                });
            }, a5 = 0; a5 < e4.length; a5++)t6(a5);
            return r4;
        }(t5), e3)), e3)u.key(a4) && r3.push({
            name: a4,
            tweens: Q(e3[a4], n1)
        });
        return r3;
    }
    function z(n1, e3) {
        var r3;
        return n1.tweens.map(function(t5) {
            var a4 = function(n2, e4) {
                var r4 = {
                };
                for(var t6 in n2){
                    var a5 = O(n2[t6], e4);
                    u.arr(a5) && 1 === (a5 = a5.map(function(n3) {
                        return O(n3, e4);
                    })).length && (a5 = a5[0]), r4[t6] = a5;
                }
                return r4.duration = parseFloat(r4.duration), r4.delay = parseFloat(r4.delay), r4;
            }(t5, e3), o3 = a4.value, i2 = u.arr(o3) ? o3[1] : o3, s2 = C(i2), c2 = N(e3.target, n1.name, s2, e3), f3 = r3 ? r3.to.original : c2, l2 = u.arr(o3) ? o3[0] : f3, d1 = C(l2) || C(c2), p1 = s2 || d1;
            return u.und(i2) && (i2 = f3), a4.from = X(l2, p1), a4.to = X(A(i2, l2), p1), a4.start = r3 ? r3.end : 0, a4.end = a4.start + a4.delay + a4.duration + a4.endDelay, a4.easing = v(a4.easing, a4.duration), a4.isPath = u.pth(o3), a4.isColor = u.col(a4.from.original), a4.isColor && (a4.round = 1), r3 = a4, a4;
        });
    }
    var H = {
        css: function(n1, e3, r3) {
            return n1.style[e3] = r3;
        },
        attribute: function(n1, e3, r3) {
            return n1.setAttribute(e3, r3);
        },
        object: function(n1, e3, r3) {
            return n1[e3] = r3;
        },
        transform: function(n1, e3, r3, t5, a4) {
            if (t5.list.set(e3, r3), e3 === t5.last || a4) {
                var o3 = "";
                t5.list.forEach(function(n2, e4) {
                    o3 += e4 + "(" + n2 + ") ";
                }), n1.style.transform = o3;
            }
        }
    };
    function G(n1, e3) {
        Z(n1).forEach(function(n2) {
            for(var r3 in e3){
                var t5 = O(e3[r3], n2), a4 = n2.target, o4 = C(t5), i2 = N(a4, r3, o4, n2), u1 = A(E(t5, o4 || C(i2)), i2), s2 = D(a4, r3);
                H[s2](a4, r3, u1, n2.transforms, !0);
            }
        });
    }
    function R(n1, e3) {
        return g(m(n1.map(function(n2) {
            return e3.map(function(e4) {
                return (function(n3, e5) {
                    var r3 = D(n3.target, e5.name);
                    if (r3) {
                        var t6 = z(e5, n3), a6 = t6[t6.length - 1];
                        return {
                            type: r3,
                            property: e5.name,
                            animatable: n3,
                            tweens: t6,
                            duration: a6.end,
                            delay: t6[0].delay,
                            endDelay: a6.endDelay
                        };
                    }
                })(n2, e4);
            });
        })), function(n2) {
            return !u.und(n2);
        });
    }
    function W(n1, e3) {
        var r3 = n1.length, t7 = function(n2) {
            return n2.timelineOffset ? n2.timelineOffset : 0;
        }, a7 = {
        };
        return a7.duration = r3 ? Math.max.apply(Math, n1.map(function(n2) {
            return t7(n2) + n2.duration;
        })) : e3.duration, a7.delay = r3 ? Math.min.apply(Math, n1.map(function(n2) {
            return t7(n2) + n2.delay;
        })) : e3.delay, a7.endDelay = r3 ? a7.duration - Math.max.apply(Math, n1.map(function(n2) {
            return t7(n2) + n2.duration - n2.endDelay;
        })) : e3.endDelay, a7;
    }
    var J = 0;
    var K, U = [], _ = [], nn = function() {
        function n1() {
            K = requestAnimationFrame(e3);
        }
        function e3(e4) {
            var r3 = U.length;
            if (r3) {
                for(var t7 = 0; t7 < r3;){
                    var a7 = U[t7];
                    if (a7.paused) {
                        var o5 = U.indexOf(a7);
                        o5 > -1 && (U.splice(o5, 1), r3 = U.length);
                    } else a7.tick(e4);
                    t7++;
                }
                n1();
            } else K = cancelAnimationFrame(K);
        }
        return n1;
    }();
    function en(r3) {
        (void 0) === r3 && (r3 = {
        });
        var t8, o6 = 0, i3 = 0, u2 = 0, s3 = 0, c2 = null;
        function f3(n1) {
            var e3 = window.Promise && new Promise(function(n2) {
                return c2 = n2;
            });
            return n1.finished = e3, e3;
        }
        var l2, d1, p1, v1, h1, m1, y1, b1, x1 = (d1 = M(n, l2 = r3), p1 = M(e2, l2), v1 = V(p1, l2), h1 = Z(l2.targets), m1 = R(h1, v1), y1 = W(m1, p1), b1 = J, J++, w(d1, {
            id: b1,
            children: [],
            animatables: h1,
            animations: m1,
            duration: y1.duration,
            delay: y1.delay,
            endDelay: y1.endDelay
        }));
        f3(x1);
        function k1() {
            var n1 = x1.direction;
            "alternate" !== n1 && (x1.direction = "normal" !== n1 ? "normal" : "reverse"), x1.reversed = !x1.reversed, t8.forEach(function(n2) {
                return n2.reversed = x1.reversed;
            });
        }
        function C1(n1) {
            return x1.reversed ? x1.duration - n1 : n1;
        }
        function O1() {
            o6 = 0, i3 = C1(x1.currentTime) * (1 / en.speed);
        }
        function P1(n1, e3) {
            e3 && e3.seek(n1 - e3.timelineOffset);
        }
        function I1(n1) {
            for(var e3 = 0, r4 = x1.animations, t9 = r4.length; e3 < t9;){
                var o7 = r4[e3], i4 = o7.animatable, u4 = o7.tweens, s4 = u4.length - 1, c3 = u4[s4];
                s4 && (c3 = g(u4, function(e4) {
                    return n1 < e4.end;
                })[0] || c3);
                for(var f4 = a3(n1 - c3.start - c3.delay, 0, c3.duration) / c3.duration, l3 = isNaN(f4) ? 1 : c3.easing(f4), d2 = c3.to.strings, p2 = c3.round, v2 = [], h2 = c3.to.numbers.length, m2 = void 0, y2 = 0; y2 < h2; y2++){
                    var b2 = void 0, M1 = c3.to.numbers[y2], w1 = c3.from.numbers[y2] || 0;
                    b2 = c3.isPath ? $(c3.value, l3 * M1) : w1 + l3 * (M1 - w1), p2 && (c3.isColor && y2 > 2 || (b2 = Math.round(b2 * p2) / p2)), v2.push(b2);
                }
                var k2 = d2.length;
                if (k2) {
                    m2 = d2[0];
                    for(var C2 = 0; C2 < k2; C2++){
                        d2[C2];
                        var O2 = d2[C2 + 1], P2 = v2[C2];
                        isNaN(P2) || (m2 += O2 ? P2 + O2 : P2 + " ");
                    }
                } else m2 = v2[0];
                H[o7.type](i4.target, o7.property, m2, i4.transforms), o7.currentValue = m2, e3++;
            }
        }
        function B1(n1) {
            x1[n1] && !x1.passThrough && x1[n1](x1);
        }
        function D1(n1) {
            var e3 = x1.duration, r4 = x1.delay, l4 = e3 - x1.endDelay, d3 = C1(n1);
            x1.progress = a3(d3 / e3 * 100, 0, 100), x1.reversePlayback = d3 < x1.currentTime, t8 && (function(n2) {
                if (x1.reversePlayback) for(var e4 = s3; e4--;)P1(n2, t8[e4]);
                else for(var r5 = 0; r5 < s3; r5++)P1(n2, t8[r5]);
            })(d3), !x1.began && x1.currentTime > 0 && (x1.began = !0, B1("begin"), B1("loopBegin")), d3 <= r4 && 0 !== x1.currentTime && I1(0), (d3 >= l4 && x1.currentTime !== e3 || !e3) && I1(e3), d3 > r4 && d3 < l4 ? (x1.changeBegan || (x1.changeBegan = !0, x1.changeCompleted = !1, B1("changeBegin")), B1("change"), I1(d3)) : x1.changeBegan && (x1.changeCompleted = !0, x1.changeBegan = !1, B1("changeComplete")), x1.currentTime = a3(d3, 0, e3), x1.began && B1("update"), n1 >= e3 && (i3 = 0, x1.remaining && !0 !== x1.remaining && x1.remaining--, x1.remaining ? (o6 = u2, B1("loopComplete"), B1("loopBegin"), "alternate" === x1.direction && k1()) : (x1.paused = !0, x1.completed || (x1.completed = !0, B1("loopComplete"), B1("complete"), !x1.passThrough && "Promise" in window && (c2(), f3(x1)))));
        }
        return x1.reset = function() {
            var n1 = x1.direction;
            x1.passThrough = !1, x1.currentTime = 0, x1.progress = 0, x1.paused = !0, x1.began = !1, x1.changeBegan = !1, x1.completed = !1, x1.changeCompleted = !1, x1.reversePlayback = !1, x1.reversed = "reverse" === n1, x1.remaining = x1.loop, t8 = x1.children;
            for(var e3 = s3 = t8.length; e3--;)x1.children[e3].reset();
            (x1.reversed && !0 !== x1.loop || "alternate" === n1 && 1 === x1.loop) && x1.remaining++, I1(0);
        }, x1.set = function(n1, e3) {
            return G(n1, e3), x1;
        }, x1.tick = function(n1) {
            u2 = n1, o6 || (o6 = u2), D1((u2 + (i3 - o6)) * en.speed);
        }, x1.seek = function(n1) {
            D1(C1(n1));
        }, x1.pause = function() {
            x1.paused = !0, O1();
        }, x1.play = function() {
            x1.paused && (x1.completed && x1.reset(), x1.paused = !1, U.push(x1), O1(), K || nn());
        }, x1.reverse = function() {
            k1(), O1();
        }, x1.restart = function() {
            x1.reset(), x1.play();
        }, x1.reset(), x1.autoplay && x1.play(), x1;
    }
    function rn(n1, e3) {
        for(var r3 = e3.length; r3--;)b(n1, e3[r3].animatable.target) && e3.splice(r3, 1);
    }
    return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
        document.hidden ? (U.forEach(function(n1) {
            return n1.pause();
        }), _ = U.slice(0), U = []) : _.forEach(function(n1) {
            return n1.play();
        });
    }), en.version = "3.0.1", en.speed = 1, en.running = U, en.remove = function(n1) {
        for(var e3 = Y(n1), r3 = U.length; r3--;){
            var t8 = U[r3], a8 = t8.animations, o6 = t8.children;
            rn(e3, a8);
            for(var i3 = o6.length; i3--;){
                var u2 = o6[i3], s3 = u2.animations;
                rn(e3, s3), s3.length || u2.children.length || o6.splice(i3, 1);
            }
            a8.length || o6.length || t8.pause();
        }
    }, en.get = N, en.set = G, en.convertPx = I, en.path = function(n1, e3) {
        var r3 = u.str(n1) ? h(n1)[0] : n1, t9 = e3 || 100;
        return function(n2) {
            return {
                property: n2,
                el: r3,
                svg: q(r3),
                totalLength: j(r3) * (t9 / 100)
            };
        };
    }, en.setDashoffset = function(n1) {
        var e3 = j(n1);
        return n1.setAttribute("stroke-dasharray", e3), e3;
    }, en.stagger = function(n1, e3) {
        (void 0) === e3 && (e3 = {
        });
        var r3 = e3.direction || "normal", t9 = e3.easing ? v(e3.easing) : null, a9 = e3.grid, o8 = e3.axis, i5 = e3.from || 0, s5 = "first" === i5, c2 = "center" === i5, f3 = "last" === i5, l2 = u.arr(n1), d1 = l2 ? parseFloat(n1[0]) : parseFloat(n1), p1 = l2 ? parseFloat(n1[1]) : 0, h1 = C(l2 ? n1[1] : n1) || 0, g1 = e3.start || 0 + (l2 ? d1 : 0), m1 = [], y1 = 0;
        return function(n2, e4, u5) {
            if (s5 && (i5 = 0), c2 && (i5 = (u5 - 1) / 2), f3 && (i5 = u5 - 1), !m1.length) {
                for(var v1 = 0; v1 < u5; v1++){
                    if (a9) {
                        var b1 = c2 ? (a9[0] - 1) / 2 : i5 % a9[0], x1 = c2 ? (a9[1] - 1) / 2 : Math.floor(i5 / a9[0]), M2 = b1 - v1 % a9[0], w2 = x1 - Math.floor(v1 / a9[0]), k1 = Math.sqrt(M2 * M2 + w2 * w2);
                        "x" === o8 && (k1 = -M2), "y" === o8 && (k1 = -w2), m1.push(k1);
                    } else m1.push(Math.abs(i5 - v1));
                    y1 = Math.max.apply(Math, m1);
                }
                t9 && (m1 = m1.map(function(n3) {
                    return t9(n3 / y1) * y1;
                })), "reverse" === r3 && (m1 = m1.map(function(n3) {
                    return o8 ? n3 < 0 ? -1 * n3 : -n3 : Math.abs(y1 - n3);
                }));
            }
            return g1 + (l2 ? (p1 - d1) / y1 : d1) * (Math.round(100 * m1[e4]) / 100) + h1;
        };
    }, en.timeline = function(n1) {
        (void 0) === n1 && (n1 = {
        });
        var r3 = en(n1);
        return r3.duration = 0, r3.add = function(t9, a9) {
            var o8 = U.indexOf(r3), i5 = r3.children;
            function s5(n2) {
                n2.passThrough = !0;
            }
            o8 > -1 && U.splice(o8, 1);
            for(var c2 = 0; c2 < i5.length; c2++)s5(i5[c2]);
            var f3 = w(t9, M(e2, n1));
            f3.targets = f3.targets || n1.targets;
            var l2 = r3.duration;
            f3.autoplay = !1, f3.direction = r3.direction, f3.timelineOffset = u.und(a9) ? l2 : A(a9, l2), s5(r3), r3.seek(f3.timelineOffset);
            var d1 = en(f3);
            s5(d1), i5.push(d1);
            var p1 = W(i5, n1);
            return r3.delay = p1.delay, r3.endDelay = p1.endDelay, r3.duration = p1.duration, r3.seek(0), r3.reset(), r3.autoplay && r3.play(), r3;
        }, r3;
    }, en.easing = v, en.penner = p, en.random = function(n1, e3) {
        return Math.floor(Math.random() * (e3 - n1 + 1)) + n1;
    }, en;
});

