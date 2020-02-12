import React, { Component } from 'react';
import '../../index.scss';
import './About.scss';
import Bjorn from '../../images/about-bjorn.jpg';
import Victor from '../../images/victor.jpg';

export default class About extends Component {
  render(){
    return(
      <>
      <div className="about">
      <h1 className="heading">Om oss</h1>
      <p className="bread">
      Här upptäcker vi världen kring krypto och kryptovalutor.
      Vi lär oss efterhand och delar med oss av det vi kan.
      </p>
      </div>
      <div className="about-us">
      <div className="us">
      <div className="bjorn">
        <img src={Bjorn} alt="bjorn" />
        <h1 className="name">Björn</h1>
        <a href="mailto:bjorn@kryptopojkarna.se">
          <h2 className="email">Bjorn@kryptopojkarna.se</h2>
          </a>
      </div>
      <div className="victor">
        <img src={Victor} alt="victor" />
        <h1 className="name">Victor</h1>
      <a href="mailto:victor@kryptopojkarna.se">
        <h2 className="email">Victor@kryptopojkarna.se</h2>
        </a>
      </div>
      </div>
      <div className="about-us-container">
      <h1 className="section-heading head">Vilka är vi?</h1>
      <p>
      Vi som gör Kryptopojkarna heter Victor och Björn och är 
      båda väldigt intresserade av ekonomi och Blockchain.
      Viktor är lite mer intresserad av det gamla gardet: aktier 
      och dylikt. Medan Björn med sin blåögdhet tror att vi
      kan bygga en värld av Blockchain.
      </p>
      <p>
      Vi är även väldigt intresserade av livets frågor, stora som
      små, därför kommer även mycket sådant att slinka in i podden.
      </p>
      <p>
      Allt innehåll, våra åsikter och slutsatser i podden är inte att
      betrakta som finansiell rådgivning.
      </p>
      <p>
      Kort och gott: Lita inte på någon. 
      Gör din research och tänk på säkerheten!
      </p>
      </div>
      <div className="spacer"></div>
      </div>
      </>
    )
  }
}