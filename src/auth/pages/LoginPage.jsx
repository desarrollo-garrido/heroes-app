
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../context';

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onLogin = () => {
    login('goGarrido')
    navigate("/", { options: { replace: true }})
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <hr />
      <button
      onClick={onLogin}
      className="btn btn-primary">Loging</button>
    </div>
      
  )
}

export default LoginPage