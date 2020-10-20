import React from'react'

const Button = ({title}) =>{
    return(
        <div>
        {/*<button className="button">Play Store</button>*/}
        <button className="button">{title}</button>
        </div>
    );
}
export default Button;