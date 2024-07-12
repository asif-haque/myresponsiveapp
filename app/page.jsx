"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./page.css";
import SignInJoinInForm from "@/components/SigninJoininForm";
import HobbySections from "@/components/Hobbies";
import AddYourOwn from "@/components/AddYourOwn";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className={`main`}>
        <div className="container">
          <div className="d-block d-lg-flex">
            <div className="herotext">
              <h4 style={{ textAlign: "center" }}>
                Explore your <span className={`hobby`}>hobby</span> or{" "}
                <span style={{ color: "#8064A2" }}>passion</span>
              </h4>
              <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
            </div>
            <div className="form">
              <SignInJoinInForm />
            </div>
          </div>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <img
              src="/hero.png"
              alt=""
              style={{ objectFit: "contain", width: "full", height: "full" }}
            />
          </div>
        </div>
      </div>

      <HobbySections />
      <div style={{ backgroundColor: "#F7F5F9", padding: "20px" }}>
        <AddYourOwn />
      </div>
      <Testimonial />
      <div
        style={{
          backgroundColor: "#F7F5F9",
          marginTop: "50px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Home;
