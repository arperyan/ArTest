const appId = "Cars.qvf";

///------------------Saas integration example
// const baseUrl = "devrel.ap.qlikcloud.com";
// const webIntegrationId = "gLY50rw10Wd0W6KcMUYG_Y3DjLNmOFr3";
// const appId = "a89d477f-571a-46ef-b9d9-520d48075701"

// // Config object to tell Qlik API where to connect.
// var config = {
//   host: baseUrl,
//   isSecure: true,
//   prefix: '/',
//   webIntegrationId: webIntegrationId,
//   port:443,
//   appId:appId,
// };

// // Configure require config
// require.config({
//   baseUrl: 'https://'+baseUrl+':443/resources',
//   webIntegrationId: webIntegrationId
// });


var prefix = '/'
var config = {
  host: 'localhost',
  prefix: prefix,
  port: 4848,
  isSecure: false
};
require.config({
  baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});
require(["js/qlik"], function (qlik) {
  qlik.setOnError(function (error) {
    $('#popupText').append(error.message + "<br>");
    $('#popup').fadeIn(1000);
  });
  $("#closePopup").click(function () {
    $('#popup').hide();
  });
  qlik.getGlobal(config).getAppList(function (list) {
    var str = "";
    $.each(list, function (key, value) {
      str += value.qDocName + "(" + value.qDocId + ")";
    });
    alert(str);
  });
  //callbacks -- inserted here --
  //open apps -- inserted here --
  var app = qlik.openApp('Cars.qvf', config);
  app.getObject('QV01', '0d8a2381-eaf9-4d11-8bcd-543308fb5d78');
  //app.getObject('QV01','0d8a2381-eaf9-4d11-8bcd-543308fb5d78');
  //create cubes and lists -- inserted here --
});