import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../CustomButton/CustomButton-styles";
import { Form, FormBtnsWrp } from "./SaveListForm-styles";
import { useNavigate } from "react-router-dom";
import { useShoppingList } from "../Context/ShoppingListContext";
import { v4 as uuidv4 } from "uuid";

const SaveListForm = ({ onCancel, title }) => {
  const navigate = useNavigate();
  const { shopList, setOpen, setSavedLists } = useShoppingList();

  const { handleSubmit, register, setValue } = useForm();
  useEffect(() => {
    setValue("title", title);
  }, [title]);

  const onSubmit = (formData, e) => {
    e.preventDefault();
    localStorage.setItem("listTitle", formData.title);

    setSavedLists((prevLists) => {
      const updatedList = [
        ...prevLists,
        { id: uuidv4(), listName: formData.title, items: shopList },
      ];
      localStorage.setItem("savedLists", JSON.stringify(updatedList));
      return updatedList;
    });

    navigate("/");
    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>LIST TITLE:</p>
      <input
        id="title"
        type="text"
        {...register("title", { required: true })}
      />
      <FormBtnsWrp>
        <Button variant="clear-cancel" type="button" onClick={onCancel}>
          <img src="/assets/images/icons/prohibicion.png" alt="cancel" />
        </Button>
        <Button variant="save" type="submit">
          <img src="/assets/images/icons/controlar.png" alt="cancel" />
        </Button>
      </FormBtnsWrp>
    </Form>
  );
};

export default SaveListForm;
