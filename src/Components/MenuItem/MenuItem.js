import React from "react";
import "./MenuSection.css";

function MenuSection({ appetizers, salads }) {
  const half = Math.ceil(appetizers.length / 2);
  const left = appetizers.slice(0, half);
  const right = appetizers.slice(half);

  return (
    <section className="menu-container">
      <div className="appetizer-title">APPETIZERS</div>
      <div className="appetizer-table">
        <div className="appetizer-col">
          {left.map(item => (
            <div className="app-row" key={item.id}>
              <span className="app-name">{item.name}</span>
              <span className="dots"></span>
              <span className="app-price">${item.price}</span>
              <div className="app-desc">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="appetizer-col">
          {right.map(item => (
            <div className="app-row" key={item.id}>
              <span className="app-name">{item.name}</span>
              <span className="dots"></span>
              <span className="app-price">${item.price}</span>
              <div className="app-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="salad-section">
        <div className="salad-title">SALADS</div>
        <div className="salad-opt">Option to add protein</div>
        <div className="salad-table">
          {salads.map(item => (
            <div className="salad-row" key={item.id}>
              <span className="salad-name">{item.name}</span>
              <span className="dots"></span>
              <span className="salad-price">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default MenuSection;
