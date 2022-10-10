import classNames from 'classnames/bind';
import styles from './VideoPage10.module.scss';
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

function VideoPage10() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/9tcFnx0-cQY?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'NGƯỜI ĐÁNG THƯƠNG LÀ ANH - ONLY C X NGUYỄN PHÚC THIỆN | OFFICIAL MUSIC VIDEO'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info', 'hide-on-mobile')}>
                        <span className={cx('home__video-views')}>{'6,799,162 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Premiered Aug 3, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'49K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'OnlyC Production'}
                img={
                    'https://yt3.ggpht.com/ytc/AMLnZu8HSinZHK8AU1K_7IcA7atwO-tfWvya1eX7vJSZvA=s88-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'1.05M subscribers'}
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
                            'Mình thật sự rất thích bài hát này, bởi giai điệu và ca từ đều mang lại nhiều cảm xúc. Mình đang viết một cuốn truyện theo đúng như những gì bài hát này thể hiện. Hy vọng 1 ngày gần đây khi truyện ra mắt mọi người có thể cảm nhận bài hát dưới 1 góc nhìn thú vị hơn - duongAQ'
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
                            'Những bài ballad của anh OnlyC phải nói là quá tuyệt.Ca từ ý nghĩa,giai điệu dễ nghe, âm nhạc bắt tai,noi dung MV thì tình cảm đi vào lòng người.perfect.'
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
                            'mình rất thích bài hát này! Âm nhạc và lời hát sâu lắng chạm tới trái tim người nghe. Và không hiểu vì 1 lí do nào đó mà bài hát này cảm giác rất ít lượt nghe và xem MV? Chúc OnlyC và ekip thành công với MV này và nhiều dự án sau này nữa <3'
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
                            'Rất thích phong cách nhạc của Only C. Lời nhẹ nhàng ,nhạc chill, hát hay ,chỉ cần đeo tai nghe lên thôi là lên đỉnk 🎶✌Chill kinh khủng:)))'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage10;
