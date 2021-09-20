import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart() {

    const data = [
        {
          Month: 'Jan',
          "Active Users": 4000,
        },
        {
          Month: 'Feb',
          "Active Users": 3000,
        },
        {
          Month: 'Mar',
          "Active Users": 2000,
        },
        {
          Month: 'Apr',
          "Active Users": 5000,
        },
        {
          Month: 'May',
          "Active Users": 4000,
        },
        {
          Month: 'Jun',
          "Active Users": 1000,
        },
        {
          Month: 'Jul',
          "Active Users": 2500,
        },
        {
          Month: 'Aug',
          "Active Users": 4000,
        },
        {
          Month: 'Sep',
          "Active Users": 6500,
        },
        {
          Month: 'Oct',
          "Active Users": 7000,
        },
        {
          Month: 'Nov',
          "Active Users": 5800,
        },
        {
          Month: 'Dec',
          "Active Users": 5900,
        },
      ];

    return (
        <div className="chartContainer">
            <h2 className="chartTitle">Users Analysis</h2>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="Month" />
                    <YAxis dataKey="Active Users"/>
                    <Line type="monotone" dataKey="Active Users" stroke="#8884d8" />    
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
