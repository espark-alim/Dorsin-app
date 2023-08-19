import React from "react";
// import bgPattern from "/bgPattern.png"
import logo from "../../images/HeroSection/bg-pattern.png";
const HeroSection = () => {
  return (
    <>
      {/* <section
      class="section bg-home home-half"
      data-image-src="images/bg-home.jpg"
      id="home"
    >
      <div class="bg-overlay"></div>
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="justify-content-center row">
              <div class="text-white text-center col-lg-8">
                <h1 class="home-title">
                  We help startups launch their products
                </h1>
                <p class="pt-3 home-desc">
                  Etiam sed.Interdum consequat proin vestibulum class at.
                </p>
                <p class="play-shadow mt-4">
                  <a class="play-btn video-play-icon" href="/">
                    <i class="mdi mdi-play text-center"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-pattern-effect">
        <img src="assets/images/bg-pattern.png" alt="dorsin" />
      </div>
    </section> */}
      <section className="section bg-home home-half" id="home">
        <div>
          <div class="bg-overlay"></div>
          <div class="display-table">
            <div class="display-table-cell">
              <div class="container">
                <div class="justify-content-center row">
                  <div class="text-white text-center col-lg-8">
                    <h1 class="home-title mx-auto">
                      We help startups launch their products
                    </h1>
                    <p class="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-pattern-effect">
          <img src={logo} alt="dorsin" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
