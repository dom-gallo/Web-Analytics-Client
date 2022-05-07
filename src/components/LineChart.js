import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart, registerables} from "chart.js";
Chart.register(...registerables);

const LineChart = (props) => {
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    const data = {

        labels: props.labels,
        datasets : [
            {
                label: props.label,
                data : props.data
            }
        ]
    }

    return (
        <Line data={data} options={options}/>
    );
}

export default LineChart;