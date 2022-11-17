import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../router/Router";
import "./style.scss";

const Builder = () => {
  const navigate = useNavigate();

  const [ingredientsBurger, setIngredientsBurger] = useState([]);
  const { listBurger, setListBurger } = useContext(Context);

  const ingredients = [
    { ingredient: "bacon", price: 10 },
    { ingredient: "salad", price: 2 },
    { ingredient: "cheese", price: 5 },
    { ingredient: "meat", price: 20 },
  ];
  const AddIngredients = (item, price) => {
    const newIngredient = { ingredient: item, price };
    setIngredientsBurger([...ingredientsBurger, newIngredient]);
  };

  const deleteIngredient = (index) => {
    const lista = [...ingredientsBurger];
    lista.splice(index, 1);
    setIngredientsBurger(lista);
  };

  const total = ingredientsBurger.map((item, index) => item.price);

  const subTotal = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const addList = () => {
    if (ingredientsBurger.length) {
      const hamburger = {
        hamburger: "BURGER",
        ingredients: ingredientsBurger,
        price: subTotal,
      };
      const listaGenerada = [...listBurger, hamburger];
      setListBurger(listaGenerada);
      setIngredientsBurger([]);
    } else {
      Swal.fire("Debes agregar ingredientes");
    }
  };

  const show = () => {
    if (listBurger.length) {
      navigate("/receipt");
    } else {
      Swal.fire("Debes comfirmar la compra");
    }
  };
  return (
    <div className="container-main">
      <div className="button-container">
        {ingredients.map((item, index) => (
          <button
            className="button"
            key={index}
            onClick={() => {
              AddIngredients(item.ingredient, item.price);
            }}
          >
            {item.ingredient}{" "}
          </button>
        ))}
      </div>
      <span className="total">{subTotal}$ </span>
      <div className="button-bottom">
        <button className="button" onClick={addList}>
          {" "}
          Confirm
        </button>
        <button className="button" onClick={show}>
          {" "}
          See Receipt
        </button>
      </div>
      <span className="total">
        # Burgers add :<br></br>
        {listBurger.length} {listBurger.length > 1 ? "hamburgers" : "hamburger"}{" "}
      </span>
      <div>
        <div className="bread-top"> .</div>
        {ingredientsBurger.length ? (
          ingredientsBurger.map((item, index) => {
            return (
              <div
                key={index}
                className={`${item.ingredient}`}
                onClick={() => {
                  deleteIngredient(index);
                }}
              >
                {item.ingredient}{" "}
              </div>
            );
          })
        ) : (
          <></>
        )}
        <div className="bread-bottom"> .</div>
      </div>
    </div>
  );
};

export default Builder;
