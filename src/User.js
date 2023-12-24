import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
    contactNo: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User Details:', formData);

    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
      setSuccessMessage('Data added successfully!');
    } catch (e) {
      console.error("Error adding document: ", e);
      setSuccessMessage('Error adding data. Please try again.');
    }
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
        <h1>Fill The Form</h1>
      <div style={styles.formGroup}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Contact No:</label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} style={styles.input}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" style={styles.submitButton}>Submit</button>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}

    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default User;
