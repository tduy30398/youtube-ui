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
                        CON TÀU NOAH: TRUYỀN THUYẾT TRONG KINH THÁNH HAY THỰC SỰ TỪNG TỒN TẠI?
                        <br />
                        Ngày nay, con tàu Noah và sự kiện đại hồng thuỷ là một trong những truyền thuyết nổi tiếng nhất.
                        <br />
                        Xuất hiện trong những tác phẩm văn học, phim ảnh hay kể cả game. Thế nhưng, vẫn có không ít
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        CON TÀU NOAH: TRUYỀN THUYẾT TRONG KINH THÁNH HAY THỰC SỰ TỪNG TỒN TẠI?
                        <br />
                        Ngày nay, con tàu Noah và sự kiện đại hồng thuỷ là một trong những truyền thuyết nổi tiếng nhất.
                        <br />
                        Xuất hiện trong những tác phẩm văn học, phim ảnh hay kể cả game. Thế nhưng, vẫn có không ít
                        <br />
                        niềm tin cho rằng cách đây hàng ngàn năm, thực sự đã có một cơn đại hồng thuỷ nhấn chìm mọi
                        <br /> thứ. Và rằng có 1 thứ tương tự như tàu Noah từng được làm ra.
                        <br />
                        <br />
                        --------------------------------------------------------------
                        <br /> © Bản quyền thuộc về BLV Anh Quân Discovery
                        <br /> © Do not Reup.
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
