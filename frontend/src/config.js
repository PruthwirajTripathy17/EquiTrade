const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const DASHBOARD_URL = isLocal
  ? (window.location.port === "5173" ? "http://localhost:5174" : "http://localhost:5173")
  : "https://equitrade-dashboard-47xy.onrender.com";

export const API_URL = isLocal
  ? "http://localhost:3002"
  : "https://equitrade-7eqx.onrender.com";
