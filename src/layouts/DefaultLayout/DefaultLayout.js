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
                <div className={cx('grid wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-2 m-0 c-0')}>
                            <Sidebar />
                        </div>
                        <div className={cx('col l-10 m-12 c-12')}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
