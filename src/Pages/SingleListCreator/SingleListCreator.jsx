import React, { useState, useEffect } from "react";
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
    setShopList,
  } = useShoppingList();

  return (
    <>
      <h4>Add item: </h4>
      <SingleListCreatorWrp>
        <input
          type="text"
          value={itemToShop}
          onChange={(e) => handleItemChange(e.target.value)}
        />
        <Button variant="add" onClick={() => addItem(itemToShop)}>
          Add
        </Button>
      </SingleListCreatorWrp>

      <>
        <p>Items:</p>

        <ItemList>
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
                <p>{item.toUpperCase()}</p>{" "}
                <CountDumpWrp>
                  <Counter />
                  <span onClick={(e) => deleteItem(id, e)}>❌</span>
                </CountDumpWrp>
              </SingleItemData>
            );
          })}
          {shopList.length > 0 ? (
            <ButtonsWrp>
              <Button variant="clear-cancel" onClick={clearList}>
                Clear List
              </Button>
              <Button variant="save" onClick={() => setOpen(true)}>
                Save List
              </Button>
            </ButtonsWrp>
          ) : null}
        </ItemList>
        <Modal open={open}>
          <SaveListForm
            onCancel={() => setOpen(false)}
            shopList={shopList}
            setShopList={setShopList}
            setOpen={setOpen}
          />
        </Modal>
      </>
    </>
  );
};

export default SingleListCreator;
