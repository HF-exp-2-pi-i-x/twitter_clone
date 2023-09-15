"use client";

import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((cred) => ({
      ...cred,
      [e.target.name]: e.target.value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4001/register", credentials);
      alert("successfully registered!!!!!!!");
      router.push("/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" textAlign={"center"}>
          Register Page
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
        <Button fullWidth variant="contained" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
