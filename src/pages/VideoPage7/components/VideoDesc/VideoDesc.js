import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { BellSubscribeIcon } from '~/components/Icons';
import styles from './VideoDesc.module.scss';

const cx = classNames.bind(styles);

function VideoDesc({ channelName, img, subscribe }) {
    const [isShowMore, setIsShowMore] = useState(true);
    const [isSubcribe, setIsSubcribe] = useState(false);

    const handleSubscribe = () => {
        setIsSubcribe(!isSubcribe);
    };

    return (
        <div className={cx('video-desc-info-wrapper')}>
            <div className={cx('video-desc-channel-btn')}>
                <div className={cx('video-desc-channel')}>
                    <img className={cx('video-channel-avatar')} alt={channelName} src={img} />
                    <div className={cx('video-channel-info')}>
                        <Tippy content={channelName} placement="top">
                            <p className={cx('video-channel-name')}>{channelName}</p>
                        </Tippy>
                        <p className={cx('video-channel-subscribes')}>{subscribe}</p>
                    </div>
                </div>
                {isSubcribe ? (
                    <div className={cx('subscribe-btn-subscribed')}>
                        <button className={cx('subscribe-btn-inactive')} onClick={handleSubscribe}>
                            SUBSCRIBED
                        </button>
                        <span className={cx('subscribe-bell-icon')}>
                            <BellSubscribeIcon />
                        </span>
                    </div>
                ) : (
                    <button className={cx('subscribe-btn')} onClick={handleSubscribe}>
                        SUBSCRIBE
                    </button>
                )}
            </div>
            {isShowMore ? (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        A day solo exploring an island paradise, spear fishing and lobster diving! Finding a Monster
                        Lobster
                        <br /> in a small cave, and doing a quick catch and cook on this tropical beach. Finishing the
                        day with an
                        <br /> amazing sunset while showering under a waterfall the perfect ending to an epic day...
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        A day solo exploring an island paradise, spear fishing and lobster diving! Finding a Monster
                        Lobster
                        <br /> in a small cave, and doing a quick catch and cook on this tropical beach. Finishing the
                        day with an
                        <br /> amazing sunset while showering under a waterfall the perfect ending to an epic day...
                        <br />
                        <br />
                        https://survivalbeastofficial.com
                        <br />
                        <br /> #solo #lobster #catchandcook
                    </p>
                    <button className={cx('video-desc-less-btn')} onClick={() => setIsShowMore(true)}>
                        SHOW LESS
                    </button>
                </div>
            )}
        </div>
    );
}

export default VideoDesc;
