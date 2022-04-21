import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState={
  products:[
   {id:1,name:"Producto",price:100},
   {id:2,name:"Producto",price:200},
   {id:3,name:"Producto",price:300},
   {id:4,name:"Producto",price:400},
   {id:5,name:"Producto",price:500},
   {id:6,name:"Producto",price:600},
  
  ],
  cart:[],
}

export function shoppingReducer(state,action){
switch (action.type) {
  case TYPES.ADD_TO_CART:{
let newItem= state.products.find((product)=>product.id===action.payload);

   //console.log(newItem)
   
   let itemCart=state.cart.find((item)=>item.id===newItem.id)
//console.log(state.cart)
 return itemCart
 ?{
   ...state,
   cart:state.cart.map((item)=>item.id===newItem.id
   ?{...item,quantity:item.quantity + 1}:item),
 }
 :{
   ...state,
   cart:[...state.cart,{...newItem,quantity:1}]
 }

}
  case  TYPES.REMOVE_ONE_FROM_CART:{
  let itemDelete=state.cart.find((item)=>item.id===action.payload);
  //console.log(itemDelete)
 return itemDelete.quantity>1
  ?{
    ...state,
    cart:state.cart.map((item)=>item.id===action.payload?{...item,quantity:item.quantity-1}:item)
  }
    :{
      ...state,
      cart:state.cart.filter((item)=>item.id!==action.payload),
    };
  return{
    ...state
  }
    
  }
  case TYPES.REMOVE_ALL_FROM_CART:{
 //let newItem= state.products.find((product)=>product.id===action.payload);
   let newCart=state.cart.filter((el)=>el.id!==action.payload)
    return {...state,
      cart:[...newCart],
    }
  }
  case TYPES.CLEAR_CART:    
return shoppingInitialState
  default:
  return state;
}
}