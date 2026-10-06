import React from "react";
import "./sect3.css";
import  WTI from "./../../assets/WTI.png"
const Sect3 = () => {
    return (
        <section className="sect3_container">

            {/* LEFT: Image */}
            <div className="sect3_left">
                <img
                    src={WTI}
                    alt="Section visual"
                />
            </div>

            {/* RIGHT: Content */}
            <div className="sect3_right">

                {/* Row 1: Heading */}
                <div className="sect3_row1">
                    <h2>Heading</h2>
                </div>

                {/* Row 2: Paragraph */}
                <div className="sect3_row2">
                    <p>
                       With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with other
                    </p>
                </div>

                {/* Row 3: Button */}
                <div className="sect3_row3">
                    <button className="blue_button">Get Started</button>
                </div>

            </div>

        </section>
    );
};

export default Sect3;