
import React from "react";
import "./sect6.css";

const Sect6 = () => {
    return (
        <section className="sect6_container">

            {/* Row 1: Heading */}
            <div className="sect6_row1">
                <h2>Choose your plan</h2>
            </div>

            {/* Row 2: Paragraph */}
            <div className="sect6_row2">
                <p>
                    Your paragraph text goes here.
                </p>
            </div>

            {/* Row 3: Three Images */}
            <div className="sect6_row3">

                <div className="sect6_image">
                    <img src="/image1.png" alt="Section visual 1" />
                </div>

                <div className="sect6_image">
                    <img src="/image2.png" alt="Section visual 2" />
                </div>

                <div className="sect6_image">
                    <img src="/image3.png" alt="Section visual 3" />
                </div>

            </div>

        </section>
    );
};

export default Sect6;

