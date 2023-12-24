// AdminPage.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
const Admin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchData = async () => {
      const userCollection = collection(db, 'users');
      const querySnapshot = await getDocs(userCollection);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setUserData(data);
    };

    fetchData();
  }, []);

  const downloadUserData = () => {
    // Convert user data to CSV format
    let csvContent = 'data:text/csv;charset=utf-8,';
    userData.forEach((user) => {
      let row = Object.values(user).join(',');
      csvContent += row + '\r\n';
    });

    // Create a Blob and initiate a download
    let blob = new Blob([csvContent], { type: 'text/csv' });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'user_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>EximLogistics EmployeeData</h2>
      <button style={styles.button} onClick={downloadUserData}>
        Download User Data
      </button>

      {/* Display user data in a table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} style={styles.row}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.contactNo}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
};

export default Admin;
