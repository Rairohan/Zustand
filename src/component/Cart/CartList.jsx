import { useCart } from "../../store/useCart";

export default function CartList() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const clearCart = useCart((state) => state.clearCart);

  const total = items.reduce((runningTotal, item) => {
    return runningTotal + item.price * item.qty;
  }, 0);

  console.log("CartList rendered");

  if (items.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.qty}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ol>
      <h3>Total: {total}</h3>
      <button onClick={clearCart}>Clear</button>
    </div>
  );
}
