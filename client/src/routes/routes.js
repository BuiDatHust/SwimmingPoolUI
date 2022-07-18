import {
  HomePage,
  LoginPage,
  BuyTicketPage,
  BuyItemPage,
  CartPage,
} from "../pages";

// Auth routes
const authRoutes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: LoginPage },
];

// User routes
const userRoutes = [
  { path: "/", component: HomePage, title: "Trang chủ" },
  { path: "/tickets", component: BuyTicketPage, title: "Mua vé" },
  { path: "/items", component: BuyItemPage, title: "Mua đồ bơi" },
  { path: "/cart", component: CartPage, title: "Giỏ hàng" },
];

export { authRoutes, userRoutes };
