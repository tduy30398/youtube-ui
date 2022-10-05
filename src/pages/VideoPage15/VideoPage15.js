import classNames from 'classnames/bind';
import styles from './VideoPage15.module.scss';
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

function VideoPage15() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/JcNfxct8LgY?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {
                        'QUẢ BÁO ĐẾN SỚM - PHIM HOẠT HÌNH - KHOẢNH KHẮC KỲ DIỆU - TRUYỆN CỔ TÍCH - CHUYỆN CỔ TÍCH - PHIM HAY'
                    }
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'2,781,072 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Jul 15, 2021'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'18K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'KHOẢNH KHẮC KỲ DIỆU'}
                img={
                    'https://yt3.ggpht.com/ytc/AMLnZu9ZxRnWC3SosAaBNXQ5vkfnSPI2ftgrDTtOurhkAQ=s68-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'363K subscribers'}
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
                            'Cái này rất lâu rồi, mười mấy năm trước tôi đã coi những tập đầu tiên rồi, thời gian trôi qua nhanh quá, có những người, những thứ từng ở bên ta, gắn bó với ta nay những ngày gian khó, nay cũng đã ko còn, tất cả chỉ còn trong kỉ niệm 😞'
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
                            'Thật hay và ý nghĩa,mang tính nhân văn giáo dục cao cho tất cả mọi người, mặc dù chỉ là một tiểu phẩm hoạt hình'
                        }
                        likeNumber={'242'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/8l35g107JvR7CWgJnKjXWoAdcE7lSjp1SUK3kgRij_JkvlZg2O6ULLAiaySVTNp1roV_5-KVtw=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'bem bem'}
                        time={'3 year ago (edited)'}
                        content={'Lớn r vẫn thik xem hoạt hình này về đời sống hay thật 😘'}
                        likeNumber={'3'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_AZ21dhPIsfmCwMTvy0W5L99SmzFuSqDny0b9MTg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Duy Đoàn'}
                        time={'3 years ago'}
                        content={'32 tuổi vẫn xem hoạt hình 😂'}
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage15;
