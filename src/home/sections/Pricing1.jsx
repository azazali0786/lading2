import React from "react";
import { Grid, Card, CardContent, Icon } from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    borderTop: "2px solid black",
    transition: "0.3s ease",
    "& .icon": {
      fontSize: 56,
      color: "#444",
      transition: "0.3s ease",
    },
    "&:hover": {
      borderTop: "2px solid rgba(var(--primary),1)",
      transform: "translateY(-4px)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      },
    },
  },
}));

const DetailsSection = () => {
  const classes = useStyles();

  const detailList = [
    {
      icon: "inventory_2",
      title: "Wide Product Range",
      text: "Motorcycle, scooter, three-wheeler, car, LMV & LCV tyres available in multiple sizes and patterns.",
    },
    {
      icon: "local_shipping",
      title: "Fast Delivery",
      text: "Quick dispatch, reliable logistics, and consistent availability for all partner dealers.",
    },
    {
      icon: "verified",
      title: "Quality Assurance",
      text: "Only genuine products from trusted brands like CEAT, Maxxis, and Bedrock.",
    },
    {
      icon: "support",
      title: "Dealer-Friendly Service",
      text: "Easy communication, transparent process, and full support including claim settlement.",
    },
  ];

  return (
    <div className="section" id="details">
      <div className="container">
        <div className="section__header">
          <h2>What We Offer</h2>
          <p>
            A complete solution for tyre dealers — from product availability to business support.
          </p>
        </div>

        <Grid container spacing={3}>
          {detailList.map((item, index) => (
            <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
              <Card className={clsx("card h-full p-4", classes.card)}>
                <CardContent className="text-center">
                  <Icon className="icon mb-3">{item.icon}</Icon>
                  <h3 className="text-20 font-bold">{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default DetailsSection;
