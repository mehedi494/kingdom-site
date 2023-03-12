"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports API_URL, NEXT_URL */
const API_URL = process.env.API_URL || "https://demo-production-edcf.up.railway.app";
const NEXT_URL = process.env.NEXTJS_PUBLIC_FRONTEND_URL || `http://localhost:3000`;


/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "POST") {
        const { identifier , password  } = req.body;
        const strapiRes = await fetch(`https://demo-production-edcf.up.railway.app/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await strapiRes.json();
        if (strapiRes.ok) {
            res.status(200).json(data);
        // set cookie
        // res.setHeader(
        //   "Set-Cookie",
        //   cookie.serialize("token", data.jwt, {
        //     httpOnly: true,
        //     secure: false,
        //     maxAge: 60 * 60 * 24 * 7, // 1 week
        //     sameSite: "strict",
        //     path: "/",
        //   })
        // );
        } else {
            res.send(data);
        }
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5600));
module.exports = __webpack_exports__;

})();