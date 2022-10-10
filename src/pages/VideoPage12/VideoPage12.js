import classNames from 'classnames/bind';
import styles from './VideoPage12.module.scss';
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

function VideoPage12() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/zSNgmQx-QqU?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'QUANG HÙNG MASTERD - Đừng Khóc Một Mình (Official Lyric Video)'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info', 'hide-on-mobile')}>
                        <span className={cx('home__video-views')}>{'4,269,247 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Jul 20, 2019'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'26K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'Quang Hùng MasterD'}
                img={
                    'https://yt3.ggpht.com/k6_T7dtb4qeLNSPid-5kK9RsjnI1_5jt5EV5mVTYbsVRMcKAKuM2fbXmYbOwgGTAOvfuDAy8mA=s88-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'577K subscribers'}
            />
            <div className={cx('home__video-comment-wrapper')}>
                <CommentHeader />
                <div className={cx('home__video-comment-list')}>
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_lxnrPlF7-BV4NPjsMAub9AuPFzYYPlF3sOeDz-A=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Hoàng Vũ Vlogs'}
                        time={'1 year ago'}
                        content={
                            'Thật không hiểu nổi một bài hát hay như vậy lại ít được đón nhận, mình nghe suốt mà ko chán luôn ấy❤️❤️'
                        }
                        likeNumber={'250'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/H4OeYXIgHWWlC-CLdGiHwFIWXSxXaVNs8-Bqe1gntajRQv0cmg7WcJJu_YS-L0AR7s-NnD8n0A=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Trần Quang Hùng'}
                        time={'2 years ago'}
                        content={
                            '1 bài hát tuyệt vời như thế này xứng đáng được nhiều thành tựu hơn nữa. Nghe gần 1 năm qua càng nghe càng thấm. Tuyệt vời ông em cùng tên 💯'
                        }
                        likeNumber={'505'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu-2RY9ZXOkDaFAGu-HFM-6fgq-slSLGBpKEKc-99w=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Mohammed Emwazi'}
                        time={'1 year ago'}
                        content={
                            'I just found out about this song and it touches my heart so much. Thank you for the beautiful song and a beautiful meanings to it.'
                        }
                        likeNumber={'62'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu8cH6ifeXbSzJtNbVQgOGirOThkOizkBpK4EEVr=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Tyrone Mings'}
                        time={'1 year ago'}
                        content={'bài hát này cần được nhiều người biết đến hơn. Nó thật sự rất hay :3'}
                        likeNumber={'35'}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage12;
