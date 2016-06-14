"bundle";
(function() {
var define = System.amdDefine;
define("moduleA.js", [], function() {
  console.log('inside module a!');
});

})();
System.registerDynamic("moduleC.js", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);
  (function() {
    System.import('moduleA');
    console.log('inside module c!');
  })();
  return _retrieveGlobal();
});

//# sourceMappingURL=build.js.map