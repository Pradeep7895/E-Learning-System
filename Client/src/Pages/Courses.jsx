import CourseCard from '@/components/CourseCard'
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const coursesJson = [
  {
    "id": 1,
    "title": "Introduction to Web Development",
    "description": "Learn the basics of HTML, CSS, and JavaScript to start building modern websites from scratch.",
    "image": "https://example.com/images/web-development.jpg"
  },
  {
    "id": 2,
    "title": "Python Programming for Beginners",
    "description": "Master Python from the ground up. Understand syntax, data structures, functions, and more.",
    "image": "https://example.com/images/python-course.jpg"
  },
  {
    "id": 3,
    "title": "Data Structures & Algorithms",
    "description": "Build a strong foundation in data structures and algorithms to ace technical interviews.",
    "image": "https://example.com/images/dsa-course.jpg"
  },
  {
    "id": 4,
    "title": "Machine Learning Fundamentals",
    "description": "Explore the fundamentals of machine learning using Python and popular libraries like scikit-learn.",
    "image": "https://example.com/images/ml-course.jpg"
  },
  {
    "id": 5,
    "title": "React.js Frontend Development",
    "description": "Create interactive and dynamic user interfaces using the React JavaScript library.",
    "image": "https://example.com/images/react-course.jpg"
  },
  {
    "id": 6,
    "title": "Database Management with MySQL",
    "description": "Learn how to design, query, and manage relational databases using MySQL.",
    "image": "https://example.com/images/mysql-course.jpg"
  },
  {
    "id": 7,
    "title": "Cybersecurity Basics",
    "description": "Understand cybersecurity fundamentals, threats, and protective measures for securing systems.",
    "image": "https://example.com/images/cybersecurity-course.jpg"
  },
  {
    "id": 8,
    "title": "Cloud Computing with AWS",
    "description": "Get hands-on experience with AWS services including EC2, S3, and Lambda.",
    "image": "https://example.com/images/aws-course.jpg"
  },
  {
    "id": 9,
    "title": "Mobile App Development with Flutter",
    "description": "Build beautiful, natively compiled apps for mobile using Flutter and Dart.",
    "image": "https://example.com/images/flutter-course.jpg"
  },
  {
    "id": 10,
    "title": "DevOps Essentials",
    "description": "Learn the tools and practices that bring development and operations together.",
    "image": "https://example.com/images/devops-course.jpg"
  }

]

const Courses = () => {
  return (
    <div className='bg-gray-100 pt-14'>
        <div className='min-h-screen max-w-7xl mx-auto py-10'>
            <div className='px-4'>
                <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>
                    Our Courses
                </h1>
                <p className='text-center text-gray-600 mb-12'>
                    Explore our curated courses to boost your skills and career. Whether you're a beginner or an expert,we have 
                    something for everyone.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        coursesJson?.map((course)=>{
                            return <CourseCard course={course}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses