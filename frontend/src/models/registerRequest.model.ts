export default interface RegisterRequest{
    user:{
        email: string,
        password: string,
        first_name: string,
        last_name: string
    }
}