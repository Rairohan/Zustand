import CartList from "./component/Cart/CartList";
import CartCount from "./component/Cart/CartCount";
import ProductList from "./component/Cart/ProductList";

export default function App(){
  return(
    <div>
        <CartList/>
        <CartCount/>
        <ProductList/>
    </div>
  )
}