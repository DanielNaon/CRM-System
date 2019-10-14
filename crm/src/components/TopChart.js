import React, { Component } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
];

export default class Example extends Component {
    getTop = () => {
        let data = [...this.props.data]
        let obj = {}
        data.forEach(d => {
            !obj[d.owner] ? obj[d.owner] = 1 : obj[d.owner]++
        })
        console.log(obj)
        let arr = []
        for (let i = 0; i < 3; i++) {
            let counter = 0
            let tempKey
            for (let key in obj) {
                if (obj[key] > counter) {
                    counter = obj[key]
                    tempKey = key
                    arr[i] = { name: key, sales: obj[key] }
                }
            }
            obj[tempKey] = 0
        }
        return arr
    }
    render() {
        console.log(this.getTop())
        return (
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={this.getTop()}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={20} fill="#f0f69f" />
            </ComposedChart>
        );
    }
}
