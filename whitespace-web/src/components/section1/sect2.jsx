import "./sect2.css";
import React from "react";
import Element from "./../../assets/Element.png";
const Sect2 = () => {
    return (
        <div className="sect2_body">

            {/* LEFT SIDE */}
            <div className="sect2_left">

                <div className="sect2_row1">
                    <h2>Project <br/> Managment</h2>
                    {/* <img src={Element} alt="Element" /> */}
                </div>

                <div className="sect2_row2">
                    <p>
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                </div>

                <div className="sect2_row3">
                    <button className="blue_button">Get Started Icon</button>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="sect2_right">
        
                {/* <img src="/your-image.png" alt="Section visual" /> */}
            </div>

        </div>
    );
};

export default Sect2;