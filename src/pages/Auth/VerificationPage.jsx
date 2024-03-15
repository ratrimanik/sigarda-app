import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import ImageAuth from "../../components/Auth/imageauth";
import ImagePassword from "../../components/Auth/imagepassword";
import Description from "../../components/Auth/description";
import InputVerificationCode from "../../components/Auth/verifikasikode";

const VerificationPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <ImageAuth />
      <div className="flex justify-center items-center md:w-2/5 w-full">
        <div>
          <ImagePassword
            image="/src/assets/img/password2.png"
            title="Kode Verifikasi"
          />
          <div className="px-8">
            <Description description=" Masukkan 6 digit kode yang telah kami kirimkan melalui email *****@gmail.com" />
            <form className="flex max-w-md flex-col gap-4 pt-4 ">
              <div className="flex justify-center gap-2">
               <InputVerificationCode />
               <InputVerificationCode />
               <InputVerificationCode />
               <InputVerificationCode />
               <InputVerificationCode />
               <InputVerificationCode />
              </div>
              <div className="flex">
                <p className="text-[#9A9A9A]">Tidak menerima kode?</p>
                <p className="text-primary font-bold pl-2">Kirim ulang</p>
              </div>
              <Button color="blue" className="rounded-full">
                <Link to="/changepassword">Selanjutnya</Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
