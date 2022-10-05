import classNames from 'classnames/bind';
import styles from './VideoPage14.module.scss';
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

function VideoPage14() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/RAWjdACpiVw?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>{'AVATAR: Hành trình tạo nên MỘT HUYỀN THOẠI'}</h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'365,205 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Sep 23, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'7.2K'} />
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
                    'https://yt3.ggpht.com/ytc/AMLnZu_0SBD8catOuQudvA58PP6Q56fKBIgCeXfULHMJUw=s68-c-k-c0x00ffffff-no-rj'
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
                            'Vừa xem lại lần nữa ở rạp, cảm xúc vô cùng chân thật, nhất là cảnh khi người Navi đau đớn vì cây tổ của họ bị phá hủy, xem lần này có cảm giác rất khác, khi mình nhận ra các giá trị sâu sắc hơn, thấm thía hơn và chờ mong phần 2 nữa!'
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
                            'Ở hầu hết các bộ phim, ta vẫn nhận thức mình chỉ đang nhìn vào màn hình và quan sát một câu chuyện viễn tưởng được viết ra. Nhưng ở Avatar, ta như bị cuốn vào một thế giới khác ở từng khung hình tới cảnh vật đẹp vi diệu, cảm giác như đang là một nhân vật trong phim 💯'
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
                            'Năm 2009 còn bé nên xem không cảm nhận được gì. Cho đến năm 2022 mình đi xem lại mới thấy chỉ riêng đồ hoạ thôi thì avatar vẫn quá khủng khiếp ở thời điểm hiện đại. Nghĩ lại thấy 2009 mà đã có một bộ phin thế này thì thực sự đạo diễn và ekip là những người đi trước thời đại quá xa. Một siêu phẩm điện ảnh đích thực, một bộ phim "không tuổi" với vấn đề thời sự cho tới tận bây giờ 🙏🔥🔥'
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
                            'Vừa mới ở rap về, trải nghiệm điện ảnh mà tác phẩm mang lại thực sự rất khác! K chỉ đơn thuần là trải nhiệm thị giác. Giờ vẫn còn cảm giác đó, thật sự rất khó tả 😮😮'
                        }
                        likeNumber={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage14;
