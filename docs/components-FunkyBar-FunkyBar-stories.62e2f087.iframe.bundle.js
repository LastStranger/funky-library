"use strict";(self.webpackChunkfunky_library=self.webpackChunkfunky_library||[]).push([[172],{"./src/components/FunkyBar/FunkyBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FunkyBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const GlobalStyle=styled_components_browser_esm.vJ`
  ::-webkit-scrollbar {
    width: 0;
  }

  :root {
    --start-color: #008aff;
    --end-color: #00ffe7;
  }
`,animate=styled_components_browser_esm.F4`
  0%,100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
`,StyledBar=(0,styled_components_browser_esm.ZP)(motion.E.div)`
    .scrollPath {
        position: fixed;
        top: 0;
        right: 0;
        width: 10px;
        height: 100%;
        //background: rgba(255, 255, 255, 0.05);
    }
    .scrollbar {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        transform-origin: top;
        width: ${props=>props.width??"10px"};
        border-radius: 10px;
        /*height: 100%;*/
        background: linear-gradient(to Top, var(--start-color), var(--end-color));
        animation: ${animate} 5s linear infinite;
    }

    .scrollbar:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to Top, var(--start-color), var(--end-color));
        filter: blur(10px);
    }
    .scrollbar:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to Top, var(--start-color), var(--end-color));
        filter: blur(30px);
    }
`;var use_scroll=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-scroll.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FunkyBar=()=>{(0,react.useRef)(null);const{scrollYProgress}=(0,use_scroll.v)();return(0,jsx_runtime.jsxs)(StyledBar,{as:motion.E.div,children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(motion.E.div,{className:"scrollbar",style:{scaleY:scrollYProgress}}),(0,jsx_runtime.jsx)("div",{className:"scrollPath"})]})};FunkyBar.displayName="FunkyBar";const FunkyBar_FunkyBar=FunkyBar,FunkyBar_stories={component:FunkyBar_FunkyBar,title:"Marbella/FunkyBar",argTypes:{}},Primary={render:args=>(0,jsx_runtime.jsxs)("div",{style:{height:"120vh",position:"relative",background:"#000"},children:["scrolling down!!!",(0,jsx_runtime.jsx)(FunkyBar_FunkyBar,{"data-testId":"InputField-id"})]})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  // args: {\n  //     primary: true,\n  //     disabled: false,\n  //     text: "Primary1",\n  // },\n  render: args => <div style={{\n    height: "120vh",\n    position: "relative",\n    background: "#000"\n  }}>\n            scrolling down!!!\n            <FunkyBar data-testId="InputField-id" />\n        </div>\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=components-FunkyBar-FunkyBar-stories.62e2f087.iframe.bundle.js.map