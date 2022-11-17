import { burgerType } from "../types/type";

const initialState = []

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case burgerType.ADD_BURGER:
      /** Se agregan nuevos elementos al arreglo
       * OJO: la acción debe contener una propiedad 'price'
       * que contiene información
       */
      const newState = state.concat([action.price])
      return newState;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}