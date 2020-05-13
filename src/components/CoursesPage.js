import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";

import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);
  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);
  let cour = courses.map((x) =>
    Object.assign(
      x,
      authors.find((y) => y.id === x.authorId)
    )
  );

  return (
    <>
      <h2> Courses </h2>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CourseList courses={cour} authors={authors} />{" "}
    </>
  );
}
export default CoursesPage;
// use function and  hook
