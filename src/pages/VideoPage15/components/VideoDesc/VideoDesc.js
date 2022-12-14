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
                        #phimhoathinh QU??? B??O ?????N S???M - PHIM HO???T H??NH - KHO???NH KH???C K??? DI???U - TRUY???N C??? <br /> T??CH -
                        CHUY???N C??? T??CH - PHIM HAY
                    </p>
                    <button className={cx('video-desc-more-btn')} onClick={() => setIsShowMore(false)}>
                        SHOW MORE
                    </button>
                </div>
            ) : (
                <div className={cx('video-description-wrapper')}>
                    <p className={cx('video-description')}>
                        #Khoanhkhackydieu #truyencotich #cotichvietnam #hoathinhhaynhat #khoanhkhackydieu <br />
                        #phimhoathinh QU??? B??O ?????N S???M - PHIM HO???T H??NH - KHO???NH KH???C K??? DI???U - TRUY???N C??? <br /> T??CH -
                        CHUY???N C??? T??CH - PHIM HAY
                        <br />??? K??nh l?? Kho???nh kh???c k??? di???u k??nh chia s??? nh???ng video ho???t h??nh hay nh???t th??? gi???i. Ch??? ?????
                        m??
                        <br /> k??nh h?????ng t???i l??: Ho???t H??nh Vi???t Nam, Ho???t h??nh Hay Nh???t Th??? Gi???i, Truy???n C??? T??ch Vi???t
                        Nam,Qu??
                        <br /> T???ng Cu???c S???ng, Kho???nh Kh???c K??? Di???u, C??u Chuy???n ?? Ngh??a, C??? T??ch N???i Ti???ng Th??? Gi???i, ...
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
