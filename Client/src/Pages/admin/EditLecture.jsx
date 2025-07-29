import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LectureTab from './LectureTab'

const EditLecture = () => {
  const { courseId, lectureId } = useParams()

  return (
    <div className='p-4 md:p-10 h-screen'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
          <Link to={`/admin/course/${courseId}/lecture`}>
            <Button size="icon" className="rounded-full bg-white text-black hover:bg-white">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <h1 className='font-bold text-xl'>Update Your Lecture</h1>
        </div>
      </div>

      <LectureTab courseId={courseId} lectureId={lectureId} />
    </div>
  )
}

export default EditLecture
