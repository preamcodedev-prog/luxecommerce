import React from 'react';
import './CopilotPlansDashboard.css';

const CopilotPlansDashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Plan Metrics Dashboard</h1>
                <div className="menu">
                    <button>Refresh</button>
                    <button>Export to Excel</button>
                </div>
            </header>
            <table className="metrics-table">
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Users</th>
                        <th>Usage</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Basic Plan</td>
                        <td>100</td>
                        <td>75%</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>Premium Plan</td>
                        <td>200</td>
                        <td>50%</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>Enterprise Plan</td>
                        <td>50</td>
                        <td>30%</td>
                        <td>Inactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CopilotPlansDashboard;