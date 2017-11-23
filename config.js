var uirVer = '1.0.0-beta.7';
var uirCoreVer = '5.0.5';
var rxjsVer = '5.0.1';
var ng2Ver = '4.2.0';
var ng2Pkgs = ['core', 'compiler', 'common', 'http', 'platform-browser-dynamic', 'platform-browser', 'router'];

System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: Object.assign(ng2MapObject(ng2Pkgs, ng2Ver), {
    'helloworld': "./helloworld.ts",
    'rxjs': 'https://unpkg.com/rxjs@' + rxjsVer,
    '@uirouter/angular': 'https://unpkg.com/@uirouter/angular@' + uirVer + '/_bundles/ui-router-ng2',
    '@uirouter/core': 'https://unpkg.com/@uirouter/core@' + uirCoreVer + '/_bundles/ui-router-core',
    '@uirouter/visualizer': 'https://unpkg.com/@uirouter/visualizer@4'
  }),
  //packages defines our app package
  packages: Object.assign(ng2PackagesObject(ng2Pkgs), {
    rxjs: { defaultExtension: 'js' }
  })
});

function ng2MapObject(ng2Packages, ng2Ver) {
  return ng2Packages.reduce(function (acc, pkg) {
    acc['@angular/' + pkg] = 'https://unpkg.com/@angular/' + pkg + '@' + ng2Ver;
    return acc;
  }, {});
}

function ng2PackagesObject(ng2Packages) {
  return ng2Packages.reduce(function(acc, pkg) {
    acc['@angular/' + pkg] = { main: 'bundles/' + pkg + '.umd.js', defaultExtension: 'js' }
    return acc;
  }, {});
}
