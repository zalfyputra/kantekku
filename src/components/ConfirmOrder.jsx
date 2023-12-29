import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import FoodHeart from "../img/food-heart.png";

const ConfirmOrder = () => {
    return (
        <div className="w-screen h-screen flex flex-col bg-white">
        <Header />
            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
                <div className="w-full h-auto flex flex-col items-center justify-center ">
                    <section className="w-full my-6">
                        <div className="flex flex-col items-center justify-center">
                            <img src={FoodHeart} className="h-340" />
                            <p className="text-3xl lg:text-5xl text-center font-bold tracking-wide text-headingColor">
                            Thank You For Your Purchase<br/>
                            <span className="text-amber-500 text-xl lg:text-2xl font-bold">
                            Your Order is Successful!
                            </span>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ConfirmOrder;
