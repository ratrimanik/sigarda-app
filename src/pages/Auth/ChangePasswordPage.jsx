import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import ImageAuth from "../../components/Auth/imageauth";
import ImagePassword from "../../components/Auth/imagepassword";

const ChangePasswordPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <ImageAuth />
      <div className="flex justify-center items-center md:w-2/5 w-full">
        <div>
          <ImagePassword
            image="/src/assets/img/password3.png"
            title="Kata Sandi Baru" 
          />
          <form className="flex max-w-md flex-col gap-4 pt-4 md:w-[380px] w-[340px]">
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
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Konfirmasi Kata Sandi"
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
            <Button color="blue" className="rounded-full"><Link to="/">Konfirmasi</Link></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
