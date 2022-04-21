const ProductItem = ({data,addToCart}) => {

  const {name,price,id} =data;
  return ( 
    <div style={{border:"thin solid gray",padding:"1rem"}}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={()=>addToCart(id)}>Agregar</button>
    </div>
   );
}
 
export default ProductItem;