export default interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    bearerToken: string,
    isAdmin: boolean
}