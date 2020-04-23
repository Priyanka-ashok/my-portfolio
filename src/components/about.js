import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a Post graduated student from MSRIT under
                        specialization ECE.I love exploring new technologies and
                        often amazed by the progress we as a human species have
                        mad so far in the recent years.
                      </p>
                      <p>
                        1.5 years of Industry experience at Quintype as a front
                        end developer with proficiency in HTML/CSS, JS, React JS
                        and building responsive websites.
                      </p>
                      <p>My Hobbies are Reading books, Painting and Dancing</p>
                      <div className="row">
                        <div
                          className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                          data-animate-effect="fadeInLeft"
                        >
                          <h2 className="colorlib-heading animate-box">
                            Technical Skills
                          </h2>
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
                                  <p>
                                    <li>
                                      Web Technologies : HTML/CSS, JS, React JS,
                                      SASS
                                    </li>{" "}
                                    <li>Tools : Git , Visual Studio Code</li>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading">
                  Here are some of my projects
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>
                      Worked for publishers like The Quint, AFAQs, SMEAdvisor,
                      FPJ
                    </h3>
                    <li>
                      Resolved issues/tickets related to CSS (Grids, Flex,
                      Carousel) and Javascript
                    </li>
                    <li>
                      Implemented react components for theQuint homepage like
                      Video Carousel, off-canvas Menu
                    </li>
                    <li>
                      Fixed various bugs occurring in the staging and production
                      environment
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Quintype Website</h3>
                    <li>
                      Worked on total UI revamp of Quintype website using react
                      hooks, styled-components and HTML/CSS
                    </li>
                    <li>
                      Interacted with the design team to understand the design
                      layout
                    </li>
                    <li>
                      Build the static pages such as About, Product, Case
                      Studies, Essence, Integration
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Quintype Migrator ( Validator )</h3>
                    <li>
                      Designed the front end using the Quintype emphasis library
                    </li>
                    <li>
                      Worked with express MVC framework for NodeJS to create the
                      routes required for delivering the data to the front end.
                    </li>
                    <li>Tested the API using POSTMAN</li>
                    <li>Technologies used : React JS, NodeJS (Express JS)</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
