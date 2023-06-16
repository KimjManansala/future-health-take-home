import prisma from "../../lib/prisma";

const mockUserId = "clixto5zj000agne71jwpqd13"

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
            UserTicket: {
                create: [
                    {
                        userId: mockUserId // Hard coded for now
                    }
                ]
            }
        }
    })
    res.status(200).json({ result })
}

const handleGet = async (req, res) => {
    const result = await prisma.ticket.findMany({
        where: {
            UserTicket: {
                some: {
                    userId: mockUserId
                }
            }
        },
        include: {
            status: {
                select: { status: true}
            }
        }
    })
    console.log("result", result)
    res.status(200).json({
        props: { result },
        revalidate: 10,
    })
}
