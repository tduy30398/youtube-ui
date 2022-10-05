import classNames from 'classnames/bind';
import styles from './Video2.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { ClockSmallIcon, MoreVerticalIcon, QueueSmallIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Video2({ to, img, runtime, title, channelName, view, uploadTime }) {
    return (
        <Link to={to} className={cx('sub-video-wrapper')}>
            <div className={cx('sub-video-thumb-wrapper')}>
                <img className={cx('sub-video-thumb')} alt="video-thumb" src={img} />
                <span className={cx('sub-video-runtime')}>{runtime}</span>
                <div className={cx('sub-video-img-btn')}>
                    <Tippy content="Watch later" placement="left">
                        <span className={cx('sub-video-save-btn')}>
                            <ClockSmallIcon />
                        </span>
                    </Tippy>
                    <Tippy content="Add to queue" placement="left">
                        <span className={cx('sub-video-queue-btn')}>
                            <QueueSmallIcon />
                        </span>
                    </Tippy>
                </div>
            </div>
            <div className={cx('sub-video-detail')}>
                <div className={cx('sub-video-title-wrapper')}>
                    <Tippy content={title} placement="bottom">
                        <div className={cx('sub-video-title')}>{title}</div>
                    </Tippy>
                    <span className={cx('sub-video-more-icon')}>
                        <MoreVerticalIcon />
                    </span>
                </div>
                <Tippy content={channelName} placement="top-start">
                    <div className={cx('sub-video-channel-name')}>{channelName}</div>
                </Tippy>
                <div className={cx('sub-video-sub-info')}>
                    <span className={cx('sub-video-views')}>{view}</span>
                    <span className={cx('sub-video-split')}>{'•'}</span>
                    <span className={cx('sub-video-upload-time')}>{uploadTime}</span>
                </div>
            </div>
        </Link>
    );
}

export default Video2;
