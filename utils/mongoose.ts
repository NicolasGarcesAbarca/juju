import { connect, connection } from 'mongoose'

const connectionStatus = {
  isConnected: false
}
export async function dbConnect () {
  // if it's already connected dont connect again
  if (connectionStatus.isConnected) return

  const url:string = process.env.MONGODB_URL ?? 'unhandled_url'
  const db = await connect(url)
  connectionStatus.isConnected = db.connections[0].readyState === 1
  console.log('db name', db.connection.db.databaseName)
}

connection.on('connected', () => {
  console.log('mongo is connected')
})

connection.on('error', (err) => {
  console.log('this is the error: ', err)
})
