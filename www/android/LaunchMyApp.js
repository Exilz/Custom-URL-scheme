(function () {
    "use strict";

  var remainingAttempts = 30;

  function waitForAndCallHandlerFunction(url) {
    if (typeof window.handleOpenURL == "function"
        && window.location.href === "http://meteor.local/") {
            alert('handle !');
      window.handleOpenURL(url);
    } else if (remainingAttempts-- > 0) {
      setTimeout(function(){waitForAndCallHandlerFunction(url)}, 500);
    }
  }

  function triggerOpenURL() {
    cordova.exec(
        waitForAndCallHandlerFunction,
        null,
        "LaunchMyApp",
        "checkIntent",
        []);
  }

  document.addEventListener("deviceready", triggerOpenURL, false);
}());
