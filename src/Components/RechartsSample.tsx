import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Rectangle, Cell, PieChart, Pie, RadialBar, RadialBarChart } from 'recharts';
import Divider from './Divider';

const RechartsSample = () => {

    const data = [
        { year: 2018, react: 250, vue: 180, node: 190, fill: "#8884d8" },
        { year: 2019, react: 1270, vue: 170, node: 550, fill: "#82ca9d" },
        { year: 2020, react: 580, vue: 95, node: 310, fill: "#F44336" }
    ];

    return (
        <div className='w-full h-full'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="react" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="vue" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="node" stroke="#F44336" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

            <Divider />

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="react" stroke="#8884d8" fill="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Area type="monotone" dataKey="vue" stroke="#82ca9d" fill="#82ca9d" strokeWidth={2} />
                    <Area type="monotone" dataKey="node" stroke="#F44336" fill="#F44336" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>

            <Divider />

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="react" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="vue" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    <Bar dataKey="node" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>

            <Divider />

            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="year"
                    />
                </PieChart>
            </ResponsiveContainer>

            <Divider />

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        dataKey="year"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={
                        {
                            top: '50%',
                            right: 0,
                            transform: 'translate(0, -50%)',
                            lineHeight: '24px',
                        }
                    } />
                </RadialBarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default RechartsSample