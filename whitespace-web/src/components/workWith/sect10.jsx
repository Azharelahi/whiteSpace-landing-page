import React from "react";
import "./sect10.css";

const Sect10 = () => {
    return (
        <section className="sect10_container">
            <div className="sect10_left">
                <img src="/your-image.png" alt="Section visual" />
            </div>

            <div className="sect10_right">
                <div className="sect10_row1">
                    <h2>Work with your favorite aplications</h2>
                </div>

                <div className="sect10_row2">
                    <p>Your paragraph text goes here.</p>
                </div>

                <div className="sect10_row3">
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Sect10;