import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({ title, data, ejeX, ejeY }) {

    return (
        <div className="chartContainer">
            <h2 className="chartTitle">{title}</h2>
            <ResponsiveContainer className="chartWrapp" width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey={ejeX} />
                    <YAxis dataKey={ejeY}/>
                    <Line type="monotone" dataKey={ejeY} stroke="#8884d8" />    
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
