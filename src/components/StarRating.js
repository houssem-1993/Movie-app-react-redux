import React from 'react'

 function StarRating({ rate, getRate = () => {} }) {
     const stars = rate =>{
         let arr =[]
         for(let i=1;i<=5;i++){
            if (i <= rate) {
                arr.push(
                  <i
                    key={i}
                    className="fas fa-star colored"
                    onClick={() => getRate(i)}
                  ></i>
                );}
             else 
                arr.push(<i className="fas fa-star" key={i} onClick={() => getRate(i)}></i>)
         }
         return arr
     }
    return (
        <div className="star-rate">
            {stars(rate)}
        </div>
    );
}
export default StarRating