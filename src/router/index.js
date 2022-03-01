import { Route, Routes } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../views/404";
import Home from "../views/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
