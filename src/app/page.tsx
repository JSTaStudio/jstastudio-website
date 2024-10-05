// app/page.tsx
'use client';

import NavBar from './home/navBar';
import Hero from './home/hero';
import Services from './home/services';
import About from './home/about';
// import ContactForm from './home/contactForm';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <About />
      {/* <ContactForm /> */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 JSTaStudio. All rights reserved.</p>
        </div>
        <style jsx>{`
          .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
          }
        `}</style>
      </footer>
    </div>
  );
}
