"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://dbBrainForce:<39b26014f3+->@atlascluster.e03bguk.mongodb.net/?retryWrites=true&w=majority\" //process.env.MONGODB_URI as string; // your mongodb connection string\n;\nconst options = {};\nclass Singleton {\n    constructor(){\n        this.client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        this.clientPromise = this.client.connect();\n        if (true) {\n            // In development mode, use a global variable so that the value\n            // is preserved across module reloads caused by HMR (Hot Module Replacement).\n            global._mongoClientPromise = this.clientPromise;\n        }\n    }\n    static get instance() {\n        if (!this._instance) {\n            this._instance = new Singleton();\n        }\n        return this._instance.clientPromise;\n    }\n}\nconst clientPromise = Singleton.instance;\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsTUFBTSwwR0FBeUcsc0VBQXNFOztBQUMzTCxNQUFNQyxVQUFVLENBQUM7QUFNakIsTUFBTUM7SUFJSixhQUFzQjtRQUNwQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJSixnREFBV0EsQ0FBQ0MsS0FBS0M7UUFDbkMsSUFBSSxDQUFDRyxhQUFhLEdBQUcsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDeEMsSUFBSUMsSUFBeUIsRUFBZTtZQUMxQywrREFBK0Q7WUFDL0QsNkVBQTZFO1lBQzdFQyxPQUFPQyxtQkFBbUIsR0FBRyxJQUFJLENBQUNKLGFBQWE7UUFDakQsQ0FBQztJQUNIO0lBRUEsV0FBa0JLLFdBQVc7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQ0EsU0FBUyxHQUFHLElBQUlSO1FBQ3ZCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQ1EsU0FBUyxDQUFDTixhQUFhO0lBQ3JDO0FBQ0Y7QUFDQSxNQUFNQSxnQkFBZ0JGLFVBQVVPLFFBQVE7QUFFeEMsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUwsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgdXJpID0gXCJtb25nb2RiK3NydjovL2RiQnJhaW5Gb3JjZTo8MzliMjYwMTRmMystPkBhdGxhc2NsdXN0ZXIuZTAzYmd1ay5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIvL3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZzsgLy8geW91ciBtb25nb2RiIGNvbm5lY3Rpb24gc3RyaW5nXG5jb25zdCBvcHRpb25zID0ge307XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xufVxuXG5jbGFzcyBTaW5nbGV0b24ge1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNpbmdsZXRvbjtcbiAgcHJpdmF0ZSBjbGllbnQ6IE1vbmdvQ2xpZW50O1xuICBwcml2YXRlIGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGllbnRQcm9taXNlID0gdGhpcy5jbGllbnQuY29ubmVjdCgpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gICAgICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSB0aGlzLmNsaWVudFByb21pc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2luZ2xldG9uKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZS5jbGllbnRQcm9taXNlO1xuICB9XG59XG5jb25zdCBjbGllbnRQcm9taXNlID0gU2luZ2xldG9uLmluc3RhbmNlO1xuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJvcHRpb25zIiwiU2luZ2xldG9uIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImluc3RhbmNlIiwiX2luc3RhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            profile (profile) {\n                return {\n                    id: profile.id.toString(),\n                    name: profile.name || profile.login,\n                    username: profile.login,\n                    email: profile.email,\n                    image: profile.avatar_url,\n                    followers: profile.followers,\n                    verified: true\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.username = user.username;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0k7QUFDcEI7QUFFeEMsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3RCSSxTQUFTRiwwRUFBY0EsQ0FBQ0MsbURBQWFBO0lBQ3JDRSxXQUFXO1FBQ1RKLGlFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsU0FBUUEsT0FBTyxFQUFFO2dCQUNmLE9BQU87b0JBQ0xDLElBQUlELFFBQVFDLEVBQUUsQ0FBQ0MsUUFBUTtvQkFDdkJDLE1BQU1ILFFBQVFHLElBQUksSUFBSUgsUUFBUUksS0FBSztvQkFDbkNDLFVBQVVMLFFBQVFJLEtBQUs7b0JBQ3ZCRSxPQUFPTixRQUFRTSxLQUFLO29CQUNwQkMsT0FBT1AsUUFBUVEsVUFBVTtvQkFDekJDLFdBQVdULFFBQVFTLFNBQVM7b0JBQzVCQyxVQUFVLElBQUk7Z0JBQ2hCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDL0IsdUVBQXVFO1lBQ3ZFRCxRQUFRUCxRQUFRLEdBQUdRLEtBQUtSLFFBQVE7WUFDaEMsT0FBT087UUFDVDtJQUNGO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogcHJvZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSB8fCBwcm9maWxlLmxvZ2luLFxuICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgIGltYWdlOiBwcm9maWxlLmF2YXRhcl91cmwsXG4gICAgICAgICAgZm9sbG93ZXJzOiBwcm9maWxlLmZvbGxvd2VycyxcbiAgICAgICAgICB2ZXJpZmllZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXG4gICAgICBzZXNzaW9uLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRIdWJQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJ0b1N0cmluZyIsIm5hbWUiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhcl91cmwiLCJmb2xsb3dlcnMiLCJ2ZXJpZmllZCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();