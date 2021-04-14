import React from 'react';
import map from '../../assets/images/map.PNG';
import './IntroPages.css';

const IntroPages = () => {
  return (
    <div className="intro">
      <h1 className="name">오이마켓</h1>
      <img src={map} className="App-map" alt="map" />
      <h3 className="title">우리 동네 중고 직거래</h3>
      <p className="description">오이마켓은 동네 직거래 마켓이에요.</p>
      <p className="description">내 동네를 설정하고 시작해보세요!</p>
      <button type="button" className="btn">
        내 동네 설장하고 시작하기
      </button>
    </div>
  );
};

export default IntroPages;
