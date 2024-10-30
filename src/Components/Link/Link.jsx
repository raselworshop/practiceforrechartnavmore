import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-4 hover:bg-sky-900 hover:text-white hover:p-2 hover:rounded-md">
            <a href={route.path}>{route.name}</a></li>)

};
Link.propTypes={
    route: PropTypes.object
}
export default Link;