import "./Content.css";
import iamgeBoxSat from "./images/Mask group.jpg";

import service from "./images/service.png";
import mapin from "./images/mapin.png";
import handshake from "./images/handshake.png";
import document from "./images/document.png";
import cardPoppular from "./images/cardPoppular.png"
function Content() {
  return (
    <>
      <div className="box_house">
        <div className="first_box">
          <div className="text_box">
            <h1>Find Your Dream Home</h1>
            <p>
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision
            </p>
            <button>Sign Up</button>
          </div>
          {/* <div className="image_box">
            <img src="" />
        </div> */}
        </div>
        <div className="two_box">
          <div className="input_box">
            <input
              type="text"
              className="input_location"
              placeholder="Location"
            />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Price Range" />
          </div>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="box_statistics">
        <div className="box_stat_img">
          <img src={iamgeBoxSat} />
        </div>
        <div className="box_stat_text">
          <h1>We Help You To Find Your Dream Home</h1>

          <p>
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>

          <div className="statistics">
            <div>
              <h1>8K+</h1>
              <p>Houses Available</p>
            </div>
            <div>
              <h1>6K+</h1>
              <p>Houses Sold</p>
            </div>
            <div>
              <h1>2K+</h1>
              <p>Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="bannerText">
          <h2>Why Choose Us</h2>
          <p>
            Elevating Your Home Buying Experience with Expertise, Integrity, and
            Unmatched Personalized Service
          </p>
        </div>
        <div className="cardBanner">
          <div className="ban">
              <div className="iconBanner">
                <img src={mapin} />
              </div>
             <div className="cardText">
                <h4>Expert Guidance</h4>
                <p>
                  Benefit from our team's seasoned expertise for a smooth buying
                   experience
                 </p>
              </div>
          </div>
          

<div className="ban">
          <div className="iconBanner">
            <img src={service} />
          </div>
          <div className="cardText">
            <h4>Personalized Service</h4>
            <p>
            Our services adapt to your unique needs, making your journey stress-free
            </p>
          </div>
          </div>
         
           <div className="ban">
           <div className="iconBanner">
            <img src={document} />
          </div>
          <div className="cardText">
            <h4>Transparent Process</h4>
            <p>
            Stay informed with our clear and honest approach to buying your home
            </p>
          </div>
          </div>

          <div className="ban">
          <div className="iconBanner">
            <img src={handshake} />
          </div>
          <div className="cardText">
            <h4>Exceptional Support</h4>
            <p>
            Providing peace of mind with our responsive and attentive customer service
            </p>
          </div>
        </div>
       
            
        
      </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="cardPoppular">
        <div className="cardHeading">
          <h2>Our Popular Residences</h2>
        </div>
        <div className="cards">
          <div className="cardPoppular">
            <div className="cardImg">
              <img src={cardPoppular}/>
            </div>
            <div className="cardTitle">
              <div className="title">
                <h2>San Francisco, California</h2>
                <div className="title1">
                  <h4>4 Rooms</h4>
                  <h4>3,500 sq ft</h4>
                </div>
              </div>
              <div className="price">
              <button>Sign Up</button>
              <h2>$2,500,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
