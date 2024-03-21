import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import ImageAuth from "../../components/Auth/imageauth";
import { useState } from "react";

const RegisterPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { first_name, last_name, email, password, confirm_password };
    if (password == confirm_password) {
      let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status == 200) {
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/dashboard");
      } else {
        alert("Register Failed");
      }
    } else {
      alert("Password tidak sama");
    }
  }

  return (
    <div className="flex w-full min-h-screen">
      <ImageAuth />
      <div className="flex justify-center items-center md:w-2/5 w-full ">
        <div>
          <p className="text-2xl font-bold text-primary">Daftar</p>
          <form className="flex max-w-md flex-col gap-4 pt-4">
            <div className="flex flex-col md:flex-row gap-2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Nama Depan" />
                </div>
                <TextInput id="first_name" type="text"  value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Nama Belakang" />
                </div>
                <TextInput id="last_name" type="text" value={last_name}
                    onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Email"
                  className="text-[#9A9A9A] "
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="masukkan email anda..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Kata Sandi"
                  className="text-[#9A9A9A]"
                />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                placeholder="masukkan kata sandi anda..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirm_password"
                  value="Konfirmasi Kata Sandi"
                  className="text-[#9A9A9A]"
                />
              </div>
              <TextInput
                id="confirm_password"
                type="password"
                required
                placeholder="masukkan kata sandi anda..."
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <div>
                <Checkbox id="remember" className="focus:ring-transparent" />
                <Label htmlFor="remember" className="text-[#9A9A9A] pl-2">
                  Ingat Saya
                </Label>
              </div>
            </div>
            <Button color="blue" onClick={signUp}>Daftar</Button>
            <div className="justify-center">
              <div className="flex justify-center text-[13px]">
                <p className="text-[#9A9A9A]">Sudah Punya Akun?</p>
                <button className="text-[#2196F3] font-bold pl-2">
                  <Link to="/">Masuk</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
