import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = () => <div>Home Page</div>;
const Login = () => <div>Login</div>;
const Register = () => <div>Register</div>;

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  </Routes>
);

export default App;
