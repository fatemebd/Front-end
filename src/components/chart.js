import React, { PropTypes } from 'react';
import{
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
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
        labels:["گزینه ۱","گزینه ۲"],
        datasets:[
            { 
                label:'تعداد',
                data:[0,1],
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