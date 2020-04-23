import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Front End Developer at Quintype Technologies India Pvt
                          Ltd <span>Dec 2018-present</span>
                        </h2>
                        <p>
                          1.5 years of Industry Experience as a front end
                          developer with proficiency in HTML/CSS, JS, React JS
                          and building responsive websites.
                          <li>
                            Involved in developing the UI pages using HTML, CSS,
                            Javascript, JSON.
                          </li>{" "}
                          <li>
                            Diagnosed the cross browser issues and fix them
                            across various front end technologies.
                          </li>{" "}
                          <li>
                            Supported the QA team to ensure project features and
                            applications were implemented according to the
                            specification.
                          </li>
                          <li>
                            Participated in day-to-day stand up meetings,
                            conducted Kick-offs with the team before feature
                            development.
                          </li>
                          <li>
                            Coordinated with the managers and technical team
                            members for changes and feedback.
                          </li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Post graduation at MSRIT<span>2015-2017</span>
                        </h2>
                        <p>
                          I have a Master's degree ( ECE ) from MSRIT College, Bangalore. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          B.E at P.D.A College of Engineering <span>2011-2015</span>
                        </h2>
                        <p>
                          I have completed my Bachelor's Degree in Electronics and Communication from P.D.A college of Engineering, Gulbarga with an overall CGPA of 8.3
                          
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
