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

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <div className="w-full h-auto flex flex-col items-center justify-center ">
            <section className="w-full my-6">
              <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                  Menu Populer
                </p>

                <div className="hidden md:flex gap-3 items-center">
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-600 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                    onClick={() => setScrollValue(-200)}
                  >
                    <MdChevronLeft className="text-lg text-white w-5 h-5" />
                  </motion.div>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                    onClick={() => setScrollValue(200)}
                  >
                    <MdChevronRight className="text-lg text-white w-5 h-5" />
                  </motion.div>
                </div>
              </div>
              <RowContainer
                scrollValue={scrollValue}
                flag={true}
                data={foodItems/*?.filter((n) => n.category === "chicken")*/}
              />
            </section>

            <MenuContainer />

            {cartShow && <CartContainer />}
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default MainContainer;
