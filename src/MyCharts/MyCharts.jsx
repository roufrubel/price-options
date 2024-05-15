import { LineChart, Line, XAxis, YAxis } from 'recharts';


const MyCharts = () => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
    ];
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
    <Line dataKey="uv" stroke="red" />
    <Line dataKey="uv" stroke="green" />
    <Line dataKey="uv" stroke="blue" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        </div>
    );
};

export default MyCharts;