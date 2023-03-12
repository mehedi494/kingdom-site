"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports API_URL, NEXT_URL */
const API_URL = process.env.API_URL || "https://demo-production-edcf.up.railway.app";
const NEXT_URL = process.env.NEXTJS_PUBLIC_FRONTEND_URL || `http://localhost:3000`;


/***/ }),

/***/ 3425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);

const { parseCookies  } = __webpack_require__(3053);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "GET") {
        const { token  } = parseCookies({
            req
        });
        if (!token) {
            res.status(403).json({
                message: "Not Authorized"
            });
            return;
        }
        const strapiRes = await fetch(`https://demo-production-edcf.up.railway.app/api/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const user = await strapiRes.json();
        if (strapiRes.ok) {
            res.status(200).json({
                user
            });
        } else {
            res.status(401).json({
                message: "User Forbidden!"
            });
        }
    } else {
        res.send(req.method, "this method is not allowd!");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3425));
module.exports = __webpack_exports__;

})();