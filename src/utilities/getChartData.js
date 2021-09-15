export function getChartData(data){

    const DATA_COUNT = 12;

    var date = new Date();
    var timeStr = "";

    var labels = data.hourly.map((hour, index) => {
        if(index < DATA_COUNT) {
            date = new Date(hour.dt * 1000);;
            timeStr = date.toLocaleTimeString().split(':',2).join(':');
            
            return timeStr;
        } else {
            return false;
        }
    })

    labels = labels.slice(0, DATA_COUNT);

    var datapoints = data.hourly.map((hourlyData) => {
        return hourlyData.temp;
    }) 

    datapoints = datapoints.slice(0, DATA_COUNT);

    const state = {
        labels: labels,
        datasets: [
            {
                fill: true,
                lineTension: 0.4,
                backgroundColor: '#82ABEC',
                borderColor: '#3459D1',
                showLine: true,
                borderWidth: 2,
                data: datapoints
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        elements: {
            point:{
            }
        },
        plugins:{  
            legend: {
                display: false
            }
        },
        scales: {
            xAxis: {
                display: true,
                grid: {
                    display: false,
                }
            },
            yAxis: {
                display: true,
                grid: {
                    display: false,
                }
            }
        }
    }
    
    return [state, options];
  }