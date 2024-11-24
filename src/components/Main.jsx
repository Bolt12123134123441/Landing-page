import v1 from '../assets/v1.mp4'
import di from '../assets/ok.jpg'
import d2 from '../assets/d2.jpg'
import ld from '../assets/ld.jpg'
import ei from '../assets/ei.jpg'
import ob from '../assets/ob.jpg'
import cb from '../assets/cb.jpg'
import kc from '../assets/kc.jpg'

import dw from '../assets/dw.jpeg'
import am from '../assets/am.jpg'

import './styles/components.css'
import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react';

const testimonials = [
    {
        id:1,
        text: "We don't have a goal to give something to people. We do not perceive music as some kind of mission that changes the world and people.We do it primarily because we just like it.",
        author: "Oleksandra Kopachevska",
        img: d2
    },
    {
        id:2,
        text: "Rock music is not meant to be perfect. It's all part of my journey - I've done a lot of stupid things, but you learn by your mistakes..",
        author: "Ozzy Osbourne",
        img: ob
    },
    {
        id:3,
        text: "I was 19 when I wrote 'Dreams,' and that would have been when it started to happen. The band got signed, and I was probably beginning to see different things besides my small town of Ballybricken.",
        author: "Dolores O'Riordan",
        img: cb
    },
    {
        id:4,
        text: "Failure is always the best way to learn, retracing your steps until you know. Have no fear. Your wounds will heal.",
        author: "Kings of Convenience",
        img: kc
    }
]

function Main() {



    return( 
        <div>
                <section id='home' className="section mainbanner">
                <video
                loop
                preload="auto"
                playsInline
                className="mainbanner_video"
                autoPlay
                muted
                src={v1}
                >

                </video>
                    <div className="mainbanner_content">
                        <div className="content_title">
                            <h1>Twój rytm -  Nasza wytwórnia</h1>
                            <p>Twoja muzyka znajdzie swój dom</p>
                        </div>
                        <div className="content_text">
                            <p>JJ - to najlepszy wybór dla muzyków wszystkich gatunków. rock, pop, neofolk lub coś zupełnie nowego — tutaj twoja muzyka pokaże swój pełny potencjał</p>
                        </div>
                    </div>
                </section>
                <SectionBackImg/>
                <TestimonialsSection/>

                <section id='contact' className='contact'>
                    <div className="img-star">
                        <img src={am} alt="" />
                    </div>
                    <div className="contact-text">
                            <h1>Skontaktuj się z nami</h1>

                            <div className="contact-mail">
                                <h2>We wszystkich sprawach</h2>
                                <span> <Mail/> <a href="mailto:sprawy@gmail.com">sprawy@gmail.com </a></span>
                            </div>
                            <div className="contact-mail">
                                <h2>W sprawie współpracy</h2>
                                <span> <Mail/> <a href="">współpracy@gmail.com </a></span>
                            </div>
                            <div className="contact-mail">
                                <h2>W sprawie propozycj</h2>
                                <span> <Mail/> <a href="">propozycj@gmail.com </a></span>
                            </div>
                    </div>
                </section>
        </div>
    )

}


function SectionBackImg(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [di, ld, ei, dw];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 1000);

        }, 4000)

        return () => clearInterval(interval);
    },[images.length]);

  

    return(
        <section id='about' className='about'>
           {images.map((image, index) => (
            <img key={index} className={index === currentIndex ? "currImg" : "nextImg"} src={image} alt=""  />
           ))}

           <div className="about-content">
            <div className="about-text">
            <h1>O wytwórni JJ</h1>
            <p>JJ to wytwórnia muzyczna, która pomaga artystom osiągnąć sukces na globalnej scenie. Wydajemy albumy, które trafiają do słuchaczy na całym świecie, wykorzystując najlepsze platformy cyfrowe do promocji. Nasze działania mają na celu to, by każdy artysta był zauważony i usłyszany</p>
            <ul>
                <li><strong>Docieramy do milionów słuchaczy</strong> na Spotify, Apple Music, YouTube i innych platformach.</li>
                <li><strong>Wspieramy rozwój artystów</strong> poprzez strategiczną promocję i marketing.</li>
                <li><strong>Rozwijamy globalną publiczność</strong>, współpracując z radiami, playlistami i mediami.</li>
                <li><strong>Inspirujemy muzyczne trendy</strong>, wpływając na kulturę i styl.</li>
            </ul>
            </div>
            <div className="about-stat">
                <div className="stat-item">
                    <div className="item-number">500 000+</div>
                    <div className="item-text">kopii sprzedanych </div>
                </div>
                <div className="stat-item">
                    <div className="item-number">3000+</div>
                    <div className="item-text">artystów z różnorodnych gatunków </div>
                </div>
                <div className="stat-item">
                    <div className="item-number">100 000 000+</div>
                    <div className="item-text">odsłuchów miesięcznie  </div>
                </div>
                
            </div>
            </div>     
        </section>
    )

}



function TestimonialsSection() {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);
    return (
      <section id='artists' className="testimonials-section">
        <div className="slider-container">
        
        <div className="image-container">
          <img
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].author}
            className="currSlide"
            key={currentIndex} 
          />
        </div>
        <div className="quote-container" key={`quote-${currentIndex}`}>
          <p className="quote">"{testimonials[currentIndex].text}"</p>
          <p className="author">- {testimonials[currentIndex].author}</p>
        </div>
     
        </div>
      </section>
    );
  }
  

export default Main;