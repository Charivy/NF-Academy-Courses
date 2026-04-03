export default function Hero(){
    return(
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
    )
}