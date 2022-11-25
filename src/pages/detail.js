import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";

export default function ProductDetail() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios(
          "https://wefootwear-api.herokuapp.com/items?slug=" + slug
        );
        setData(results.data[0]);
      } catch (err) {}
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h2 className="product-title">Product Details</h2>
      {data && (
        <div className="detail">
          <img
            className="detail-image"
            src={data.prop[0].image[0]}
            alt={data.name}
          />
          <div className="detail-content">
            <p className="detail-blur">
              {data.type.name} {">"} {data.category.name}
            </p>
            <h3 className="detail-name">{data.name}</h3>
            <p className="detail-blur">{data.color}</p>
            <p className="detail-price">Rp {data.price}</p>
          </div>
        </div>
      )}
    </>
  );
}
