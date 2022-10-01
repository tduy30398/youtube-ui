import classNames from 'classnames/bind';
import styles from './WatchVideoLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function WatchVideoLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-3')}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                        <div className={cx('grid__column-1')}>
                            <h2>Thanh Duy</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchVideoLayout;
