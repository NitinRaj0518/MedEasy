import React, { useState } from 'react';
import './function_bar.css';

const FunctionBar = ({ courses, handleFilteredCourses }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [sortBy, setSortBy] = useState('');


    const handleSearch = (filteredCourses) => {
        console.log("Filtered courses:", filteredCourses);
        handleFilteredCourses(filteredCourses);
    };

    const filterChange = (value) => {
        console.log("Filter changed:", value);
    };
    const sortChange = (value) => {
        console.log("Sort changed:", value);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filteredCourses = courses.filter(course =>
            course.course_name && course.course_name.toLowerCase().includes(query.toLowerCase())
        );
        handleSearch(filteredCourses);
    };

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
        filterChange(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        sortChange(e.target.value);
    };

    return (
        <div className="function-bar">
            <div className="address-section">
                <p style={{color: "black"}}>Deliver to Pincode: 763008</p>
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
            <select value={filterValue} onChange={handleFilterChange} className="filter-select">
                <option value="">All</option>
                <option value="filter1">Diabetis</option>
                <option value="filter2">Gastric</option>
                <option value="filter3">Acne</option>
            </select>
            <select value={sortBy} onChange={handleSortChange} className="sort-select">
                <option value="">Sort By</option>
                <option value="sortBy1">Price High - Low</option>
                <option value="sortBy2">Price Low - High</option>
            </select>
        </div>
    );
};

export default FunctionBar;
