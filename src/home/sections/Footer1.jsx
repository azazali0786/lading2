import React from "react";

import { Grid, Button, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    "& h4:after": {
      content: '" "',
      position: "absolute",
      bottom: -8,
      left: 0,
      height: 2,
      width: 64,
      background: palette.secondary.main,
    },
  },
}));

const Footer1 = () => {
  const classes = useStyles();

  return (
    <div className={clsx("bg-light-dark", classes.footerSection)} id="footer1">
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">About Us</h4>
              <p className="text-inherit">
                Romsons Enterprises is a trusted tyre distributor with 35+ years of experience, 
                supplying CEAT, Maxxis, and Bedrock tyres across Western Uttar Pradesh. 
                We focus on quality products, fast delivery, and strong dealer support.
              </p>
              <Button variant="contained" color="secondary">
                <a href="mailto:azazwinner786@gmail.com">
                      contact us
                    </a>
              </Button>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Contact</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <Icon className="text-secondary">mail</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Email</h5>
                  <p className="m-0 p-0 text-inherit">support@nsityre.com</p>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <Icon className="text-secondary">location_on</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Adress</h5>
                  <p className="m-0 p-0 text-inherit">
                    D-21 Meerut Road Industrial Area, Ghaziabad, Uttar Pradesh 201003
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Disclaimer</h4>
              <p className="text-inherit">
                All brands and logos belong to their respective owners. Product details are subject to change, and availability may vary based on stock and manufacturer updates.
              </p>

            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer1;
