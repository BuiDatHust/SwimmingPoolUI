import { HomePage, LoginPage, TicketPage } from "../pages";

// Public routes
const publicRoutes = [
  { path: "/login", component: LoginPage, title: "Đăng nhập" },
];

// Private routes
const privateRoutes = [
  { path: "/", component: HomePage, title: "Trang chủ" },
  { path: "/tickets", component: TicketPage, title: "Mua vé" },
];

export { publicRoutes, privateRoutes };
