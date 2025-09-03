import React from "react";
import "./MenuSection.css";

function splitTable(items = []) {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
}

function MenuSection({ appetizers = [], salads = [] }) {
  const [left, right] = splitTable(appetizers);

  return (
    <section className="menu-section-wrapper">
      {/* Decorative Images */}
      <img src="/images/appetizer-1.png" alt="skewers" className="decor-img decor-skewer" />
      <img src="/images/1 41.png" alt="platter" className="decor-img decor-platter" /> 
      <img src="/images/salad 1.png" alt="sandwich" className="decor-img decor-sandwich" />

      <div className="menu-section">
        {/* Appetizers Section */}
        <div className="appetizers-title-row">
          <hr className="left-line" />
          <h3 className="menu-title">APPETIZERS</h3>
          <hr className="right-line" />
        </div>

        <div className="menu-table">
          <div className="menu-table-col">
            {left.map(({ id, name, price, description }) => (
              <div className="menu-item-row" key={id}>
                <div className="menu-item-header">
                  <span className="item-name">{name}</span>
                  <span className="dots"></span>
                  <span className="item-price">${price}</span>
                </div>
                <div className="item-desc">{description}</div>
              </div>
            ))}
          </div>
          <div className="menu-table-col">
            {right.map(({ id, name, price, description }) => (
              <div className="menu-item-row" key={id}>
                <div className="menu-item-header">
                  <span className="item-name">{name}</span>
                  <span className="dots"></span>
                  <span className="item-price">${price}</span>
                </div>
                <div className="item-desc">{description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Salads Section */}
        <div className="salad-box">
          <span className="salads-bowl">
            <img src="/images/sa 1.png" alt="salad bowl" />
          </span>
          <div className="menu-title-salad">SALADS</div>
          <div className="salad-opt">Option to add protein</div>
          <div className="salad-row">
            {salads.map(({ id, name, price }) => (
              <div className="salad-cell" key={id}>
                <span className="salad-name">{name}</span>
                <span className="dots"></span>
                <span className="salad-price">${price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
