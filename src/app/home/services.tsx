"use client";

const Services = () => (
  <section className="services">
    <div className="container">
      <h2 className="section-title">My Services</h2>
      <div className="service-list">
        <div className="card">
          <h3 className="service-title">Mobile App Development</h3>
          <p className="service-description">
            Both native and cross-platform
          </p>
        </div>
        <div className="card">
          <h3 className="service-title">Website / WebApp Development</h3>
          <p className="service-description">
            Great dynamic websites, fully responsive.
          </p>
        </div>
        <div className="card">
          <h3 className="service-title">Technical Consulting</h3>
          <p className="service-description">
            Need advice on a tech issue? I&apos;m here to provide guidance and possible solutions.
          </p>
        </div>
        {/* <div className="card">
          <h3 className="service-title">UI/UX Design</h3>
          <p className="service-description">
            I provide top-notch UI/UX design services to ensure your app or website is both beautiful and functional.
          </p>
        </div> */}
      </div>
    </div>
    <style jsx>{`
      .services {
        padding: 60px 20px;
        background-color: #f9f9f9;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
      }
      .section-title {
        font-size: 36px;
        margin-bottom: 40px;
        color: #333;
      }
      .service-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .card {
        margin-bottom: 40px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        max-width: 300px;
        flex: 1 1 30%;
        box-sizing: border-box;
      }
      .service-title {
        font-size: 24px;
        margin-bottom: 10px;
        color: #333;
      }
      .service-description {
        font-size: 18px;
        line-height: 1.6;
        color: #666;
      }
    `}</style>
  </section>
);

export default Services;