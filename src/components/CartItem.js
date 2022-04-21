const CartItem = ({data,delFromCart}) => {
  let {name,price,quantity,id}=data
  return ( 
    <div style={{borderBottom:"thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}</h5>
      <button onClick={()=>delFromCart(id)} >Eliminar</button>
      <button onClick={()=>delFromCart(id,true)}>Eliminar Todos</button>
      <br/>
      <br/>
      </div>
   );
}
 
export default CartItem;