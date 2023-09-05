import React, { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ShoppingListContext = createContext();
export const useShoppingList = () => {
  return useContext(ShoppingListContext);
};

export const ShoppingListProvider = ({ children }) => {
  const [savedLists, setSavedLists] = useState([{ title: "", list: [] }]);
  const [shopList, setShopList] = useState([]);
  const [itemToShop, setItemToShop] = useState("");
  const [open, setOpen] = useState(false);
  console.log(shopList);
  const addItem = (item) => {
    if (item) {
      const newItem = {
        id: uuidv4(),
        item,
        isShopped: false,
      };
      const nonShoppedItems = shopList.filter(
        (existingItem) => !existingItem.isShopped
      );
      const shoppedItems = shopList.filter(
        (existingItem) => existingItem.isShopped
      );

      setShopList([newItem, ...nonShoppedItems, ...shoppedItems]);
      setItemToShop("");
      //create updatedList directly by adding newItem to the beggining of the shopList using spread operator
      // const updatedList = [newItem, ...shopList];
      // setShopList(updatedList);
      setItemToShop("");
    }
  };

  const deleteItem = (id, event) => {
    event.stopPropagation();

    const updatedList = shopList.filter((item) => item.id !== id);
    setShopList(updatedList);
  };

  const clearList = () => {
    setShopList([]);
  };

  const setItemShopped = (id) => {
    const updatedList = shopList.map((item) =>
      item.id === id ? { ...item, isShopped: !item.isShopped } : item
    );

    const nonShoppedItems = updatedList.filter((item) => !item.isShopped);
    const shoppedItems = updatedList.filter((item) => item.isShopped);

    setShopList([...nonShoppedItems, ...shoppedItems]);
  };

  const handleItemChange = (value) => setItemToShop(value);

  return (
    <ShoppingListContext.Provider
      value={{
        itemToShop,
        shopList,
        setShopList,
        open,
        addItem,
        deleteItem,
        clearList,
        setItemShopped,
        handleItemChange,
        setOpen,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
