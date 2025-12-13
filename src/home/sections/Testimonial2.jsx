import React from "react";
import { Card, CardContent, Avatar } from "@mui/material";
import Carousel from "../common/Carousel";

const Testimonial1 = () => {
  const testimonialList = [
    {
      companyLogoUrl: "./assets/images/mock-logo-1.png",
      user: {
        imageUrl: "./assets/images/face-1.jpg",
        name: "Rahul Verma",
        designation: "Tyre Dealer",
      },
      review: `Romsons ensures timely delivery and genuine tyres every time. Their service has made our dealership operations smooth and reliable.`,
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-2.png",
      user: {
        imageUrl: "./assets/images/face-2.jpg",
        name: "Amit Sharma",
        designation: "Retail Partner",
      },
      review: `The product quality from CEAT, Maxxis, and Bedrock is excellent. We always receive fresh stock with full support from the team.`,
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-3.png",
      user: {
        imageUrl: "./assets/images/face-3.jpg",
        name: "Deepak Singh",
        designation: "Distributor",
      },
      review: `A dependable distribution partner with fast claim support and transparent communication. Working with them has boosted our customer trust.`,
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-4.png",
      user: {
        imageUrl: "./assets/images/face-4.jpg",
        name: "Vikram Chauhan",
        designation: "Dealer Network Partner",
      },
      review: `Strong supply chain, genuine products, and excellent cooperation. Romsons Enterprises has been a reliable partner for our growth.`,
    },
  ];

  return (
    <div className="section" id="testimonial2">
      <div className="container">
        <div className="section__header">
          <h2>What Our Customers Say</h2>
          <p>
            Our dealer partners trust us for consistent supply, genuine
            products, and smooth distribution across every segment we serve.
          </p>
        </div>

        <Carousel carouselId="testimonial-2">
          {testimonialList.map((testimonial, index) => (
            <Card className="px-6 card w-full h-full" key={index}>
              <CardContent className="flex-column justify-between min-h-full">
                
                <div className="mb-6 mt-4">
                  <img src={testimonial.companyLogoUrl} alt="logo" />
                </div>

                <p className="mt-0 mb-16 text-16">
                  "{testimonial.review}"
                </p>

                <div className="flex flex-wrap items-center">
                  <Avatar
                    className="w-48 h-48"
                    src={testimonial.user.imageUrl}
                  />
                  <div className="pl-4">
                    <p className="m-0">
                      <strong>{testimonial.user.name}</strong>
                    </p>
                    <p className="m-0">{testimonial.user.designation}</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial1;
