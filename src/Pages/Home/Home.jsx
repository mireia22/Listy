import React, { useEffect } from "react";
import { HomeWrp, NavContent, ListsWrp, PreviewWrp } from "./Home-styles";
import { Button } from "../../Components/CustomButton/CustomButton-styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingList } from "../../Components/Context/ShoppingListContext";

const Home = () => {
  const navigate = useNavigate();
  const { setShopList, setSavedLists, savedLists } = useShoppingList();

  useEffect(() => {
    const savedListsFromLocalStorage = JSON.parse(
      localStorage.getItem("savedLists")
    );

    if (savedListsFromLocalStorage) {
      setSavedLists(savedListsFromLocalStorage);
    }
  }, []);

  const goToSingleListCreator = () => {
    setShopList([]);
    navigate("/shopping-list");
  };

  const deleteList = (idToDelete) => {
    setSavedLists((prevLists) =>
      prevLists.filter((list) => list.id !== idToDelete)
    );

    const updatedLists = savedLists.filter((list) => list.id !== idToDelete);
    localStorage.setItem("savedLists", JSON.stringify(updatedLists));
    localStorage.removeItem("shopList");
    localStorage.removeItem("listTitle");
  };
  return (
    <HomeWrp>
      <p>Create a new List:</p>
      <Button variant="add" onClick={goToSingleListCreator}>
        +
      </Button>
      {savedLists && savedLists.length > 0 && <p>🧺 Your lists:</p>}{" "}
      <ListsWrp>
        {savedLists.map((list, index) => (
          <NavContent
            key={list.id}
            backgroundColor={`${
              [
                "#a9e5e080",
                "#ffb3bbaf",
                "#ffdeb8c8",
                "#ffffb8",
                "#c9bae9",
                "#a7d7e2",
              ][index]
            }`}
          >
            <NavLink
              to={`/custom-list/${list.listName}`}
              state={{ items: list.items }}
            >
              <h4>{list.listName.toUpperCase()} ➡️</h4>
            </NavLink>
            <PreviewWrp>
              <p>Preview:</p>
              {list.items.map((item) => (
                <li key={item.id}>{item.item}</li>
              ))}
            </PreviewWrp>
            <span onClick={() => deleteList(list.id)}>❌</span>
          </NavContent>
        ))}
      </ListsWrp>
    </HomeWrp>
  );
};

export default Home;
