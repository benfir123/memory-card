import { useEffect } from "react";

const Coin = (props) => {

const { name, image, handleCoinClick } = props

const listenForClick = handleCoinClick.bind(null, name)

useEffect(() => {
    const coin = document.querySelector(`[listid=${name}]`)
    coin.addEventListener('click', listenForClick);
    return () => {
        coin.removeEventListener('click', listenForClick)
    }
})

    return <div className="coin" listid={name}>
        <img src={image} alt="" width={96}/>
        <h1>{name}</h1>
    </div>;
  }
  
  export default Coin;
  