import React from "react";
import Textinput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Textinput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        className="form-control"
        value={props.course.title}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger"> {props.errors.authorId} </div>
        )}
      </div>

      <Textinput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
