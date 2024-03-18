import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { Course } from './components/Courses/Course';
import { HomePg } from './components/Homepg/homePg';
import { Login } from './components/login/Login';
import CourseForm from './components/courseForm/CourseForm';
import { CartState } from './store/CartState';
import Cart from './components/cart/Cart';
import FunctionBar from './components/navbar/function_bar';
import { NavBar } from './components/navbar/navBar';
import { AuthState } from './store/AuthState';
import { ProtectRoute } from './components/login/ProtectRoute';
import CourseDeleteForm from './components/courseForm/DeleteCourse';
import Hospitals from './components/Hospitals/hospitals.jsx';
import PlasmaRoutes from './components/plasmaRoutes.js';
import Home from "./components/Home/home.jsx";
import NavvBar from './components/navbar/NavBar.jsx';

function App() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const addCourseHandler = (course) => {
    const courseObj = {
      course_name: course.courseName,
      course_price: course.coursePrice,
      course_image: course.courseImage,
      course_provider: course.courseProvider
    }
    setCourses([...courses, courseObj]);
  }

  const deleteCourseHandler = async (courseName) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.course_name !== courseName));
  };

  useEffect(() => {
    getCourses();
  }, [])

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const getCourses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/");
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  const handleFilteredCourses = (filteredCourses) => {
    setFilteredCourses(filteredCourses);
  };

  return (
    <div className="App">
      <CartState>
        <AuthState>
          <NavBar />
          <div className='mainDiv'>
            <Routes>
              <Route path="/" element={<HomePg />} />
              <Route path='/medicine' element={
                <>
                  <FunctionBar
                    courses={courses}
                    handleFilteredCourses={handleFilteredCourses} />
                  {filteredCourses.map((course, index) =>
                    <Course key={index} name={course.course_name} image={course.course_image} price={course.course_price} provider={course.course_provider} />
                  )}
                </>
              } />
              <Route exact path="/plasma" element={
                <>
                  <NavvBar />
                  <Home />
                </>
              } />
              <Route exact path="/plasma/*" element={
                <>
                  <PlasmaRoutes />
                </>
              } />
              <Route exact path="/hospitalslist" element={<Hospitals />} />
            </Routes>
          </div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectRoute />}>
              <Route path="/add" element={
                <><h1>Add NEW MEDICINE</h1>
                  <CourseForm onCourseAdded={addCourseHandler} /></>
              } />
              <Route path="/delete" element={
                <><h1>Delete MEDICINE</h1>
                  <CourseDeleteForm onCourseDelete={deleteCourseHandler} /></>
              } />
            </Route>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </AuthState>
      </CartState>
    </div>
  );
}

export default App;