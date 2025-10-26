import mongoose from "mongoose";

// These will be read at runtime, not at module load time
function getMongoUri() {
  return process.env.MONGO_URL || "";
}

function getDbName() {
  return process.env.PRODUCTION_DB_NAME || process.env.DB_NAME || "taatompreusers";
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Read environment variables at runtime
    const MONGODB_URI = getMongoUri();
    const DB_NAME = getDbName();
    
    if (!MONGODB_URI) {
      throw new Error("MONGO_URL environment variable is not set");
    }
    
    const opts = {
      bufferCommands: false,
      dbName: DB_NAME,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

