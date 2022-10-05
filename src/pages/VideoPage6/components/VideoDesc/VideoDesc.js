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
                        Rốt Cuộc, Trái Đất Có Phải Trung Tâm Của Vũ Trụ???
                        <br /> #VFacts, #vutru, #traidat,
                        <br /> Từ thế kỷ thứ 4 trước Công Nguyên, các triết gia Hy Lạp cổ đại đã xây dựng nên thuyết địa
                        tâm hay
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        Rốt Cuộc, Trái Đất Có Phải Trung Tâm Của Vũ Trụ???
                        <br /> #VFacts, #vutru, #traidat,
                        <br /> Từ thế kỷ thứ 4 trước Công Nguyên, các triết gia Hy Lạp cổ đại đã xây dựng nên thuyết địa
                        tâm hay
                        <br />
                        mô hình địa tâm - Geocentrism – 1 mô tả lỗi thời và không chính xác về vũ trụ mà trong đó Trái
                        Đất
                        <br /> nằm ở trung tâm, Mặt Trời, Mặt Trăng, các ngôi sao và các hành tinh, tất cả đều quay xung
                        quanh
                        <br /> Trái Đất.
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
