import React, { PropTypes } from 'react';
import{
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)


const chart = props => {
    const data={
        labels:["Mon","tue","wed"],
        datasets:[
            { 
                label:'369',
                data:[3,6,9],
                backgroundColor:'black',
                borderWidth:1,
             }
        ]
    }
    const options={

    }
    return (
        <div>
            <Bar
            data={data}
            options={options}
            >

            </Bar>
        </div>
    );
};

export default chart;