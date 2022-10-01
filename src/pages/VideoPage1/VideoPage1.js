import classNames from 'classnames/bind';
import styles from './VideoPage1.module.scss';

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
                ></iframe>
            </div>
        </div>
    );
}

export default VideoPage1;
