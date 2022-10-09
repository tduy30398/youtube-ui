import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { ClockIcon, MoreVerticalIcon, PlayIcon, QueueIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Video({ to, thumb, avatar, runtime, title, channelName, view, uploadTime }) {
    return (
        <Link to={to} className={cx('grid__column-1-4')}>
            <div className={cx('home__video')}>
                <div className={cx('home-video-img')}>
                    <img className={cx('home__video-thumb')} src={thumb} alt="video" />
                    <span className={cx('home__video-runtime')}>{runtime}</span>
                    <div className={cx('home-video-img-btn')}>
                        <span className={cx('home__video-play-btn')}>
                            <PlayIcon />
                        </span>
                        <Tippy content="Watch later" placement="left">
                            <span className={cx('home__video-save-btn')}>
                                <ClockIcon />
                            </span>
                        </Tippy>
                        <Tippy content="Add to queue" placement="left">
                            <span className={cx('home__video-queue-btn')}>
                                <QueueIcon />
                            </span>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('home__video-detail')}>
                    <Tippy content={channelName} placement="bottom" delay={[500, 0]}>
                        <img className={cx('home__video-avatar')} src={avatar} alt="video"></img>
                    </Tippy>
                    <div className={cx('home__video-info')}>
                        <div className={cx('home__video-title-wrapper')}>
                            <Tippy content={title} placement="bottom" delay={[500, 0]}>
                                <h4 className={cx('home__video-title')}>{title}</h4>
                            </Tippy>
                            <div className={cx('home__video-title-icon-wrapper')}>
                                <span className={cx('home__video-title-icon')}>
                                    <MoreVerticalIcon />
                                </span>
                                <span className={cx('home__video-title-icon-transparent')}></span>
                            </div>
                        </div>
                        <Tippy content={channelName} placement="bottom" delay={[500, 0]}>
                            <div className={cx('home__video-channel-name')}>{channelName}</div>
                        </Tippy>
                        <div className={cx('home__video-sub-info')}>
                            <span className={cx('home__video-views')}>{view}</span>
                            <span className={cx('home__video-split')}>{'•'}</span>
                            <span className={cx('home__video-upload-time')}>{uploadTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Video;
