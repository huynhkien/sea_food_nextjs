
"use client"
import Slider from "../ui/public/Slider";
import About from "../ui/public/About";
import Featured_Product from "../ui/public/Featured_Product";
import Deadly from "../ui/public/Deadly";
import ProductPage from "../ui/public/ProductPage";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
 
  return (
    <main >
      <Slider/>
      <Featured_Product/>
      <ProductPage/>
      <Deadly/>
      <About/>
    </main>
  );
}
