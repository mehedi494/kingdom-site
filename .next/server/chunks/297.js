exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 7563:
/***/ ((module) => {

// Exports
module.exports = {
	"commonBg": "styles_commonBg__gkG91",
	"workBg": "styles_workBg__wue6G",
	"basicInfoBg": "styles_basicInfoBg__qM3V6",
	"moreInfoBg": "styles_moreInfoBg__VlxJp",
	"flagLangfoBg": "styles_flagLangfoBg__2ZTbd",
	"vulunteerBg": "styles_vulunteerBg__Q_0N_",
	"aboutBg": "styles_aboutBg__FIb8T",
	"smallGroupBg": "styles_smallGroupBg___EkZP",
	"findBg": "styles_findBg__wTFj8",
	"GetBg": "styles_GetBg__n8x1d",
	"child_nav": "styles_child_nav__UxV6N",
	"select": "styles_select__avUQi"
};


/***/ }),

/***/ 6297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.bd2ea8a2.png","height":150,"width":127,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AaGFTRD8/wT1HAXWLgoPE0kPEwy38Aon0gD79wkBt4YZTgD/By/0+xYXAwkKChMO+vUpNBnp/wQI0gG3iR2T9/gR9fn6AvIICQPxDQz+Dx4uIw4QEwgMAbGGKIr1+RD5CAHsuXywFV2PXOajECAyTxsjEQEBn3s3Xw8H9xGqyhEg6v0RbxUB3ZB/byzl9wcT7QGVdT83Dgf6Pdrf6Aimyg/Va0v4KTU7Mvz8ChjCAaF0LicMBvd4CAsO3QMICtsVE/sgECAgJ/8PGokBn3dEABAD3D0KCPdqBQkLGhQXBuMSISmX0auvxTpYVnnhL90cAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Footer.jsx





function Foot() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-[#F9F8FA] ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto max-w-[75rem] 2xl:max-w-[85rem]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " grid grid-cols-1 md:grid-cols-4 py-[5rem] gap-x-[3.5rem] border-softGray px-4 space-y-10 border-spacing-2 border-b-[1px] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " self-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                width: 60,
                                height: 60,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " flex md:flex-col flex-wrap ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base font-bold",
                                    children: "Kingdom of Kush LLC"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base",
                                    children: "One World Trade Center"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base",
                                    children: "Floor 85"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base",
                                    children: "New York, NY 10007"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base",
                                    children: "USA"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " flex md:flex-col flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base",
                                    children: "Interested in working with us?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: " text-base text-primary hover:underline font-bold",
                                    children: "info@kingdomofkush.org?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                className: " bg-black rounded-md shadow-none capitalize text-base hover:shadow-none w-[100%] font-normal text-primary ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/donation",
                                    children: "Donation"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__bottom text-left py-6 px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: " ",
                        children: [
                            "\xa9 2023 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: " text-primary",
                                children: "Kingdom of Kush."
                            }),
                            " All rights reserved"
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/styles.module.css
var styles_module = __webpack_require__(7563);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react-icons/rx"
var rx_ = __webpack_require__(5452);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(7865);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
;// CONCATENATED MODULE: ./components/Nav.jsx





//import next hoc


// import react icons

// imports image

// imports MT


function Nav() {
    const [openNav, setOpenNav] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) { var width; }
    }, []);
    const navList = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "flex items-center",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/aboutus",
                    className: "flex items-center",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuHandler, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                                ripple: false,
                                className: " capitalize px-0 font-normal hover:shadow-none shadow-none text-[1rem] text-white bg-transparent flex items-center ",
                                children: [
                                    "Get Involved",
                                    /*#__PURE__*/ jsx_runtime_.jsx(io_.IoIosArrowDown, {
                                        className: "text-[1rem] text-white "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/membership_applicationt",
                                    className: "[&>button]:outline-0 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                        className: " text-[.9rem] text-primary hover:text-primary active:text-primary overflow-hidden",
                                        children: "Membership"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/volunteer",
                                    className: "[&>button]:outline-0 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                        className: " outline-none text-[.9rem] text-primary hover:text-primary active:text-primary",
                                        children: "Volunteer"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/vendor",
                                    className: "[&>button]:outline-0 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                        className: " text-[.9rem] text-primary hover:text-primary active:text-primary",
                                        children: "Vendor"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/petition`,
                    className: "flex items-center",
                    children: "Petition"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/project`,
                    className: "flex items-center",
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/invest`,
                    className: "flex items-center",
                    children: "Invest"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/donation`,
                    className: "flex items-center",
                    children: "Donation"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Typography, {
                as: "li",
                variant: "h4",
                color: "white",
                className: "p-1 font-normal",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/contact`,
                    className: "flex items-center",
                    children: "Contact"
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " w-[100%] bg-[#00000050] absolute top-0 left-0 z-[999] ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container shadow-none max-w-[96%] h-[5rem] mx-auto flex items-center justify-between ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " logo__box flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: " rounded-full p-2 ",
                                        onClick: ()=>{
                                            setOpenNav(true);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgMenuLeftAlt, {
                                            className: " text-white border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        width: 50,
                                        height: 50,
                                        alt: "logo"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:block ",
                            children: navList
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Select, {
                                color: "green",
                                label: "Language",
                                className: `${(styles_module_default()).select}  text-white`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Option, {
                                        children: "English"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Option, {
                                        children: "Spanish"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Option, {
                                        children: "Urdho"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mobile__menu  w-[100%]  overflow-hidden h-[100%]  top-0 left-0  bg-black  fixed ${openNav ? "block" : "hidden"}  transition-all    duration-500 z-[9999]`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "menu_wrapper p-10 text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(rx_.RxCross2, {
                            className: " text-[1.5rem] cursor-pointer",
                            onClick: ()=>setOpenNav(false)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: " capitalize flex flex-col space-y-4 mt-6 ml-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] text-[#CB9833] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: " Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/aboutus",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: `font-bold lg:text-[2.5rem] text-[1.5rem]  hover:translate-x-4  hover:opacity-70 transition-all ${(styles_module_default()).child_nav} duration-300 relative text-[#CB9833] flex  items-center  `,
                                    children: [
                                        "Get ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Involved",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlinePlus, {
                                            className: " ml-[1rem] text-white text-[1.5rem]"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: " ml-[10rem] translate-y-[6rem] opacity-0 transition-all delay-[80ms] text-[1rem] lg:text-[2.5rem] absolute top-0 lg:left-[8%] left-[10%] text-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/membership_applicationt",
                                                        children: "Membership"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/volunteer",
                                                        children: "Volunteer"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/vendor",
                                                        children: "Vendor"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/petition",
                                        children: "Petition"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/project",
                                        children: "Projects"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/invest",
                                        children: "Invest"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/donation",
                                        children: "Donation"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4 hover:opacity-70 transition-all duration-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
// bg-[#00000060]
{}
;// CONCATENATED MODULE: ./components/Layout.js




function layout({ title , des , content , children , mainContent  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: content,
                        content: des
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Foot, {})
        ]
    });
}
layout.defaultProps = {
    title: "default",
    des: "default page",
    content: "this is about page"
};


/***/ })

};
;