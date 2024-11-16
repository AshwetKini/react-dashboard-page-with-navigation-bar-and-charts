// Importing React and necessary icons from react-icons
import React from 'react';
import { 
  BsFillArchiveFill, 
  BsFillGrid3X3GapFill, 
  BsPeopleFill, 
  BsFillBellFill 
} from 'react-icons/bs';

// Importing chart components from recharts for data visualization
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie 
} from 'recharts';
import { ComposedChart, Area } from 'recharts';

// Home component definition
function Home() {
  // Sample data for bar and line charts
  const data = [
    { name: 'Jun', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Jul', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Aug', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Sep', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Oct', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Nov', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
  ];

  // Sample data for pie chart
  const dataa = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

  // Constants for rendering the needle on the pie chart
  const RADIAN = Math.PI / 180;
  const cx = 150; // Center x-coordinate for the pie chart
  const cy = 200; // Center y-coordinate for the pie chart
  const iR = 50;  // Inner radius of the pie chart
  const oR = 100; // Outer radius of the pie chart
  const value = 50; // Value for the needle position

  // Function to render the needle on the pie chart
  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx;
    const y0 = cy;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    // Returns an array containing the needle circle and path
    return [
      <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        key="path"
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        fill={color}
      />,
    ];
  };

  // JSX for the Home component UI
  return (
    <main className="main-container">
      {/* Dashboard Title */}
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      {/* Dashboard cards showing summary statistics */}
      <div className="main-cards">
        {/* Loan Products Card */}
        <div className="card">
          <div className="card-inner">
            <h3>Loan Products</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>4</h1>
        </div>
        {/* Leads Card */}
        <div className="card">
          <div className="card-inner">
            <h3>Leads</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        {/* Customers Card */}
        <div className="card">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        {/* Alerts Card */}
        <div className="card">
          <div className="card-inner">
            <h3>Alerts</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      {/* Charts section */}
      <div className="charts">
        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart with Needle */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            data={dataa}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {dataa.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, dataa, cx, cy, iR, oR, '#d0d000')}
        </PieChart>
      </ResponsiveContainer>
    </main>
  );
}

export default Home;
