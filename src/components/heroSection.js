import React from 'react'
import '../App.css';
import { Button } from './button';
import './heroSection.css';

function heroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>BULUTMD SENİ BEKLİYOR</h1>
        <p>Sen neyi bekliyorsun?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                HADİ BAŞLAYALIM
            </Button>
        </div>
    </div>
  )
}

export default heroSection