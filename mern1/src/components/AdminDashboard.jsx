import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/applications");
      setApplications(response.data);
    } catch (error) {
      console.error("❌ Error fetching applications:", error);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/applications/${id}`);
      fetchApplications(); // Refresh data after update
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app._id}>
              {app.name} - {app.location} - {app.status} 
              {app.status === "Pending" && (
                <button onClick={() => markAsCompleted(app._id)}>Mark as Completed</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
