/* eslint-disable react/prop-types */
const ImagePassword = (props) => {
  const { image, title } = props;

  return (
    <div className="flex justify-center">
      <div>
        <img
          src={image}
          alt="Logo"
          className="md:w-24"
        />
        <p className=" font-bold pt-4">{title}</p>
      </div>
    </div>
  );
};

export default ImagePassword;
