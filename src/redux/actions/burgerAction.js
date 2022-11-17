import { burgerType } from "../types/type";

 export const confirmBurger = price => ({
    type: burgerType.ADD_BURGER,
    price
    /** Se debe mandar información junto con la acción */
  })