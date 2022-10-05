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
                        #Khoanhkhackydieu #truyencotich #cotichvietnam #hoathinhhaynhat #khoanhkhackydieu <br />
                        #phimhoathinh QUẢ BÁO ĐẾN SỚM - PHIM HOẠT HÌNH - KHOẢNH KHẮC KỲ DIỆU - TRUYỆN CỔ <br /> TÍCH -
                        CHUYỆN CỔ TÍCH - PHIM HAY
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        #Khoanhkhackydieu #truyencotich #cotichvietnam #hoathinhhaynhat #khoanhkhackydieu <br />
                        #phimhoathinh QUẢ BÁO ĐẾN SỚM - PHIM HOẠT HÌNH - KHOẢNH KHẮC KỲ DIỆU - TRUYỆN CỔ <br /> TÍCH -
                        CHUYỆN CỔ TÍCH - PHIM HAY
                        <br />► Kênh là Khoảnh khắc kỳ diệu kênh chia sẻ những video hoạt hình hay nhất thế giới. Chủ đề
                        mà
                        <br /> kênh hướng tới là: Hoạt Hình Việt Nam, Hoạt hình Hay Nhất Thế Giới, Truyện Cổ Tích Việt
                        Nam,Quà
                        <br /> Tặng Cuộc Sống, Khoảnh Khắc Kỳ Diệu, Câu Chuyện Ý Nghĩa, Cổ Tích Nổi Tiếng Thế Giới, ...
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
