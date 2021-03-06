import { objectType, inputObjectType, arg, queryField } from '@nexus/schema'
import { Lesson } from '.'
import { ObjectId } from 'mongodb'

export const FindLessonByCourseAndDateInput = inputObjectType({
  name: 'FindLessonByCourseAndDateInput',
  definition(t) {
    t.id('courseId', { required: true })
    t.date('lessonDate', { required: true })
  },
})

export const FindLessonByCourseAndDatePayload = objectType({
  name: 'FindLessonByCourseAndDatePayload',
  definition(t) {
    t.field('lesson', { type: Lesson, nullable: true })
  },
})

export const FindLessonByCourseAndDate = queryField(
  'findLessonByCourseAndDate',
  {
    type: FindLessonByCourseAndDatePayload,
    args: {
      input: arg({ type: FindLessonByCourseAndDateInput, required: true }),
    },
    async resolve(_, { input: { courseId, lessonDate } }, { lessonData }) {
      const lesson = await lessonData.findOne({
        'assignedCourses._id': new ObjectId(courseId),
        assignedDate: lessonDate,
      })

      return { lesson }
    },
  }
)
