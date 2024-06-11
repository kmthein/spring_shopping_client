import React from "react";
import { useStore } from "../store/store";

const About = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);

  const bears = useStore((state) => state.bears);
  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
    </>
    // <div className="container">
    //   <main>
    //     <section className="about">
    //       <div className="feature l-wrap-inner">
    //         <div className="feature__inner">
    //           <div className="l-aboutus">
    //             <h3>About Us</h3>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //               Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //               laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    //               irure dolor in reprehenderit in voluptate velit esse cillum
    //               dolore eu fugiat nulla pariatur.
    //             </p>
    //             <div className="number">
    //               <div className="number__box">
    //                 <h4>268</h4>
    //                 <p>Completed Trips</p>
    //               </div>
    //               <div className="number__box">
    //                 <h4>176</h4>
    //                 <p>Tour Guides</p>
    //               </div>
    //               <div className="number__box">
    //                 <h4>153</h4>
    //                 <p>Destinations</p>
    //               </div>
    //             </div>
    //             <div className="c-btn c-btn__read">
    //               <a href="/" target="_self">
    //                 Read more
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
};

export default About;
