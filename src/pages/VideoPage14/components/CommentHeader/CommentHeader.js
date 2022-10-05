import classNames from 'classnames/bind';
import styles from './CommentHeader.module.scss';

import Tippy from '@tippyjs/react';
import { EmojiIcon, SortIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CommentHeader() {
    const [commentTexts, setCommentTexts] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleCancel = () => {
        setIsTyping(false);
        setCommentTexts('');
    };

    return (
        <div className={cx('home__video-comment-header')}>
            <div className={cx('home__video-comment-tool')}>
                <h3 className={cx('home__video-comment-number')}>359 Comments</h3>
                <Tippy content="Sort comments" placement="bottom">
                    <div className={cx('home__video-comment-sorter')}>
                        <span className={cx('home__video-sort-icon')}>
                            <SortIcon />
                        </span>
                        <span className={cx('home__video-sort-title')}>SORT BY</span>
                    </div>
                </Tippy>
            </div>
            <div className={cx('home__video-comment-input-wrapper')}>
                <img
                    className={cx('home__video-comment-input-avatar')}
                    alt="avatar"
                    src="https://yt3.ggpht.com/yti/AJo0G0mD_lS-q4dP0E025WFIeUP8Duqsc24RLbygR5kQzQ=s88-c-k-c0x00ffffff-no-rj-mo"
                />
                <div className={cx('home__video-comment-submit')}>
                    <input
                        value={commentTexts}
                        className={cx('home__video-comment-input')}
                        placeholder="Add a comment..."
                        onInput={(e) => {
                            setCommentTexts(e.target.value);
                        }}
                        onFocus={() => {
                            setIsTyping(true);
                        }}
                    />
                    {isTyping ? (
                        <div className={cx('home__video-comment-action')}>
                            <span className={cx('home__video-comment-action-emoji')}>
                                <EmojiIcon />
                            </span>
                            <div className={cx('home__video-comment-action-btn')}>
                                <div className={cx('home__video-comment-action-cancel')} onClick={handleCancel}>
                                    CANCEL
                                </div>
                                {commentTexts.length > 0 ? (
                                    <div className={cx('home__video-comment-action-comment-active')}>COMMENT</div>
                                ) : (
                                    <div className={cx('home__video-comment-action-comment')}>COMMENT</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CommentHeader;
