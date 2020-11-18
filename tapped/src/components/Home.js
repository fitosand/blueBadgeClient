import React, { useState, useEffect } from "react";
import "../App.css";
import Desserts from "./Desserts";
import Meals from "./Meals";
import Drinks from "./Drinks";

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [mPoints, setMPoints] = useState([]);
  const [drPoints, setdrPoints] = useState([]);
  const [dePoints, setdePoints] = useState([]);

  const fetchItems = async () => {
    // ***** MEAL POINTS **** //
    // const data = await fetch("http://localhost:3000/log/stats/2");
    const data = await fetch("https://swapi.dev/api/people/1/");
    const items = await data.json();
    console.log(items.mass);
    setMPoints(items.mass);

    // ***** DRINKS POINTS **** //
    // const data = await fetch("http://localhost:3000/log/stats/2");
    const data2 = await fetch("https://swapi.dev/api/people/2/");
    const items2 = await data2.json();
    console.log(items2.mass);
    setdrPoints(items2.mass);

    // ***** DESSERT POINTS **** //
    // const data = await fetch("http://localhost:3000/log/stats/2");
    const data3 = await fetch("https://swapi.dev/api/people/3/");
    const items3 = await data3.json();
    console.log(items3.mass);
    setdePoints(items3.mass);
  };

  return (
    <div className="Center">
      <Meals mPoints={mPoints} />
      <Drinks drPoints={drPoints} />
      <Desserts dePoints={dePoints} />
    </div>
  );
}

export default Home;
