import express from 'express'
import path from 'path'

const app = express();
const build = path.resolve(__dirname, '..', 'build')

const server = () => {

  app.use(express.static(build));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(build, 'index.html'))
  })

  app.listen(3000, () => {
    console.log('Server now listen to host 3000~~~~')
  })
}

server()
