import React from 'react'
import Carousel from "react-material-ui-carousel"
import classes from "./CarouselContainer.module.css"
import BooksImg from "../../assets/images/Books.png"
import BooksImg1 from "../../assets/images/Book1.png"

function CarouselContainer() {
    return (
        <div className={classes.CarouselContainer}>
            <Carousel autoPlay={true} animation="fade" interval="3000">
                <div className={classes.Box}>

                    <div className={classes.content}>
                        <h1>Featured Books of February</h1>
                        <p>A must-have, one-of-a-kind, limited presentation-case edition of worldwide bestseller Elizabeth Gilbert's Big Magic, each bound in unique art by watercolor rock star Lourdes Sanchez.</p>
                        <button className={classes.button}>See More</button>
                    </div>
                    <div className={classes.Bookimg} >
                        <img alt="Books"  src={BooksImg} />
                    </div>

                </div>
                <div className={classes.Box}>

                    <div className={classes.content}>
                        <h1>The Best Books</h1>
                        <h2>Sale up to 30% off</h2>
                        <p>If you are looking for specific books, then you can use filters to find specific books online. Whether you are looking for literary work by your favorite authors, publishers, or specific titles, you can find them all in one place. </p>
                        <button className={classes.button}>Shop Now</button>
                    </div>
                    <div className={classes.Bookimg}>
                        <img alt="Books" src={BooksImg1} style={{marginTop: "50px"}}/>
                    </div>

                </div>
                <div className={classes.Box}>

                    <div className={classes.content}>
                        <h3>Special Offers</h3>
                        <h1>30% Discount On Books Learn Language</h1>
                        <p>Cursus eget nunc scelerisque viverra mauris in aliquam sem. Dis parturient montes nascetur ridiculus mus. Ut consequat semper viversit amet</p>
                        <button className={classes.button}>Shop Now</button>
                    </div>
                    <div className={classes.Bookimg}>
                        <img alt="Books" src={BooksImg1} style={{marginTop: "50px"}}/>
                    </div>

                </div>

            </Carousel>

        </div>
    )
}

export default CarouselContainer