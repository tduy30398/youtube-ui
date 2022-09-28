import classNames from 'classnames/bind';
import styles from './Subscriptions.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Subscriptions() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>SUBSCRIPTIONS</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}

export default Subscriptions;
