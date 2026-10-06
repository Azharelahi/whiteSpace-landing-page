
import React from "react";
import "./sect9.css";
import Apple from "./../../assets/Apple.png";
import microsoft from "./../../assets/microsoft.png";
import google from "./../../assets/Group246.png";
import slack from "./../../assets/Slack.png";
const Sect9 = () => {
    return (
        <section className="sect9_container">

            {/* Row 1 */}
            <div className="sect9_row1">
                <h2>Our Sponsors</h2>
            </div>

            {/* Row 2 */}
            <div className="sect9_row2">

                <div className="sect9_sponsor">
                    <img src={Apple} alt="Sponsor 1" />
                </div>

                <div className="sect9_sponsor">
                    <img src={microsoft} alt="Sponsor 2" />
                </div>

                <div className="sect9_sponsor">
                    <img src={google} alt="Sponsor 3" />
                </div>

                <div className="sect9_sponsor">
                    <img src={slack} alt="Sponsor 4" />
                </div>

            </div>

        </section>
    );
};

export default Sect9;
