import React, { useEffect, useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ShoppingListContext = createContext();

export const useShoppingList = () => {
  return useContext(ShoppingListContext);
};

export const ShoppingListProvider = ({ children }) => {
  const [savedLists, setSavedLists] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [itemToShop, setItemToShop] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const localStorageShopList =
      JSON.parse(localStorage.getItem("shopList")) || [];
    setShopList(localStorageShopList);
  }, []);

  const updateShopListAndLocalStorage = (newList) => {
    setShopList(newList);
    localStorage.setItem("shopList", JSON.stringify(newList));
  };

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
      const updatedList = [newItem, ...nonShoppedItems, ...shoppedItems];
      updateShopListAndLocalStorage(updatedList);
      setItemToShop("");
      //create updatedList directly by adding newItem to the beggining of the shopList using spread operator
      // const updatedList = [newItem, ...shopList];
      // setShopList(updatedList);
    }
  };

  const deleteItem = (id, event) => {
    event.stopPropagation();
    const updatedList = shopList.filter((item) => item.id !== id);
    updateShopListAndLocalStorage(updatedList);
  };

  const clearList = () => {
    updateShopListAndLocalStorage([]);
  };

  const setItemShopped = (id) => {
    const updatedList = shopList.map((item) =>
      item.id === id ? { ...item, isShopped: !item.isShopped } : item
    );
    const nonShoppedItems = updatedList.filter((item) => !item.isShopped);
    const shoppedItems = updatedList.filter((item) => item.isShopped);
    updateShopListAndLocalStorage([...nonShoppedItems, ...shoppedItems]);
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
        savedLists,
        setSavedLists,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
