import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [newItem, setNewItem] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");

  function handleNewItemChange(e) {
    console.log(newItem)
    setNewItem(e.target.value)
    
  }

  function handleNewItemCategoryChange(e) {
    console.log(newItemCategory)
    setNewItemCategory(e.target.value)
  }
  
  function handleSearchChange(e) {
    setSearchValue(e.target.value)
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newListItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newItem,
      category: newItemCategory,
    };
  
    console.log(newListItem)
    setItems([...itemsToDisplay, newListItem])

  }

  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.includes(searchValue);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  

  return (
    <div className="ShoppingList">
      <ItemForm 
        newItem={newItem} 
        newItemCategory={newItemCategory} 
        onNewItemChange={handleNewItemChange}
        onNewItemCategoryChange={handleNewItemCategoryChange}
        onSubmit={handleSubmit} 
        />
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchValue={searchValue}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
