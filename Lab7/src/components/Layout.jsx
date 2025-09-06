const Layout = ({ children }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh"
    }}>
      <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "500px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
      }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
