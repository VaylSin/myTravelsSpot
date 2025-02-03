import CityItem from './CityItem';
import styles from './CityList.module.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import Message from './Message';

const CityList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />
    return (
        <ul className={styles.cityList}>
            {cities.length > 0 ? (
                cities.map((city) => <CityItem city={city} key={city.id} />)
            ) : (
                <Message message="Ajoute ta première ville dès maintenant !" />
            )}
        </ul>
    );
}
CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

};
export default CityList;
