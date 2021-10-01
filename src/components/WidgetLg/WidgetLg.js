import React from 'react';
import './WidgetLg.css';
import foto from '../../assets/7.jpg';
import { useSelector } from 'react-redux';


function WidgetLg() {

    const selectedUsers = useSelector(state => state).filter(user => user.category === "last")

    return (
        <div className="widgetLgContainer">
            <h2 className="widgetLgTitle">Latest Transactions</h2>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh dateCol">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    selectedUsers.map( ({ id, username, date, transactions }) => {
                        return(
                            <tr key={id} className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <span className="widgetLgName">{username}</span>
                                </td>
                                <td className="widgetLgDate dateCol">{date}</td>
                                <td className="widgetLgAmount">{transactions.value}</td>
                                <td className="widgetLgStatus">
                                    <button className="widgetLgStatusBtn">{transactions.status}</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg
