import React from "react";
import { Icon, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "../common/Carousel";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderTop: "2px solid black",
    "& .icon": {
      fontSize: 64,
    },

    "&:hover": {
      borderTop: "2px solid rgba(var(--primary), 1)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      }, 
    },
  },
}));

const Services2 = () => {
  const classes = useStyles();

  const serviceList = [
    {
      icon: "local_shipping",
      title: "Tyre Distribution",
      text:
        "Fast and reliable supply of CEAT, Maxxis, and Bedrock tyres across Western Uttar Pradesh.",
    },
    {
      icon: "store",
      title: "Dealer Support",
      text:
        "We provide complete assistance to our 200+ dealer network with stock, pricing, and product updates.",
    },
    {
      icon: "verified",
      title: "Claim Settlement",
      text:
        "Transparent and hassle-free claim support to ensure customer satisfaction and long-term trust.",
    },
    {
      icon: "inventory_2",
      title: "Wide Product Range",
      text:
        "Motorcycle, Scooter, Three-Wheeler, Car, LMV & LCV tyres available in multiple sizes and patterns.",
    },
    {
      icon: "handshake",
      title: "Partnership & Branding",
      text:
        "Strong partnerships with leading tyre brands enabling consistent quality and business growth.",
    },
  ];

  return (
    <section className="section bg-light-gray" id="service2">
      <div className="container">
        <div className="section__header">
          <h2>Our Services</h2>
          <p>
            We provide reliable tyre distribution, fast delivery, and complete
            dealer support to ensure smooth operations across all segments.
          </p>
        </div>

        <Carousel carouselId="services-2">
          {serviceList.map((service, index) => (
            <Card key={index} className={clsx("card h-full", classes.card)}>
              <CardContent className="flex-column justify-between min-h-full">
                <div className="flex-grow">
                  <div className="text-center mb-4">
                    <Icon className="icon">{service.icon}</Icon>
                  </div>
                  <h3 className="font-light text-24">{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                {/* <div className="pt-4">
                  READ MORE
                </div> */}
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services2;
