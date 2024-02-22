export type TResponse<T> = {
    data: T|undefined;
    status: number;
    message: string;
}