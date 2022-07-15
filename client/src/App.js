import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authRoutes, userRoutes } from "./routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./store/reducers/authSlice";
import { DefaultLayout } from "./layouts";
import UserRoute from "./routes/UserRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {authRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Page authRoute={route.path} />}></Route>
          );
        })}
        <Route element={<UserRoute />}>
          {userRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout route={route}>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
