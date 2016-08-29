'use strict';

function request(url, callback) {
  window.JSONPCallback = function(data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  };
  var script = document.createElement('script');
  script.src = url + '?callback=JSONPCallback';
  document.body.appendChild(script);
}

var url = 'http://localhost:1506/api/pictures';
request(url, function(data) {
  var pictures = data;
  console.log(pictures);
});
