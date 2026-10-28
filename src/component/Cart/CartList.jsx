import { useCart } from "../../store/useCart";

export default function CartList() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);

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
    </div>
  );
}