import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
