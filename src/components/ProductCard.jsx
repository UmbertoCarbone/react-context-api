import { Link } from "react-router-dom";

export default function ProductCard({ product, renderStars, getDisplayCount }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card h-100">
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <img src={product.image} className="card-img-top p-3" alt={product.title}style={{ height: "200px", objectFit: "contain" }}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} €</p>
                    <div>
                        {renderStars && renderStars(product.rating.rate, product.id)}
                        <span className="ms-2 text-muted">
                            {getDisplayCount && `(${getDisplayCount(product)} voti)`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}