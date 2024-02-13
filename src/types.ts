export type orderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

export type orderInfo = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status:"Processing" | "Shipped" | "Delivered";
  subtotal:number;
  discount:number;
  _id: string;
  shippingCharges:number;
  tax:number;
  total:number;
  orderItems:orderItemType[];
};
