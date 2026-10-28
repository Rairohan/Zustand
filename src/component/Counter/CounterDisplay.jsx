import { useCounterStore } from "../../store/useCounterstore";
export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  console.log("display rendered");
  return <h1>Count: {count}</h1>;
}
