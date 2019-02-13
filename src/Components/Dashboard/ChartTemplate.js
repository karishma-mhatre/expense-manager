export function ChartTemplate() {
    return {
        type: 'pie',
            data: {
                datasets: [
                    {
                        data: [
                        ],
                        backgroundColor: [
                            'pink',
                            'lightblue',
                            'lightgreen',
                            'lightgrey'
                        ],
                        label: 'Income'
                    }
                ],
                labels: [
                ]
                
            },
            options: {
				responsive: true
			}
    }
}
