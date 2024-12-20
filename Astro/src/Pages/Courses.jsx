import React, { useState } from "react";
import CourseCard from "../Components/CourseCard";

function Courses() {
  const [cartItems, setCartItems] = useState([]);

  const courses = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      title: "Apple AirPods",
      price: 95.0,
      description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616401789410-64861a8cebd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "MacBook Pro",
      price: 1299.0,
      description: "Experience the power and performance of the M1 chip.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571849149980-8b5f3b27ebda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "iPhone 13",
      price: 799.0,
      description: "The next-generation iPhone with stunning performance.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1588618638673-526994b0e5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Apple Watch",
      price: 399.0,
      description: "Stay connected, active, and healthy with the Apple Watch.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      title: "Apple AirPods",
      price: 95.0,
      description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1616401789410-64861a8cebd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "MacBook Pro",
      price: 1299.0,
      description: "Experience the power and performance of the M1 chip.",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1571849149980-8b5f3b27ebda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "iPhone 13",
      price: 799.0,
      description: "The next-generation iPhone with stunning performance.",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1588618638673-526994b0e5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Apple Watch",
      price: 399.0,
      description: "Stay connected, active, and healthy with the Apple Watch.",
    },
  ];

  const handleAddToCart = (course) => {
    setCartItems([...cartItems, course]);
    alert(`${course.title} has been added to the cart!`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          price={course.price}
          description={course.description}
          onAddToCart={() => handleAddToCart(course)}
        />
      ))}
    </div>
  );
}

export default Courses;
