"use client";

import Image from 'next/image';
import './hero.css'
import CountUp from 'react-countup'
import Link from 'next/link';

export default function Hero() {
  return (
    <div id='hero' className="container-fluid bg-dark text-light mt-5 p-5" >
      <div className="row">

        {/* Left Section - Profile Card */}
        <div className="col-md-4 mb-4">
          <div className="card text-center bg-dark text-light p-4" style={{ borderRadius: '16px', border: '3px solid #28c3b3' }}>
            <Image
              src='/assets/profile.webp'
              alt="profile"
              className="rounded-circle mx-auto d-block"
              width={'120'}
              height={'120'}
            />
            <div className="card-body">
              <h3 className="mb-3">ANAGH K R</h3>
              <p> Affordable Web Design | Flutter Developer in Kasaragod | App Development Services in Kerala </p>
              <p><i className="fas fa-envelope"></i> anaghkrkkl@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Kasaragod, Kerala</p>
              {/* <p><i className="fas fa-briefcase"></i> Full-time / Freelancer</p> */}
              <p><i className="fas fa-briefcase"></i> Freelancer</p>
              <p><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/918075541805" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>8075541805</a></p>
              <div className="badge-container mb-4">
                <span className="badge mx-1"><i className="fa-brands fa-node"></i> MERN STACK</span>
                <span className="badge mx-1"><i className="fa-brands fa-flutter"></i> FLUTTER</span>
              </div>
              <Link href='/resume' className="btn btn-bg" >
                Download CV <i className="fas fa-download"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-8">
          <div className="text-center text-md-start mb-5 mt-5">
            <h1>
              Hey, <br /> I'm <span className="text">ANAGH</span>,<br />
            </h1>
            <p>
            Looking for expert web and app development services in Kerala?<br/> I’m Anagh, a professional Flutter developer and freelance web designer based in Kasaragod. I specialize in creating custom websites, mobile apps, and responsive designs tailored for businesses of all sizes. From startups to established companies,<br/> I provide affordable and high-quality solutions that drive results.
            </p>
            <a href="mailto:anaghkrkkl@gmail.com" className="btn btn-bg">
              Let's Talk <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Stats Section */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-center bg-dark text-light p-4">
                <h2 className="display-4 text pg">
                  <CountUp
                    start={0}
                    end={12}
                    duration={6}
                  />
                  +</h2>
                <p className="lead">Programming Languages</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-center bg-dark text-light p-4">
                <h2 className="display-4 text dt">
                  <CountUp
                    start={0}
                    end={6}
                    duration={3}
                  />
                  +</h2>
                <p className="lead">Development Tools</p>
              </div>
            </div>
            {/* <div className="col-md-4 mb-4">
                <div className="card text-center bg-dark text-light p-4">
                  <h2 className="display-4 text">8</h2>
                  <p className="lead">Years of Experience</p>
                </div>
              </div> */}
            <div className="col-md-4 mb-4">
              <div className="card text-center bg-dark text-light p-4">
                <h2 className="display-4 text pj">
                  <CountUp
                    start={0}
                    end={25}
                    duration={6}
                  />+
                </h2>
                <p className="lead">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
