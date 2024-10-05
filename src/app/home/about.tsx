// app/components/About.tsx
'use client';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">A Bit About Me</h2>
        <p className="about-description">
          I'm all about turning your ideas into amazing mobile apps and websites. With over ten years of experience, I bring a lot of passion and expertise to the table, helping businesses like yours create awesome digital products.
        </p>
      </div>
      <style jsx>{`
        .about {
          padding: 60px 20px;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .about-title {
          font-size: 36px;
          margin-bottom: 20px;
          color: #333;
        }
        .about-description {
          font-size: 18px;
          line-height: 1.6;
          color: #666;
        }
      `}</style>
    </section>
  );
}
  