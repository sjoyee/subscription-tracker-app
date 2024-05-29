import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { useEffect } from "react";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/create" &&
      !loggedIn
    ) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
