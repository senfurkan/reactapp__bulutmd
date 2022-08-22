import React from 'react'
import { Link } from 'react-router-dom';
import './SelectionScreen.css';

function SelectionScreen() {
    return (
        <div className='wrapper'>
            <div className='Series'>
                <Link to='/series'>
                    <div className='SelectionScreen'>
                        <img src='https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg' alt='' className='SelectionScreenimg' />
                    </div>
                    <p className='labelSeries'>DİZİ</p>
                </Link>
            </div>

            <div className='Movies'>
               <Link to='movies'>
                <div className='SelectionScreen'>
                    <img src='https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg' alt='' className='SelectionScreenimg' />
                </div>
                <p className='labelSeries'>FİLM</p>
               </Link>
            </div>
        </div>
    )
}

export default SelectionScreen