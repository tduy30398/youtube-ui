import classNames from 'classnames/bind';
import styles from './VideoPage4.module.scss';
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

function VideoPage4() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/YhAGk8jIKLs?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'51H SINH TỒN 1 Mình Trong Khu Rừng Mưa Khắc Nghiệt Nhất | Solo Survival'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'1,057,981 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Sep 25, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'32K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'Sang vlog'}
                img={
                    'https://yt3.ggpht.com/ytc/AMLnZu_njAOubDub5GF7ovgS1G4eDeo-nqUj3J0hQoSv8w=s48-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'3.78M subscribers'}
            />
            <div className={cx('home__video-comment-wrapper')}>
                <CommentHeader />
                <div className={cx('home__video-comment-list')}>
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_7B8vAthdLTUevlLTilW1VvWwAfg1qiDfbjg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'SL7799'}
                        time={'2 weeks ago'}
                        content={
                            'Sinh tồn thế này nguy hiểm quá sang ơi, cảm ơn sang đã ko ngại nguy hiểm để ra video cho tất cả ae xem nhé chúc sang sức khỏe dồi dào để có những video ra cho ae và mn cùng xem.'
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
                            'Hello cô chào cháu Sang! Cảm ơn cháu với những trải nghiệm rừng sâu thật tuyệt vời👍🏻cháu nhớ cẩn thận khi đi rừng 1 mình nhé, cô xem mà hồi hộp quá cháu ạ, nhưng lại thích xem hihihi cô chúc cháu luôn mạnh khỏe và làm nhiều video cho mấy cô mấy chú xem nha 🥰💕🥰'
                        }
                        likeNumber={'2'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu9VJAZKhKndIUVqX9FJFK2_QAqucEvtmnuDRVSrIg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Huy Linh'}
                        time={'3 year ago'}
                        content={
                            'Rất chịu khó và nhiều kinh nghiệm sinh tồn. Mang năng lượng tích cực dù bất kì hoàn cảnh nào. E xứng đáng thành công trong lĩnh vực youtube này'
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
                            'Nhìn anh thương lắm, thật thà phúc hậu, cố giữ gìn sức khỏe nhé anh Sang, vì gđ vợ con nữa anh nha! Cố gắng lên ạ'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage4;
