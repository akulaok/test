import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { AppRoute } from '../../consts';

function Header(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Link className='header__logo-link' to={AppRoute.Students} />
      </div>
      <div>
        <span className={styles.text}>STUDENTS</span>
        <span className={styles.blue_text}>
          <span className={styles.text}> by </span>github-user-name
        </span>
      </div>
    </div>
  );
}
export default Header;
