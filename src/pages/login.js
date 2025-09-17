import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import eyeIcon from "../assets/free-icon-eye-8903984.png";
import { loginUser } from "../services/authService";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f6fa;
  font-family: 'Google Sans', Arial, sans-serif;
`;

const Card = styled.div`
  background: #ffffff;
  width: 608px;
  padding: 16px 48px;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 24px;
  font-weight: 500;
  color: #111;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 25px 0;
  border: 1px solid #2D60FF;
  border-radius: 8px;
  height: 48px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  box-sizing: border-box;
`;

const Label = styled.span`
  position: absolute;
  top: -10px;
  left: 12px;
  background: #fff;
  padding: 0 5px;
  color: #2D60FF;
  font-size: 14px;
  pointer-events: none;
`;

const ShowBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px;
  background: #2D60FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #1e47d8;
  }
`;

const RegisterText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #444;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  color: #999;
  font-size: 14px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
    margin: 0 10px;
  }
`;

const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #fff;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 12px;
  transition: 0.2s;
  gap: 15px;
  
  &:hover {
    background: #f7f7f7;
  }

  svg {
    color: ${(props) => props.iconColor};
  }

  p {
    color: ${(props) => props.textColor};
    font-size: 20px;
    margin: 0;
  }
`;

const Terms = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 15px;
  text-align: center;
  width: 400px;
`;

const Logo = styled.img`
  height: 35px;
  vertical-align: middle;
  border-radius: 6px;
  margin: 0 6px;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 26px;
`;

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      alert("Вход успешен! 🎉");
      console.log("Ответ сервера:", res);
    } catch (err) {
      alert("Ошибка входа: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <Container>
      <Card>
        <Title>
          Logare pe <Logo src={logo} alt="logo" /> <BoldText>eRegistru</BoldText>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper>
            <Input
              type="email"
              placeholder="demo.utilizator@gmail.com"
              {...register("email", { required: true, maxLength: 50 })}
            />
            <Label>Posta electronica</Label>
            {errors.email && <ErrorText>Email обязателен и не более 50 символов</ErrorText>}
          </Wrapper>

          <Wrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              {...register("password", { required: true, minLength: 8, pattern: /^[A-Za-z0-9]+$/ })}
            />
            <Label>Parola</Label>
            <ShowBtn type="button" onClick={() => setShowPassword(!showPassword)}>
              <img src={eyeIcon} alt="Показать пароль" style={{ width: 22, height: 15, opacity: 0.6 }} />
            </ShowBtn>
            {errors.password && <ErrorText>Пароль минимум 8 символов, латиница и цифры</ErrorText>}
          </Wrapper>

          <a href="#" style={{ display: "block", textAlign: "left", fontSize: 16,
             color: "#2D60FF", marginBottom: 24, textDecoration: "none" }}> Ati uitat parola? </a>

          <LoginBtn type="submit">Logare</LoginBtn>
        </Form>

        <RegisterText>
          Nu aveti un cont? <Link to="/register">Inregistrati-va</Link>
        </RegisterText>

        <Divider>SAU</Divider>

        <SocialBtn iconColor="#1877F2" textColor="#000">
          <FaFacebook /> <p>Continuă cu Facebook</p>
        </SocialBtn>
        <SocialBtn iconColor="#DB4437" textColor="#000">
          <FaGoogle /> <p>Continuă cu Google</p>
        </SocialBtn>

      </Card>

      <Terms>
        Continuând, sunteți de acord cu <a href="#">termenii de utilizare</a> și <a href="#">politica de confidențialitate</a>.
      </Terms>
    </Container>
  );
}

export default Login;
