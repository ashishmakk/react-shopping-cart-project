import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    // Creating a copy of cart to avoid mutating original cart state

    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const currentItem = newCart.get(itemId);
    const updatedItem = { ...currentItem, amount: currentItem.amount + 1 };
    newCart.set(itemId, updatedItem);

    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const currentItem = newCart.get(itemId);

    if (currentItem.amount === 1) {
      newCart.delete(itemId);

      return { ...state, cart: newCart };
    }

    const updatedItem = { ...currentItem, amount: currentItem.amount - 1 };

    newCart.set(itemId, updatedItem);

    return { ...state, cart: newCart };
  }

  return null;
};

export default reducer;
