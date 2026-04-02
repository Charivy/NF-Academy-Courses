function App() {

  return (
    <>
      {/* Header */}
      <div className="container" bis_skin_checked="1"> 
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
          <div className="col-md-3 mb-2 mb-md-0" bis_skin_checked="1"> 
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
              <i className="fa-solid fa-book fa-lg" style={{ color: "#74C0FC"}}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div> 
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
            <li><a href="#" className="nav-link px-2">Home</a></li> 
            <li><a href="#" className="nav-link px-2">Book</a></li> 
            <li><a href="#team" className="nav-link px-2">Team</a></li> 
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul> 
          <div className="col-md-3 text-end" bis_skin_checked="1"> 
            <button type="button" className="btn btn-outline-primary me-2">Login</button> 
            <button type="button" className="btn btn-primary">Register</button> 
          </div> 
        </header>
      </div>

    {/* Hero */}
    <div className="container m-5 mx-auto" bis_skin_checked="1"> 
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg" bis_skin_checked="1"> 
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" bis_skin_checked="1"> 
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Lord of the Mysteries</h1> 
          <p className="lead">Petualangan Klein Moretti di dunia penuh misteri, ritual, dan kekuatan supranatural.</p> 
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3" bis_skin_checked="1"> 
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button> 
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button> 
          </div> 
        </div> 
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" bis_skin_checked="1"> 
            <img className="img-fluid rounded-3" src="https://noveldrama.org/media/novel/lord-of-the-mysteries.jpg" alt="" width="100%"/>
        </div> 
      </div> 
    </div>

    {/* Product List */}
    <section className="py-5 text-center container"> 
      <div className="row py-lg-5" bis_skin_checked="1"> 
        <div className="col-lg-6 col-md-8 mx-auto" bis_skin_checked="1"> 
          <h1 className="fw-light">Best Seller Book</h1> 
          <p className="text-muted">Temukan buku terbaik pilihan pembaca untuk meningkatkan pengetahuan dan inspirasi Anda.</p> 
          <p> 
            <a href="#" className="btn btn-primary my-2 m-2">Views</a> 
            <a href="#other-books" className="btn btn-secondary my-2 m-2">Other Books</a> 
          </p> 
        </div> 
      </div> 
    </section> 
    <div id="other-books" className="album py-5 bg-body-tertiary" bis_skin_checked="1"> 
      <div className="container" bis_skin_checked="1"> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" bis_skin_checked="1"> 
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81F90H7hnML.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>Atomic Habits</h5> 
                <p className="card-text">Buku karya James Clear ini membahas bagaimana kebiasaan kecil yang dilakukan secara konsisten dapat memberikan perubahan besar dalam hidup.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp91.800</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div> 
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>Rich Dad Poor Dad</h5> 
                <p className="card-text">Ditulis oleh Robert Kiyosaki, buku ini mengajarkan perbedaan pola pikir antara orang kaya dan orang miskin dalam mengelola keuangan.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp78.000</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>The Psychology of Money</h5> 
                <p className="card-text">Buku karya Morgan Housel ini menjelaskan bagaimana emosi dan perilaku manusia mempengaruhi keputusan finansial.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp75.000</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>Think and Grow Rich</h5> 
                <p className="card-text">Ditulis oleh Napoleon Hill, buku ini membahas mindset sukses dan cara mencapai kekayaan melalui pikiran positif.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp77.500</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>Deep Work</h5> 
                <p className="card-text">Karya Cal Newport ini mengajarkan pentingnya fokus mendalam untuk menghasilkan pekerjaan berkualitas tinggi.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp105.000</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="col" bis_skin_checked="1"> 
            <div className="card shadow-sm" bis_skin_checked="1"> 
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg" 
                className="card-img-top img-fluid"
                style={{ height: "590px", objectFit: "cover" }} 
                alt="book"
              /> 
              <div className="card-body" bis_skin_checked="1">
                <h5>Ikigai</h5> 
                <p className="card-text">Buku oleh Héctor García dan Francesc Miralles ini membahas rahasia hidup bahagia dan panjang ala orang Jepang.</p> 
                <div className="d-flex justify-content-between align-items-center" bis_skin_checked="1"> 
                  <div className="btn-group" bis_skin_checked="1"> 
                    <button type="button" className="btn btn-sm btn-primary">Detail</button>
                    <button type="button" className="text-muted">Rp69.000</button> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
        </div> 
      </div> 
    </div>

    {/* Contact */}
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

    {/* Teams */}
    <section id="team" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Team</h2>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src="https://ui-avatars.com/api/?name=Your+Name&background=random" className="rounded-circle mb-3" width="150" alt="team" />
              <h5>Ahmad</h5>
              <p className="text-muted">Frontend Developer</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src="https://ui-avatars.com/api/?name=Your+Name&background=random" className="rounded-circle mb-3" width="150" alt="team" />
              <h5>Azmiy</h5>
              <p className="text-muted">Backend Developer</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src="https://ui-avatars.com/api/?name=Your+Name&background=random" className="rounded-circle mb-3" width="150" alt="team" />
              <h5>Fawwaz</h5>
              <p className="text-muted">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
    <footer className="py-3 my-4"> 
      <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li> 
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li> 
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li> 
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li> 
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> 
      </ul> 
      <p className="text-center text-body-secondary">© 2026 NF Academy</p> 
    </footer>
    </>
  )
}

export default App


