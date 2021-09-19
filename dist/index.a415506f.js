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
})({"eFYkL":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "9988fdb4c5fce5c2";
module.bundle.HMR_BUNDLE_ID = "b52d039da415506f";
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

},{}]},["eFYkL"], null, "parcelRequire2041")
(function(window) {
    // Helper vars and functions.
    function extend(a, b) {
        for(var key in b)if (b.hasOwnProperty(key)) a[key] = b[key];
        return a;
    }
    function createDOMEl(type, className, content) {
        var el = document.createElement(type);
        el.className = className || '';
        el.innerHTML = content || '';
        return el;
    }
    function createStyleForDOMEL(el, position, top, left, width, height, color, background, opacity, pointerEvents, zIndex) {
        //this is a helper function for creating the styles for a given element
        el.style.position = position || 'absolute';
        el.style.top = top || '0';
        el.style.left = left || '0';
        el.style.color = color || '#fff';
        el.style.width = width || '100%';
        el.style.height = height || '100%';
        el.style.backgroundColor = background || '#f0f0f0';
        el.style.opacity = opacity || '0';
        el.style.pointerEvents = pointerEvents || 'none';
        el.style.zIndex = zIndex || 0;
    }
    /**
	 * RevealFx obj.
	 */ function RevealFx(el, options) {
        this.el = el;
        this.revealLayers = [];
        this.options = extend({
        }, this.options);
        extend(this.options, options);
        this._init();
    }
    /**
	 * RevealFx options.
	 */ RevealFx.prototype.options = {
        // If true, then the content will be hidden until it´s "revealed".
        isContentHidden: true,
        //number of layers to be displayed 
        layers: 1,
        // The animation/reveal settings. This can be set initially or passed when calling the reveal method.
        revealSettings: {
            // Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
            direction: 'lr',
            // Revealers´s background color Array.
            bgColors: [
                '#111'
            ],
            // Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
            duration: 500,
            // Animation easing. This is the easing to "cover" and also "uncover" the element.
            easing: 'easeInOutQuint',
            // percentage-based value representing how much of the area should be left covered.
            coverArea: 0,
            //milliseconds of delay between layers animation thatis used in stagger animation 
            delay: 100,
            // Callback for when the revealer is covering the element (halfway through of the whole animation)
            onHalfway: function(contentEl, revealerEl) {
                return false;
            },
            // Callback for when the animation starts (animation start).
            onStart: function(contentEl, revealerEl) {
                return false;
            },
            // Callback for when the revealer has completed uncovering (animation end).
            onComplete: function(contentEl, revealerEl) {
                return false;
            }
        }
    };
    /**
	 * Init.
	 */ RevealFx.prototype._init = function() {
        this._layout();
    };
    /**
	 * Build the necessary structure.
	 */ RevealFx.prototype._layout = function() {
        //instead of going with the %s go with the pxs for the better view
        //create an array of the selected elements and store it as global 
        var position = getComputedStyle(this.el).position;
        if (position !== 'fixed' && position !== 'absolute' && position !== 'relative') this.el.style.position = 'relative';
        var heightOfEl = 100;
        var widthOfEl = 100;
        // Content element.
        this.content = createDOMEl('div', 'block-revealer__content', this.el.innerHTML);
        if (this.options.isContentHidden) this.content.style.opacity = 0;
        this.el.innerHTML = '';
        this.el.appendChild(this.content);
        var topOfRevealerElement = 0;
        var leftOfRevalerElement = 0;
        const numberOfLayers = this.options.layers;
        var colorOfBlockLayer = '#111';
        for(var i = 0; i < numberOfLayers; i++){
            // Revealer element (the one that animates)
            this.revealLayers.push(createDOMEl('div', 'block-revealer__element'));
            if (this.options.revealSettings.bgColors[i]) colorOfBlockLayer = this.options.revealSettings.bgColors[i];
            else colorOfBlockLayer = '#111111';
            //to be refactored to default and check if it exists
            if (this.options.revealSettings.direction === 'tb' || this.options.revealSettings.direction === 'bt') {
                var widthOfIndividualBlock = widthOfEl / numberOfLayers;
                createStyleForDOMEL(this.revealLayers[i], 'absolute', '0%', leftOfRevalerElement + '%', widthOfIndividualBlock + '%', '100%', '#fff', colorOfBlockLayer, '0', 'none');
                leftOfRevalerElement = leftOfRevalerElement + widthOfIndividualBlock;
            } else {
                var heightOfIndividualBlock = heightOfEl / numberOfLayers;
                createStyleForDOMEL(this.revealLayers[i], 'absolute', topOfRevealerElement + '%', '0%', '100%', heightOfIndividualBlock + 0.5 + '%', '#fff', colorOfBlockLayer, '0', 'none');
                topOfRevealerElement = topOfRevealerElement + heightOfIndividualBlock;
            }
            this.el.classList.add('block-revealer');
            this.el.appendChild(this.revealLayers[i]);
        }
    };
    /**
	 * Gets the revealer element´s transform and transform origin.
	 */ RevealFx.prototype._getTransformSettings = function(direction) {
        //check for rotation
        var origin, origin_2, val;
        switch(direction){
            case 'lr':
                val = 'scaleY(1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
            case 'rl':
                val = 'scaleY(1)';
                origin = '100% 50%';
                origin_2 = '0 50%';
                break;
            case 'tb':
                val = 'scaleX(1)';
                origin = '50% 0';
                origin_2 = '50% 100%';
                break;
            case 'bt':
                val = 'scaleX(1)';
                origin = '50% 100%';
                origin_2 = '50% 0';
                break;
            default:
                val = 'scaleY(1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
        }
        return {
            // transform value.
            val: val,
            origin: {
                initial: origin,
                halfway: origin_2
            }
        };
    };
    /**
	 * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
	 */ RevealFx.prototype.reveal = function(revealSettings) {
        // Do nothing if currently animating.
        if (this.isAnimating) return false;
        this.isAnimating = true;
        // Set the revealer element´s transform and transform origin.
        var defaults = {
            duration: 500,
            easing: 'easeInOutQuint',
            delay: 100,
            bgColors: [
                '#111111'
            ],
            direction: 'lr',
            coverArea: 0
        }, revealSettings = revealSettings || this.options.revealSettings, direction = revealSettings.direction || defaults.direction, delay = revealSettings.delay || defaults.delay, transformSettings = this._getTransformSettings(direction);
        for(var i = 0; i < this.revealLayers.length; i++){
            this.revealLayers[i].style.WebkitTransform = this.revealLayers[i].style.transform = transformSettings.val;
            this.revealLayers[i].style.WebkitTransformOrigin = this.revealLayers[i].style.transformOrigin = transformSettings.origin.initial;
            // Show it. By default the revealer element has opacity = 0 (CSS).
            this.revealLayers[i].style.opacity = 1;
            if (revealSettings.bgColors[i]) this.revealLayers[i].style.backgroundColor = revealSettings.bgColors[i];
            else this.revealLayers[i].style.backgroundColor = defaults.bgColors[0];
        }
        // Animate it.
        var self = this, // Second animation step.
        animationSettings_2 = {
            targets: self.revealLayers,
            delay: anime.stagger(parseInt(delay)),
            complete: function(anim) {
                if (typeof revealSettings.onComplete === 'function') revealSettings.onComplete(self.content, self.revealLayers);
                self.isAnimating = false;
            }
        }, // First animation step.
        animationSettings = {
            targets: self.revealLayers,
            delay: anime.stagger(parseInt(delay)),
            complete: function() {
                for(var i1 = 0; i1 < self.revealLayers.length; i1++)self.revealLayers[i1].style.WebkitTransformOrigin = self.revealLayers[i1].style.transformOrigin = transformSettings.origin.halfway;
                if (typeof revealSettings.onHalfway === 'function') revealSettings.onHalfway(self.content, self.revealLayers);
                anime(animationSettings_2);
            }
        };
        animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
        animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;
        var coverArea = revealSettings.coverArea || defaults.coverArea;
        if (direction === 'lr' || direction === 'rl') {
            animationSettings.scaleX = [
                0,
                1
            ];
            animationSettings_2.scaleX = [
                1,
                coverArea / 100
            ];
        } else {
            animationSettings.scaleY = [
                0,
                1
            ];
            animationSettings_2.scaleY = [
                1,
                coverArea / 100
            ];
        }
        if (typeof revealSettings.onStart === 'function') revealSettings.onStart(self.content, self.revealLayers);
        anime(animationSettings);
    };
    window.RevealFx = RevealFx;
})(window);

