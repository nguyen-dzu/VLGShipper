// AUTH

// AUTH
export interface ISignUp {
  emailAddress: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  roleId: string;
}

export interface IForgot {
  emailAddress: string;
}
export interface IResetPassword {
  emailAddress: string;
  code: string;
  password: string;
  passwordConfirm: string;
}

export interface IProfile {
  FullName: string;
  PhoneNumber: string;
  Avatar: "";
}

export interface ILogin {
  emailAddress: string;
  password: string;
}
export interface IRequest {
  page: number;
  per_page: number;
  q?: string;
}

export interface INewOrder {
  address: string;
  phoneNumber: string;
  note: string;
  shippingFee: number;
  total: number;
  orderStatus: number;
  id: string;
  creator: ICreator;
  orderDetails: [
    {
      orderId: string;
      productId: string;
      amount: number;
      product: IProduct;
    },
    {
      orderId: string;
      productId: string;
      amount: number;
      product: IProduct;
    }
  ];
}

export interface IProduct {
  name: string;
  price: string;
  description: string;
  image: string;
  productTypeId: string;
  restaurantId: string;
  restaurant: Irestaurant
  productType: string;
  id: string;
  createdAt: string;
}
export interface Irestaurant {
  address: string;
  name: string;
  user: {
    phoneNumber: string;
  };
}
export interface ICreator {
  avatar: string;
  createdAt: string;
  emailAddress: string;
  fullName: string;
  id: string;
  phoneNumber: string;
  roleId: string;
}
