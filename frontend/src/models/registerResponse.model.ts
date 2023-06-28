export default interface RegisterResponse{
    status: {
        code: number,
        message: string
    },
    data: {
        id: number,
        email: string,
        created_at: Date,
        first_name: string,
        last_name: string,
        created_date: string
    }
};