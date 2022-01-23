import axiosClient from "./axios";
export const getAllTodos = async ()=>{
    return axiosClient.get('/todos');
}