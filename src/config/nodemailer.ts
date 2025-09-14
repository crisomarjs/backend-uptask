import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config()

const config = () => {
  return {
    host: process.env.SMT_HOST,
    port: +process.env.SMT_PORT,
    auth: {
      user: process.env.SMT_USER,
      pass: process.env.SMT_PASS
    }
  }
}

export const transporter = nodemailer.createTransport(config());