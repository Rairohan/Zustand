 import { useCart } from "../../store/useCart";
const products= [
    {id:1,name:"phone",price:"12000"},
    {id:2,name:"charger",price:1200},
    {id:3,name:"car",price:200000}
]
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