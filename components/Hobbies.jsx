import React from "react";
import "./HobbySections.css";

const HobbySections = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className={`card`}>
            <div className="card-body">
              <h5 className="card-title">People</h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
                Lorem ipsum dolor sit amet.
              </p>
              <button className="btn btn-primary">Connect</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card`}>
            <div className="card-body">
              <h5 className="card-title">Place</h5>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className="btn btn-primary">Meet up</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card`}>
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className="btn btn-primary">Get it</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card`}>
            <div className="card-body">
              <h5 className="card-title">Program</h5>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <button className="btn btn-primary">Attend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbySections;
