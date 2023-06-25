import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => res.send('API is running now on AWS!!'))

app.listen(port, () => console.log(`API running on port ${port}`))