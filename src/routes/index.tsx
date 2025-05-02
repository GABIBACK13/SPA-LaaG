import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AddFlash from "../pages/FlashCards/addFlash";
import FlashCards from "../pages/FlashCards";
import Collections from "../pages/FlashCards/collections";
import Profile from "../pages/Profile";
import Login from "../pages/login";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/FlashCards" element={<FlashCards />} />
      <Route path="FlashCards/collections/add" element={<Collections />} />
      <Route path="FlashCards/collections/:id/cards/add" element={<AddFlash />} />
    </Routes>
  );
}

/*
  import AwserFlash from "../pages/FlashCards/awserFlash";
  <Route path="flashcards/collections/:id/flash/:flash_id" element={<AwserFlash />} />
collections/add 
collections/:id 
collections/:id/update
collections/:id/card/add
collections/:id/card/:id
*/
