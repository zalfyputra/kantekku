import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

const ConfirmOrder = () => {
    return (
        <div className="w-screen h-screen flex flex-col bg-primary">
        <Header />
            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <div className="w-full h-auto flex flex-col items-center justify-center mt-20">
                <p className="text-[2.5rem] lg:text-[4.5rem] text-center font-bold tracking-wide text-headingColor">
                Thank You<br/>
                <span className="text-amber-500 text-[2rem] lg:text-[2rem]">
                Order Successful
                </span>
                </p>
            </div>
            </main>
        </div>
    );
};

export default ConfirmOrder;
