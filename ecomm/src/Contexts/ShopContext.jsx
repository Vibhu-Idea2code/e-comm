import React, { createContext } from "react";
import all_product from '../Components/Assests/all_product';
import { buildQueries } from "@testing-library/react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

