import { Routes, Route } from "react-router-dom";

import "App.css";
import Layout from "components/layout/Layout";

import Error from "pages/Error";
import Home from "pages/Home";
import About from "pages/About";
import Login from "pages/Login";
import Signup from "pages/Signup";
import BudgetApp from "app/BudgetApp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<BudgetApp />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
