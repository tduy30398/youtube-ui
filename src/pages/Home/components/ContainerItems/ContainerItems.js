import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './ContainerItems.module.scss';

const cx = classNames.bind(styles);

function ContainerItems({ name, active = false }) {
    return (
        <Tippy content={name} placement="bottom" delay={[500, 0]}>
            <li className={cx('container_scroll-item')}>
                <div
                    className={cx('container_scroll-text', {
                        active,
                    })}
                >
                    {name}
                </div>
            </li>
        </Tippy>
    );
}

export default ContainerItems;
