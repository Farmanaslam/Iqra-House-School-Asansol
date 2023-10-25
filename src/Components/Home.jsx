import { Button } from "bootstrap";
import admission_open from "/images/admission_open.png";
function Home() {
  return (
    <section id="home" className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <h4 className="h1" style={{ fontSize: "50px" }}>
              {" "}
              Welcome to <span></span> <span id="spin"></span>{" "}
            </h4>
            <div className="row">
              <div className="col-md-6 text-center">
                <p id="hp">
                  Iqra House is an English Medium Public School, located at
                  Railpar Naya Mohalla Asansol-2. Our Play school is concerned
                  with the early development of children and introducing them to
                  structured learning through a systematic way.
                </p>
                <img src={admission_open} style={{ width: "300px" }}></img>
                <div className="mt-3"><a className="btn btn-info" href="/admission" to="/admission">Click here to know more...</a></div>
              </div>
              <div className="col-md-6">
                <div id="carouselExample" className="carousel slide active">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="banner/1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="banner/2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="banner/3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="banner/4.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
