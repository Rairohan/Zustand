import {useCart} from "../../store/cartStore";
export default function CartCounter(){
    const count = useCart((state)=>state.items.length)
    console.log("cart rendered")

    return(
        <h1>Cart: {count}</h1>
    )
}