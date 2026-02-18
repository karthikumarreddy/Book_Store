import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Cart } from "../Pages/Cart";
import { FAQs } from "../Pages/FAQs";
import { Search } from "../Pages/Search";
import {BookDetails} from "../Pages/BookDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/search" element={<Search />} />
      <Route path=" /books/:id " element={<BookDetails />} />
    </Routes>
  );
}
export { Routers };
