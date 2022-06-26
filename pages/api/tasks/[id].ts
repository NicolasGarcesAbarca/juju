import type { NextApiRequest, NextApiResponse } from 'next'
import Task from 'models/Task'
import { dbConnect } from 'utils/mongoose'

// first you need to connect
dbConnect()

type Data = {
    data: string[]|string
  }

export default async function handler (req:NextApiRequest, res:NextApiResponse<Data>) {
  const { method, body, query: { id } } = req
  switch (method) {
    case 'GET':{
      try {
        // tipical id 62b8948eeade8f356c469c5e
        // input should be object id
        const task = await Task.findById(id)
        if (!task) {
          return res.status(404).json({ data: 'task not found' })
        }
        return res.status(200).json({ data: task })
      } catch (err:any) {
        return res.status(500).json({ data: err.message })
      }
    }
    case 'PUT':{
      try {
        // update and return the new object
        const task = await Task.findByIdAndUpdate(id, body, { new: true })
        if (!task) {
          return res.status(404).json({ data: 'task not found' })
        }
        return res.status(200).json({ data: task })
      } catch (err:any) {
        return res.status(500).json({ data: err.message })
      }
    }
    case 'DELETE':{
      try {
        const deletedTask:any = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
          return res.status(404).json({ data: 'task not found' })
        }
        return res.status(200).json({ data: deletedTask })
      } catch (err:any) {
        return res.status(500).json({ data: err.message })
      }
    }
    default:
      return res.status(400).json({ data: 'method not supported' })
  }
}
