import { Schema, model, models } from 'mongoose'

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    unique: true,
    trim: true,
    maxLength: [50, 'title is too long']
  },
  description: {
    type: String,
    required: [true, 'description is required'],
    trim: true,
    maxLength: [500, 'description is too long']
  }
},
{ timestamps: true }
)

// if model task exists don't create a new one
// model will create a Task collection inside mongodb!
export default models.Task || model('Task', TaskSchema)
