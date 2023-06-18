import React, { useState } from "react";
import './style.css'

const Card = ({name, price, imagePath}) => {
    const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="cards" onClick={() => {
        setModalOpen(true)
    }}>
        {
            isModalOpen ? <div>MODAL</div> : <div></div>
        }
      <div className="card">
        <div className="card_top">
          <a href="#" class="card_image">
            <img src={imagePath} alt="Рюкзак" />
          </a>
        </div>
        <div className="card_bottom">
          <a href="#" class="card_title">
            {name}
          </a>
          <div className="card_button">
            <div className="card_prices">{price} &#8381;</div>

            <button className="card_add">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
