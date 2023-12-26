import React, { useEffect, useState } from 'react';
import '../sass/home.scss';
import Header from '../components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoFront from "../png/ball.mp4"
import Counter from '../layouts/Counter';
import Card from './Card';
import Slider from './Slider';
import Footer from '../components/Footer';


const Home = () => {

  const [iframe, setIframe] = useState(false)

  function handleVideoToggle() {
    setIframe(!iframe)
  }
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
    AOS.init();
  }, []);


  return (
    <div className='home'>

      <div className="one">
        <Header />

        <img className='up' width={1230} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/logo-white.svg" alt="" />

        <div className="star-cat">
          <div className='star'>
            <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
            <h1 data-aos="fade-left" >FULL-SERVICE  <br /> CONTENT CREATION <br /> AGENCY</h1>
          </div>
          <img className='cat' width={460} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/herodoggo.png" alt="" />
        </div>

        <div className="circle">
          <div class="logo"></div>
          <div class="text">
            <p>
              Some text - Animated circle text -

            </p>


          </div>
          <i className="fa-solid fa-play" onClick={() => handleVideoToggle()}>

            {iframe ? (
              <div className="video">
                <iframe
                  width="1130"
                  height="760"
                  src="https://www.youtube.com/embed/SfMT4Agg8Xw"
                  title=""
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <button onClick={() => {
                  handleVideoToggle()
                }}>X    aaaaaaaaaaaaaa</button>
              </div>
            ) : null}
          </i>
        </div>

        <div className='icons'>
          <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.youtube.com/"><i className='fa-brands fa-youtube'></i></a>
          <a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>
        </div>
      </div>

      <div className="two">
        <div className="car">
          <div data-aos="fade-up" className='girl'>
            <img width={600} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/stories.png"
              alt="err" />
          </div>
          <div data-aos="fade-right" className='left'>
            <img width={300} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/youtube.png" alt="" />
          </div>

          <div data-aos="fade-left" className='right'>
            <img width={300} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/post.png" alt="" />
          </div>
        </div>


        <div className="the" data-aos="fade-up">
          <img data-aos="fade-left" width={75} className='star-img' src="	https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
          <h1 data-aos="fade-left">THE PREMIER</h1>
          <h2 data-aos="fade-left">INFLUENCER MARKETING CONTENT</h2>
          <p data-aos="fade-left">Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante <br /> tortor, vulputate sit amet arcu</p>
          <div className='button' data-aos="fade-left">
            <button className='brand' ><a href="">I'm a brand </a><i class="fa-solid fa-arrow-right"></i></button>
            <button className='creator'><a href="">I'm a creator </a><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="three">
        <h1 data-aos="fade-up">TODAY, THINGS NEED TO BE VERSATILE, AND CONTENT NEEDS TO <br /> ADAPT TO NEW AUDIENCES
          <img data-aos="flip-left" width={46} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/fire.png" alt="" />
          <img data-aos="flip-left" width={46} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/fire.png" alt="" />
          <img data-aos="flip-left" width={46} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/fire.png" alt="" />
          , PLATFORMS, CHALLENGES, AND <br /> BUSINESS NEEDS</h1>

      </div>

      <div className="four">


        <div className='countup'>
          <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
          <div className='join' data-aos="fade-left">
            <h1>JOIN</h1>
            <Counter />
          </div>
          <h1 data-aos="fade-left">CREATORS</h1>
          <h1 data-aos="fade-left">AND</h1>
          <h1 data-aos="fade-left">BRANDS</h1>

          <div className='button' data-aos="fade-left">
            <button className='brand' ><a href="">I'm a brand </a><i class="fa-solid fa-arrow-right"></i></button>
            <button className='creator'><a href="">I'm a creator </a><i class="fa-solid fa-arrow-right"></i></button>
          </div>

        </div>

        <video width={900} src={VideoFront} controls autoPlay></video>
      </div>

      <div className="five">
        <div id="mainmodal">
          <div class="modalconent">

            <marquee class="marquee" behavior="scroll" direction="left" >
              <div className="texts">
                <div>CREATE A NEW BRAND <i class="fa-solid fa-star"></i> </div>
                <div>  NEW IDEAS <i class="fa-solid fa-star"></i> </div>
                <div> JOIN US <i class="fa-solid fa-star"></i> </div>
                <div> UP CREATORS <i class="fa-solid fa-star"></i> </div>
                <div> BECOME TRENDY <i class="fa-solid fa-star"></i></div>
                <div> A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div> CREATE A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div> NEW IDEAS <i class="fa-solid fa-star"></i></div>
                <div> JOIN US <i class="fa-solid fa-star"></i> </div>
                <div> UP CREATORS <i class="fa-solid fa-star"></i></div>
                <div> BECOME TRENDY <i class="fa-solid fa-star"></i></div>
                <div> A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div>CREATE A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div>  NEW IDEAS <i class="fa-solid fa-star"></i></div>
                <div> JOIN US <i class="fa-solid fa-star"></i></div>
                <div> UP CREATORS <i class="fa-solid fa-star"></i></div>
                <div> BECOME TRENDY <i class="fa-solid fa-star"></i></div>
                <div> A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div> CREATE A NEW BRAND <i class="fa-solid fa-star"></i></div>
                <div> NEW IDEAS <i class="fa-solid fa-star"></i></div>
                <div> JOIN US <i class="fa-solid fa-star"></i> </div>
                <div> UP CREATORS <i class="fa-solid fa-star"></i></div>
                <div> BECOME TRENDY <i class="fa-solid fa-star"></i></div>
                <div> A NEW BRAND <i class="fa-solid fa-star"></i></div>
              </div>


            </marquee>

          </div>
        </div>
      </div>

      <div className="six">
        <div className="car">
          <div data-aos="fade-up" className='girl'>
            <img width={400} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/preview.png"
              alt="err" />
          </div>
          <div data-aos="fade-right" className='left'>
            <img width={300} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/dashboard.png" alt="" />
          </div>

          <div data-aos="fade-left" className='right'>
            <img width={300} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/post.png" alt="" />
          </div>
        </div>


        <div className="the" data-aos="fade-up">
          <img data-aos="fade-left" width={75} className='star-img' src="	https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
          <h1 data-aos="fade-left">MEDIA PLAN</h1>
          <h2 data-aos="fade-left">FOR YOUR MARKETING CAMPAIGNT</h2>
          <p data-aos="fade-left">Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante <br /> tortor, vulputate sit amet arcu</p>

          <button data-aos="fade-left" className='brand' ><a href="">Get Free Budget Calculation </a><i class="fa-solid fa-arrow-right"></i></button>

        </div>
      </div>

      <Card />

      <div className="seven">
        <div className='brand'>
          <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape-1.svg" alt="err" />
          <h1 data-aos="fade-left" >BRAND</h1>
          <h2 data-aos='fade-left'>COLLABORATIONS</h2>
        </div>

      </div>

      <Slider/>

      <Footer/>




    </div>
  );
};

export default Home;
