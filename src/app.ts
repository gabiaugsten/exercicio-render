import fastify from 'fastify'
import cors from '@fastify/cors'
import { error } from 'console'

export const app = fastify()

app.register(cors, {
  origin: true
})

app.get('/home', ()=>{
  const user = {"nome": "Gabriela Augsten"}
  return user
})

app.setErrorHandler((error, request, reply)=>{
  console.error(error)
  reply.status(500).send({error:'Internal server error'})
})