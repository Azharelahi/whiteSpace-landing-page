
import React from "react";
import "./sect5.css";
import colorcont from  "./../../assets/colorcont.png"

const Sect5 = () => {
    return (
        <section className="sect5_container">

            {/* Left half: Image */}
            <div className="sect5_image">
                <img src={colorcont} alt="Section visual" />
            </div>

            {/* Right half: Three rows */}
            <div className="sect5_content">

                <div className="sect5_row1">
                    <h2>Cutomize it to your needs</h2>
                </div>

                <div className="sect5_row2">
                    <p>
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                </div>

                <div className="sect5_row3">
                    <button className="blue_button">Get Started</button>
                </div>

            </div>

        </section>
    );
};

export default Sect5;

