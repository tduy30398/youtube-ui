import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Subscriptions.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Tippy content={data.full_name} placement="bottom" delay={[500, 0]}>
            <div className={cx('channel')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <p className={cx('channel-name')}>{data.full_name}</p>
            </div>
        </Tippy>
    );
}

export default AccountItem;
