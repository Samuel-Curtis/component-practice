import './Analytics.css'
import TrafficChart from "./TrafficChart";
import { ChartData } from "./model/ChartData";

function Analytics() {

    const chartData: ChartData[] = [
        { name: 'Channel pages', value: 37.5, colorHash: '#6792FF'},
        { name: 'Direct or Unknown', value: 33.6, colorHash: '#4473EA'},
        { name: 'Search', value: 11, colorHash: '#1A52E1'},
        { name: 'External', value: 6, colorHash: '#96B3FF'}
    ]

    return(
        <div className="analytics-wrapper">
        
            <h2 className="title">Traffic source types</h2>
            <h3 className="subtitle">Views · Last 28 days</h3>

            <div className="chart-data-wrapper">
                <div className="chart">
                    <TrafficChart chartData={chartData} />
                </div>

                <div className="data-display">
                    {chartData.map((data) => (
                        <span className="data-row">
                            <p className="data-name">{data.name}</p>
                            <span className="bar-wrapper">
                                <span className="bar" style={{background: data.colorHash, width: `${data.value * 1.75}%`}}></span>
                                <span className="percent">{data.value}%</span>
                            </span>

                        </span>
                    ))}
                    <a className='see-more-link'>See more</a>
                </div>
            </div>
        </div>
    )
}

export default Analytics;