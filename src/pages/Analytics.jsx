import "./Analytics.css";
import { useState } from 'react';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Analytics = () => {
 const stats = [
    { title: 'Page Views', value: '10,234', change: '+8.3%' },
    { title: 'Unique Visitors', value: '7,890', change: '+5.1%' },
    { title: 'Bounce Rate', value: '42%', change: '-2.4%' },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Page Views',
        data: [5000, 6000, 5500, 7000, 8000, 10000],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1f2937',
          font: { size: 14 },
        },
      },
      title: {
        display: true,
        text: 'Page Views Over Time',
        color: '#1f2937',
        font: { size: 16, weight: '600' },
      },
    },
    scales: {
      x: {
        ticks: { color: '#4b5563' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#4b5563' },
        grid: { color: '#e5e7eb' },
      },
    },
  };

    return(
    <>
    <h3>Analytics</h3>
    <div className="grid-holder">
{stats.map((stat)=>(
    <div key={stat.title} >
            <h4>{stat.title}</h4>
            <p>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.875rem', color: stat.change.startsWith('+') ? '#22c55e' : '#ef4444' }}>
              {stat.change}
            </p>
          </div>
))}
    </div>

    <div className="chart-holder">
        <div className="chart">
          <Line data={chartData} options={chartOptions} />
        </div>
    </div>
    </>
)
}
export default Analytics;