import React, { useEffect, useState } from 'react';
import styles from './donor.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Donor = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        getDonor();
    }, [])

    const getDonor = async () => {
        try {
            const response = await axios.get("http://localhost:5002/plasma/getdonors");
            setDonors(response.data.donors);
        } catch (error) {
            console.error("Error fetching requesters", error);
        }
    };

    return (
        <div>
            <h1 className={styles.heading}>Donors List</h1>
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
                    {donors.map(donor =>
                        <tr key={donor.id}>
                        <td>{donor.name}</td>
                        <td>{donor.age}</td>
                        <td>{donor.gender}</td>
                        <td>{donor.bloodgroup}</td>
                        <td>{donor.phone}</td>
                        <td>{donor.state}</td>
                        <td>{donor.city}</td>
                        <td><button className={styles.button}><Link to="/plasma/login" className={styles.link}>Update</Link></button></td>
                        <td><button className={styles.button}><Link to="/plasma/loginanddelete" className={styles.link}>Delete</Link></button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Donor;