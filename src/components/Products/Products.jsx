import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getProducts, updateProduct } from "../../services/crud";
import { Link } from "react-router-dom";
import Button from "../Button";

const ProductCard = ({ product }) => {
    // const [product, setProduct] = useState("");

    // const handleChange = (event) => {
    //     setProduct(event.target.value);
    // };

    return (
        <div className={styles.ProductCard}>
            <Link to={`/product/${product.id}`}>
                <img
                    className={styles.ProductCard__image}
                    src={product.img}
                    alt="product"
                />
                <Button />
                <p className={styles.ProductCard__name}>{product.name}</p>
            </Link>
            <p className={styles.ProductCard__price}>{product.price}</p>
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
            <div className={styles.Products__flex}>
                {products &&
                    products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default Products;
