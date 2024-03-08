import HeaderQuest from "../../fragments/headerquest";
import SidebarLayout from "../../fragments/sidebarlayout";

const Draf = () => {
  return (
    <SidebarLayout>
      <HeaderQuest>
        <div className="h-full mb-4 md:w-[650px] w-[750px] justify-center items-center mt-8">
          <div className="text-center">
            <img src="src/assets/img/draf.png" alt="" className="mx-auto md:w-[120px] w-[300px]" />
            <div className="mt-4">
              <p className="text-[#9A9A9A] font-bold md:text-[14px] text-3xl mb-4">
                Tidak ada draft jawaban
              </p>
              <p className="text-[#9A9A9A] md:text-sm text-2xl md:-mt-4">
                Mulailah menuliskan jawaban dengan mencari pertanyaan 
                <br /> 
                untuk dijawab pada bagian Pertanyaan untuk Anda.
              </p>
              <button
                type="button"
                className="md:text-xs text-2xl bg-primary text-white rounded-full px-6 py-2 font-bold mt-4"
              >
                <p>Tampilkan Pertanyaan untuk anda</p>

              </button>
            </div>
          </div>
        </div>
      </HeaderQuest>
    </SidebarLayout>
  );
};

export default Draf;
