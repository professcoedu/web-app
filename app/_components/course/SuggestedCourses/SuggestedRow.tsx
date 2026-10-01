"use client";

import { useRef } from "react";
import CourseCard from "@/app/_components/course/CourseCard/CourseCard";
import ScrollButton from "@/app/_components/common/ScrollButton/ScrollButton";
import Skeleton from "@/app/_components/common/Skeleton/Skeleton";
import useRelatedCourses from "@/app/_hooks/useRelatedCourses";
import { useOwnedCourseIds } from "@/app/_hooks/useOwnedCourseIds";
import styles from "./SuggestedRow.module.css";

interface Props {
  label: string;
  examSlug: string;
}

export default function SuggestedRow({ label, examSlug }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { relatedCourses, isLoading } = useRelatedCourses(examSlug);
  const ownedCourseIds = useOwnedCourseIds();
  const courses = (relatedCourses || []).filter(
    (course) => !ownedCourseIds.has(course.id),
  );

  return (
    <div className={styles.row}>
      <h2 className={`boldFont ${styles.heading}`}>{label}</h2>
      <div className={styles.scrollArea}>
        <div className={styles.strip} ref={rowRef}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div className={styles.cardWrapper} key={index}>
                  <Skeleton />
                </div>
              ))
            : courses.map((course) => (
                <div className={styles.cardWrapper} key={course.id}>
                  <CourseCard courseItem={course} />
                </div>
              ))}
        </div>
        <ScrollButton containerRef={rowRef} scrollAmount={318} />
      </div>
    </div>
  );
}
