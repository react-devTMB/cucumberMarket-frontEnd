import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noSearch from '../../assets/images/icon_noSearch.PNG';
import './AuthPages.css';

const AuthPages = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('Latitude is :', position.coords.latitude);
    console.log('Longitude is :', position.coords.longitude);
  });

  const handleComplete = () => {};

  return (
    <div className="auth">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="내 동네 이름(동,읍,면)으로 검색" />
      <button type="button" className="btn">
        현재 위치로 찾기
      </button>
      <img src={noSearch} alt="noSearch" />
      <DaumPostcode onComplete={handleComplete} height={700} />
    </div>
  );
};

export default AuthPages;
