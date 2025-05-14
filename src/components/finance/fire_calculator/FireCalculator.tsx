import FireChart from "./FireChart";
import FireForm from "./FireForm";
import './FireCalculator.css'
import { useState } from "react";
import { YearlyFireData } from "./models/FireCalculatorModels";

function FireCalculator() {

    const [fireChartData, setFireChartData] = useState<YearlyFireData[]>([]);

    const fireYears: YearlyFireData[] = fireChartData.filter((data) => data.leanFireReachedThisYear || data.tradFireReachedThisYear)

    return(
        <div className="fire-wrapper">

            <div className="fire-form-wrapper">
                <FireForm setFireChartData={setFireChartData} />
            </div>

            <div className="fire-chart-wrapper">
                <FireChart fireChartData={fireChartData} />

                {fireYears[0] &&
                <div>
                    <p className="fire-number">{`Lean Fire (Expenses Covered) reached at age ${fireYears[0].age}`}</p>
                    <p className="fire-number">{`Traditional Fire (Salary Replaced) reached at age ${fireYears[1].age}`}</p>
                </div>
                }       
            </div>
        </div>
    )
}

export default FireCalculator;