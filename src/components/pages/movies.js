import React, { useState } from 'react';
import '../../App.css';
import SeriesRecords from './movies.json';
import Footer from '../footer';

function series() {
    const [searchTerm, setSeacrhTerm] = useState('');
    const [dropDownTerm, setdropDownTerm] = useState('all');
    let newSeries;
    /*öncelikle yukarıda oluşturduğumuz newseries değerine dizi verilerimizi aktardım daha sonra gelen değerleri büyük küçük
    küçük harf uyarlaması yaptıktan sonra arama çubuğuna en az 3 kelime girilmesinden sonra filtreleme yapmasını sağladım*/
    newSeries = SeriesRecords.filter((val) =>
        val.title.toLocaleLowerCase().indexOf(searchTerm.length >= 3 ? searchTerm : "") !== -1);
    
    /*burada if else yapısı ile dropdown filtreleme yaptım ilk durumda tümü seçiliyken sadece 18 veri getirmesini sağladım ve diğer durumları sıraladım*/
    if (dropDownTerm == "all") {
        newSeries.length = 18;
    }
    else if (dropDownTerm == "low") {
        console.log("low")
        newSeries.sort((a, b) => a.releaseYear - b.releaseYear)
    }
    else if (dropDownTerm == "high") {
        console.log("high")
        newSeries.sort((a, b) => b.releaseYear - a.releaseYear)
    }
    else {
        console.log("rand")
        newSeries.sort(function (a, b) { return 0.5 - Math.random() })
    }
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
                    <option value='rand'>Rastgele Sırala</option>
                </select>

            </div>

            <div className='split'>
                {/*yukarıda tanımladığım newseries değişkeni ile dizi veri dosyasından verileri oluşturduğum divlerin içine çektim*/}
                {newSeries.map((val, key) => {
                        return (
                            <div className='box' key={key}>
                                <img className='box__img' src={val.images['Poster Art'].url} alt='' />
                                <p className='box__text'>{val.title}</p>
                            </div>)
                    })}
            </div>
        </div>
        <Footer />
        </>
    )
    
}

export default series