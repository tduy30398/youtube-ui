import classNames from 'classnames/bind';
import styles from './VideoPage3.module.scss';
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

function VideoPage3() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/3fi7uwBU-CE?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'Chi Pu | ANH ƠI Ở LẠI - Official M/V (Chuyện Cám Tấm) (치푸)'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info', 'hide-on-mobile')}>
                        <span className={cx('home__video-views')}>{'108,354,381 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Premiered Apr 23, 2019'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'846K'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'Chi Pu Official'}
                img={
                    'https://yt3.ggpht.com/OBz9ECRB9DrAVXCYV2RNoQbCuWT5QENiPcbHNaPOshDGbacrkMBASQqK7F1eLny7iMgkLarJHoo=s48-c-k-c0x00ffffff-no-nd-rj'
                }
                subscribe={'1.38M subscribers'}
            />
            <div className={cx('home__video-comment-wrapper')}>
                <CommentHeader />
                <div className={cx('home__video-comment-list')}>
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu88Y4PpXstpG_ivMv-362DpD3fjz36Ub5-ohg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Quynh Cao'}
                        time={'3 years ago'}
                        content={
                            'Có thể nói đây là MV hay nhất của Chipu giàu ý nghĩa: người ta chỉ thấy nỗi đau của Tấm chứ mặc kệ nỗi đau của Cám'
                        }
                        likeNumber={'1.2K'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu8JF9n5n4NoVfM4z2PA9nHoGFccYBwbhiMB3VM56A=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Vân Trần'}
                        time={'1 year ago'}
                        content={
                            'Thật sự! Mình rất thích Chi Pu! Mặc dù live không được tốt nhưng chị ấy đã rất cố gắng để tạo ra những MV xuất sắc như này! Yêu chị lắm ạ!!!'
                        }
                        likeNumber={'2K'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu93VY8id8v_qILKhGokmQqM8LtI45NWVfO2K4bV=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Thuy Vy'}
                        time={'1 year ago'}
                        content={
                            'Sau sự ra đời thành công của MV Anh Ơi Ở LẠI của Chi đã tạo nên một cơn sóng đầy cảm hứng dành cho rất rất nhiều chị em tự lấy Cám làm hình ảnh ngôn xưng cho chính bản thân mình một cách đầy thiện cảm ❤'
                        }
                        likeNumber={'317'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu8chMfHuFsHjZbBMDeOzSKHejruDaURU6Q7EclW=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Hien Nguyen'}
                        time={'2 years ago'}
                        content={
                            'Thật sự là rất hay! Cấu hình đẹp, diễn có hồn và thật sự rất thấm thía! Cám đâu biết rằng khi nàng mãi ngắm nhìn vua thì cũng có một người ngây ngốc vì nàng, cái người ngày đầu cầm ô chạy đến ấy, chỉ vì hình ảnh Vua luôn phủ đầy ánh mắt Cám nên nàng đã chẳng thể biết được rằng, ở phía sau có một người âm thầm yêu nàng nhưng chỉ có thể bất lực đứng nhìn từ xa....'
                        }
                        likeNumber={'124'}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage3;
