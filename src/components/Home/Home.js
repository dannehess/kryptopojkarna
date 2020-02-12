import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
import MobMic from '../../images/mob-mic.png';
import Mic from '../../images/mic.png';

export default class Home extends Component {
  render(){
    return(
      <>
      <div className="home">
      <img src={MobMic} className="mob-mic" alt="mic"/>
      <h1 className="heading-big">Kryptopojkarna</h1>
      <h3 className="sub-heading">Mer än bara krypto</h3>
      <p className="bread hide">
      Upp och ner i all ära men krypto är här för att stanna.<br />
      En podcast om krypto/kryptovalutor och livets stora frågor.
      </p>
      <div className="listen-now">
      <Link to="/episodes"><button className="episodes-btn">Lyssna nu</button></Link>
      <span className="arrow"><i className="fas fa-arrow-left"></i></span>
      </div>
      </div>
      <img src={Mic} className="mic" alt="mic" />
      </>
    )
  }
}