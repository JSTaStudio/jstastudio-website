// app/components/About.tsx
'use client';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">A Bit About Me</h2>
        <p className="subtitle">
          I&apos;ve been building mobile and web applications for over a decade.
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
  