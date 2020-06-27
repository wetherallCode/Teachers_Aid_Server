import { objectType, inputObjectType, arg, mutationField } from '@nexus/schema'
import { RubricEntry, RubricSectionEnum } from '.'
import { WritingLevelEnum } from '../../../students/progress-metrics/writingMetrics'
import { ObjectId } from 'mongodb'

export const UpdateRubricEntryInput = inputObjectType({
  name: 'UpdateRubricEntryInput',
  definition(t) {
    t.id('rubricEntryId', { required: true })
    t.string('entry', { required: true })
    t.int('score', { required: true })
    t.field('rubricSection', { type: RubricSectionEnum, required: true })
    t.list.field('rubricCategories', { type: WritingLevelEnum, required: true })
  },
})

export const UpdateRubricEntryPayload = objectType({
  name: 'UpdateRubricEntryPayload',
  definition(t) {
    t.field('rubricEntry', { type: RubricEntry })
  },
})

export const UpdateRubricEntry = mutationField('updateRubricEntry', {
  type: UpdateRubricEntryPayload,
  args: { input: arg({ type: UpdateRubricEntryInput, required: true }) },
  async resolve(
    _,
    { input: { rubricEntryId, entry, score, rubricSection, rubricCategories } },
    { rubricData }
  ) {
    const entryCheck = await rubricData.findOne({
      _id: new ObjectId(rubricEntryId),
    })

    if (entryCheck) {
      await rubricData.updateOne(
        { _id: new ObjectId(rubricEntryId) },
        {
          $set: {
            entry,
            score,
            rubricSection,
            rubricCategories,
          },
        }
      )
    } else throw new Error('This Rubric Entry does not exist')
    const rubricEntry = await rubricData.findOne({
      _id: new ObjectId(rubricEntryId),
    })
    return { rubricEntry }
  },
})