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
                        Chi Pu | ANH ƠI Ở LẠI - Official M/V (Chuyện Cám Tấm) (치푸)
                        <br />
                        <br />
                        Official Audio: https://mp3.zing.vn/bai-hat/Anh-Oi-O-...
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        Chi Pu | ANH ƠI Ở LẠI - Official M/V (Chuyện Cám Tấm) (치푸)
                        <br />
                        <br />
                        Official Audio: https://mp3.zing.vn/bai-hat/Anh-Oi-O-...
                        <br />
                        Sáng tác: ĐẠT G
                        <br />
                        Phối khí: ĐOÀN MINH VŨ
                        <br />
                        Thu âm: BỐ THỎ HEO
                        <br />
                        M’ACOUSTIC STUDIO
                        <br />
                        Mix & Master: BỐ THỎ HEO
                        <br />
                        <br />
                        Trân trọng cảm ơn:
                        <br />
                        VIETNAM CENTRE
                        <br />
                        Ỷ VÂN HIÊN
                        <br />
                        TRUNG TÂM HỖ TRỢ PHÁT TRIỂN TÀI NĂNG ĐIỆN ẢNH (TPD)
                        <br />
                        SỞ VĂN HÓA TỈNH NINH BÌNH
                        <br />
                        PHÒNG VĂN HÓA THÔNG TIN HUYỆN HOA LƯ
                        <br />
                        KHU DU LỊCH LÀNG VIỆT CỔ CỐ VIÊN LẦU
                        <br />
                        ỦY BAN NHÂN DÂN TỈNH THANH HÓA
                        <br />
                        SỞ VĂN HÓA THỂ THAO VÀ DU LỊCH TỈNH THANH HÓA
                        <br />
                        BAN QUẢN LÝ KHU DI TÍCH LAM KINH HUYỆN THỌ XUÂN THANH HÓA
                        <br />
                        N/N LAM KINH, HUYỆN THỌ XUÂN, THANH HÓA
                        <br />
                        NHÀ HÀNG LAM KINH, HUYỆN THỌ XUÂN, THANH HÓA
                        <br />
                        K/S THE LONG, NINH BÌNH
                        <br />
                        NHÀ HÀNG LUẬN NHÀN, NINH BÌNH
                        <br />
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
