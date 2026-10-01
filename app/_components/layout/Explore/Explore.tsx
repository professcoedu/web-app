"use client";

import { motion } from "framer-motion";
import ExamCard from "@/app/_components/common/ExamCard/ExamCard";
import AnimateUp from "@/app/_components/common/AnimateUp/AnimateUp";
import AnimatedHeroTitle from "@/app/_components/common/AnimatedHeroTitle/AnimatedHeroTitle";
import { examTabs } from "@/app/_utils/data";
import styles from "./Explore.module.css";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export default function Explore() {
  return (
    <section className={styles.explore}>
      <div className={`container ${styles.box}`}>
        <div className={styles.top}>
          <p style={{ color: "#4B5563" }}>Available on Professco.</p>
          <AnimateUp as="h1" className="boldFont">
            Explore Professco
          </AnimateUp>
          <AnimatedHeroTitle
            as="p"
            className={styles.txt}
            from="above"
            delay={0.4}
            viewportTrigger
          >
            Learn from verified/certified Professionals in various fields with
            high performance, accomplishments/reputation and proven track
            records.
          </AnimatedHeroTitle>
        </div>

        <div className={styles.bottom}>
          <motion.div
            className={styles.examGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridVariants}
          >
            {examTabs.map((exam) => (
              <motion.div
                key={exam.id}
                className={styles.card}
                variants={cardVariants}
                transition={{ type: "spring", duration: 0.8, bounce: 0.15 }}
              >
                <ExamCard exam={exam} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <section className={styles.seg}>
        <div className={`container ${styles.boxB}`}>
          <h2 className="boldFont">
            Learn from vetted and certified chartered professionals with proven
            track records
          </h2>
          <div className={styles.segGrid}>
            {examTabs.map((exam) => (
              <div key={exam.id}>
                <p className={`boldFont ${styles.heading}`}>{exam.name}</p>
                {exam.segments.map((segment, index) => (
                  <p key={index} className={styles.topic}>
                    {segment}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
