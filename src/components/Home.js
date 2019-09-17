import React from 'react';
import HomeContent from './HomeContent';
import Events from './Events';
import Shop from './Shop';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="row">
            <section className="col-md-12">
                <HomeContent/>
            </section>
            <section className="col-md-12">
                <Events/>
            </section>
            <section className="col-md-12">
                <Shop/>
            </section>
            <section className="col-md-12">
                <Contact/>
            </section>
        </div>  
    );
}
 
export default Home;