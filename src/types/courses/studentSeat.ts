import { objectType, inputObjectType } from '@nexus/schema'
import { Student } from '..'

export const StudentSeat = objectType({
  name: 'StudentSeat',
  definition(t) {
    t.int('deskNumber')
    t.field('student', { type: Student, nullable: true })
  },
})

export const StudentSeatInput = inputObjectType({
  name: 'StudentSeatInput',
  definition(t) {
    t.int('deskNumber', { required: true })
    t.id('studentId')
  },
})