import ButtonHandlerNotif from "../../components/Button/handlernotif";
import CardNotifikasi from "../../components/CardNotifikasi/cardnotifikasi";
import NavbarPage from "../../components/HeaderMobile/title";
import SidebarLayout from "../../fragments/sidebarlayout";

const UnreadPage = () => {
  return (
    <SidebarLayout>
      <div className="w-[660px]">
        <div className="md:bg-[#F2F9FF] bg-white px-2">
          <div>
            <NavbarPage title="Notifikasi" />
          </div>
          <ButtonHandlerNotif />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date="2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date="2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date="2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
          <CardNotifikasi
            image="src/assets/img/profilenotif.png"
            name="Qurrotu aini"
            description="mengirim pertanyaan baru"
            date="2 menit yang lalu"
            quest="Apakah laptop dengan prosesor AMD E2-9000e RADEON R2. 1.50 GHz tidak bisa mengimbangi SSD? Sebelumnya sudah sempat pasang SSD, tapi kata teknisi laptop justru semakin lemot. Apakah hal itu berpengaruh atau ada solusi lain?"
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default UnreadPage;
