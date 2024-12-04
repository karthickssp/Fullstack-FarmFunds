import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import video from "../assets/videos/mainback.mp4";
import img1 from "../assets/videos/access.mp4";
import img2 from "../assets/videos/financial.mp4";
import img3 from "../assets/videos/risk.mp4";
import { Slider } from "../components/others/Slider";
function Home() {
  return (
    <>
      <Slider />
      <div className="description-title">
        Grow your farming dreams with<br/> our agriculture loan schemes
      </div>
      <br/>
      <div className="home-container">
        <div className="description-content">
          <div className="description-para">
            The Agriculture sector plays a major role not only in the economy of
            our country but also in providing livelihoods to millions of rural
            folk. We support the farmer by way of Short term credit for
            financing crop production, by helping with purchase of seeds,
            fertilizers, pesticides etc. All types of crops are supported, from
            staples like rice to cash crops like sugarcane and cotton including
            multiple cropping. little ones and expecting parents.
          </div>
          <ul className="list-style-one">
            <li>Low Interest Rate</li>
            <li>No Hidden Charges</li>
            <li>Minimal Documentation</li>
            <li>Apply Online</li>
          </ul>
          <Link to="/schema" className="explore-link">
            <button className="explore-btn">Apply for the Loan</button>
          </Link>
        </div>
        <div className="video-content">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container clearfix">
        <div className="nobottomborder bottommargin-sm text-center">
          <div className="guide-subtitle">Suitable for worldwide Farmers</div>
        </div>

        <div className="row clearfix">
          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video
                autoPlay
                loop
                muted
                src={img1}
                alt="Access to Capital"
                className="feature-icon"
              />
              <h3 className="feature-title">Access to Capital</h3>
              <p className="feature-description">
                FarmFunds helps farmers access loans for seeds, fertilizers,
                equipment.
              </p>
            </div>
          </div>
          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video
                autoPlay
                loop
                muted
                src={img2}
                alt="Financial Inclusion"
                className="feature-icon"
              />
              <h3 className="feature-title">Financial Inclusion</h3>
              <p className="feature-description">
                FarmFunds tailors financial solutions for farmers, meeting their
                unique needs in crop cycles.
              </p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video
                autoPlay
                loop
                muted
                src={img3}
                alt="Risk Mitigation"
                className="feature-icon"
              />
              <h3 className="feature-title">Risk Mitigation</h3>
              <p className="feature-description">
                FarmFunds offers insurance for farmers, protecting against crop
                failures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
