import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
//import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//import { Link } from "react-router-dom";
const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: "",
    category: "",
    //name: "",
  });

  // edit course
  useEffect(() => {
    const slug = props.match.params.slug; //from the path course/slug
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]); // Dependency array must be decleared

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }
  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";

    if (!course.authorId) {
      _errors.authorId = "Author ID is required";
    }
    if (!course.category) {
      _errors.category = "Category is required";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }
  const handleDelet = () => {
    const courseId = course.id;
    courseApi.deleteCourse(courseId).then(() => {
      toast.success("Course Deleted");
    });
  };

  /* const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelet(),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };*/

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        handleDelete={handleDelet}
      />
    </>
  );
};
export default ManageCoursePage;
