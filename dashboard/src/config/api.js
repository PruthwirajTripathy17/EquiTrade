const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const API_URL = isLocal
  ? "http://localhost:3002"
  : (import.meta.env.VITE_API_URL || "https://equitrade-7eqx.onrender.com");

export const AUTH_TOKEN_KEY = "equitrade_token";
export const AUTH_USER_KEY = "equitrade_user";
export const FALLBACK_AUTH_TOKEN = "dashboard_session";
