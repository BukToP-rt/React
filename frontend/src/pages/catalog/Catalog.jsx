import React from "react";
import "./style.css";
import Card from "../../components/Card/Card";

function Catalog() {
  return (
    <div className="catalog">
      <div className="title-ctalog">Коллекция</div>
      <div className="catalog-container">
        
        <div className="nav-catalog">
          <a className="nav-catalog link" href="">
            Плащи
          </a>
          <a className="nav-catalog link" href="">
            Куртки
          </a>
          <a className="nav-catalog link" href="">
            Кофты
          </a>
          <a className="nav-catalog link" href="">
            Комбинезоны
          </a>
          <a className="nav-catalog link" href="">
            Кепки
          </a>
          <a className="nav-catalog link" href="">
            Сумки
          </a>
        </div>
        
          <div className="card-catalog ">
            <Card name="Рюкзак черный" price="2350" imagePath="/backpack.jpg" />
            <Card name="Рюкзак белый" price="7000" imagePath="/2.jpg" />
            <Card name="Рюкзак черный" price="2350" imagePath="/backpack.jpg" />
            <Card name="Рюкзак белый" price="7000" imagePath="/2.jpg" />
            <Card name="Рюкзак черный" price="2350" imagePath="/backpack.jpg" />
            <Card name="Рюкзак белый" price="7000" imagePath="/2.jpg" />
          </div>
        
      </div>
    </div>
  );
}

export default Catalog;
