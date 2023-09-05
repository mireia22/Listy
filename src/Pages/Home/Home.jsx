// Home.jsx
import React, { useEffect, useState } from "react";
import { HomeWrp, NavContent, ListsWrp } from "./Home-styles";
import { Button } from "../../Components/CustomButton/CustomButton-styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingList } from "../../Components/Context/ShoppingListContext";

const Home = () => {
  const navigate = useNavigate();
  const [listTitle, setListTitle] = useState("");
  const { setShopList, storedLists, createList } = useShoppingList();

  useEffect(() => {
    const savedListTitle = localStorage.getItem("listTitle");
    if (savedListTitle) {
      setListTitle(savedListTitle);
    }
  }, []);

  const goToSingleListCreator = () => {
    const confirmDelete = window.confirm(
      "You're gonna delete your previous list and all its items"
    );
    if (confirmDelete) {
      setShopList([]);
      navigate("/shopping-list");
    }
  };
  return (
    <HomeWrp>
      <p>Create a new List:</p>
      <Button variant="add" onClick={goToSingleListCreator}>
        +
      </Button>

      {listTitle && (
        <ListsWrp>
          <p>Your lists:</p>
          <NavContent>
            <NavLink to={`/custom-list/${listTitle}`}>
              <h4>{listTitle.toUpperCase()} ➡️</h4>
            </NavLink>
            <span>❌</span>
          </NavContent>
        </ListsWrp>
      )}
    </HomeWrp>
  );
};

export default Home;