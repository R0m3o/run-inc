import React from 'react'

const Events = () => {
    return (  
        <div className="row events-content">
            <section className="col-md-12">
                <div className="row">
                    <div className="col-md-9 events-img-box">
                        <div className="row">
                            <div className="col-md-8 black-box text-right">
                                <p className="bookmark text-white">NEXT EVENT</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 yellow-box">
                        <article>
                            <h2>Events</h2>
                            <h3>COPENHAGEN <br/> MARATHON</h3>
                            <p>The 29th may 2018</p>
                            <h4>AARHUS CITY RUN</h4>
                            <p>The 1th of june 2018</p>
                            <h4>BERLIN MARATHON</h4>
                            <p>The 6th of june 2018</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Events;