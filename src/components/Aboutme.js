import React from "react";

function Aboutme() {
  return (
    <div className="bg-light w-100">
      <div className="container-fluid py-5 my-5">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="font-weight-light">
              About<span className="text-successs"> me</span>
            </h1>
            <p>I can develop the front and back of an app</p>
          </div>
        </div>
        <div className="row py-3 text-center">
          <div className="col-12 col-md-6 px-5">
            <h6 className="text-successs">What I can do?</h6>
            <p className="text-justify px-5">
              I have a good programming knowledge and proficient in
              DataStructures and Alogrithms and I like to code things from
              scratch and enjoy bringing ideas to life in the browser, I can
              design UI, backend and improve to get the best outcomes and I'm good at
              building and devloping robust websites. And I love what I do.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5">
            <h6 className="text-successs">What am I doing currently?</h6>
            <p className="text-justify px-5">
              I'm currently pursuing my B.Tech 3rd year in the branch of
              Computer Science and Engineering at Aditya Engineering College and
              I quietly confident, natually curious and never gives up to hustle
              on getting the best solution.
            </p>
          </div>
        </div>
        <div className="row py-3 text-center">
          <div className="col-12 col-md-6 px-5">
            <h6 className="text-successs">What do I believe in?</h6>
            <p className="text-justify px-5">
              Most importantly I believe in myself - Living, Learning and
              Leveling up one day at a time. Acts of kindness - no matter how
              big or small which can have a huge and lasting influence on the
              lives of others. And I believe in the power of courage and truth
              which always keeps me moving in spite of my fear and making me to
              impact the world - "You Matter".
            </p>
          </div>
          <div className="col-12 col-md-6 px-5">
            <h6 className="text-successs">How I can help you?</h6>
            <p className="text-justify px-5">
              I'm an organized and hard-working individual looking for a
              responsible position to gain practical experience. I'm always open
              to discussing and partnership opportunities. Interested in
              collaborating with me check out my
              <a
                href="https://github.com/HarshaSri-Sameera"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0b867c" }}
              >
                {" "}
                Github profile
              </a>{" "}
              just hit the "Lets connect" down below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
