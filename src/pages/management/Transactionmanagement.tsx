import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import {orderInfo, orderItemType} from "../../types"
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: orderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const Transactionmanagement = () => {

  const [order,setOrder] = useState<orderInfo>({
    name:"ajith",
    address:"pinovar street",
    city:"warangal",
    state:"Teleangana",
    country:"india",
    pinCode:506002,
    status:"Processing",
    subtotal:4000,
    discount:1200,
    shippingCharges:0,
    tax:200,
    total:4+200+0-1200,
    orderItems,
    _id:"dsfad3f54dsf5a",
  });

  const {name,address,city,country,pinCode,status,
  discount,shippingCharges,tax,total} = order;

  const updateHandler=()=>{
      setOrder(prev => ({
        ...prev,
        status:prev.status === "Processing" ? "Shipped" : "Delivered"
      }))
  }

  return (
     <div className="adminContainer">
      <AdminSidebar/>
      <main className="productmanagement">

        <section 
        style={{
          padding:"2rem",
        }}>
          <h2>Order Items</h2>
          {
            order.orderItems.map( (i) => (
              <Productcard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
              />
          ))
          }

        </section>

        <article className="shippinginfocard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name : {name}</p>
          <p>Address : {`${address}, ${city}, ${country}, ${pinCode}`}</p>
          
          <h5>Amount Info</h5>
          <p>Subtotal : {shippingCharges}</p>
          <p>Tax : {tax}</p>
          <p>Discount : {discount}</p>
          <p>Total : {total}</p>

          <h5>Status Info</h5>
          <p>Status :{" "}
             <span className=
              {status === "Delivered" 
                  ? "purple" 
                  : status === "Shipped"
                  ?"green" 
                  : "red"
                  }
                >{status}
              </span>
             </p>

             <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}

const Productcard = ({name,photo,price,quantity,_id}:orderItemType) => (
  <div className="transactionproductcard" >
    <img src={photo} alt={name}></img>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X {quantity} = {price*quantity}</span>
  </div>
)

export default Transactionmanagement
