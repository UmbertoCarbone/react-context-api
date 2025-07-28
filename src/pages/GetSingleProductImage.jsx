import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Error404 from "../layouts/Error404";

export default function GetSingleProductsPage() {
    const { id } = useParams();

    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});
    /* error 404 */
    const [loading, setLoading] = useState(true);
    /* Error 404 */
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const currentId = parseInt(id);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(api_url)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [api_url]);

    if (loading) return <div className="text-center mt-5">Caricamento...</div>;
    if (error || !product.id) return <Error404 />;



    return (
        <div className="container" style={{ paddingTop: "80px" }}>
            <div className="card h-100">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "300px", objectFit: "contain" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} €</p>
                    <div>
                    </div>
                    <p className="mt-3">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate(`/products/${currentId - 1}`)}
                            disabled={currentId <= 1}
                        >
                            Indietro
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/products")}
                        >
                            Torna alla lista
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate(`/products/${currentId + 1}`)}
                            disabled={currentId >= 20}
                        >
                            Avanti
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
