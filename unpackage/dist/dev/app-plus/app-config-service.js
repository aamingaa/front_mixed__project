
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/register/register","pages/index/index","pages/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mix_project","compilerVersion":"2.5.1","entryPagePath":"pages/login/login","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"欢迎使用EMOS系统","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"新用户注册","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
