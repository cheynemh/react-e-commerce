import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../services/crud";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const populateProduct = async () => {
            const data = await findProduct(id);
            setProduct(data);
        };

        populateProduct();
    }, [id]);

    if (!product) {
        return (
            <h1 className={styles.Product}>
                product has not been wished for.. yet.
            </h1>
        );
    }

    return (
        <div className={styles.Product}>
            <div className={styles.elem}>
                <img
                    className={styles.image}
                    src={product.img}
                    alt={product.name}
                />
            </div>
            <div className={styles.textEl}>
                <h1>{product.name}</h1>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.colour__purple}>{product.colour}</p>
                <p className={styles.cartButton}>add to cart</p>
                <p className={styles.desc}>{product.desc}</p>
            </div>
        </div>
    );
};

export default Product;
