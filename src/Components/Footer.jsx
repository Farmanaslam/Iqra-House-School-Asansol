function Footer() {
  return (
    <footer id="footer" className="container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <div className="row py-1">
              <div className="col-md-6 text-center text-lg-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61550911354986&mibextid=avESrC"
                  target="_blank"
                  className="fa fa-facebook"
                ></a>
                <a
                  href="https://www.instagram.com/iqrahousecoachingclasses?fbclid=lwAR2lV4alOUDCS0H8_KNyt8VyGesTO4oyiEYj7adYaa4heAWQ-FTgyrKxyZE"
                  target="_blank"
                  className="fa fa-instagram"
                ></a>
                <a
                  href="mailto:iqra.asansol@gmail.com"
                  target="_blank"
                  className="fa fa-envelope"
                ></a>
              </div>
              <div className="col-md-6 text-center text-lg-end">
                &copy; 2023 Iqra House, Asansol
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
