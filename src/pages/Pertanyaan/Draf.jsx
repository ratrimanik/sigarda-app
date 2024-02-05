import AuthLayout from "../../fragments/authlayout";
import HeaderQuest from "../../fragments/headerquest";

const Draf = () => {
  return (
    <AuthLayout>
      <HeaderQuest>
        <div className="h-full mb-4 w-[650px] justify-center items-center mt-8">
          <div className="text-center">
            <img src="src/assets/img/draf.png" alt="" className="mx-auto" />
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-bold">
                Tidak ada draft jawaban
              </p>
              <p className="text-[#9A9A9A] text-sm">
                Mulailah menuliskan jawaban dengan mencari pertanyaan untuk
                dijawab 
                <br /> 
                pada bagian Pertanyaan untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </HeaderQuest>
    </AuthLayout>
  );
};

export default Draf;
