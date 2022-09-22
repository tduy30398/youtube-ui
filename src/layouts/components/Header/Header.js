import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import { faXmark, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Youtube" />
                </Link>
                <div className={cx('search')}>
                    <input placeholder="Search" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    <Button outline>Log in</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
