export default interface ApiResponse{
    status: {
        code: number,
        message: string
    },
    data: any
};