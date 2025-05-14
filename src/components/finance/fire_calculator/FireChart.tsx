import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { YearlyFireData } from "./models/FireCalculatorModels";

interface FireChartProps {
    fireChartData: YearlyFireData[]
}

function FireChart(props: FireChartProps) {

    const domainRange = props.fireChartData[0] ? props.fireChartData[props.fireChartData.length-1].totalInvestments : 100_000
    
    const fireYears: YearlyFireData[] = props.fireChartData.filter((data) => data.leanFireReachedThisYear || data.tradFireReachedThisYear)
    
    function formatDollar(value: number): string {
        return '$'+value.toLocaleString('en-US')
    }

    return(
        <ResponsiveContainer width={'95%'} height={'80%'} className={'responsive-container'} >
            <AreaChart data={props.fireChartData} margin={{left: 28}}>

                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey={"age"} />
                <YAxis 
                    domain={[0, domainRange]} 
                    tickFormatter={formatDollar}   
                />

                <Tooltip
                    formatter={formatDollar}
                    labelFormatter={(label) => `Age: ${label}`}
                />
                <Area type="monotone" dataKey="totalInvestments" stroke="#283618" fill="#606c38" />
                <Area type="monotone" dataKey="contributions" fill="#fefae0" stroke="#dda15e" />

                {fireYears[0] &&
                <ReferenceLine
                    key={'lean-fire'}
                    y={fireYears[0].totalInvestments}
                    label={`Lean FIRE: ${formatDollar(fireYears[0].totalInvestments)}`}
                />
                }
                
                {fireYears[1] &&
                <ReferenceLine
                    key={'trad-fire'}
                    y={fireYears[1].totalInvestments}
                    label={`Traditional FIRE: ${formatDollar(fireYears[1].totalInvestments)}`}
                />
                }
                
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default FireChart;