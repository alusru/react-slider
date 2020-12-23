import React, { useState } from 'react';
import {Helpers} from './Helpers';

const Images = ({ImgSlides}) => {


const [counts, setCount] = useState(0);

const next = () => {
    setCount(counts === ImgSlides.length - 1 ? 0 : counts + 1);
}

const prev = () => {
    setCount(counts === 0 ? ImgSlides.length - 1 : counts - 1);
}


    return (
        <div className="container" style={{position: 'relative',height:100 + 'vh',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <span className="next" onClick={next} style={{cursor: 'pointer',position:'absolute',bottom: 0 +'px'}} >Next</span>
        <span  className="prev" onClick={prev} style={{cursor: 'pointer',position:'absolute',bottom: 0 +'px',marginLeft:82+'px'}} >Prev</span>
        {Helpers.map((img,b)=> {
          return <div key={b} className={b === counts ? 'count active': 'count'}> {b === counts && (<img key={b}  style={{width:1000+"px",height: 600+'px'}} src={img.image} alt={img.title}/>)}</div>
        })}       
        </div>
    )
}

export default Images;
