import classNames from 'classnames/bind';
import { BackIcon } from '~/components/Icons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <header className={cx('menu-header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <BackIcon />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default MenuHeader;
