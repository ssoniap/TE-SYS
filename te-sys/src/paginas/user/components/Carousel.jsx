import img1 from "../../../assets/images/producto2.png";
import img2 from "../../../assets/images/producto2.png";
import img3 from "../../../assets/images/producto2.png";

const Carousel = () => {
    return(
        <div className="container-fluid">
        <div className="">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <h5>Equipo 1</h5>
                    <img src={img1} className="d-block w-100"  width="500" height="500" alt="..." />
                    <div className="carousel-caption d-none d-md-block mt-5">                    
                    <p>{new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <h5>Equipo 2</h5>
                <img src={img2} className="d-block w-100"  width="500" height="500" alt="..." />
                <div className="carousel-caption d-none d-md-block">                
                <p>{new Date().getFullYear()}</p>
            </div>
        </div>
        <div className="carousel-item">
            <h5>Equipo 3</h5>
            <img src={img3} className="d-block w-100"  width="500" height="500" alt="..." />
            <div className="carousel-caption d-none d-md-block">            
            <p>{new Date().getFullYear()}</p>
        </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </div>
    )
}

export default Carousel;