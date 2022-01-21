import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        border: "1px solid grey",
        padding: "2%",
        backgroundColor: "rgba(255, 255, 255,)",
        fontSize: "24px",
        fontWeight: "600",
       
      }}>
            <Link to="/" className="linkTag">
              Home
            </Link>
     
            <Link to={`/Total`} className="linkTag">
              See Completed task{" "}
            </Link>
     
       
      
      </div>
    </>
  );
};