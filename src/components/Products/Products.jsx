import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getProducts, updateProduct } from "../../services/crud";
import { Link } from "react-router-dom";
import Button from "../Button";
// import Favourite from "../Favourite";
// import { Heart } from "react-bootstrap-icons";
// import Toggle from "react-bootstrap-toggle";

const ProductCard = ({ product, onSubmit }) => {
    // const [product, setProduct] = useState("");
    const [favourite, setFavourite] = useState(product.favorited);

    const handleSubmit = async (product) => {
        setFavourite(!favourite);
        const partial = {
            favourite: favourite,
        };
        // const partial = {
        //     favourite: !product.favourited;
        // }
        console.log(partial);
        await updateProduct(product.id, partial);
        // onSubmit();

        // console.log(product.favourited);
        console.log(favourite);
    };

    // const classes = favourite ? styles.Favourited : styles.Unfav;
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

            <p>
                <button
                    className={styles.Favourite_btn}
                    value={favourite}
                    onClick={handleSubmit}
                >
                    Favourite{product.favourited}
                </button>
            </p>
        </div>
    );
};

const Products = () => {
    const [products, setProducts] = useState(null);

    const populateProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    // console.log(products);

    useEffect(() => populateProducts(), []);

    const handleSubmit = () => {
        populateProducts();
    };

    return (
        <div className={styles.Products}>
            <h1>Products</h1>
            <div className={styles.Products__flex}>
                {products &&
                    products.map((product, id) => (
                        <ProductCard
                            key={id}
                            onSubmit={handleSubmit}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Products;
