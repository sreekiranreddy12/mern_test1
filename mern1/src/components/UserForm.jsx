import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        location: '',
        emergencyType: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('User data submitted successfully!');
                setFormData({ name: '', contact: '', location: '', emergencyType: '' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
            <input type="text" name="emergencyType" placeholder="Emergency Type" value={formData.emergencyType} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;