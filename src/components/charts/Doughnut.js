import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default ({title, ...props}) => (
    <div className="chart">
        <h1>{title}</h1>
        <Doughnut {...props} 
            options={{
                legend: {
                    display: false,
                },
            }}
        />
    </div>
)