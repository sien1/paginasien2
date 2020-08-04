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
})({"data.json":[function(require,module,exports) {
module.exports = [{
  "Id": 1,
  "hash": "#main",
  "Titulo": "INNOVACION TECNOLOGICA",
  "Subtitulo": "a cualquier escala",
  "parrafo": "Una rosa blanca de metal\n        Una rosa blanca de metal\n        De tal pa cual, qu\xE9 tal\n        Mirala chupar, la beba de un mango bajito\n        Un mene-mene-meneaito\n        Chiquitito, sabrosito, riquiqu\xED\n        Regenerated girl degenerate\n        To generate heat in the light\n        Love in the face of fear",
  "img": "imagen1.jpg",
  "bgimg": "https://images.unsplash.com/photo-1466121239823-b0bdb9e64631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
}, {
  "Id": 2,
  "hash": "#hvac",
  "Titulo": "HVAC",
  "Subtitulo": "instalaciones de frio y calor",
  "parrafo": "",
  "img": "imagen2.jpg",
  "bgimg": "https://images.unsplash.com/photo-1592430571922-763fca445247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
}, {
  "Id": 3,
  "hash": "#civil",
  "Titulo": "CONSTRUCCION Y OBRA CIVIL",
  "Subtitulo": "",
  "parrafo": "",
  "img": "imagen3.jpg",
  "bgimg": "https://images.unsplash.com/photo-1500100586562-f75ff6540087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
}, {
  "Id": 4,
  "hash": "#elec",
  "Titulo": "ELECTROMECANICA",
  "Subtitulo": "",
  "parrafo": "",
  "img": "imagen4.png",
  "bgimg": "https://images.unsplash.com/photo-1511651432281-5cf2a44004f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
}];
},{}],"imgs/imagen1.jpg":[function(require,module,exports) {
module.exports = "/imagen1.ed6c598b.jpg";
},{}],"imgs/imagen2.jpg":[function(require,module,exports) {
module.exports = "/imagen2.3acd71ba.jpg";
},{}],"imgs/imagen3.jpg":[function(require,module,exports) {
module.exports = "/imagen3.21021b2e.jpg";
},{}],"imgs/imagen4.png":[function(require,module,exports) {
module.exports = "/imagen4.08b45d25.png";
},{}],"back.js":[function(require,module,exports) {
var data = require('./data.json');

var img1 = require('./imgs/imagen1.jpg');

var img2 = require('./imgs/imagen2.jpg');

var img3 = require('./imgs/imagen3.jpg');

var img4 = require('./imgs/imagen4.png');

$(document).ready(function () {
  var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    autoResize: true
  });
  document.getElementById("bgspecial").appendChild(app.view);
  var loader = PIXI.loader;
  loader.add('img1', img1);
  loader.add('img2', img2);
  loader.add('img3', img3);
  loader.add('img4', img4);
  loader.load(function (loader, resources) {
    //let Filter = new PIXI.Filter(null, fragment);
    var background = new PIXI.Filter(null, fragment);
    background.x = app.renderer.width / 2;
    background.y = app.renderer.height / 2;
    var Filter = new PIXI.Filter(null, fragment);
    background.filters = [Filter];
  });
}); // $(document).ready(function(){
//     // The application will create a renderer using WebGL, if possible,
//     // with a fallback to a canvas render. It will also setup the ticker
//     // and the root stage PIXI.Container.
//     const app = new PIXI.Application();
//     // The application will create a canvas element for you that you
//     // can then insert into the DOM.
//     document.body.appendChild(app.view);
//     // load the texture we need
//     PIXI.loader.add('bunny', 'bunny.png').load((loader, resources) => {
//         // This creates a texture from a 'bunny.png' image.
//         const bunny = new PIXI.Sprite(resources.bunny.texture);
//         // Setup the position of the bunny
//         bunny.x = app.renderer.width / 2;
//         bunny.y = app.renderer.height / 2;
//         // Rotate around the center
//         bunny.anchor.x = 0.5;
//         bunny.anchor.y = 0.5;
//         // Add the bunny to the scene we are building.
//         app.stage.addChild(bunny);
//         // Listen for frame updates
//         app.ticker.add(() => {
//             // each frame we spin the bunny around a bit
//             bunny.rotation += 0.01;
//         });
//     });
//     /*FUNCION PARA CAMBIAR EL FONDO*/ 
//     //Poner todas las imagenes en el require
//     // let reqImgs = (x) => {
//     //     return new Promise((resolve, reject) => {
//     //         let imgs = {};
//     //         let rootFolder = __dirname+'\\imgs\\';
//     //         data.map((x, index)=>{
//     //             console.log(rootFolder+x.img);
//     //             imgs[`img${x.Id}`] = require(rootFolder+x.img);
//     //         });
//     //         resolve(imgs);
//     //     });
//     // }
//     // reqImgs().then((data, err)=>{
//     //     console.log(data);
//     // });
// });
},{"./data.json":"data.json","./imgs/imagen1.jpg":"imgs/imagen1.jpg","./imgs/imagen2.jpg":"imgs/imagen2.jpg","./imgs/imagen3.jpg":"imgs/imagen3.jpg","./imgs/imagen4.png":"imgs/imagen4.png"}],"../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60273" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","back.js"], null)
//# sourceMappingURL=/back.f1876002.js.map