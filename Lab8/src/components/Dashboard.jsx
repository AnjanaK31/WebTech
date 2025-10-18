import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";

// Sample data for the posts to be displayed
const postsData = [
  { id: 1, title: "Optimization Techniques", description: "Mathematics course exploring various optimization techniques that will aid in Machine Learning" },
  { id: 2, title: "Web Technology", description: "Understand the basics of Web Development using HTML, CSS, JS, React and tech stacks related to MERN" },
  { id: 3, title: "Principles of Management", description: "Brief Introductory course in the basics of management." },
  { id: 4, title: "Deep Learning", description: "Studying and Exploring architectures like CNN and RNN" }
];

// Dashboard component to render posts in a grid layout
const Dashboard = () => {
  return (
    <Container className="mt-4">
      {/* Row to display the posts in columns */}
      <Row>
        {postsData.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4}>
            {/* Render PostCard for each post */}
            <PostCard title={post.title} description={post.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export Dashboard component for use in other files
export default Dashboard;
