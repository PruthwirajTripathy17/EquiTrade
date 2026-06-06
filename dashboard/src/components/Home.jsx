import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setIsCheckingAuth(false);
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;

        if (status) {
          setUsername(user || "");
          setIsCheckingAuth(false);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          setIsCheckingAuth(false);
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        setIsCheckingAuth(false);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  if (isCheckingAuth) {
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
