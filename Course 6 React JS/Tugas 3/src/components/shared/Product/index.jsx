import { useState } from "react"
import books from "../../../Utils/books.js"

export default function Product(){

    const [data, setData] = useState(books);
    return(
        <>
            <section className="py-5 text-center container"> 
                <div className="row py-lg-5" bis_skin_checked="1"> 
                    <div className="col-lg-6 col-md-8 mx-auto" bis_skin_checked="1"> 
                    <h1 className="fw-light">Best Seller Book</h1> 
                    <p className="text-muted">Temukan buku terbaik pilihan pembaca untuk meningkatkan pengetahuan dan inspirasi Anda.</p> 
                    <button 
                    style={{
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "500",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                    className="btn btn-succes m-2"
                    onClick={() => 
                        setData([...data,
                            {
                                id: data.length + 1,
                                title: "Buku Baru",
                                author: "Anonim",
                                year: 2025,
                                description: "Buku Baru Rilis",
                                image: "https://placehold.co/400x600"
                            }
                        ])
                    }
                    >Tambah Buku</button>
                    <p> 
                        <a href="#" className="btn btn-primary my-2 m-2">Views</a> 
                        <a href="#other-books" className="btn btn-secondary my-2 m-2">Other Books</a> 
                    </p> 
                    </div> 
                </div> 
            </section>

            

            <div id="other-books" className="album py-5" bis_skin_checked="1"> 
            <div className="container" bis_skin_checked="1"> 
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" bis_skin_checked="1"> 
                    {data.map((book) => 
                        <div className="col" key={book.id}>
                            <div className="card shadow-sm">
                                <img
                                    src={book.image}
                                    className="card-img-top"
                                    style={{ height:"300px", objectFit:"cover" }}
                                    alt={book.title}
                                />
                                <div className="card-body">
                                    <h5>{book.title}</h5>
                                    <p>{book.description}</p>
                                    <small>{book.author} ({book.year})</small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div> 
            </div>
        </>
    )
}