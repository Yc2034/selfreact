import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Self-Media Tracker</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Vlogger Tracker</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
