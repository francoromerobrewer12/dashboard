import React,{useState} from 'react';
import './Sidebar.css';
import {sidebarList} from '../../data';
import {iconos} from '../../data';


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
                            return(
                                <div key={index} className="sidebarItem">
                                    <Icon className="sidebarItemIcon"/>
                                    <p className="sidebarItemTitle">{item.title}</p>
                                </div>
                            )
                        }
                        return index
                    }
                })
            }
        </div>
    )
}

export default Sidebar
