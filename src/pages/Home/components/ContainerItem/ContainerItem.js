import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './ContainerItem.module.scss';

const cx = classNames.bind(styles);

function ContainerItem({ name, onClick, isActive = false }) {
    return (
        <Tippy content={name} placement="bottom" delay={[500, 0]}>
            <li className={cx('container_scroll-item')} onClick={onClick}>
                <div
                    className={isActive === name ? cx('container_scroll-text', 'active') : cx('container_scroll-text')}
                >
                    {name}
                </div>
            </li>
        </Tippy>
    );
}

export default ContainerItem;
