import styles from './CityItem.module.css'
import PropTypes from 'prop-types';

const CityItem = ({city}) => {
    const { cityName, emoji, date } = city;
    const dateFormat  = date =>   new Intl.DateTimeFormat("fr", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
    
    const flagemojiToPNG = (flag) => {
        const countryCode = Array.from(flag, (codeUnit) =>
            codeUnit.codePointAt()).map(char => String.fromCharCode(char - 127397).toLowerCase()).join('')
        return (<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />)
    }
    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{dateFormat(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}
CityItem.propTypes = {
    city: PropTypes.object.isRequired,
};
export default CityItem;
