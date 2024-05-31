import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import FreeTrialPage from "./pages/FreeTrialPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/freetrial" element={<FreeTrialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
