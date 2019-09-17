import React from 'react'

const Contact = () => {
    return (  
        <div className="row">
            <section className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-9 black-box">
                                <p className="bookmark">CONTACT</p>
                            </div>
                        </div>
                        <div className="row black-box">
                            <article>
                                <h2>RUNINC</h2>
                                <p>Kannikegade 12</p>
                                <p>8000 Aarhus C</p>
                                <p>Phone 26 13 26 96</p>
                                <p>info@runinc.dk</p>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <h2>SEND A MESSAGE</h2>
                            <label>NAME:</label>
                            <input type="text"/>
                            <label>EMAIL:</label>
                            <input type="text"/>
                            <label>MESSAGE</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Contact;