import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/Auth/auth.service';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          AuthService.logout();
          navigate('/login');
        }}>
        logout
      </button>
    </div>
  );
};
