import { useCart } from "../../store/useCart";
import { products } from "./products";
export default function ProductList(){
    const addItem = useCart((state)=>state.addItem)
   
    return(
        <div>
            <h1>Products</h1>
            <ol>
                {products.map((product)=>
                (   
                     <li key={product.id}> 
                        {product.name} - ${product.price} 
                        <button onClick={()=>{addItem(product)}}>Add item</button> 
                    </li>      
                )
            )}
            
            </ol>
        </div>
    )
}