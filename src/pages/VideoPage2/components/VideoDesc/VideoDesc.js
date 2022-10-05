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
                        Hiền Hồ trở lại với MV Rồi Người Thương Cũng Hoá Người Dưng, ca khúc do nhạc sĩ RIN9 sáng tác.
                        <br />
                        Từng câu hát được viết theo đúng câu chuyện và cảm xúc của hơn 90% các bạn khi yêu nhau đều
                        <br /> phải trải qua.
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        Hiền Hồ trở lại với MV Rồi Người Thương Cũng Hoá Người Dưng, ca khúc do nhạc sĩ RIN9 sáng tác.
                        <br />
                        Từng câu hát được viết theo đúng câu chuyện và cảm xúc của hơn 90% các bạn khi yêu nhau đều
                        <br /> phải trải qua.
                        <br />
                        Đăng ký kênh Hiền Hồ để xem nhiều video mới tại :
                        <br /> http://metub.net/hienho
                        <br /> Theo dõi Hiền Hồ trên
                        <br />
                        ►Fanpage : https://facebook.com/hienhoofficial
                        <br /> ► Full Playlist Hien Ho : http://bit.ly/HienHo_Playlist
                        <br /> ---------------------
                        <br /> © Bản quyền thuộc về Hiền Hồ
                        <br /> © Copyright by Hien Ho ☞ Do not Reup
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
