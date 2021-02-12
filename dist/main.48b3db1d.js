// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.scss":[function(require,module,exports) {
module.exports="/2ff0d41c889649ed414fe07e48b3db1d.scss";
},{"normalize.css":"node_modules/normalize.css/normalize.css","./..\\assets\\fonts\\Oswaldlight.woff2":[["Oswaldlight.7d50c4b1.woff2","assets/fonts/Oswaldlight.woff2"],"assets/fonts/Oswaldlight.woff2"],"./..\\assets\\fonts\\Oswaldlight.woff":[["Oswaldlight.43815704.woff","assets/fonts/Oswaldlight.woff"],"assets/fonts/Oswaldlight.woff"],"./..\\assets\\fonts\\Oswaldlight.ttf":[["Oswaldlight.5c4ac566.ttf","assets/fonts/Oswaldlight.ttf"],"assets/fonts/Oswaldlight.ttf"],"./..\\assets\\fonts\\Oswaldregular.woff2":[["Oswaldregular.36ec6b36.woff2","assets/fonts/Oswaldregular.woff2"],"assets/fonts/Oswaldregular.woff2"],"./..\\assets\\fonts\\Oswaldregular.woff":[["Oswaldregular.e6a2b2cf.woff","assets/fonts/Oswaldregular.woff"],"assets/fonts/Oswaldregular.woff"],"./..\\assets\\fonts\\Oswaldregular.ttf":[["Oswaldregular.ce9b4e6a.ttf","assets/fonts/Oswaldregular.ttf"],"assets/fonts/Oswaldregular.ttf"],"./..\\assets\\fonts\\Oswalddemibold.woff2":[["Oswalddemibold.3b86a15c.woff2","assets/fonts/Oswalddemibold.woff2"],"assets/fonts/Oswalddemibold.woff2"],"./..\\assets\\fonts\\Oswalddemibold.woff":[["Oswalddemibold.4c131514.woff","assets/fonts/Oswalddemibold.woff"],"assets/fonts/Oswalddemibold.woff"],"./..\\assets\\fonts\\Oswalddemibold.ttf":[["Oswalddemibold.a66e5529.ttf","assets/fonts/Oswalddemibold.ttf"],"assets/fonts/Oswalddemibold.ttf"],"./..\\assets\\fonts\\Oswaldheavy.woff2":[["Oswaldheavy.513d7b72.woff2","assets/fonts/Oswaldheavy.woff2"],"assets/fonts/Oswaldheavy.woff2"],"./..\\assets\\fonts\\Oswaldheavy.woff":[["Oswaldheavy.81d92274.woff","assets/fonts/Oswaldheavy.woff"],"assets/fonts/Oswaldheavy.woff"],"./..\\assets\\fonts\\Oswaldheavy.ttf":[["Oswaldheavy.04df428a.ttf","assets/fonts/Oswaldheavy.ttf"],"assets/fonts/Oswaldheavy.ttf"],"./..\\assets\\fonts\\Oswaldmedium.woff2":[["Oswaldmedium.14d75c25.woff2","assets/fonts/Oswaldmedium.woff2"],"assets/fonts/Oswaldmedium.woff2"],"./..\\assets\\fonts\\Oswaldmedium.woff":[["Oswaldmedium.ab733c8d.woff","assets/fonts/Oswaldmedium.woff"],"assets/fonts/Oswaldmedium.woff"],"./..\\assets\\fonts\\Oswaldmedium.ttf":[["Oswaldmedium.8f75c260.ttf","assets/fonts/Oswaldmedium.ttf"],"assets/fonts/Oswaldmedium.ttf"],"./..\\assets\\fonts\\Oswaldextralight.woff2":[["Oswaldextralight.cf1f4879.woff2","assets/fonts/Oswaldextralight.woff2"],"assets/fonts/Oswaldextralight.woff2"],"./..\\assets\\fonts\\Oswaldextralight.woff":[["Oswaldextralight.16b6e1c1.woff","assets/fonts/Oswaldextralight.woff"],"assets/fonts/Oswaldextralight.woff"],"./..\\assets\\fonts\\Oswaldextralight.ttf":[["Oswaldextralight.71795ad8.ttf","assets/fonts/Oswaldextralight.ttf"],"assets/fonts/Oswaldextralight.ttf"],"./..\\assets\\fonts\\Oswaldbold.woff2":[["Oswaldbold.b5f6123b.woff2","assets/fonts/Oswaldbold.woff2"],"assets/fonts/Oswaldbold.woff2"],"./..\\assets\\fonts\\Oswaldbold.woff":[["Oswaldbold.033d4a8b.woff","assets/fonts/Oswaldbold.woff"],"assets/fonts/Oswaldbold.woff"],"./..\\assets\\fonts\\Oswaldbold.ttf":[["Oswaldbold.4c06106b.ttf","assets/fonts/Oswaldbold.ttf"],"assets/fonts/Oswaldbold.ttf"],"./..\\assets\\fonts\\Robotothin.woff2":[["Robotothin.9a288383.woff2","assets/fonts/Robotothin.woff2"],"assets/fonts/Robotothin.woff2"],"./..\\assets\\fonts\\Robotothin.woff":[["Robotothin.73836098.woff","assets/fonts/Robotothin.woff"],"assets/fonts/Robotothin.woff"],"./..\\assets\\fonts\\Robotothin.ttf":[["Robotothin.cc7313d4.ttf","assets/fonts/Robotothin.ttf"],"assets/fonts/Robotothin.ttf"],"./..\\assets\\fonts\\Robotolight.woff2":[["Robotolight.a4c14103.woff2","assets/fonts/Robotolight.woff2"],"assets/fonts/Robotolight.woff2"],"./..\\assets\\fonts\\Robotolight.woff":[["Robotolight.06dbbd90.woff","assets/fonts/Robotolight.woff"],"assets/fonts/Robotolight.woff"],"./..\\assets\\fonts\\Robotolight.ttf":[["Robotolight.a678fd79.ttf","assets/fonts/Robotolight.ttf"],"assets/fonts/Robotolight.ttf"],"./..\\assets\\fonts\\Roboto.woff2":[["Roboto.a8392735.woff2","assets/fonts/Roboto.woff2"],"assets/fonts/Roboto.woff2"],"./..\\assets\\fonts\\Roboto.woff":[["Roboto.e36ab697.woff","assets/fonts/Roboto.woff"],"assets/fonts/Roboto.woff"],"./..\\assets\\fonts\\Roboto.ttf":[["Roboto.decf44e3.ttf","assets/fonts/Roboto.ttf"],"assets/fonts/Roboto.ttf"],"./..\\assets\\fonts\\Robotomedium.woff2":[["Robotomedium.f70da1c8.woff2","assets/fonts/Robotomedium.woff2"],"assets/fonts/Robotomedium.woff2"],"./..\\assets\\fonts\\Robotomedium.woff":[["Robotomedium.5ef71c53.woff","assets/fonts/Robotomedium.woff"],"assets/fonts/Robotomedium.woff"],"./..\\assets\\fonts\\Robotomedium.ttf":[["Robotomedium.12f4efc9.ttf","assets/fonts/Robotomedium.ttf"],"assets/fonts/Robotomedium.ttf"],"./..\\assets\\fonts\\Robotobold.woff2":[["Robotobold.75c1bdb7.woff2","assets/fonts/Robotobold.woff2"],"assets/fonts/Robotobold.woff2"],"./..\\assets\\fonts\\Robotobold.woff":[["Robotobold.6398cd6b.woff","assets/fonts/Robotobold.woff"],"assets/fonts/Robotobold.woff"],"./..\\assets\\fonts\\Robotobold.ttf":[["Robotobold.f82e0811.ttf","assets/fonts/Robotobold.ttf"],"assets/fonts/Robotobold.ttf"],"./..\\assets\\fonts\\Robotoblack.woff2":[["Robotoblack.b0e5f0fd.woff2","assets/fonts/Robotoblack.woff2"],"assets/fonts/Robotoblack.woff2"],"./..\\assets\\fonts\\Robotoblack.woff":[["Robotoblack.1cf100ba.woff","assets/fonts/Robotoblack.woff"],"assets/fonts/Robotoblack.woff"],"./..\\assets\\fonts\\Robotoblack.ttf":[["Robotoblack.6cdff8c5.ttf","assets/fonts/Robotoblack.ttf"],"assets/fonts/Robotoblack.ttf"],"./..\\assets\\fonts\\opensansbold.woff2":[["opensansbold.e5dc207b.woff2","assets/fonts/opensansbold.woff2"],"assets/fonts/opensansbold.woff2"],"./..\\assets\\fonts\\opensansbold.woff":[["opensansbold.0e4da3eb.woff","assets/fonts/opensansbold.woff"],"assets/fonts/opensansbold.woff"],"./..\\assets\\fonts\\opensansbold.ttf":[["opensansbold.8c62567d.ttf","assets/fonts/opensansbold.ttf"],"assets/fonts/opensansbold.ttf"],"./..\\assets\\icons\\ICON__DOWN.svg":[["ICON__DOWN.8153ecd9.svg","assets/icons/ICON__DOWN.svg"],"assets/icons/ICON__DOWN.svg"],"./..\\assets\\icons\\ICON__FLAG.svg":[["ICON__FLAG.e6a34684.svg","assets/icons/ICON__FLAG.svg"],"assets/icons/ICON__FLAG.svg"],"_css_loader":"C:/Users/Admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {

},{}]