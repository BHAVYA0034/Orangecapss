import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as THREE from 'three';
import Img from "../../asserts/Logo.jpg"
import backgroundImg from '../../asserts/background1.svg'
import handToRight from '../../asserts/handToRight2.svg'
import cleaning from '../../asserts/cleaningBG.svg'
import softwareDevelopment from '../../asserts/softwareDevelopmentBG.svg'
import designing from '../../asserts/designingBG.svg'
import marketing from '../../asserts/marketingBG.svg'
import banner from '../../asserts/bannerBG.svg'
import photography from '../../asserts/photographyBG.svg'
import consultancy from '../../asserts/consultancyBG.svg'
import yoga from '../../asserts/yoga.svg'
import graphicDesigning from '../../asserts/graphicDesigning.svg'
import create from '../../asserts/create.svg'
import drama from '../../asserts/drama.svg'
import cooking from '../../asserts/cooking.svg'
import calligraphy from '../../asserts/calligraphy.svg'
import art from '../../asserts/art.svg'
import features from '../../asserts/featuresImg.svg'
import contact from '../../asserts/contactUs.svg'
import "./home.css"
import PNG from "../../asserts/OC-img.png"
import {NavLink} from "react-router-dom"
import CallMadeIcon from '@mui/icons-material/CallMade';
import { autocompleteClasses } from '@mui/material';
// import BgVideo from "../..asserts/bgVideo.mp4"
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function home() {

  return (
    <div>

      <div id="title-header" class="card text-white">
        <img id="background" src={backgroundImg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 id="title" class="card-title text-center">ORANGE</h1>
          <p id="caps" class="card-text text-center">
            <ul id="caps-ul" class="list-group list-group-horizontal">
              <li id="caps-li" class="list-group-item"><span>C</span>apability</li>
              <li id="caps-li" class="list-group-item"><span>A</span>bility</li>
              <li id="caps-li" class="list-group-item"><span>P</span>assive income</li>
              <li id="caps-li" class="list-group-item"><span>S</span>kills</li>
            </ul>
          </p>
        </div>
      </div>

      <div id="aboutUs" class="card" style={{ width: autocompleteClasses }}>
        <div id="aboutUsBody" class="card-body">
          <ul id="section-header" class="list-group list-group-horizontal">
            <li class="list-group-item">
              <img id="rightHand" src={handToRight} />
            </li>
            <li id="section-header-title" class="list-group-item">ABOUT US</li>
          </ul>
          <h4 id="tagLine" class="card-title"><span>“</span>Let’s communicate with your skills <span>”</span></h4>
          <p id="aboutUsText" class="card-text">
            We are biggest Marketing and education agency. 
            We provide you a platform where you can create your own  
            courses, webinars, workshops, services, events, live projects and publish on our platform. 
            Upgrade your knowledge, skills and income with <b>OrangeCaps</b>. 
            We are planning to collaborate with 100+ companies in future 
            so that orange caps members can get maximum benifits.
          </p>
        </div>
      </div>

      <div id="services" class="card">
        <div id="servicesBody" class="card-body">
          <ul id="section-header" class="list-group list-group-horizontal">
            <li class="list-group-item">
              <img id="rightHand" src={handToRight} />
            </li>
            <li id="section-header-title" class="list-group-item">SERVICES</li>
          </ul>
          <div id="servicesCard" class="row row-cols-1 row-cols-md-3 g-4">
            <div id="servicesCard1" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="cleaningCard" class="card h-100">
                  <img id="cleaning" src={cleaning} class="card-img-top" alt="..." />
                  <div id="cleaningText" class="card-body">
                    <h5 class="card-title">Cleaning</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div id="servicesCard2" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="softwareDevelopmentCard" class="card h-100">
                  <img id="softwareDevelopment" src={softwareDevelopment} class="card-img-top" alt="..." />
                  <div id="softwareDevelopmentText" class="card-body">
                    <h5 class="card-title">Software Development</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div id="servicesCard3" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="designingCard" class="card h-100">
                  <img id="designing" src={designing} class="card-img-top" alt="..." />
                  <div id="designingText" class="card-body">
                    <h5 class="card-title">Designing</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div id="servicesCard4" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="marketingCard" class="card h-100">
                  <img id="marketing" src={marketing} class="card-img-top" alt="..." />
                  <div id="marketingText" class="card-body">
                    <h5 class="card-title">Marketing</h5>
                  </div>
                </div>
              </NavLink>            
            </div>
            <div id="servicesCard5" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="bannerCard" class="card h-100">
                  <img id="banner" src={banner} class="card-img-top" alt="..." />
                  <div id="bannerText" class="card-body">
                    <h5 class="card-title">Banner</h5>
                  </div>
                </div>
              </NavLink>            
            </div>
            <div id="servicesCard6" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="photographyCard" class="card h-100">
                  <img id="photography" src={photography} class="card-img-top" alt="..." />
                  <div id="photographyText" class="card-body">
                    <h5 class="card-title">Photography</h5>
                  </div>
                </div>
              </NavLink>            
            </div>
            <div id="servicesCard7" class="col">
              <NavLink id="servicesLink" to="/services" target="_top">
                <div id="consultancyCard" class="card h-100">
                  <img id="consultancy" src={consultancy} class="card-img-top" alt="..." />
                  <div id="consultancyText" class="card-body">
                    <h5 class="card-title">Consultancy</h5>
                  </div>
                </div>
              </NavLink>            
            </div>
          </div>
        </div>
      </div>

      <div id="courses" class="card">
        <div id="coursesBody" class="card-body">
          <ul id="section-header" class="list-group list-group-horizontal">
            <li class="list-group-item">
              <img id="rightHand" src={handToRight} />
            </li>
            <li id="section-header-title" class="list-group-item">COURSES</li>
          </ul>
          <div id="offlineCourses" class="card">
            <div id="offlineCoursesBody" class="card-body">
              <h5 id="offlineTitle" class="card-title">Online</h5>
              <div id="coursesCard" class="row row-cols-1 row-cols-md-3 g-4">
                <div id="coursesCard1" class="col">
                  <NavLink id="offlineCoursesLink" to="/courses" target='_top'>
                    <div id="yogaCard" class="card h-100">
                      <img id="yoga" src={yoga} class="card-img-top" alt="..." />
                      <div id="yogaText" class="card-body">
                        <h5 class="card-title">Yoga</h5>
                      </div>
                    </div>
                  </NavLink>                
                </div>
                <div id="coursesCard2" class="col">
                  <NavLink id="offlineCoursesLink" to="/courses" target='_top'>
                    <div id="graphicdesigningCard" class="card h-100">
                      <img id="graphicdesigning" src={graphicDesigning} class="card-img-top" alt="..." />
                      <div id="graphicdesigningText" class="card-body">
                        <h5 class="card-title">Graphic Designing</h5>
                      </div>
                    </div>
                  </NavLink>                
                </div>
                <div id="coursesCard3" class="col">
                  <NavLink id="offlineCoursesLink" to="/courses" target='_top'>
                    <div id="createCard" class="card h-100">
                      <img id="create" src={create} class="card-img-top" alt="..." />
                      <div id="createText" class="card-body">
                        <h5 class="card-title">Create your own</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div id="coursesCard3" class="col">
                  <div id="createCard" class="card h-100">
                    <div id="createText" class="card-body">
                      <h5 id="commingSoonText" class="card-title">Comming soon .....</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="onlineCourses" class="card">
            <div id="onlineCoursesBody" class="card-body">
              <h5 id="onlineTitle" class="card-title">Offline</h5>
              <div id="coursesCard" class="row row-cols-1 row-cols-md-3 g-4">
                <div id="coursesCard4" class="col">
                  <NavLink id="onlineCoursesLink" to='/courses' target='_top'>
                    <div id="dramaCard" class="card h-100">
                      <img id="drama" src={drama} class="card-img-top" alt="..." />
                      <div id="dramaText" class="card-body">
                        <h5 class="card-title">Drama</h5>
                      </div>
                    </div>
                  </NavLink>                
                </div>
                <div id="coursesCard5" class="col">
                  <NavLink id="onlineCoursesLink" to='/courses' target='_top'>
                    <div id="cookingCard" class="card h-100">
                      <img id="cooking" src={cooking} class="card-img-top" alt="..." />
                      <div id="cookingText" class="card-body">
                        <h5 class="card-title">Cooking</h5>
                      </div>
                    </div>
                  </NavLink>                
                </div>
                <div id="coursesCard6" class="col">
                  <NavLink id="onlineCoursesLink" to='/courses' target='_top'>
                    <div id="calligraphyCard" class="card h-100">
                      <img id="calligraphy" src={calligraphy} class="card-img-top" alt="..." />
                      <div id="calligraphyText" class="card-body">
                        <h5 class="card-title">Calligraphy</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div id="coursesCard7" class="col">
                  <NavLink id="onlineCoursesLink" to='/courses' target='_top'>
                    <div id="artCard" class="card h-100">
                      <img id="art" src={art} class="card-img-top" alt="..." />
                      <div id="artText" class="card-body">
                        <h5 class="card-title">Art</h5>
                      </div>
                    </div>
                  </NavLink>                
                </div>
                <div id="coursesCard8" class="col">
                  <div id="createCard" class="card h-100">
                    <div id="createText" class="card-body">
                      <h5 id="commingSoonText" class="card-title">Comming soon .....</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" class="card">
        <div id="featuresBody" class="card-body">
          <ul id="section-header" class="list-group list-group-horizontal">
            <li class="list-group-item">
              <img id="rightHand" src={handToRight} />
            </li>
            <li id="section-header-title" class="list-group-item">FEATURES</li>
          </ul>
          <p id="featureText">
            We provide a platform to create your own broadcast 
            to share one’s knowledge and to earn passive income as well.
          </p>
          <img id="featuresImg" src={features} />
          <div class="card-img-overlay">
            <a href="/">
              <h5 id="featuresLink" class="card-title"></h5>
            </a>
          </div>
        </div>
      </div>

      <div id="contactUs" class="card">
        <div id="contactUsBody" class="card-body">
          <ul id="section-header" class="list-group list-group-horizontal">
            <li class="list-group-item">
              <img id="rightHand" src={handToRight} />
            </li>
            <li id="section-header-title" class="list-group-item">CONTACT US</li>
          </ul>
          <div id="contactUsCard" class="card">
            <div id="contactUsCardBody" class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <div id="contactImgCard" class="card">
                    <div id="contactImgCardBody" class="card-body">
                      <img id="contactImg" src={contact} alt="..." />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="contactFormCard" class="card">
                    <div id="contactFormCardBody" class="card-body">
                      <form action="" method="" id="contactForm">
                        <div id="nameGroup" class="form-group">
                          <label id="nameText" for="name" style={{ lineHeight: 2 }}>NAME</label><br />
                          <input type="text" id="name" name="name" placeholder="Enter full name" required />
                        </div>
                        <div id="emailGroup" class="form-group">
                          <label id="emailText" for="email" style={{ lineHeight: 2 }}>EMAIL</label><br />
                          <input type="email" id="email" name="email" placeholder="Enter your email ID" required />
                        </div>
                        <div id="messageGroup" class="form-group">
                          <label id="messageText" for="message" style={{ lineHeight: 2 }}>MESSAGE/INQUIRY</label><br />
                          <textarea name="message" id="message" cols="65" rows="5" placeholder="Comment here" spellcheck="true"
                            required></textarea>
                        </div>
                        <button id="send" class="btn btn-sm btn-outline-primary"type="submit">
                            SEND MESSAGE
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="Title">
        <img id="logoimage" src={ Img } alt="" />
        <p className="logo-name">ORANGE-CAPS</p>

        <div className="container">

          <div className="sidedisplay">
            <p className="tagLine">- Let's Communicate with your skills</p>
            <br/><br/>
            {/* <p className="shortBrief">
              Platform where you can learn as a student and can earn as speaker.
              Be ready with employable skills with reasonable rates.
              Boost your confidence and seperate yourself from crowd of thousands.
            </p>
            <div className="description">
              A platform where you join the courses as well as  
              create and sell your own course, webinars, services, events, live projects. 
              Upgrade your knowledge, skills and income with orangecaps. 
              We are planning collaborate with 100+ companies in future 
              to help you with interships and practical knowledge
            </div>
          </div>

          <div className="OC-Img">
            <img className="OC" src={ PNG } alt="" />  
          </div>
        </div>*/}
        
        {/* <div className="section"> */}
          {/* <p className="logo-name">ORANGE CAPS</p> */}
          
          {/* <div className="description">
            Orange C-Capability, A-Ability, P-Passive Income, S-Skills. 
            We will provide 100+ live courses on our website for those who want to learn with one-one interaction. 
            Once they complete the course we’ll give them live projects through which we’ll get to know how much they’ve learned. 
            After the completion of the course, we’ll provide them certificates. 
            In the future, we’re planning to collaborate with more companies through which our customers can avail of maximum benefits.
          </div> */}
        {/* </div> */}
        {/* <video autoplay muted loop id="myVideo">
          <source src="/Videos/bgVideo.mp4" type="video/mp4"/>
        </video> */}
        
        {/*<div className="section">
          <div className="interaction">
            <div className="bg">

              <section className="panel">
                <h2 className="course_service">Our Courses</h2>
                <div className="card__text">
                  <p className='card_text_description'>Visit once and have habbit of learning. All courses are updated versions of current trends in industry</p>
                </div>
                {/* <a href="#" className='button'>Visit</a>
                <NavLink className="button" to="/courses"> Visit </NavLink>
              </section>

            </div>

            <div className="bg">

              <section className="panel">
                <h2 className="course_service">Our Services</h2>
                <div className="card__text">
                  <p className='card_text_description'>Give us chance to serve you and book our service with your suitable time</p>
                </div>
                {/* <a href="#" className='button'>Visit</a>
                <NavLink className="button" to="/services"> Services </NavLink>
              </section>

            </div>
          </div>
        </div>
          
      </div>*/}
    </div>
  )
}

export default home
