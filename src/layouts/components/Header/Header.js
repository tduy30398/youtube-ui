import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import images from '~/assets/images';
import { HamburgerIcon } from '~/components/Icons';
import Search from '../Search';
import HeaderAction from '../HeaderAction';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('inner')}>
                    <div className={cx('logo-area')}>
                        <button className={cx('sidebar-menu-btn')}>
                            <HamburgerIcon />
                        </button>
                        <Tippy content="Youtube Home" delay={[400, 0]}>
                            <Link to={config.routes.home} className={cx('logo')}>
                                <img src={images.logo} alt="Youtube" />
                            </Link>
                        </Tippy>
                    </div>

                    <Search />

                    <HeaderAction />
                </div>
            </div>
        </div>
    );
}

export default Header;
