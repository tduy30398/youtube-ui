import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const MenuItem = forwardRef(({ title, to, icon, activeIcon }, ref) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} ref={ref}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
});

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
