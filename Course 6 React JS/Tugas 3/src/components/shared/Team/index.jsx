export default function Team(){
    return(
        <>
        <section id="team" className="py-">
            <div className="container text-center">
            <h2 className="fw-bold mb-4">Our Team</h2>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                <img src="https://ui-avatars.com/api/?name=Your+Nameur+Name&background=random" className="rounded-circle mb-3" width="150" alt="team" />
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
        </>
    )
}