import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import eyeIcon from "../assets/free-icon-eye-8903984.png";
import { registerUser } from "../services/authService";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f6fa;
  font-family: 'Google Sans', Arial, sans-serif;
  flex-direction: column;
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

const InputWrapper = styled.div`
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

const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 12px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
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

const SubmitBtn = styled.button`
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

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  color: #444;
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

const Terms = styled.div`
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

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser({
        email: data.email,
        full_name: data.fullName,
        role: data.role,
        password: data.password
      });
      alert("Регистрация успешна!");
    } catch (err) {
      alert("Ошибка регистрации: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  const password = watch("password", "");

  return (
    <Container>
      <Card>
        <Title>
          Inregistrare pe <Logo src={logo} alt="logo" /> <span>eRegistru</span>
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="demo.utilizator@gmail.com"
              {...register("email", { required: true, maxLength: 50 })}
            />
            <Label>Posta electronica</Label>
            {errors.email && <ErrorText>Email обязателен и не более 50 символов</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <Input
              type="text"
              placeholder="Nume complet"
              {...register("fullName", { required: true })}
            />
            <Label>Nume complet</Label>
            {errors.fullName && <ErrorText>Введите имя</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <Select {...register("role")}>
              <option value="STUDENT">STUDENT</option>
              <option value="TEACHER">TEACHER</option>
            </Select>
            <Label>Rol</Label>
          </InputWrapper>

          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              {...register("password", { required: true, minLength: 8, pattern: /^[A-Za-z0-9]+$/ })}
            />
            <Label>Пароль</Label>
            <ShowBtn type="button" onClick={() => setShowPassword(!showPassword)}>
              <img src={eyeIcon} alt="Показать" style={{ width: 22, height: 15, opacity: 0.6 }} />
            </ShowBtn>
            {errors.password && <ErrorText>Пароль минимум 8 символов, латиница и цифры</ErrorText>}
          </InputWrapper>

          <InputWrapper>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              {...register("confirmPassword", {
                required: true,
                validate: value => value === password || "Пароли не совпадают"
              })}
            />
            <Label>Повторите пароль</Label>
            <ShowBtn type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              <img src={eyeIcon} alt="Показать" style={{ width: 22, height: 15, opacity: 0.6 }} />
            </ShowBtn>
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
          </InputWrapper>

          <SubmitBtn type="submit">Înregistrează-te</SubmitBtn>
        </form>

        <Text>Aveti deja un cont? <Link to="/">Logati-va</Link></Text>

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
