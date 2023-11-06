function Contact(){

    return (
        <section id="contact" className="container">
          <div className="card">
            <h5 className="card-header">Contact Us</h5>
            <div className="card-body">
              <form className="align-content-center">
                <div className="form-group">
                  <label htmlFor="firstName">Enter First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    aria-describedby="firstNameHelp"
                    placeholder="Jennifer"
                    required
                  />
                </div>

                <br />

                <div className="form-group">
                  <label htmlFor="lastName">Enter Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    aria-describedby="lastNameHelp"
                    placeholder="De Vega"
                    required
                  />
                </div>

                <br />

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="name@domain.com"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>

                <br />

                <div className="form-group">
                  <label htmlFor="message">Enter Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter a message here"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
            </div>
          </div>
      </section>
    )
}

export default Contact;