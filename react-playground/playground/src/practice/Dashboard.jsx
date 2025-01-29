import React, {useState, useEffect} from "react";
import axios from 'axios'
import ChartComponent from "./ChartComponent";

const Dashboard = () => {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios.get('https://api.example.com/data')
            const data = transformData(result.data)
            setChartData(data)
        }

        fetchdata()
    }, [])

    const transformData = (data) => {
        return {
            labels: data.map(item => item.date),
            datasets: [
                {
                    label: 'dataset label',
                    data: data.map(item => item.value),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        }
    }

    return (
        <div>
            <ChartComponent data={chartData} />
        </div>
    )

}

export default Dashboard