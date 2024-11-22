import { useEffect, useState } from "react";
import Popup from "../../components/Popup";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
// import Subscribe from "./Subscribe";

const Home = () => {
  const startDate = new Date('2024-11-22T18:00:00');
  const endDate = new Date('2024-11-29T18:00:00');
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const currentDate = new Date();
    if (currentDate >= startDate && currentDate <= endDate) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [startDate, endDate]);

  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      {isOpen && <Popup />}
      {/* <Subscribe /> */}
    </div>
  );
};

export default Home;
