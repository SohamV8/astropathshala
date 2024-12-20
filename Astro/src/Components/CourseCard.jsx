import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CourseCard({ image, title, price, description, onAddToCart }) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[325px] h-auto flex flex-col items-center justify-center">
        <CardHeader shadow={false} floated={false} className="h-[225px] w-[300px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 w-full">
          <Button
            ripple={false}
            fullWidth={true}
            onClick={onAddToCart}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CourseCard;
