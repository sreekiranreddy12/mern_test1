import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState({ name: '', issue: '' });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location) return alert('Fetching location...');
    await axios.post('http://localhost:5000/api/admin/submit', { ...data, location });
    alert('Submitted successfully');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Disaster Management</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <input type="text" placeholder="Name" onChange={(e) => setData({ ...data, name: e.target.value })} className="border p-2 w-full" required />
        <input type="text" placeholder="Issue" onChange={(e) => setData({ ...data, issue: e.target.value })} className="border p-2 w-full" required />
        <button color='darkblue'>Submit</button>
      </form>
    </div>
  );
}

export default Home;
