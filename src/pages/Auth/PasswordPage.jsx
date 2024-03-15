import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import ImageAuth from "../../components/Auth/imageauth";
import ImagePassword from "../../components/Auth/imagepassword";
import Description from "../../components/Auth/description";

const PasswordPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <ImageAuth />
      <div className="flex justify-center items-center md:w-2/5 w-full">
        <div>
          <ImagePassword
            image="/src/assets/img/password1.png"
            title="Email Verifikasi"
          />
          <div className="px-8">
            <Description description="Masukkan email anda dan kami akan mengirimkan anda kode untuk mengatur ulang kata sandi anda" />
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
                />
              </div>
              <Button color="blue" className="rounded-full">
                <Link to="/verification">Kirim</Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
