import AuthProvider from "./auth/context/authProvider";
import AppRouter from "./routes/AppRouter";
const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
