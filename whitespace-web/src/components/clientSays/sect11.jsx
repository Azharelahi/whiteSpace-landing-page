import React from "react";
import "./sect11.css";

const Sect11 = () => {
    return (
        <section className="sect11_container">
            <div className="sect11_row1">
                <h2>Our Clients Says</h2>
            </div>

            <div className="sect11_row2">
                <div className="sect11_image">
                    <img src="/image1.png" alt="Section visual 1" />
                </div>

                <div className="sect11_image">
                    <img src="/image2.png" alt="Section visual 2" />
                </div>

                <div className="sect11_image">
                    <img src="/image3.png" alt="Section visual 3" />
                </div>
            </div>
        </section>
    );
};

export default Sect11;