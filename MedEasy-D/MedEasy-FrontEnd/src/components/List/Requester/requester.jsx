import React, { useEffect, useState } from 'react';
import styles from './requester.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Donor = () => {
    const [requesters, setRequesters] = useState([]);

    useEffect(() => {
        getRequester();
    }, [])

    const getRequester = async () => {
        try {
            const response = await axios.get("http://localhost:5002/plasma/getrequesters");
            setRequesters(response.data.requesters);
        } catch (error) {
            console.error("Error fetching requesters", error);
        }
    };
    return (
        <div>
            <h1 className={styles.heading}>Request List</h1>
            <table className={styles.styledtable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Blood Group</th>
                        <th>Phone Number</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Update Info</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {requesters.map(requester => (
                        <tr key={requester.id}>
                            <td>{requester.name}</td>
                            <td>{requester.age}</td>
                            <td>{requester.gender}</td>
                            <td>{requester.bloodgroup}</td>
                            <td>{requester.phone}</td>
                            <td>{requester.state}</td>
                            <td>{requester.city}</td>
                            <td><button className={styles.button}><Link to="/plasma/requesterlogin" className={styles.link}>Update</Link></button></td>
                            <td><button className={styles.button}><Link to="/plasma/requesterloginanddelete" className={styles.link}>Delete</Link></button></td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Donor;