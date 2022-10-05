import classNames from 'classnames/bind';
import styles from './VideoPage8.module.scss';
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

function VideoPage8() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/FMddJcaDnRo?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>{'Những đứa trẻ không lớn | Recap Xàm #305 Grown-ups 1'}</h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'130,701,568 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Sep 17, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'4K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'The Reviewer'}
                img={
                    'https://yt3.ggpht.com/ytc/AMLnZu9DvPihx5Q5z9dP_a3g11zSl0qc_8xyLr6qaXFu9g=s48-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'845K subscribers'}
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
                            'Hong mà này là theo mik nghĩ giọng anh này tuy đọc hơi chậm như nó thực sự thấm vào từng câu hài mấy bn ạ,vẫn iu mến anh mong anh cô gắng tiếp tục recap ạ😆😆😆'
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
                            'Thề chứ ông hobit kia gen tốt vcl, phần 2 đc quả thằng con trông không khác j kẻ hủy diệt chơi doping =))))'
                        }
                        likeNumber={'242'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/8l35g107JvR7CWgJnKjXWoAdcE7lSjp1SUK3kgRij_JkvlZg2O6ULLAiaySVTNp1roV_5-KVtw=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'bem bem'}
                        time={'3 year ago (edited)'}
                        content={'Nhớ dọng của lele… dọng ai cũng có chất riêng nhưng lele vẫn là đặc biệt 😂'}
                        likeNumber={'3'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_AZ21dhPIsfmCwMTvy0W5L99SmzFuSqDny0b9MTg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Duy Đoàn'}
                        time={'3 years ago'}
                        content={'Tưởng là phim hài nhảm nhưng cũng có ý nghĩa phết đấy.'}
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage8;
