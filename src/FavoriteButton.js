import React, { useState } from "react";

const FavoriteButton = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: new Date().getTime(),
      fav: false,
      title: inputValue
    };
    setItems((oldState) => [...oldState, newItem]);
    setInputValue("");
  };

  const makeFav = (id) => {
    console.log("id prop", id);

    const allItems = [...items];
    const itemIndex = allItems.findIndex((item) => item.id === id);
    allItems[itemIndex].fav = !allItems[itemIndex].fav;
    setItems(allItems);
    console.log("itemIndex", itemIndex);
  };

  return (
    <div className="FavoriteButton">
      <input
        type="text"
        placeholder="Add item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <hr />
      <h2>Favorites</h2>
      {items
        .filter((item) => item.fav === true)
        .map((item) => {
          return (
            <div key={item.id}>
              {item.title}
              <button onClick={() => makeFav(item.id)}>un fav</button>
            </div>
          );
        })}
      <hr />
      <h2>list</h2>
      {items
        .filter((item) => item.fav === false)
        .map((item) => {
          return (
            <div key={item.id}>
              {item.title}
              <button onClick={() => makeFav(item.id)}>fav</button>
            </div>
          );
        })}
    </div>
  );
};
export default FavoriteButton;