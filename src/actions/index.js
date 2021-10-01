export const delete_user = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export const edit_user = (id, info) => {
    return {
        type: 'EDIT_USER',
        payload: {id, info}
    }
}

export const create_user = (info) => {
    return {
        type: 'CREATE_USER',
        payload: info
    }
}