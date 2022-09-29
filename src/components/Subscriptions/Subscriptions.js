import classNames from 'classnames/bind';
import styles from './Subscriptions.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Subscriptions() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await searchService.search('d');
            setChannels(result);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>SUBSCRIPTIONS</p>
            {channels.map((channel) => (
                <AccountItem key={channel.id} data={channel} />
            ))}
        </div>
    );
}

export default Subscriptions;
