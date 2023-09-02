import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course data from the server
    axios
      .get('http://localhost:5000/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  return (
    <div className='App'>
      <div className='heading'>
        <h1> My Courses</h1>
        <h4>view All</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <i class="{{ course['icon_class'] }}"></i>
                {course.Course_Name}
              </td>
              <td>{course.start_Date}</td>
              <td>{course.Lesson_Completed}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
