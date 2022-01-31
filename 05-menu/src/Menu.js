import React from 'react';

const Menu = ({menu}) => {
  return <section className="container">
    {menu.map((item) => {
      const {id, title, category, price, img, desc} = item;
      return <article key={id} className='menu-item'>
        <img src={img} alt={desc} className='photo'/>
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4>{price}</h4>
            {desc}
          </header>
        </div>
      </article>
    })}
  </section>;
}
export default Menu;
