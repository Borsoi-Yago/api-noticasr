import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod"

const app = fastify();
import cors from '@fastify/cors'

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
})

const prisma = new PrismaClient();

app.get('/noticias', async () => {
    const noticias = await prisma.noticia.findMany();
    return { noticias }
})

app.post('/noticias/cadastrar', async (request, replay) => {
    const createNoticiaSchema = z.object({
        manchete: z.string(),
        imagem: z.string(),
        lide: z.string()
    })

    const { manchete, imagem, lide } = createNoticiaSchema.parse(request.body)

    await prisma.noticia.create({
        data: {
            manchete,
            imagem,
            lide
        }
    })
    return replay.status(201).send()
})

app.put('/noticias/:id', async (request, replay) => {

    const createNoticiaSchema = z.object({
        manchete: z.string(),
        imagem: z.string(),
        lide: z.string()
    })
    const { id } = request.params
    const { manchete, imagem, lide } = createNoticiaSchema.parse(request.body)

    await prisma.noticia.update({
        where: { id: Number(id) },
        data: {
            manchete: manchete,
            imagem: imagem,
            lide: lide
        },
    })
    return replay.status(201).send()
})

app.delete('/noticias/:id', async (request, replay) => {

    const { id } = request.params
    await prisma.noticia.delete({
        where: { id: Number(id) },
    })
    return replay.status(201).send()
})


app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
}).then(() => {
    console.log('Servidor rodando...')
})