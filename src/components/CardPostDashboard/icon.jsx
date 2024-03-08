/* eslint-disable react/prop-types */
const Icon = (props) => {
    const {
        image,
        title = null,
    } = props;

    return (
        <div className="flex">
            <img src={image} alt=""  className="md:w-4 md:h-4 w-8 h-8"/>
            <p className="md:text-[10px] text-2xl pl-1 pr-2 text-gray-400 whitespace-nowrap md:-mt-2">{title}</p>
        </div> 
    )
}

export default Icon;