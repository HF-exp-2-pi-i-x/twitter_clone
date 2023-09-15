"use client";
import { AuthContext } from "@/context/AuthContext";
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

// avoid space for input
const Login = () => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const { state, dispatch } = useContext(AuthContext);
  const { loading, err } = state;

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((cred) => ({
      ...cred,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START", payload: "" });
    try {
      const res = await axios.post("http://localhost:4001/login", credentials);
      //   check whether res is empty
      if (res.data.length !== 0) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data[0] });
        router.push("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "incorrect username or password!!!",
        });
      }
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" textAlign={"center"}>
          Login Page
        </Typography>
        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="username"
          name="username"
          onChange={handleChange}
          required={true}
        />
        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="password"
          name="password"
          onChange={handleChange}
          required={true}
        />
        <Button
          disabled={loading}
          //   onClick={handleClick}
          fullWidth
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </form>
      <Button
        sx={{ my: 2 }}
        fullWidth
        variant="contained"
        onClick={() => {
          router.push("/register");
        }}
      >
        Register
      </Button>
      {err && <span>{err}</span>}
    </Container>
  );
};

export default Login;
