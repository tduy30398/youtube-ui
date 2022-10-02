import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './VideoAction.module.scss';

const cx = classNames.bind(styles);

function VideoAction({ icon, activeIcon, title }) {
    if (!activeIcon) {
        activeIcon = icon;
    }
    const [isActive, setIsActive] = useState(true);

    const handleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <Tippy content={title ? title.toLowerCase() : 'more'} placement="bottom">
            <div className={cx('video-player-action')}>
                <span className={isActive ? cx('icon') : cx('active-icon')} onClick={handleActive}>
                    {isActive ? icon : activeIcon}
                </span>
                <span className={cx('title')}>{title}</span>
            </div>
        </Tippy>
    );
}

export default VideoAction;
