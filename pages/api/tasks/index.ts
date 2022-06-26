import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from 'utils/mongoose'
import Task from 'models/Task'

dbConnect()

type Data = {
  data: string[]|string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req

  switch (method) {
    case 'GET':{
      try {
        const tasks:any[] = await Task.find()
        console.log(tasks)
        return res.status(200).json({ data: tasks })
      } catch (err: any) {
        return res.status(500).json({ data: err.message })
      }
    }
    case 'POST':{
      try {
        // new Task require comply with schema otherwise it will throw an error
        // {title: '', description: ''} is a valid object
        const newTask = new Task(body)
        const savedTask = await newTask.save()
        return res.status(201).json({ data: savedTask })
      } catch (err: any) {
        return res.status(500).json({ data: err.message })
      }
    }
    default:
      return res.status(400).json({ data: 'method not supported' })
  }
}
