import classNames from 'classnames/bind';
import styles from './VideoPage5.module.scss';
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

function VideoPage5() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/hU8p711l_fI?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'Vì sao TOP GUN: MAVERICK đang là PHIM ĂN KHÁCH NHẤT 2022'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'308,658 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Sep 2, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'6.8K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'Phê Phim'}
                img={
                    'https://yt3.ggpht.com/ytc/AMLnZu_0SBD8catOuQudvA58PP6Q56fKBIgCeXfULHMJUw=s48-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'1.57M subscribers'}
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
                            'Đến nhạc phim với Onerepublic và Lady Gaga còn hay nữa là. Theo mình thành công của phần phim này còn đến từ việc những người sống kiểu Mỹ nói chung trên khắp thế giới nhìn thấy quá nhiêud idol trong phim: cơ bắp, mạnh mẽ, phóng khoáng, dũng cảm và đầy sức sống...cả nam và nữ, ai mà chả thích như vậy❤️❤️❤️'
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
                            'Thêm 1 lý do giúp Top Gun thắng lớn ở thị trường Mỹ đó là phim được ra mắt ngay đúng vào dịp lễ Memorial Day - ngày lễ tưởng niệm lính Mỹ, đại loại giống với ngày Quân Đội Nhân Dân Việt Nam. Mình vẫn nhớ hôm ra rạp gặp nhiều ông Veteran (cựu chiến binh) mặc quân phục chống nạng đi xem phim. Xem xong mấy ổng đứng lên vỗ tay rồi còn khóc kiểu tự hào lắm.'
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
                            'Coi phim thì sẽ hiểu vì sao nó đạt top. Phim tạo rao nhiều cảm xúc cho người xem: từ hồi hộp, bị cuốn theo dòng cảm xúc của nhân vật (hồi hộp vượt qua giới hạn), rồi đến cảm giác một người luôn nuối tiếc một điều gì đó về quá khứ; cảm giác như có một nhân vật vĩ đại đang ẩn sâu trong một con người nhìn rất bình dị; những sự gắn bó từ công việc đến bạn bè, đến gia đình...'
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
                            'Hiếm khi có bộ phim nào vừa được khán giả yêu thích mà vẫn được giới phê bình đánh giá cao.Hoàn toàn xứng đáng cho những gì đạt được.'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage5;
