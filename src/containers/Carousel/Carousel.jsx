import styles from "./Carousel.module.scss";

import Carousel from "react-bootstrap/Carousel";

import slide01 from "./img/keeb.jpg";
import slide02 from "./img/headset.png";
import slide03 from "./img/mint.jpg";
import slide04 from "./img/mirror.jpg";

const Caro = () => {
    return (
        <div className={styles.carousel}>
            <Carousel>
                <Carousel.Item interval={6000}>
                    {/* <Carousel.Item> */}
                    <img src={slide01} alt="First slide" />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img src={slide02} alt="Second slide" />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={slide03} alt="Third slide" />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={slide04} alt="Fourth slide" />
                    <Carousel.Caption>
                        {/* <h3>Fourth slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Caro;
