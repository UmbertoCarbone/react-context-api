import ProductCard from "./ProductCard";

export default function ProductGrid({ products, renderStars, getDisplayCount }) {
    return (
        <div className="row">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    renderStars={renderStars}
                    getDisplayCount={getDisplayCount}
                />
            ))}
        </div>
    );
}