import React from "react";
import { Card, Button } from "react-bootstrap";

// PostCard component to display individual posts with title, description, and a button
const PostCard = ({ title, description }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        {/* Display the title of the post */}
        <Card.Title>{title}</Card.Title>
        {/* Display the description of the post */}
        <Card.Text>{description}</Card.Text>
        {/* Button for 'Read More' action */}
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

// Export PostCard component for use in Dashboard
export default PostCard;
