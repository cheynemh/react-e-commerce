import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getProducts, updateProduct } from "../../services/crud";
import { Link } from "react-router-dom";
import Button from "../Button";
import Favourite from "../Favourite";
// import Toggle from "react-bootstrap-toggle";

// const Favourite = (product) => {
//     const [favourite, setFavourite] = useState(product.favorited);
//     console.log(favourite);

//     const handleSubmit = async (event) => {
//         setFavourite(!favourite);
//         const partial = {
//             favourited: favourite,
//         };
//         await updateProduct(product.id, partial);
//         onSubmit();
//     };

//     const classes = favourite ? styles.Favourited : styles.Unfav;

//     // const [checked, setChecked] = useState(product.favorite);
//     // console.log(checked);

//     // const toggleFavorite = async (product) => {
//     //     const partial = {
//     //         favourite: !product.favourite,
//     //     };
//     //     await updateProduct(product.id, partial);
//     //     onSubmit();
//     // };

//     return (
//         // <div className={styles.Favourite}>
//         //     <svg
//         //         onClick={handleSubmit}
//         //         width="24"
//         //         height="24"
//         //         viewBox="0 0 24 24"
//         //     >
//         //         <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
//         //     </svg>
//         // </div>

//         <button value={favourite} onClick={handleSubmit}>
//             Favourite{product.favourited}
//         </button>
//     );
// };

const ProductCard = ({ product, onSubmit }) => {
    // const [product, setProduct] = useState("");
    const [favourite, setFavourite] = useState(product.favorited);

    const handleSubmit = async (event) => {
        setFavourite(!favourite);
        const partial = {
            favourited: favourite,
        };
        await updateProduct(product.id, partial);
        onSubmit();
    };

    const classes = favourite ? styles.Favourited : styles.Unfav;
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
                <button value={favourite} onClick={handleSubmit}>
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

    console.log(products);

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
                            onSubmit={handleSubmit}
                            product={product}
                            key={id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Products;
