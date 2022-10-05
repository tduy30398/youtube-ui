import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

import {
    DislikedCommentActiveIcon,
    DislikedCommentIcon,
    LikedCommentActiveIcon,
    LikedCommentIcon,
    MoreVerticalIcon,
} from '~/components/Icons';

import Tippy from '@tippyjs/react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Comment({ img, userName, time, content, likeNumber }) {
    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);

    const handleLikeFlg = () => {
        setIsLike(!isLike);
    };

    const handleDislikeFlg = () => {
        setIsDislike(!isDislike);
    };

    return (
        <div className={cx('home__video-comment')}>
            <img className={cx('home__video-comment-user-avatar')} alt="user-avatar" src={img} />
            <div className={cx('home__video-comment-content')}>
                <div className={cx('home__video-comment-top-content')}>
                    <div className={cx('home__video-comment-top-left')}>
                        <div className={cx('home__video-comment-top-name-time')}>
                            <span className={cx('home__video-comment-top-name')}>{userName}</span>
                            <span className={cx('home__video-comment-top-time')}>{time}</span>
                        </div>
                        <div className={cx('home__video-comment-top-content')}>{content}</div>
                    </div>
                    <span className={cx('home__video-comment-top-right')}>
                        <MoreVerticalIcon />
                    </span>
                </div>
                <div className={cx('home__video-comment-bottom-content')}>
                    <span className={cx('home__video-comment-like')}>
                        {isLike ? (
                            <Tippy content="Unlike" placement="bottom">
                                <span className={cx('home__video-comment-like-btn')} onClick={handleLikeFlg}>
                                    <LikedCommentActiveIcon />
                                </span>
                            </Tippy>
                        ) : (
                            <Tippy content="Like" placement="bottom">
                                <span className={cx('home__video-comment-like-btn')} onClick={handleLikeFlg}>
                                    <LikedCommentIcon />
                                </span>
                            </Tippy>
                        )}

                        <span className={cx('home__video-comment-like-number')}>{likeNumber}</span>
                    </span>
                    {isDislike ? (
                        <Tippy content="Remove dislike" placement="bottom">
                            <span className={cx('home__video-comment-dislike-btn')} onClick={handleDislikeFlg}>
                                <DislikedCommentActiveIcon />
                            </span>
                        </Tippy>
                    ) : (
                        <Tippy content="Dislike" placement="bottom">
                            <span className={cx('home__video-comment-dislike-btn')} onClick={handleDislikeFlg}>
                                <DislikedCommentIcon />
                            </span>
                        </Tippy>
                    )}

                    <div className={cx('home__video-comment-reply-btn')}>REPLY</div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
