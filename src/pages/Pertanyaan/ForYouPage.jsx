/* eslint-disable no-unused-vars */
import React from "react";
import CardQuest from "../../components/CardPostQuestion/cardquest";
import { dataQuest } from "../../components/CardPostQuestion/datacardquest";
import HeaderQuest from "../../fragments/headerquest";
import SidebarLayout from "../../fragments/sidebarlayout";

const ForYouPage = () => {
  // Filter data untuk menampilkan hanya item dengan status "Ikuti"
  const followedData = dataQuest.filter((item) => item.status === "Ikuti");

  return (
    <div>
      <SidebarLayout>
        <HeaderQuest>
          <div>
            {followedData.map((question, index) => (
              <CardQuest key={index} data={question} />
            ))}
          </div>
        </HeaderQuest>
      </SidebarLayout>
    </div>
  );
};

export default ForYouPage;
