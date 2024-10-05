// app/components/Hero.tsx
'use client';

export default function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <h1 className="title">Hello 🙋‍♂️</h1>
          <p className="subtitle-large">
            My Name is Sai Teja
          </p>
          <p className="subtitle">
            I&apos;ve been building mobile and web applications for over a decade.
          </p>
          {/* <a href="#contact" className="cta-button">Get in Touch</a> */}
        </div>
        <style jsx>{`
          .hero {
            background: #0070f3;
            color: white;
            text-align: center;
            padding: 80px 20px;
          }
          .title {
            font-size: 48px;
            margin-bottom: 20px;
          }
          .subtitle-large {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            color: white;
          }
          .subtitle {
            font-size: 18px;
            color: white;
          }
          .cta-button {
            padding: 10px 20px;
            background-color: white;
            color: #0070f3;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 5px;
          }
        `}</style>
      </section>
    );
  }
  