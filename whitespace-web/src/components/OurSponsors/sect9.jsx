
import React from "react";
import "./sect9.css";

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
                    <img src="/sponsor1.png" alt="Sponsor 1" />
                </div>

                <div className="sect9_sponsor">
                    <img src="/sponsor2.png" alt="Sponsor 2" />
                </div>

                <div className="sect9_sponsor">
                    <img src="/sponsor3.png" alt="Sponsor 3" />
                </div>

                <div className="sect9_sponsor">
                    <img src="/sponsor4.png" alt="Sponsor 4" />
                </div>

            </div>

        </section>
    );
};

export default Sect9;
