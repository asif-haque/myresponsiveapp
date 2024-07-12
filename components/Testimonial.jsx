import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h5 className="card-title"><i className="bi bi-quote"></i> Testimonials</h5>
          <p className="card-text">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className={`d-flex align-items-center ${styles.audioSection}`}>
            <audio controls className="me-3">
              <source src="/audio/testimonial.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className={`ms-auto d-flex align-items-center ${styles.testimonialInfo}`}>
              {/* <img src="/images/testimonial-author.jpg" alt="Shubha Nagarajan" className={`rounded-circle ${styles.authorImage}`} /> */}
              <div className="ms-3">
                <p className="mb-0 fw-bold">Shubha Nagarajan</p>
                <p className="mb-0 text-muted">Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
