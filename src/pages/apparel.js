import React, { useState, useEffect } from "react";
import axios from "axios";
import ApparelCard from "../components/apparel-card";
import "./apparel.css";

export default function Apparel() {
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("nike-product");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios(
          `https://wefootwear-api.herokuapp.com/categories`
        );
        setCategory(results.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="apparel-section">
      <div className="category-list">
        <h3>Brand Categories</h3>
        {category &&
          category.map((option) => (
            <option
              className="category-title"
              key={option.id}
              value={option.slug}
              onClick={(e) => setSelectedCategory(e.target.value)}
            >
              {option.name}
            </option>
          ))}
      </div>
      {selectedCategory && <ApparelCard data={selectedCategory} />}
    </div>
  );
}
