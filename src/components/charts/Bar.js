import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default ({data, width, height}) => (
    <div className="chart">
        <HorizontalBar
            type='horizontalBar'
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                      display: true
                    }],
                    yAxes: [{
                      display: false
                    }],
                  }
            }}
        />
    </div>
);