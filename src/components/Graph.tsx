import { Line } from 'react-chartjs-2'
// import { useState, useEffect } from 'react'

export default function Graph(props: any) {

    // const [totalCase, setTotalCase] = useState<any[]>([])
    // const [date, setDate] = useState<any[]>([])

    return (
        <Line
            data={{
                labels: props.data.map((ele: any) => ele.txn_date),
                datasets: [
                    {
                        label: 'New Cases',
                        data: props.data.map((ele: any) => ele.new_case),
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBorderColor: 'transparent',
                    },
                    {
                        label: 'New Recovered',
                        data: props.data.map((ele: any) => ele.new_recovered),
                        borderColor: 'rgb(65, 224, 113)',
                        pointBorderColor: 'transparent'
                    },
                    {
                        label: 'New Deaths',
                        data: props.data.map((ele: any) => ele.new_death),
                        borderColor: 'black',
                        pointBorderColor: 'transparent'
                    },
                ]
            }}
            height={400}
            width={500}
            options={{
                maintainAspectRatio: false,
                responsive: true
            }}
        />
    )
}
