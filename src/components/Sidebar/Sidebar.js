import React,{useState} from 'react';
import './Sidebar.css';
import {sidebarList} from '../../data';
import {iconos} from '../../data';
import { Link } from "react-router-dom";

function Sidebar() {
    const [icons, setIcons] = useState(iconos);

    return (
        <div className="sidebarContainer">
            {   
                sidebarList.map( (item, index) => {
                    
                    if(item.category){
                        return(
                            <div key={index} className="sidebarTitle">{item.title} </div>
                        )
                    } else {

                        if(index <= 16){
                            let Icon = icons[index-1]
                            
                            if(item.link){
                                return(
                                    <div key={index}>
                                        <Link to={item.link} className="sidebarItem">
                                            <Icon className="sidebarItemIcon"/>
                                            <p className="sidebarItemTitle">{item.title}</p>
                                        </Link>
                                    </div>
                                )
                            } else{
                                return(
                                    <div key={index} className="sidebarItem">
                                        
                                        <Icon className="sidebarItemIcon"/>
                                        <p className="sidebarItemTitle">{item.title}</p>
                                    </div>
                                )
                            }
                        }
                        return index
                    }
                })
            }
        </div>
    )
}

export default Sidebar
