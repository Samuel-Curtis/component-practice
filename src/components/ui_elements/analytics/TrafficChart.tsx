import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
import { ChartData } from "./model/ChartData";
import './Analytics.css'

interface TrafficChartProps {
    chartData: ChartData[]
}

function TrafficChart(props: TrafficChartProps) {

    const pieX: number = 100;
    const pieY: number = 100;

    function getOrderedChartData(): ChartData[] {
        return[
            props.chartData[0],
            props.chartData[3],
            props.chartData[2],
            props.chartData[1],
        ]
    }

    return(
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart >
                <Pie
                    data={getOrderedChartData()}
                    cx={pieX}
                    cy={pieY}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey='value'
                    >

                        <Label value={"Traffic"} position={"center"} className="label label-top" />
                        <Label value={"sources"} position={"center"} className="label label-bottom" />
                        
                        {props.chartData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`}
                                fill={entry.colorHash} 
                                className="cell"
                            />
                        ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default TrafficChart;