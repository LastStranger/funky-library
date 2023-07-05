import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Props } from "./FunkyBar.types";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0;
  }

  :root {
    --start-color: #008aff;
    --end-color: #00ffe7;
  }
`;

const animate = keyframes`
  0%,100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
`;
export const StyledBar = styled(motion.div)<Props>`
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
        width: ${props => props.width ?? "10px"};
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
`;
