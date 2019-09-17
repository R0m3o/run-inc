import React from 'react';
import ShoeOne from '../assets/images/shoe.01.jpg';
import ShoeTwo from '../assets/images/shoe.02.jpg';
import ShoeThree from '../assets/images/shoe.03.jpg';
import ShoeFour from '../assets/images/shoe.04.jpg';


const Shop = () => {
    return (  
        <div className="row">
            <section className="col-md-12">
                <div className="row">
                    <div className="col-md-3 yellow-box">
                        <article>
                            <h2>SHOP</h2>
                            <h3>RUNINC SHOP</h3>
                            <p>Free shipping at over 500dkr</p>
                            <nav>
                                <ol>
                                    <li><a href="#">Nike</a></li>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Asics</a></li>
                                    <li><a href="#">Hummel</a></li>
                                </ol>
                            </nav>
                        </article>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4 offset-md-8">
                                <p className="bookmark">SHOP</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 shop-item">
                                <img src={ShoeOne} alt="shoes" className="img-fluid"/>
                                <p className="item-description">Puma Highland 3000 - brown</p>
                            </div>
                            <div className="col-md-4 shop-item">
                                <img src={ShoeTwo} alt="shoes" className="img-fluid"/>
                                <p className="item-description">Asics Free Street</p>
                            </div>
                            <div className="col-md-4 shop-item">
                                <img src={ShoeThree} alt="shoes" className="img-fluid"/>
                                <p className="item-description">New Balance Runner Bounce</p>
                            </div>
                            <div className="col-md-4 shop-item">
                                <img src={ShoeFour} alt="shoes" className="img-fluid"/>
                                <p className="item-description">New Balance New York 2018</p>
                            </div>
                            <div className="col-md-4 shop-item">
                                <img src={ShoeOne} alt="shoes" className="img-fluid"/>
                                <p className="item-description">Puma Highland 3000 - brown</p>
                            </div>
                            <div className="col-md-4 shop-item">
                                <img src={ShoeFour} alt="shoes" className="img-fluid"/>
                                <p className="item-description">New Balance New York 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Shop;