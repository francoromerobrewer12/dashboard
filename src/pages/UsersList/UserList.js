import React,{useState} from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { delete_user } from '../../actions';

function UserList() {

    const data = useSelector(state => state);
    const dispatch = useDispatch();
    
    const columns = [
        { field: 'id', 
          headerName: 'ID',
          width: 90
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 200,
            renderCell: (params) => {
                return(
                    <div>
                        <Link to={`/userId/${params.row.id}`} className="userRowContainer" >
                            <img src={params.row.avatar} alt="" className="tableImg"/>
                            <p className="tableUserName">{params.row.username}</p>
                        </Link>
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 200,
            renderCell: (params) => {
                return(
                    <div className="actionRowContainer">
                        {params.row.transactions.value}
                    </div>
                )
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return(
                    <div className="actionRowContainer">
                        <Link to={`/userId/${params.row.id}`} className="editLink" >
                            <button className="editButton">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="deleteButton" onClick={() => dispatch(delete_user(params.row.id))} />
                    </div>
                )
            }
        }
    ];

    return (
        <div className="usersContainer">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
