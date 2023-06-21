export const mockClientUserId = "clixto5zj000agne71jwpqd13"
export const ticketBodyInclude = {
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

}
