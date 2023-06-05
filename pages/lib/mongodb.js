"use client"

import { MongoClient } from 'mongodb'

MONGODB_URI=process.env.NEXT_PUBLIC_MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = MONGODB_URI
const options = {}

let client
let clientPromise

if (!MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}
 else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise