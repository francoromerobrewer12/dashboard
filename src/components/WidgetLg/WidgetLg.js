import React from 'react';
import './WidgetLg.css';
import foto from '../../assets/7.jpg';
import { widgetLgData } from '../../data';


function WidgetLg() {
    return (
        <div className="widgetLgContainer">
            <h2 className="widgetLgTitle">Latest Transactions</h2>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {
                    widgetLgData.map( ({ name, date, amount, button }) => {
                        return(
                            <tr className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <span className="widgetLgName">{name}</span>
                                </td>
                                <td className="widgetLgDate">{date}</td>
                                <td className="widgetLgAmount">${amount}</td>
                                <td className="widgetLgStatus">
                                    <button className="widgetLgStatusBtn">{button}</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default WidgetLg
