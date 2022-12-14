import React from 'react';
import './footer.css';
import { Button } from './button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    En popüler en yeni dizileri ve filmleri kaçırmamak için Bulutmd bültenine katılın
                </p>
                <p className='footer-subscription-text'>
                    İstediğiniz zaman abonelikten çıkabilirsiniz.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Abone Ol</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Hakkımızda</h2>
                        <Link to='/sign-up'>Nasıl çalışır</Link>
                        <Link to='/'>Referanslar</Link>
                        <Link to='/'>Kariyer</Link>
                        <Link to='/'>Yatırımcılar</Link>
                        <Link to='/'>Kullanım Şartları</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Bize Ulaşın</h2>
                        <Link to='/'>İletişim</Link>
                        <Link to='/'>Destek</Link>
                        <Link to='/'>Hedefler</Link>
                        <Link to='/'>Sponsorluklar</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Sosyal Medya</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            BULUTMD <i className='fa-solid fa-cloud' />
                        </Link>
                    </div>
                    <small className='website-rights'>BULUTMD © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;