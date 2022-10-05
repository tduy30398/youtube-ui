import classNames from 'classnames/bind';
import styles from './VideoPage2.module.scss';
import {
    DislikedActiveIcon,
    DislikedIcon,
    LikedActiveIcon,
    LikedIcon,
    MoreIcon,
    SaveIcon,
    ScissorIcon,
    ShareIcon,
} from '~/components/Icons';
import VideoAction from './components/VideoAction';
import VideoDesc from './components/VideoDesc';
import CommentHeader from './components/CommentHeader';
import Comment from './components/Comment';

const cx = classNames.bind(styles);

function VideoPage2() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/IGyA9CxWwbs?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'Rồi Người Thương Cũng Hóa Người Dưng - Official MV | Hiền Hồ'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'130,701,568 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'May 4, 2018'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'303K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'Hiền Hồ Official'}
                img={
                    'https://yt3.ggpht.com/HJaRj2po2fuUU4zOE5VVo1n9Csw_CtKfH3M0UmI_KPxYb2_-gfeTi8qaXxTgpH8006x0I7Bydg=s48-c-k-c0x00ffffff-no-nd-rj'
                }
                subscribe={'842K subscribers'}
            />
            <div className={cx('home__video-comment-wrapper')}>
                <CommentHeader />
                <div className={cx('home__video-comment-list')}>
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu9yHXJdhi041HMkmnkDym77YtJIuH4ATM8Q8yn4mg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'SL7799'}
                        time={'2 weeks ago'}
                        content={
                            'Phải công nhận về tài năng Hiền Hồ hát hay thật sự. Từ cảm xúc cho đến tone giọng huhu'
                        }
                        likeNumber={'40'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/YaNYVZ0Yj8KRPdpusidy0qjrQgiH_IBjh_QBp3RCPE1mOv-c5KZ7qqXkxD4rYdTZWDKzhxkLyf0=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Na Trần'}
                        time={'3 years ago'}
                        content={'Ai còn nghe bài này chắc muốn mv đạt 100 triệu❤️'}
                        likeNumber={'242'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/8l35g107JvR7CWgJnKjXWoAdcE7lSjp1SUK3kgRij_JkvlZg2O6ULLAiaySVTNp1roV_5-KVtw=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'bem bem'}
                        time={'3 year ago (edited)'}
                        content={
                            '100 triệu view đã quá gần rồi mọi người à, quá xứng đáng với tài năng, cố gắng, nổ lực mà Hiền Hồ đã làm. Nhìn lại mới thấy giai đoạn này năm ngoái có quá nhiều HIT. Khoảng thời gian bùng nổ của VPOP.'
                        }
                        likeNumber={'3'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_AZ21dhPIsfmCwMTvy0W5L99SmzFuSqDny0b9MTg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Duy Đoàn'}
                        time={'3 years ago'}
                        content={
                            'Lúc đầu xem mv thắc mắc tại sao chị hát hay v mà view ít nhưng k ngờ bh nghe lại tăng ngoạn mục <3 chúc mừng chị ạ'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage2;
