import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = () => {
    login("goGarrido");
    navigate("/", { options: { replace: true } });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        Loging
      </button>
    </div>
  );
};

export default LoginPage;
