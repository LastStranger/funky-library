import React, { useRef } from "react";
import { GlobalStyle, StyledBar } from "./FunkyBar.styled";
import { motion, useScroll, useSpring } from "framer-motion";

const FunkyBar = () => {
    const carouselRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     container: carouselRef,
    // });
    const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress);
    // console.log("%cscrollYProgress", "color: #22E1FF; font-size: 16px", scrollYProgress);

    // return <motion.div style={{ scaleX }} />
    return (
        <StyledBar as={motion.div}>
            <GlobalStyle />
            <motion.div className="scrollbar" style={{ scaleY: scrollYProgress }} />
            <div className="scrollPath" />
        </StyledBar>
    );
};

export default FunkyBar;
