import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import ManageCoursePage from "./ManageCoursePage";
import notFoundPage from "./common/notFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./Auth";

// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={Auth} />

        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course/" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  );
}
export default App;
