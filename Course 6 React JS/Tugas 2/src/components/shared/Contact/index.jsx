export default function Contact(){
    return(
        <>
        <section id="contact" className="py-5">
        <div className="container">
            <h2 className="fw-bold text-center mb-5">Contact Us</h2>

            <div className="row">
            <div className="col-md-6">
                <h5>Get in Touch</h5>
                <p>Email: bookstore@gmail.com</p>
                <p>Phone: 082134059671</p>
                <p>Address: Surabaya, Indonesia</p>
            </div>

            <div className="col-md-6">
                <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}    
    
    