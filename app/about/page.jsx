import styles from "./About.module.css";
import HomeNav from "@/app/_components/navigation/HomeNav/HomeNav";
import Footer from "@/app/_components/layout/Footer/Footer";
import Segment from "@/app/_components/layout/Segment/Segment";
import AnimateUp from "@/app/_components/common/AnimateUp/AnimateUp";
import AnimatedHeroTitle from "@/app/_components/common/AnimatedHeroTitle/AnimatedHeroTitle";
import AnimateSlideIn from "@/app/_components/common/AnimateSlideIn/AnimateSlideIn";

export default function Page() {
  return (
    <section className={styles.about}>
      <section className={styles.hero}>
        <div className={`container ${styles.wrapper}`}>
          <p className={`semiboldFont ${styles.tag}`}>About us</p>
          <AnimatedHeroTitle className="semiboldFont">
            Empower Your ICAN Journey with Professco
          </AnimatedHeroTitle>
          <AnimatedHeroTitle as="p" className={styles.desc} from="above" delay={0.4}>
            Making education accessible for all!
          </AnimatedHeroTitle>
          <div className={styles.btnPack}>
            <button className="filled">
              <p>For Student</p>
            </button>
            <button className="outlined">
              <p>For Lecturers</p>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.seg}>
        <div className={`container ${styles.wrapperB}`}>
          <AnimateUp as="h1" className="semiboldFont">
            Tailored ICAN courses and tools for students to succeed and
            lecturers to earn.
          </AnimateUp>
          <AnimatedHeroTitle as="p" from="above" delay={0.4} viewportTrigger>
            Welcome to Professco, the ultimate web learning platform designed to
            help students excel in their ICAN exams and support lecturers in
            creating impactful courses. We provide tailored learning experiences
            that simplify complex concepts and guide you step-by-step towards
            your professional goals.
          </AnimatedHeroTitle>
          <br />
          <AnimatedHeroTitle as="p" from="above" delay={0.6} viewportTrigger>
            Professco bridges the gap between knowledge and opportunity by
            equipping students with the tools and resources they need to
            succeed. For lecturers, it’s a chance to share expertise, build a
            legacy, and earn income from their valuable insights.
          </AnimatedHeroTitle>
        </div>
      </section>
      <section className={styles.frame}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            <div className={styles.innerCircle}>
              <img src="/images/sparkles.svg" alt="sparkles" />
            </div>
          </div>
          <AnimateUp as="h1" className="semiboldFont">
            Tailored ICAN Courses:
          </AnimateUp>
          <AnimatedHeroTitle as="p" from="above" delay={0.4} viewportTrigger>
            Access a library of expertly designed courses that align with ICAN
            requirements.
          </AnimatedHeroTitle>
          <div className={styles.points}>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
          </div>
        </div>
        <AnimateSlideIn direction="right">
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/about-pc-1.png" />
            <img
              src="/images/about-mobile-1.png"
              alt="banner"
              className={styles.banner}
            />
          </picture>
        </AnimateSlideIn>
      </section>

      <section className={`${styles.frame} ${styles.rev}`}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            <div className={styles.innerCircle}>
              <img src="/images/sparkles.svg" alt="sparkles" />
            </div>
          </div>
          <AnimateUp as="h1" className="semiboldFont">
            Student-Centric Learning:
          </AnimateUp>
          <AnimatedHeroTitle as="p" from="above" delay={0.4} viewportTrigger>
            Learn at your own pace with flexible modules, quizzes, and progress
            tracking.
          </AnimatedHeroTitle>
          <div className={styles.points}>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
          </div>
        </div>
        <AnimateSlideIn direction="left">
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/about-pc-2.png" />
            <img
              src="/images/about-mobile-2.png"
              alt="banner"
              className={styles.banner}
            />
          </picture>
        </AnimateSlideIn>
      </section>

      <section className={styles.frame}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            <div className={styles.innerCircle}>
              <img src="/images/sparkles.svg" alt="sparkles" />
            </div>
          </div>
          <AnimateUp as="h1" className="semiboldFont">
            Lecturer Income Opportunities:
          </AnimateUp>
          <AnimatedHeroTitle as="p" from="above" delay={0.4} viewportTrigger>
            Create, publish, and monetize your courses while reaching a broad
            audience of learners.
          </AnimatedHeroTitle>
          <div className={styles.points}>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
          </div>
        </div>
        <AnimateSlideIn direction="right">
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/about-pc-3.png" />
            <img
              src="/images/about-mobile-3.png"
              alt="banner"
              className={styles.banner}
            />
          </picture>
        </AnimateSlideIn>
      </section>

      <section className={`${styles.frame} ${styles.rev}`}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            <img src="/images/sparkles.svg" alt="sparkles" />
          </div>
          <AnimateUp as="h1" className="semiboldFont">
            Affordable Learning Solutions:
          </AnimateUp>
          <AnimatedHeroTitle as="p" from="above" delay={0.4} viewportTrigger>
            Achieve your professional goals without breaking the bank.
          </AnimatedHeroTitle>
          <div className={styles.points}>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
            <div className={styles.line}>
              <div className={styles.bullet}>
                <img src="/images/about-tick.svg" alt="tick" />
              </div>
              <p>-</p>
            </div>
          </div>
        </div>
        <AnimateSlideIn direction="left">
          <picture>
            <source media="(min-width: 1000px)" srcSet="/images/about-pc-2.png" />
            <img
              src="/images/about-mobile-2.png"
              alt="banner"
              className={`${styles.banner} ${styles.last}`}
            />
          </picture>
        </AnimateSlideIn>
      </section>

      <Segment />
      <Footer />
    </section>
  );
}
