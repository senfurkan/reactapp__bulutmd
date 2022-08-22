import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() {
  {/*hamburger menü tıklamalarını yöneten kod*/ }
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  {/*responsive tasarımda mobil görünümü kapatmaya yarayan kod*/ }
  const closeMobilMenu = () => setClick(false);

  {/*butonu mobilde görüntüleyecek ve ekranı mobil ekran boyutundan büyüttüğümüzde butonu saklayacak kod*/}
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };
  {/*sayfamız mobil görünümdeyken yenilemeye bastığımızda kayıt ol butonu olmaması gereken yerde gözüküyordu bu sorunu aşmak için aşağıdaki komutu yazdım*/}
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
            BULUTMD <i className='fa-solid fa-cloud'/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/*hamburger menüde tıklandığındaki duruma göre ikonları değiştiren etiket*/}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobilMenu}>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/movies' className='nav-links' onClick={closeMobilMenu}>
                Film
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/series' className='nav-links' onClick={closeMobilMenu}>
                Dizi
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilMenu}>
                Kayıt Ol
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Deneme Başlat</Button>}
        </div>
      </nav>
    </>
  )
}

export default navbar