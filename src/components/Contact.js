import React from 'react'

const Contact = () => {
    return (  
        <div className="row contact-content">
            <section className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row map-img-box">
                            <div className="col-md-9 yellow-box">
                                <p className="bookmark text-dark text-right">CONTACT</p>
                            </div>
                        </div>
                        <div className="row black-box">
                            <article className="col-md-4 offset-md-4 text-white text-center">
                                <h2>RUNINC</h2>
                                <p>Kannikegade 12</p>
                                <p>8000 Aarhus C</p>
                                <p>Phone 26 13 26 96</p>
                                <p>info@runinc.dk</p>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <form className="col-md-8 offset-md-2">
                                <h2>SEND A MESSAGE</h2>
                                <label>NAME:</label>
                                <input type="text" className="yellow-box border-black"/>
                                <label>EMAIL:</label>
                                <input type="text" className="yellow-box border-black"/>
                                <label>PHONE NUMBER:</label>
                                <input type="text" className="yellow-box border-black"/>
                                <label>MESSAGE:</label>
                                <textarea name="" id="" cols="30" rows="10" className="yellow-box border-black"></textarea>
                                <button className="border-black text-white black-box">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Contact;