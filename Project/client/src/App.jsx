import './App.css'
import Chart1 from './chart1';
import Chart2 from './chart2';
import { Chart } from "react-google-charts";

function App() {
    const GenderData = [
    ["Gender", "Percentage"],
    ["Male", 82],
    ["Female",12]
    ];

    const options = {
      title: "Gender Data",
      pieHole: 0.4,
      is3D: false,
    };

    const MapData = [
    ["Country", "Popularity"],
    ["Canada", 18726],
    ["Russia", 780],
    ["Australia", 6026],
    ["United State", 18726],
    ["Brazil", 2340],
    ["South Africa", 1994],
    ["New Zealand",1994],
    ["India",2994],
    ["Thailand",390],
    ["Philippines",390],
    ["Mexico",390],
    ["Columbia",390],
    ["United States",171308]
    ];
  const CountryData = [
    ["Country Name", "count"],
    ["Canada", 18726],
    ["Russia", 780],
    ["Australia", 6026],
    ["United State", 18726],
    ["Brazil", 2340],
    ["South Africa", 1994],
    ["New Zealand",1994],
    ["India",2994],
    ["Thailand",390],
    ["Philippines",390],
    ["Mexico",390],
    ["Columbia",390],
    ["United States",171308]
  ];

  const IndoorDayData = [
    ["Time Indoor", "percentage(%)"],
    ["1-14 days", 22],
    ["31-60 days", 21],
    ["other", 58]
  ];

  const CountryTitle = {
    title: "Data from different countries",
  };

  const IndoorTitle = {
    title: "Indoor Days Data",
  };

  const barChartData = {
    labels: ['House Wife', 'Student', 'Others'],
    values: [23, 21, 56],
  };

  const LineData = {
    labels: ["8/27/2014", "2/10/2015", "2/1/2016"],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65,40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ],
  };

  return (
    <>
      <div className="two-column-container">
        <div className="column">
          <h2> Occupation </h2>
          <Chart1 data={barChartData}></Chart1>
          <h2> TimeStamp </h2>
          <Chart2 data={LineData}></Chart2>
          <h2>Background Info</h2>
        <table>
          <thead>
            <tr>
              <th>  </th>
              <th>True</th>
              <th>False</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Family History</td>
              <td>40%</td>
              <td>60%</td>
            </tr>
            <tr>
              <td>Treatment</td>
              <td>50%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Growing Stress</td>
              <td>51%</td>
              <td>49%</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="column">
          <Chart
          chartType="PieChart"
          data={CountryData}
          options={CountryTitle}
          width={"100%"}
          height={"400px"}
          />
          <Chart
          chartType="PieChart"
          data={IndoorDayData}
          options={IndoorTitle}
          width={"100%"}
          height={"400px"}
          />
          <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={GenderData}
          options={options}
          />
        </div>
      </div>
      <div className="full-width-row">
        <div className="content">
        <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="90%"
        height="100%"
        data={MapData}
        />
        </div>
      </div>
    </>
  )
}

export default App
