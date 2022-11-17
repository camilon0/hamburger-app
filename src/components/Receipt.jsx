import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../router/Router";
import "./style.scss";

const Receipt = ({ factura }) => {
  const { listBurger, setListBurger } = useContext(Context);
  console.log(listBurger);
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const newBuy = () => {
    setListBurger([]);
    navigate("/");
  };
  const datos = listBurger.map((item, index) => item.price);
  const totalApagar = datos.reduce((prev, act) => prev + act, 0);
  return (
    <div className="button-bottom">
      <p>
        {listBurger.map((item, index) => (
          <section key={index}>
            <div className="burger-text">
              <span>
                {item.hamburger} X {index + 1}{" "}
              </span>
              <span> = {item.price}$ </span>
            </div>
          </section>
        ))}
        <h2> Total {totalApagar}$ </h2>
        <button className="button" onClick={back}>
          {" "}
          Return to builder
        </button>
        <button className="button" onClick={newBuy}>
          {" "}
          Reset{" "}
        </button>
      </p>
    </div>
  );
};

export default Receipt;
