/* eslint-disable react/prop-types */
const NavbarPage = (props) => {
    const {
        title,
    } = props;

    return(
        <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-primary mb-3">{title}</h1>
        </div>
    )
}

export default NavbarPage;