/* eslint-disable no-unused-vars */
import React from "react";
import CardQuest from "../../components/CardPostQuestion/cardquest";
import { dataQuest } from "../../components/CardPostQuestion/datacardquest";
import AuthLayout from "../../fragments/authlayout";
import HeaderQuest from "../../fragments/headerquest";

const ForYouPage = () => {
  // Filter data untuk menampilkan hanya item dengan status "Ikuti"
  const followedData = dataQuest.filter((item) => item.status === "Ikuti");

  return (
    <AuthLayout>
      <HeaderQuest>
        <div>
          {followedData.map((question, index) => (
            <CardQuest key={index} data={question} />
          ))}
        </div>
      </HeaderQuest>
    </AuthLayout>
  );
};

export default ForYouPage;
