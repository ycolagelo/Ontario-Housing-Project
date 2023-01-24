import { useState } from "react";
import { Header, LoginForm, InputGroup, SubmitButton } from "./style";

import { Button, Form } from "antd";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e?.stopPropagation();
    e?.preventDefault();

    login();
  };

  const login = () => {
    setLoading(true);
  };

  return (
    <div style={{ borderTop: "1px solid transparent" }}>
      <LoginForm style={{ marginTop: props.popup ? 0 : undefined }}>
        <div className="loginContainer">
          <div className="banner">
            <Header>
              Welcome to our awesome real estate investment platform
            </Header>
          </div>

          <Form onFinish={handleSubmit} className="loginForm">
            <InputGroup>
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <SubmitButton>
              <Button
                htmlType="submit"
                loading={loading}
                onClick={handleSubmit}
              >
                {/** Fake login */}
                <Link to="/dashboard">Login</Link>
              </Button>
            </SubmitButton>
          </Form>
        </div>
        <span
          style={{
            clear: "both",
            display: "block",
            textAlign: "center",
            paddingTop: 20,
          }}
        ></span>
      </LoginForm>
    </div>
  );
};

export default LoginPage;
