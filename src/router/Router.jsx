import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Builder from "../components/Builder";
import Receipt from "../components/Receipt";

export const Context = createContext({});

const Router = () => {
  const [listBurger, setListBurger] = useState([]);

  return (
    <Context.Provider
      value={{
        listBurger,
        setListBurger,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Builder />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default Router;
