/* eslint-disable react/prop-types */
const Description = (props) => {
    const { description } = props;

  return (
    <div>
      <p className="text-[#9A9A9A] text-center pt-2">
        {description}
      </p>
    </div>
  );
};

export default Description;
