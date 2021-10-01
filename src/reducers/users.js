import {rows} from '../data';

const usersReducers = (state = rows, action) => {
    switch(action.type){
        case 'DELETE_USER': 
            return state.filter(users => users.id !== action.payload) 
        case 'EDIT_USER': 
            const updatedArray = state.map(user => {
                if(user.id === action.payload.id){
                    return{
                        ...user, 
                        username: action.payload.info.username,
                        nickname: action.payload.info.nickname,
                        email: action.payload.info.email,
                        phone: action.payload.info.phone,
                        location: action.payload.info.location,
                    }
                }
                return user
            })
            return [...updatedArray]
        case 'CREATE_USER':
            return [
                ...state, 
                {
                    id: action.payload.id,
                    username: action.payload.username,
                    nickname: action.payload.nickname,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    location: action.payload.location,
                    date: action.payload.date,
                    status: action.payload.status,
                    transactions: action.payload.transactions,
                    category: action.payload.category,
                    avatar: action.payload.avatar,
                    job: action.payload.job
                }
            ]

        default:
            return state
    }
};

export default usersReducers;