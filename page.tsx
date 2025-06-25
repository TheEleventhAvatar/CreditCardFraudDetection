'use client';

import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const stats = {
  total: 689,
  legit: 591,
  fraud: 98,
  accuracy: 98.4,
  precision: 100,
  recall: 88.78,
  f1: 94.05,
  confMatrix: [
    [591, 0],
    [11, 87]
  ]
};

const pieData = {
  labels: ['Legit', 'Fraud'],
  datasets: [
    {
      label: 'Transaction Distribution',
      data: [stats.legit, stats.fraud],
      backgroundColor: ['#4ade80', '#f87171']
    }
  ]
};

const barData = {
  labels: ['Precision', 'Recall', 'F1-Score'],
  datasets: [
    {
      label: 'Fraud Class (1)',
      data: [stats.precision, stats.recall, stats.f1],
      backgroundColor: '#60a5fa'
    }
  ]
};

export default function Home() {
  return (
    <main className="text-black grid grid-cols-1 gap-4 p-4">
      
      {/* Transaction Summary */}
      <div className="rounded-2xl shadow-md bg-white p-3 max-w-sm w-full self-start">
        <h2 className="text-lg font-semibold mb-1">Transaction Summary</h2>
        <p className="text-sm">Total Samples: {stats.total}</p>
        <p className="text-sm">Legit: {stats.legit}</p>
        <p className="text-sm">Fraud: {stats.fraud}</p>
        <p className="text-sm">Accuracy: {stats.accuracy}%</p>
      </div>

      {/* Class Distribution */}
      {/* Class Distribution */}
<div className="rounded-2xl shadow-md bg-white p-4 w-fit max-w-xs self-start">
  <h2 className="text-lg font-semibold mb-2">Class Distribution</h2>
  <div className="w-48 h-48">
    <Pie data={pieData} />
  </div>
</div>


      {/* Performance Metrics */}
      {/* Performance Metrics */}
<div className="rounded-2xl shadow-md bg-white p-4 w-fit max-w-sm self-start">
  <h2 className="text-lg font-semibold mb-2">Performance Metrics (Fraud)</h2>
  <div className="w-64 h-48">
    <Bar data={barData} options={{ maintainAspectRatio: false }} />
  </div>
</div>


      {/* Confusion Matrix */}
      <div className="rounded-2xl shadow-md bg-white p-4">
        <h2 className="text-xl font-semibold mb-2">Confusion Matrix</h2>
        <table className="w-full text-center border">
          <thead>
            <tr className="border-b">
              <th></th>
              <th>Pred Legit</th>
              <th>Pred Fraud</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Actual Legit</td>
              <td>{stats.confMatrix[0][0]}</td>
              <td>{stats.confMatrix[0][1]}</td>
            </tr>
            <tr>
              <td>Actual Fraud</td>
              <td>{stats.confMatrix[1][0]}</td>
              <td>{stats.confMatrix[1][1]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
