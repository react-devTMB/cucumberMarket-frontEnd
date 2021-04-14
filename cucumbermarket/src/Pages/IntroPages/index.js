import React from 'react';
import { Link } from 'react-router-dom';
import map from '../../assets/images/map.PNG';
import './IntroPages.css';

const IntroPages = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('Latitude is :', position.coords.latitude);
    console.log('Longitude is :', position.coords.longitude);
  });

  return (
    <div className="intro">
      <h1 className="name">오이마켓</h1>
      <img src={map} alt="map" />
      <h3 className="title">우리 동네 중고 직거래</h3>
      <p className="description">오이마켓은 동네 직거래 마켓이에요.</p>
      <p className="description">내 동네를 설정하고 시작해보세요!</p>
      <Link to="/auth">
        <button type="button" className="btn">
          내 동네 설장하고 시작하기
        </button>
      </Link>
    </div>
  );
};

export default IntroPages;
