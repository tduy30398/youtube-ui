import classNames from 'classnames/bind';
import styles from './VideoPage13.module.scss';
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

function VideoPage13() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/j8U06veqxdU?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>{'SÓNG GIÓ | K-ICM x JACK | OFFICIAL MUSIC VIDEO'}</h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'413,659,447 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Premiered Jul 12, 2019'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'2.3M'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'ICM Entertainment'}
                img={
                    'https://yt3.ggpht.com/TpcGt3U8tv_KK49whh5ICjJFQxBze7NeqiDGMlw25CoZv-TBWIknnGydthZTzK1G4yYaAbgtUro=s88-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'4.89M subscribers'}
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
                            'Jack sẽ chẳng bao giờ tìm được hào quang như thời Hồng nhan bạc phận sóng gió K ICM cũng vậy tại sao không bỏ qua tất cả để về lại với nhau.Khán giả muốn được nghe những bài hát giai điệu hay như vậy nhiều lần nữa'
                        }
                        likeNumber={'40'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/YaNYVZ0Yj8KRPdpusidy0qjrQgiH_IBjh_QBp3RCPE1mOv-c5KZ7qqXkxD4rYdTZWDKzhxkLyf0=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Na Trần'}
                        time={'3 years ago'}
                        content={
                            'Nhạc càng nghe càng ghiền ,giọng hát có sức hút tới kỳ lạ, dù có nhiều chuyện xảy ra nhưng ko thể phủ nhận tài năng của jack, hát hay'
                        }
                        likeNumber={'242'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/8l35g107JvR7CWgJnKjXWoAdcE7lSjp1SUK3kgRij_JkvlZg2O6ULLAiaySVTNp1roV_5-KVtw=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'bem bem'}
                        time={'3 year ago (edited)'}
                        content={
                            'Cảm ơn Jack vì đã tạo ra một kiệt tác như thế này, dù thời gian trôi qua rất nhanh nhưng giờ nghe lại giai điệu vẫn rất cuốn hút , tình yêu giành cho Jack mãi mãi không thay đổi ❤'
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
                            '3 năm r nghe vẫn hay như ngày đầu  nhạc của anh thì mãi mãi là của anh , đời tư của anh có ra sao thì nhạc của anh vẫn ở một cái tầm cao , không có có thể phủ nhận điều đó .'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage13;
