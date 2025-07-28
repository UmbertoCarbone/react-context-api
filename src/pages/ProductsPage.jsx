import { useState, useEffect, useContext } from "react";
import ProductGrid from "../components/ProductGrid";
import { useProductContext } from "../context/ProductContext";


export default function ProductsPage() {
    const { products } = useProductContext();
    const [userRatings, setUserRatings] = useState({});


    function renderStars(rate, productId) {
        const current = userRatings[productId];
        const currentRating = current ? current.rating : Math.round(rate);

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{ color: i <= currentRating ? "#ffc107" : "#e4e5e9", cursor: "pointer", fontSize: "1.2em" }}
                    onClick={() => handleStarClick(productId, i)}>★
                </span>
            );
        }
        return stars;
    }

    function handleStarClick(productId, rating) {
        setUserRatings(prev => {
            const prevData = prev[productId];
            return {
                ...prev,
                [productId]: {
                    rating,
                    count: prevData ? prevData.count + 1 : 1
                }
            };
        });
    }

    function getDisplayCount(product) {
        const local = userRatings[product.id];
        if (local) {
            return product.rating.count + local.count;
        }
        return product.rating.count;
    }

    return (
        <>
            <main className="container" style={{ paddingTop: "80px" }}>
                <h1 className="text-center">Products</h1>
                <ProductGrid
                    products={products}
                    renderStars={renderStars}
                    getDisplayCount={getDisplayCount}
                />
            </main>
        </>
    );
}