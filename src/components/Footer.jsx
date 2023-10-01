import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
      <section className="subscription">
        <p>Join the Adventure newsletter to receive our best vacation deals Careers.</p>

        <form>
          <input type="text" />
          <input
            type="submit"
            value="Subscribe"
          />
          <p>You can unsubscribe at any time.</p>
        </form>
      </section>

      <section className="about-links">
        <div>
          <p>About Us</p>
          <Link to="/sign-up">How it works</Link>
          <Link>Testimonials</Link>
          <Link>Careers</Link>
          <Link>Investors</Link>
          <Link>Terms of Service</Link>
        </div>

        <div>
          <p>Contact Us</p>
          <Link>Contact</Link>
          <Link>Support</Link>
          <Link>Destinations</Link>
          <Link>Sponsorships</Link>
        </div>
        <div>
          <p>Videos</p>
          <Link>Submit Video</Link>
          <Link>Ambassadors</Link>
          <Link>Agency</Link>
        </div>

        <div>
          <p>Social Media</p>
          <Link>Instagram</Link>
          <Link>Facebook</Link>
          <Link>Youtube</Link>
          <Link>Twitter</Link>
        </div>
      </section>

      <section className="social-media">
        <div>
          <Link>
            TRVL
            <i className="fab fa-typo3" />
          </Link>
          <Link
            target="_blank"
            aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            target="_blank"
            aria-label="Instagram">
            <i className="fab fa-instagram" />
          </Link>
          <Link
            target="_blank"
            aria-label="Youtube">
            <i className="fab fa-youtube" />
          </Link>
          <Link
            target="_blank"
            aria-label="Twitter">
            <i className="fab fa-twitter" />
          </Link>
          <Link
            target="_blank"
            aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
