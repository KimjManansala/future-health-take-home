import prisma from "../../lib/prisma";
import {mockClientUserId} from "../../common";



export default async function handler(req, res) {
    if (req.method === 'POST') {
        return handlePost(req, res);
    }
    if (req.method === 'GET') {
        return handleGet(req, res);
    }
}

const handlePost = async (req, res) => {
    const {
        name,
        email,
        description,
    }: {
        name: string
        email: string
        description: string
    } = req.body
    const result = await prisma.ticket.create({
        data: {
            name: name,
            email: email,
            description: description,
            statusId: 'clixtltqo0000gne7bw46f6ec', // Hard coded for now
            createdById: mockClientUserId,
        }
    })
    res.status(201).json({ result })
}

const handleGet = async (req, res) => {
    const { userId } = req.query

    const result = await prisma.ticket.findMany({
        where: {
            ...(userId? {
                createdById: userId
            } : {})
        }
            ,
        include: {
            status: {
                select: { status: true}
            },
            createdBy: {
                select: {
                    firstname: true,
                    lastname: true,
                    email: true
                }
            }

        },
        orderBy: {
            createdAt: 'asc',
        },
    })
    res.status(200).json({
        props: { result },
        revalidate: 10,
    })
}
