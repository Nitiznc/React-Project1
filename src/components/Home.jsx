import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id = "home">
        <main>
          <h1>TechyStart</h1>
          <p>Solution to all problems</p>
        </main>
      </div>
      <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only Solution to the tech problems you face everyday. We are leading tech companies who help to increse problems solving ability in children.
          </p>
        </div>
      </div>
      <div className='home3' id = "about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper diam et felis aliquam efficitur. Integer ultricies suscipit risus, ut malesuada dolor commodo sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi convallis non ante ut auctor. Quisque pretium, erat ac porta molestie, nisi metus suscipit dui, ac facilisis nisi lorem vel leo. Maecenas vitae fringilla turpis. Pellentesque fringilla quam nec tellus aliquet sollicitudin. Etiam odio quam, auctor ut arcu eu, volutpat convallis est. Proin tincidunt ultricies mauris. Maecenas scelerisque justo nec massa pulvinar tempor. Praesent vehicula mauris orci, ut venenatis arcu sagittis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam at eleifend magna. Nunc sagittis erat sed dignissim euismod. Curabitur elementum maximus dapibus
          </p>
        </div>
      </div>

      <div className='home4' id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube/>
              <p>YouTube</p>
            </div>
            <div style={{animationDelay: "0.9s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
