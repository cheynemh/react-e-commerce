import styles from "./Carousel.module.scss";

import Carousel from "react-bootstrap/Carousel";

import slide01 from "../../images/pink.png";
import slide02 from "../../images/green.png";
import slide03 from "../../images/purple.png";
import slide04 from "../../images/blue.png";

const Caro = () => {
    return (
        <div className={styles.carousel}>
            <Carousel>
                {/* <Carousel.Item interval={4000}> */}
                <Carousel.Item>
                    <img src={slide01} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide02} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide03} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide04} alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Caro;
