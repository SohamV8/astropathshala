import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import './Fonts.css';

function CourseCard({ image, title, originalPrice, discountedPrice, route, buttonText = "Get this course" }) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[325px] h-auto flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Card Image with Link */}
        <CardHeader shadow={false} floated={false} className="h-[225px] w-[300px] rounded-t-lg overflow-hidden">
          <a href={route} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>
        </CardHeader>

        {/* Card Content */}
        <CardBody className="w-full text-left px-4">
          <Typography variant="h6" color="blue-gray" className="font-bold mb-2">
            {title}
          </Typography>
          <div className="flex items-center justify-start gap-2 mb-4">
            <Typography color="black" className="text-lg font-bold">
              {discountedPrice}
            </Typography>
            <Typography color="gray" className="line-through text-sm font-medium">
              {originalPrice}
            </Typography>
          </div>
        </CardBody>

        {/* Card Footer with Button */}
        <CardFooter className="pt-0 w-full px-4 pb-4">
          <a href={route} target="_blank" rel="noopener noreferrer">
            <Button
              ripple={true}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors duration-300 font-bold"
            >
              {buttonText}
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CourseCard;
