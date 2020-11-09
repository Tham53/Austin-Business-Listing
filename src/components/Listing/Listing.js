import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  Paper,
  Table,
  Container,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@material-ui/core";
import { checkAuth } from "../../checkAuth";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: 50,
  },
}));

const Listing = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.Container}>
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Business Name</TableCell>
              <TableCell align="left">Business Description</TableCell>
              <TableCell align="right">Open Hours</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Link to={`/details/${business.id}`} className="listingLink">
                    {business["name"]}
                  </Link>
                </TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.hours}</TableCell>
                <TableCell>{business.address}</TableCell>
                {checkAuth() && (
                  <TableCell>
                    <DeleteIcon
                      color="secondary"
                      onClick={(index) => props.deleteBusiness(idx, index)}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Listing;