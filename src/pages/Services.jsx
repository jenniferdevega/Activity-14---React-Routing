function Services(){

    return(
        <section id="services" className="container">
        <h2 className="text-right mb-5 mt-4">Services We Offer</h2>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <a
            href="https://www.barnesandnoble.com/h/affiliates"
            className="text-decoration-none text-black"
            title="Publisher & Author Guidelines"
          >
            Publisher & Author Guidelines
          </a>
          <br />
          <br />
          <p>
            Barnes & Noble is the world's largest bookseller and one of the
            web's most trusted brands. The Barnes & Noble Affiliate Program is a
            way for you to earn commissions by placing products, banner ads or
            text links on your website referring customers to BN.com. You can
            earn commissions on Barnes & Noble's enormous collection of books,
            music, movies, toys, games, magazines, electronics, and NOOK
            products.
          </p>
          <br />

          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">B&N Mobile Apps</h5>
                  <p className="card-text">
                    Enjoy <strong>favorite books</strong> with us!
                  </p>
                  <img
                    src="mobile.png"
                    alt="B&N Mobile Apps"
                    title="B&N Mobile Apps"
                    className="img-fluid"
                    height="100"
                  />
                  <a
                    href="https://www.barnesandnoble.com/h/apps"
                    className="btn btn-dark d-grid mx-auto mt-2"
                    title="B&N Mobile Apps"
                    >Download Now</a
                  >
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">B&N Membership</h5>
                  <p className="card-text">
                    Want to know the <strong>exciting perks</strong> we have?
                  </p>
                  <img
                    src="membership.png"
                    alt="B&N Membership"
                    title="B&N Membership"
                    className="img-fluid"
                    height="100"
                  />
                  <a
                    href="https://www.barnesandnoble.com/membership/"
                    className="btn btn-dark d-grid mx-auto mt-2"
                    title="B&N Membership"
                  >
                    Apply Now!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">B&N Mastercard</h5>
                  <p className="card-text">
                    Your <strong>Master Card</strong> is your ticket in
                    different stories of a lifetime.
                  </p>
                  <img
                    src="card.png"
                    alt="B&N Mastercard"
                    title="B&N Mastercard"
                    className="img-fluid"
                    height="100"
                  />
                  <a
                    href="https://www.barnesandnoble.com/h/bn-mastercard"
                    className="btn btn-dark d-grid mx-auto mt-2"
                    title="B&N Mastercard"
                  >
                    Apply Now!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">B&N Bookfairs</h5>
                  <p className="card-text">
                    <strong>Meet new people</strong> with the same
                    <strong>passion</strong> as you.
                  </p>
                  <img
                    src="fairs.png"
                    alt="B&N Bookfairs"
                    title="B&N Bookfairs"
                    className="img-fluid"
                    height="100"
                  />
                  <a
                    href="https://www.barnesandnoble.com/h/bn-mastercard"
                    className="btn btn-dark d-grid mx-auto mt-2"
                    title="B&N Mastercard"
                  >
                    Apply Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services;