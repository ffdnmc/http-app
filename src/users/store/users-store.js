import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    user: [],
}

const loadNextPage = async() =>{
    await loadUsersByPage( state.currentPage + 1 );
}

const loadPreviousPage = async() => {
    throw new Error('No implementado');
}

const onUserChange = () => {
    throw new Error('No implementado');
}

const reloadPagwe = async() => {
    throw new Error('No implementado');
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPagwe,

    getUser: () => [...state.user],
    currentPage: () => state.currentPage,
}