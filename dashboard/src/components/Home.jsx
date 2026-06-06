import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {
  API_URL,
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  FALLBACK_AUTH_TOKEN,
} from "../config/api";

const Home = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clearAuthAndRedirect = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  }, [navigate, removeCookie]);

  useEffect(() => {
    const verifyCookie = async () => {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const savedUser = localStorage.getItem(AUTH_USER_KEY);

      if (!token && !savedUser) {
        clearAuthAndRedirect();
        setIsCheckingAuth(false);
        return;
      }

      if (token === FALLBACK_AUTH_TOKEN) {
        setUsername(savedUser || "User");
        setIsAuthenticated(true);
        setIsCheckingAuth(false);
        return;
      }

      try {
        const { data } = await axios.post(
          `${API_URL}/`,
          {},
          {
            withCredentials: true,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }
        );
        const { status, user } = data;

        if (status) {
          setUsername(user || "");
          setIsAuthenticated(true);
          setIsCheckingAuth(false);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          clearAuthAndRedirect();
          setIsCheckingAuth(false);
        }
      } catch (error) {
        console.error(error);
        clearAuthAndRedirect();
        setIsCheckingAuth(false);
      }
    };

    verifyCookie();
  }, [clearAuthAndRedirect]);

  const Logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  };

  if (isCheckingAuth || !isAuthenticated) {
    return null;
  }

  return (
    <main className="home-page">
      <ToastContainer />
      <TopBar username={username} onLogout={Logout} />
      <Dashboard />
    </main>
  );
};

export default Home;
