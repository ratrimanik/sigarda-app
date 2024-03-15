import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageAuth from "../../components/Auth/imageauth";

const LoginPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <ImageAuth />
      <div className="flex justify-center items-center md:w-2/5 w-full">
        <div>
          <p className="text-2xl font-bold text-primary">Masuk</p>
          <form className="flex max-w-md flex-col gap-4 pt-4 ">
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
                className="w-[300px]"
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
              />
            </div>
            <div className="flex items-center justify-between gap-2 font-bold text-[14px]">
              <div>
                <Checkbox id="remember" className="focus:ring-transparent" />
                <Label htmlFor="remember" className="text-[#9A9A9A] pl-2">
                  Ingat Saya
                </Label>
              </div>
              <div>
                <button className="text-[#2196F3]"><Link to="/password">Lupa sandi</Link></button>
              </div>
            </div>
            <Button color="blue">Masuk</Button>
            <div className="justify-center">
              <div className="flex justify-center text-[13px]">
                <p className="text-[#9A9A9A]">Belum Punya Akun?</p>
                <button className="text-[#2196F3] font-bold pl-2">
                  <Link to="/register">Daftar</Link>
                </button>
              </div>
              <p className="flex justify-center text-[12px] text-[#9A9A9A] pt-2">
                Atau dengan
              </p>
            </div>
            <Button color="failure">
              <div className="flex items-center">
                <FaGoogle className="mt-1"/>
                <p className="pl-2">Masuk dengan Google</p>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
