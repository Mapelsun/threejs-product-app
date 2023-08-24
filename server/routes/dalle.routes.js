import express from 'express'
import * as dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const router = express.Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices);
}

main()

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E ROUTES' })
})

export default router

