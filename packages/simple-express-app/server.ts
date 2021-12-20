import express from 'express'
import cors from 'cors'
import snakeCase from 'lodash/snakeCase'
import { QueryPayload } from '@ta/simple-shared-data'

const app = express()
const port = 3001

app.use(cors())

app.get('/', (_, res) => {
  const responseData: QueryPayload = {
    payload: snakeCase("Server data returned successfully"),
  }
  res.json(responseData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})