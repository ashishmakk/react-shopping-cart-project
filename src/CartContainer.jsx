import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h3>your bag</h3>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h3>your bag</h3>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;

          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{totalCost} Rs.</span>
          </h5>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
