import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="grid grid-cols-4 gap-8">

     <RevenueCard title={"Revenue Card"} orderCount={13} amount={"93,312.20"}/>
     <RevenueCard title={"Revenue Card"} orderCount={13} amount={"93,312.20"}/>
     <RevenueCard title={"Revenue Card"} orderCount={13} amount={"93,312.20"}/>
    </div>
    </>
  );
}

export default App;
