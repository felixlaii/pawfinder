import React from "react";
import HeroBanner from "../../assets/images/hero.jpg";
import "./homePage.scss";

function HomePage() { 
  return (
    <div className="home-page">
      <div className="home-page__container">
        <div className="home-page__banner">
          <img className="home-page__hero" src={HeroBanner} alt="Hero Banner" />
        </div>
        <div className="home-page__footer">
          <footer className="home-page__wrapper">
            <div className="home-page__title">
              <h1 className="home-page__header">socials</h1>
              <div className="home-page__socials">
              <ion-icon name="logo-twitter"></ion-icon>              
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-tiktok"></ion-icon>              
              <ion-icon name="logo-facebook"></ion-icon>
              </div>
            </div>
            <div className="home-page__title">
              <h1 className="home-page__header">contacts</h1>
              <div className="home-page__socials-contact">
              <ion-icon name="logo-github"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
            <div className="home-page__about">
              <p className="home-page__slogan">pawfect friend</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
