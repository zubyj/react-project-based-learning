import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];

function App() {  

  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // since we cant sort menu items by 'all' category, special return condition.
    if (category === 'all') {
      setMenu(items); 
      return;
    }
    // else filter menu items by category and change the menu
    // variable states 
    // click breakfast. menu = full menu. newMenu = 3 breakfast items. menu = 3bf 
    // click lunch. menu=fm, newMenu=lm, menu = lm?
    setMenu(items);
    // do you know why this doesnt work'
    // because we cant modify state directly, that applies to filter too?
    const newMenu = items.filter((item) => item.category === category);
    setMenu(newMenu);
  }

  return <main>
    <div>
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menu={menu}/>
    </div>
  </main>
}

export default App;
