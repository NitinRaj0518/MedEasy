import React, { useState, useEffect } from "react";
import Data from "./hospital.json";
import { Card, CardContent, Typography, makeStyles, TextField, Container } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
    width: '80%',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: '1.2rem',
    color: '#666',
  },
  searchBox: {
    width: '80%',
    marginBottom: theme.spacing(2),
  },
}));

function Hospital() {
  const classes = useStyles();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setAllData(Data);
    setFilteredData(Data);
  }, []);

  function handleSearch(event) {
    let value = event.target.value.toUpperCase();
    let result = allData.filter((data) => {
      return data.name.toUpperCase().includes(value);
    });
    setFilteredData(result);
  }

  return (
    <Container className={classes.container}>
      <TextField
        className={classes.searchBox}
        variant="outlined"
        placeholder="Search Hospital"
        onChange={(event) => handleSearch(event)}
      />
      {filteredData.length > 0 ?
        filteredData.map(hospital => (
          <Card key={hospital.id} className={classes.card}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>{hospital.name.toUpperCase()}</Typography>
              <Typography className={classes.content} color="textSecondary" component="p">Type: {hospital.type}</Typography>
              <Typography className={classes.content} color="textSecondary" component="p">Address: {hospital.address}</Typography>
              <Typography className={classes.content} color="textSecondary" component="p">City: Delhi</Typography>
              <Typography className={classes.content} color="textSecondary" component="p">Contact Number: {hospital.contact_numbers[0]}</Typography>
              <Typography className={classes.content} color="textSecondary" component="p">Location: <a href={hospital.location} target='_blank' rel="noreferrer">Check hospital location</a></Typography>
            </CardContent>
          </Card>
        )) :
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>No Hospitals Found</Typography>
          </CardContent>
        </Card>
      }
    </Container>
  )
}

export default Hospital;
