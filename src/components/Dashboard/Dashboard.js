import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 58010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='charts container'>
            <h1 className='text-center py-5'>Dashboard</h1>
            <div>
                <div className='d-block text-center'>
                    <h4 className='pb-3'>Month Wise Sell</h4>
                    <LineChart width={450} height={300} data={data}>
                        <h4 className='py-3'>Month Wise Sell</h4>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className='d-block text-center'>
                    <h4 className='pb-3'>Investment VS Revanue</h4>
                    <AreaChart
                        width={480}
                        height={290}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>
            </div>
            <div className='pt-5'>
                <div className='d-block text-center'>
                    <h4 className='pb-3'>Investment VS Revanue</h4>
                    <BarChart
                        width={500}
                        height={368}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='d-block text-center'>
                    <h4 className='pt-3 pb-0'>Investment VS Revanue</h4>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={110} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={120} outerRadius={150} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;