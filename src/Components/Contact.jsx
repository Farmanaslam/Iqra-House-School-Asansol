function Contact() {
  return (
    <section className="container">
      <h1 className="h1"> Contact Us</h1>
      <div className="row py-3">
        <div className="col-md-4">
          <div className="item text-center  my-4">
            <div>
              <i
                className="material-icons"
                style={{ fontSize: "60px", color: "#72aadb" }}
              >
                place
              </i>
            </div>
            Address:- Railpar Naya Mohalla, Asansol-2
          </div>
        </div>
        <div className="col-md-4">
          <div className="item text-center  my-4">
            <div>
              <i
                className="material-icons"
                style={{ fontSize: "60px", color: "#72aadb" }}
              >
                local_phone
              </i>
            </div>
            Phone:- +91 8967863306
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item text-center  my-4">
            <div>
              <i
                className="material-icons"
                style={{ fontSize: "60px", color: "#72aadb" }}
              >
                local_post_office
              </i>
            </div>{" "}
            Email:- iqra.asansol@gmail.com
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.6773778585008!2d86.967096!3d23.696726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f235e7da5c1%3A0x1300905b7e020fa8!2sNaya%20Mohalla%20Punchayat%20Building!5e0!3m2!1sen!2sin!4v1695104828417!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen="allowfullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
export default Contact;
