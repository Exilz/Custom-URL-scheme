(function () {
    "use strict";

  var remainingAttempts = 30;

  function waitForAndCallHandlerFunction(url) {
    if (typeof window.handleOpenURL == "function"
        && window.location.href.search("meteor.local") !== -1) {
      window.handleOpenURL(url);
    } else if (remainingAttempts-- > 0) {
        console.info(window.location.href);
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
