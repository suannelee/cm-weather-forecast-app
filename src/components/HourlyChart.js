import React from 'react';
import { Line } from 'react-chartjs-2';
import { getChartData } from '../utilities/getChartData';


function HourlyChart({ data }){
    const [state, options] = getChartData(data);
    
    return(
        <div>
            <Line
                data={state}
                height={250}
                options={options}
            />
        </div>
    )
}


export default HourlyChart;