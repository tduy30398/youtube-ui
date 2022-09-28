import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-2')}>
                            <Sidebar />
                        </div>
                        <div className={cx('grid__column-10')}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
