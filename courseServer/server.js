const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

const courses = [
  {
    Course_Name: 'Basic Algorithm',
    start_Date: '27 jan,2023',
    Lesson_Completed: '10/25(48%)',
    duration: '14h 38m 56s',
  },
  {
    Course_Name: 'Web Development',
    start_Date: '23 Feb,2023',
    Lesson_Completed: '40/45(97%)',
    duration: '36h 38m 56s',
  },
  {
    Course_Name: 'Basic Data Science',
    start_Date: '14 jan,2023',
    Lesson_Completed: '9/37(40%)',
    duration: '37h 00m 56s',
  },
  {
    Course_Name: 'UI/UX Design',
    start_Date: '19 Feb,2023',
    Lesson_Completed: '26/32(84%)',
    duration: '16h 38m 56s',
  },
  {
    Course_Name: 'Project Management',
    start_Date: '27 jan,2023',
    Lesson_Completed: '14/19(89%)',
    duration: '14h 38m 56s',
  },
  {
    Course_Name: 'Data Structures',
    start_Date: '27 Feb,2023',
    Lesson_Completed: '10/25(48%)',
    duration: '14h 38m 56s',
  },
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
