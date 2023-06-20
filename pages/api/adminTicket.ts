import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        return handlePut(req, res);
    }
}

const handlePut = async (req, res) => {
    const {
        id,
        status,
        response,
    }: {
        id: string
        status: string
        response: string
    } = req.body

    res.status(400)

    if (id && status && response) {

        handleEmailAction(response, id, status);
        const updateTicket = await prisma.ticket.update({
            where: {
                id: id,
            },
            data: {
                statusId: status,
            },
        })
        res.status(200).json({ updateTicket })
    } else {
        res.status(400).json()
    }
}


function handleEmailAction(description, ticketId, statusId) {

    const ticketToLabel = {
        'clixtltqo0002gne7632ordsd': 'In Progress',
        'clixtltqo0004gne74sy67hqg': 'Resolved'
    }
    console.log(`Sending email for ticket: ${ticketId}`)
    console.log(`Email Body: ${description}`)
    console.log(`Ticket status has been updated to: ${ticketToLabel[statusId]}`)
}
