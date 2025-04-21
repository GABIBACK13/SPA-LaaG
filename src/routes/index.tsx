import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AddFlash from "../pages/addFlash";
import AwserFlash from "../pages/awserFlash";
import Collections from "../pages/collections";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/add" element={<AddFlash />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id/flash/:flash_id" element={<AwserFlash />} />
    </Routes>
  );
}
