import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/auth/Login'
import Courses from './Pages/Courses'
import Signup from './Pages/auth/Signup'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Profile from './Pages/Profile'
import Admin from './Pages/admin/Admin'
import Dashboard from './Pages/admin/DashBoard'
import Course from './Pages/admin/Course'
import CreateCourse from './Pages/admin/CreateCourse'
import UpdateCourse from './Pages/admin/UpdateCourse'
import CreateLecture from './Pages/admin/CreateLecture'
import EditLecture from './Pages/admin/EditLecture'
import CourseDetails from './Pages/CourseDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/courses",
    element: <><Navbar /><Courses /></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  },
  {
    path: "/profile",
    element: <><Navbar /><Profile /></>
  },
    {
    path: "/courses/:courseId",
    element: <><Navbar /><CourseDetails/></>
  },
  {
    path: "/admin",
    element: <><Navbar /><Admin/></>,
    children:[
      {
        path: "dashboard",
        element:<Dashboard/>
      },
      {
        path: "course",
        element:<Course/>
      },
      {
        path: "course/create",
        element:<CreateCourse/>
      },
      {
        path: "course/:courseId",
        element:<UpdateCourse/>
      },
      {
        path: "course/:courseId/lecture",
        element:<CreateLecture/>
      },
      {
        path: "course/:courseId/lecture/:lectureId",
        element:<EditLecture/>
      },
    ]
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App