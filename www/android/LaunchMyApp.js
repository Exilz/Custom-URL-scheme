// Old code working on the fastest devices
// Shouldn't be useful anymore thanks to this hack :
// https://github.com/archriss/aix-app/commit/fcde57ecee0d82308b982fc91a1d86cb0b85bef6


// (function() {
//     "use strict";
//
//     var remainingAttempts = 30;
//
//     function waitForAndCallHandlerFunction(url) {
//         if (typeof window.handleOpenURL == "function" &&
//             window.location.href == "http://meteor.local/") {
//             window.handleOpenURL(url);
//         } else if (remainingAttempts-- > 0) {
//             setTimeout(function() {
//                 waitForAndCallHandlerFunction(url)
//             }, 250);
//         }
//     }
//
//     function triggerOpenURL() {
//         cordova.exec(
//             waitForAndCallHandlerFunction,
//             null,
//             "LaunchMyApp",
//             "checkIntent", []);
//     }
//
//     document.addEventListener("deviceready", function() {
//         setTimeout(function() {
//             triggerOpenURL();
//         }, 250);
//     }, false);
// }());