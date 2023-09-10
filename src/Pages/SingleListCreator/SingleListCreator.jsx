import React, { useEffect } from "react";
import {
  SingleListCreatorWrp,
  SingleItemData,
  CountDumpWrp,
  ItemList,
  ButtonsWrp,
} from "./SingleListCreator-styles";
import Counter from "../../Components/Counter/Counter";
import Modal from "../../Components/Modal/Modal";
import SaveListForm from "../../Components/SaveListForm/SaveListForm";
import { Button } from "../../Components/CustomButton/CustomButton-styles";
import { useShoppingList } from "../../Components/Context/ShoppingListContext";
import { useParams } from "react-router-dom";

const SingleListCreator = () => {
  const {
    itemToShop,
    shopList,
    open,
    addItem,
    deleteItem,
    clearList,
    setItemShopped,
    handleItemChange,
    setOpen,
    savedLists,
    setShopList,
  } = useShoppingList();

  const { listTitle } = useParams();

  useEffect(() => {
    if (listTitle && savedLists) {
      const list = savedLists.find((list) => list.listName === listTitle);
      if (list) {
        setShopList(list.items);
      }
    }
  }, [listTitle, savedLists, setShopList]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem(itemToShop);
    }
  };

  return (
    <>
      <SingleListCreatorWrp>
        <input
          placeholder="Add an Item"
          type="text"
          value={itemToShop}
          onChange={(e) => handleItemChange(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button variant="add" onClick={() => addItem(itemToShop)}>
          Add
        </Button>
      </SingleListCreatorWrp>
      <>
        {shopList.length > 0 && (
          <ButtonsWrp>
            <Button variant="save" onClick={() => setOpen(true)}>
              Save List
            </Button>
            <Button variant="clear-cancel" onClick={clearList}>
              Clear List
            </Button>
          </ButtonsWrp>
        )}

        <ItemList>
          <p>Items:</p>
          {shopList?.map(({ item, id, isShopped }) => {
            const style = isShopped
              ? {
                  background: "#ff6e61",
                }
              : { background: "inherit" };
            return (
              <SingleItemData
                key={id}
                style={style}
                onClick={() => setItemShopped(id)}
              >
                <p>{item.toUpperCase()}</p>
                <CountDumpWrp>
                  <Counter />
                  <span onClick={(e) => deleteItem(id, e)}>❌</span>
                </CountDumpWrp>
              </SingleItemData>
            );
          })}
        </ItemList>
        <Modal open={open}>
          <SaveListForm onCancel={() => setOpen(false)} />
        </Modal>
      </>
    </>
  );
};

export default SingleListCreator;
