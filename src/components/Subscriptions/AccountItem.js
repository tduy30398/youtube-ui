import classNames from 'classnames/bind';
import styles from './Subscriptions.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('channel')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/ytc/AMLnZu9bTodVIO9_4xeXa6Fkcz5FCbdKb80lbSejveii6A=s88-c-k-c0x00ffffff-no-rj"
                alt=""
            />
            <p className={cx('channel-name')}>Kplus Sports</p>
        </div>
    );
}

export default AccountItem;
