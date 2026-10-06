
import React from "react";
import "./sect8.css";

const Sect8 = () => {
    return (
        <section className="sect8_container">

            {/* LEFT SIDE */}
            <div className="sect8_left">

                {/* Row 1: Heading */}
                <div className="sect8_row1">
                    <h2>Your data</h2>
                </div>

                {/* Row 2: Paragraph */}
                <div className="sect8_row2">
                    <p>
                        Your paragraph text goes here.
                    </p>
                </div>

                {/* Row 3: Button */}
                <div className="sect8_row3">
                    <button>Get Started</button>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="sect8_right">
                <img
                    src="/your-image.png"
                    alt="Section visual"
                />
            </div>

        </section>
    );
};

export default Sect8;

