import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { withAuthProtection } from "../services/privateRoute.hoc";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/login"));
const Profile = withAuthProtection(lazy(() => import("../pages/Profile")));
const FlashCards = withAuthProtection(lazy(() => import("../pages/FlashCards")));
const Collections = withAuthProtection(lazy(() => import("../pages/FlashCards/collections")));
const AddFlash = withAuthProtection(lazy(() => import("../pages/FlashCards/addFlash")));

export default function MyRoutes() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/FlashCards" element={<FlashCards />} />
        <Route path="FlashCards/collections/add" element={<Collections />} />
        <Route path="FlashCards/collections/:id/cards/add" element={<AddFlash />} />
      </Routes>
    </Suspense>
  );
}
