import React from 'react'
import DonutChart from 'react-donut-chart';

export const Chart = () => {
    return (
        <div>

            <DonutChart
                data={[{
                    label: 'Left to meet target',
                    value: 5000
                },
                {
                    label: 'Total made',
                    value: 2000,
                }]}
                colors={['#FFBD59','#FEE2D4']}
                height={300}
                width={300}
                legend={false}
                strokeColor='inherit'
                innerRadius={0.6}
                 />

        </div>
    )
}
