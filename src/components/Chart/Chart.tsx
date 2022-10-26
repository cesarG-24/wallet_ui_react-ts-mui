import React from 'react'
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {Statistics} from "../Statistics";

const data = [
    {uv: 40.00, pv: 2400, amt: 2400},
    {name: '3 july', uv: 45.00, pv: 2400, amt: 2400},
    {uv: 65.00, pv: 2400, amt: 2400},
    {name: '4 july', uv: 45.00, pv: 2400, amt: 2400},
    {uv: 50.00, pv: 2400, amt: 2400},
    {name: '5 july', uv: 30.00, pv: 2400, amt: 2400},
    {uv: 45.00, pv: 2400, amt: 2400},
    {name: '6 july', uv: 40.00, pv: 2400, amt: 2400},
    {uv: 68.00, pv: 2400, amt: 2400},
    {name: '7 july', uv: 58.00, pv: 2400, amt: 2400},
    {uv: 65.00, pv: 2400, amt: 2400},
    {name: '8 july', uv: 44.00, pv: 2400, amt: 2400},
    {uv: 40.00, pv: 2400, amt: 2400},
    {name: '9 july', uv: 30.00, pv: 2400, amt: 2400},
    {uv: 25.00, pv: 2400, amt: 2400},
];

const contentStyle = {
    border: 'none',
    outline: 0,
    borderRadius: 43,
    minWidth: 96,
}
const wrapperStyle = {
    background: 'white',
    outline: 0,
    borderRadius: 43,
    minWidth: 96,
    padding: 9,
    boxShadow: '0px 12px 50px rgba(0, 0, 0, 0.04)',
}
const itemStyle = {
    color: '#000000',
    fontWeight: 700,
    fontSize: 14,
}


const CustomTooltip = ({payload, active}: any) => {
    if (active && payload && payload.length) {
        return (
            <>
                <Statistics percentage={payload[0].value} displayPercent='none' displayNumber='block'/>
            </>
        );
    }

    return null;
};

export const Chart = () => {

    return (
        <LineChart
            width={492}
            height={259}
            data={data}
            margin={{top: 20, right: 8, bottom: 5, left: -20}}>

            <Line
                type="monotone"
                dataKey="uv"
                stroke="#9664FF"
                strokeWidth={4}
                activeDot={{fill: '#9664FF', stroke: '#fff', strokeWidth: 4, r: 8, className: "boxShadow"}}
                dot={false}/>
            <CartesianGrid
                stroke="#ccc"
                display='none'
                strokeDasharray="10 9"/>
            <XAxis
                dataKey="name"
                fontSize='12'
                axisLine={false}
                padding={{left: 30, right: 30}}
                tickLine={false}
            />
            <YAxis
                allowDataOverflow={true}
                allowDecimals={true}
                interval='preserveEnd'
                type='number'
                unit="$"
                fontSize='12'
                axisLine={false}
                tickLine={false}
            />
            <Tooltip
                content={<CustomTooltip/>}
                itemStyle={itemStyle}
                contentStyle={contentStyle}
                wrapperStyle={wrapperStyle}
                labelStyle={{display: 'none'}}
                cursor={{stroke: '#1E2029', strokeWidth: 1, strokeDasharray: '5 5', opacity: '40%',}}
                allowEscapeViewBox={{x: false, y: false}}
                position={{y: -10}}

            />

        </LineChart>
    )
};
