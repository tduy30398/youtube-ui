import classNames from 'classnames/bind';
import styles from './VideoPage1.module.scss';
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

function VideoPage1() {
    return (
        <div className={cx('container-video-left')}>
            <div className={cx('video-player-iframe')}>
                <iframe
                    width="100%"
                    height="475px"
                    src="https://www.youtube.com/embed/4eX93NZmxVU?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={cx('video-player-info')}>
                <h3 className={cx('video-player-name')}>
                    {'CON TÀU NOAH: TRUYỀN THUYẾT TRONG KINH THÁNH HAY THỰC SỰ TỪNG TỒN TẠI?'}
                </h3>
                <div className={cx('video-player-detail')}>
                    <div className={cx('video-player-sub-info')}>
                        <span className={cx('home__video-views')}>{'32,054 views'}</span>
                        <span className={cx('home__video-split')}>{'•'}</span>
                        <span className={cx('home__video-upload-time')}>{'Oct 1, 2022'}</span>
                    </div>
                    <div className={cx('video-player-actions')}>
                        <VideoAction icon={<LikedIcon />} activeIcon={<LikedActiveIcon />} title={'728'} />
                        <VideoAction icon={<DislikedIcon />} activeIcon={<DislikedActiveIcon />} title={'DISLIKE'} />
                        <VideoAction icon={<ShareIcon />} title={'SHARE'} />
                        <VideoAction icon={<ScissorIcon />} title={'CLIP'} />
                        <VideoAction icon={<SaveIcon />} title={'SAVE'} />
                        <VideoAction icon={<MoreIcon />} />
                    </div>
                </div>
            </div>
            <VideoDesc
                channelName={'BLV Anh Quân Discovery'}
                img={
                    'https://yt3.ggpht.com/cy-e4sJD7488A3fv7QCOsMFjemOYJnviIIAMTnbAb2wq6iIiOs-DMbPKEH7lZEzRXuRD-KKwEw=s48-c-k-c0x00ffffff-no-rj'
                }
                subscribe={'73.3K subscribers'}
            />
            <div className={cx('home__video-comment-wrapper')}>
                <CommentHeader />
                <div className={cx('home__video-comment-list')}>
                    <Comment
                        img={
                            'https://yt3.ggpht.com/M_-29GKMmOPQtLKaaz5q8ZQ3A3HOljsLDrPANOpaU40FekUscilDYAbzPM5Up8SWkW35_6oyiK0=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Duy Vlog'}
                        time={'4 days ago'}
                        content={
                            'Em không biết mình có bỏ lỡ video nào nói về thế giới giả lập của AQ DCR hay không, em rất thích giả thuyết “thế giới giả lập” mong ekip sẽ ra video về chủ đề này ạ, em cảm ơn'
                        }
                        likeNumber={'6'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_VfCQQL0gQY1clUKe1DmiKELWr64CC3cC00tI4yA=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'David Do'}
                        time={'3 days ago'}
                        content={
                            'Thấy mn bảo có khả năng câu chuyện này diễn ra thật khi mực nước biển từ địa trung hải tràn vào biển đen ( lúc này chưa là biển)'
                        }
                        likeNumber={''}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/rsdEWz2rolhVFvlcMd7E9yVpnAGJvgjLThiQKdmt7keE-i_3MU45VcGQ_n0gh550SeOstVrfOA=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Thuy Vy'}
                        time={'1 year ago'}
                        content={'Chỉ có Noah là lịch sử chính xác thôi.. Theo sách Thánh để lại'}
                        likeNumber={'11'}
                    />
                    <Comment
                        img={
                            'https://yt3.ggpht.com/ytc/AMLnZu_m8s8aXVYU6bREk8WLoPgXsky8LYBQG9TtzBEjvg=s48-c-k-c0x00ffffff-no-rj'
                        }
                        userName={'Hong Huynh'}
                        time={'2 days ago'}
                        content={
                            'Tín ngưỡng gì mà tàn độc vậy, nếu loài người độc ác thì những loài khác có tội gì mà phải chết chung'
                        }
                        likeNumber={'3'}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPage1;
