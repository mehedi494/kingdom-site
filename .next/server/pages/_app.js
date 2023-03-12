(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__(600);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./config/index.js
const API_URL = process.env.API_URL || "https://demo-production-edcf.up.railway.app";
const NEXT_URL = process.env.NEXTJS_PUBLIC_FRONTEND_URL || `http://localhost:3000`;

;// CONCATENATED MODULE: external "nookies"
const external_nookies_namespaceObject = require("nookies");
;// CONCATENATED MODULE: ./context/AuthContext.js



const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)();

const AuthProvider = ({ children  })=>{
    const [user, setUser] = (0,external_react_.useState)(null);
    const [error, setError] = (0,external_react_.useState)(null);
    const [amount, setAmount] = (0,external_react_.useState)(null);
    const [date, setDate] = (0,external_react_.useState)(null);
    // useEffect(() => {
    //   checkUserLoggedId();
    // }, []);
    // const signup = async ({ username, email, password }) => {
    //   const res = await fetch(`${NEXT_URL}/api/signup`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username,
    //       email,
    //       password,
    //     }),
    //   });
    //   const data = await res.json();
    //   if (data.user) {
    //     setUser(data);
    //   } else {
    //     setError(data);
    //   }
    // };
    // const singin = async ({ email: identifier, password }) => {
    //   const res = await fetch(`${NEXT_URL}/api/signin`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       identifier,
    //       password,
    //     }),
    //   });
    //   const data = await res.json();
    //   if (data.user) {
    //     setUser(data);
    //   } else {
    //     setError(data);
    //   }
    // };
    // const sinout = async (user) => {
    //   setUser(null);
    //   setError(null);
    //   destroyCookie(null, "token");
    // };
    // const checkUserLoggedId = async () => {
    //   const res = await fetch(`${NEXT_URL}/api/user`);
    //   const data = await res.json();
    //   if (res.ok) {
    //     setUser(data);
    //   } else {
    //     setUser(null);
    //   }
    // };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            amount,
            setAmount,
            setDate,
            date
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./pages/_app.js




// 1. import `NextUIProvider` component

function MyApp({ Component , pageProps  }) {
    // if (pageProps.protected && !user) {
    //   return (
    //     <Layout>Loading...</Layout>
    //   )
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ThemeProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}


/***/ }),

/***/ 600:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4715:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4985));
module.exports = __webpack_exports__;

})();