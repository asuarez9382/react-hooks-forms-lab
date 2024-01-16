import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ newItem, onNewItemChange, newItemCategory, onNewItemCategoryChange, onSubmit }) {
  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem} onChange={onNewItemChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={onNewItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
