import "dotenv/config";
import {Pool} from "pg";

export const pool = new Pool({
  connectionString: process.env.SUPABASE_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function connectDB(): Promise<void> {
  try {
    const client = await pool.connect();
    client.release();
    console.log("PostgreSQL connection successful.");
  } catch (error) {
    console.error("PostgreSQL connection failed:", error);
    process.exitCode = 1;
  }}
