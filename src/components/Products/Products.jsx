import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getProducts, updateProduct } from "../../services/crud";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    // const [product, setProduct] = useState("");

    // const handleChange = (event) => {
    //     setProduct(event.target.value);
    // };

    return (
        <div className={styles.ProducCard}>
            <Link to={`/product/${product.id}`}>
                <img
                    className={styles.ProductCard_image}
                    src={product.img}
                    alt="product"
                />
                <p>{product.name}</p>
            </Link>
            <p className={styles.price}>{product.price}</p>
        </div>
    );
};

const Products = () => {
    const [products, setProducts] = useState(null);

    const populateProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };
    console.log(products);

    useEffect(() => populateProducts(), []);

    return (
        <div className={styles.Products}>
            <h1>Products</h1>
            <div className={styles.Products__grid}>
                {products &&
                    products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default Products;
