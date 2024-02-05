/* eslint-disable react/no-children-prop */
import AuthLayout from "../../fragments/authlayout";
import CardQuest from "../../components/CardPostQuestion/cardquest";
import { dataQuest } from "../../components/CardPostQuestion/datacardquest";
import HeaderQuest from "../../fragments/headerquest";

const QuestionPage = () => {
  const unfollowedData = dataQuest.filter((item) => !item.status);

  return (
    <AuthLayout>
      <HeaderQuest>
        <div>
          {unfollowedData.map((question, index) => (
            <CardQuest key={index} data={question} />
          ))}
        </div>
      </HeaderQuest>
    </AuthLayout>
  );
};

export default QuestionPage;
