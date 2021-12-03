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
              <ion-icon size="large" name="logo-twitter" color="secondary"></ion-icon>              
              <ion-icon size="large" name="logo-instagram" color="secondary"></ion-icon>
              <ion-icon size="large" name="logo-tiktok" color="secondary"></ion-icon>              
              <ion-icon size="large" name="logo-facebook" color="secondary"></ion-icon>
              </div>
            </div>
            <div className="home-page__title">
              <h1 className="home-page__header">contacts</h1>
              <div className="home-page__socials-contact">
              <ion-icon size="large" name="logo-github" color="secondary"></ion-icon>
              <ion-icon size="large" name="logo-linkedin" color="secondary"></ion-icon>
              </div>
            </div>
            <div className="home-page__motto">
              <p className="home-page__saying">find your pawfect friend today!</p>
            </div>
            <div className="home-page__about">
              <p className="home-page__slogan">pawfinder</p>
              <ion-icon size="small" name="paw-outline"></ion-icon>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
