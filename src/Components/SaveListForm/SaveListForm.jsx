import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../CustomButton/CustomButton-styles";
import { Form, FormBtnsWrp } from "./SaveListForm-styles";
import { useNavigate } from "react-router-dom";

const SaveListForm = ({ onCancel, title, shopList, setOpen }) => {
  const navigate = useNavigate();
  const { handleSubmit, register, setValue } = useForm();
  useEffect(() => {
    setValue("title", title);
  }, [title]);

  const onSubmit = (formData, e) => {
    e.preventDefault();

    localStorage.setItem("listTitle", formData.title);
    localStorage.setItem("shopList", JSON.stringify(shopList));

    navigate("/");
    setOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>LIST TITLE:</p>
      <input type="text" {...register("title", { required: true })} />{" "}
      <FormBtnsWrp>
        <Button variant="clear-cancel" type="button" onClick={onCancel}>
          🚫
        </Button>
        <Button variant="save" type="submit">
          ✅
        </Button>
      </FormBtnsWrp>
    </Form>
  );
};

export default SaveListForm;
