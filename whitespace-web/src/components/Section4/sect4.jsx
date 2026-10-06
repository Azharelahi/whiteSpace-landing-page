
import React from "react";
import "./sect4.css";
import colorcont from  "./../../assets/colorcont.png"
const Sect4 = () => {
    return (
        <section className="sect4_container">

            {/* Left half: Image */}
            <div className="sect4_image">
                <img src={colorcont} alt="Section visual" />
            </div>

            {/* Right half: Three rows */}
            <div className="sect4_content">

                <div className="sect4_row1">
                    <h2>Use as Extension</h2>
                </div>

                <div className="sect4_row2">
                    <p>
                        Your paragraph text goes here.
                    </p>
                </div>

                <div className="sect4_row3">
                    <button>Get Started</button>
                </div>

            </div>

        </section>
    );
};

export default Sect4;
