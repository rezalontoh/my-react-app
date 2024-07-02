import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";


const Hero = () => {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubTitle, setHeroSubTitle] = useState("");
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const heroTitleRef = ref(db, "hero/title");
    onValue(heroTitleRef, (snapshot) => {
      const data = snapshot.val();
      setHeroTitle(data);
    });
    const heroSubTitleRef = ref(db, "hero/subTitle");
    onValue(heroSubTitleRef, (snapshot) => {
      const data = snapshot.val();
      setHeroSubTitle(data);
    });

    const personalInfoRef = ref(db, "personalInfo");
    onValue(personalInfoRef, (snapshot) => {
      const data = snapshot.val();
      setPersonalInfo(data);
      // setHeroSubTitle(data);
    });
  }, []);

  return (
    <section className="hero section center-content illustration-section-01">
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay={200}
            >
              {heroTitle}
            </h1>
            <div className="container-xs">
              <p
                className="mt-0 mb-32 reveal-from-bottom"
                data-reveal-delay={400}
              >
                {heroSubTitle}
                {personalInfo.name}
              </p>
            </div>
          </div>
          <div
            className="
									hero-figure
									reveal-from-bottom
									illustration-element-01
								"
            data-reveal-value="20px"
            data-reveal-delay={800}
          >
            <img
              className="has-shadow"
              src="images/_RAL2758.JPG"
              alt="Hero images"
              width={896}
              height={504}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;