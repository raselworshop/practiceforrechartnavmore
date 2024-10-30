import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-sky-200 flex flex-col rounded-lg text-sky-900 p-5">
            <h2 className="text-center">
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-3xl">/month</span>
            </h2>
            <h4 className="text-3xl font-bold text-center my-3">{name}</h4>
            <div className="pl-4 flex-grow">
                {
                    features.map((feature, idx) => <Feature keys={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-10 bg-sky-800 text-sky-200 w-full py-2 font-bold rounded-lg hover:bg-sky-950 btn">Buy Now</button>
        </div>
    );
};

PriceOption.propType = {
    option: PropTypes.object
}

export default PriceOption;