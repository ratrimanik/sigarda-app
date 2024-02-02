/* eslint-disable react/prop-types */
const Button = (props) => {
    //mencegah duplicate button
    const { 
      children, 
      color,  
      onClick = () => {}, // Default Function Kosong
      type="button",
    } = props; //konsep "distructering"
  
    return (
      <button
        className={`px-1 font-semibold rounded-full mr-2 ${color}`}
        type={type}
        onClick={() => onClick()} // Button Handler Login
      >
        {children}
      </button>
    );
  }; //Konsep Components dan Props di React (Manual)
  
  export default Button;
  