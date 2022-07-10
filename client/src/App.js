import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./store/reducers/authSlice";
import { DefaultLayout } from "./layouts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route key={index} path={route.path} element={<Page />}></Route>
          );
        })}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map((route, index) => {
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
