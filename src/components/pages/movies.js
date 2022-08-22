import React, { useState } from 'react';
import '../../App.css';
import SeriesRecords from './movies.json';
import Footer from '../footer';

function series() {
    const [searchTerm, setSeacrhTerm] = useState('');
    const [dropDownTerm, setdropDownTerm] = useState('all');
    return (
        <>
        <div className='movies'>

            <div className="search-container">
                <input className='search__bar' type='text' placeholder='Filmlerde Ara...' onChange={event => { setSeacrhTerm(event.target.value) }} />
                
                <select className='drop__down__list'
                    value={dropDownTerm} onChange={event => { setdropDownTerm(event.target.value)}}>
                    <option value='all'>Tümü</option>
                    <option value='low'>Eskiye Göre Sırala</option>
                    <option value='high'>Yeniye Göre Sırala</option>
                </select>

            </div>

            <div className='split'>
                {SeriesRecords.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val
                    }

                    SeriesRecords.select((a,b) => {
                        if (dropDownTerm == "all"){
                            return a, b
                        } else if(dropDownTerm == "low"){
                            return a.releaseYear>b.releaseYear?1:-1
                        } else if(dropDownTerm == "high"){
                            return a.releaseYear<b.releaseYear?1:-1
                        }
                    })
                }).map((val, key) => {
                    return (
                        <div className='box' key={key}>
                            <img className='box__img' src={val.images['Poster Art'].url} alt='' />
                            <p className='box__text'>{val.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer />
        </>
    )
    
}

export default series