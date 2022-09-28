import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    ExploreActiveIcon,
    ExploreIcon,
    HistoryActiveIcon,
    HistoryIcon,
    HomeActiveIcon,
    HomeIcon,
    LibraryActiveIcon,
    LibraryIcon,
    LikedVideoActiveIcon,
    LikedVideoIcon,
    ShortsActiveIcon,
    ShortsIcon,
    SubscriptionsActiveIcon,
    SubscriptionsIcon,
    WatchLaterActiveIcon,
    WatchLaterIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import Subscriptions from '~/components/Subscriptions';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <Tippy content="Home" placement="bottom">
                    <MenuItem
                        title="Home"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Explore" placement="bottom">
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Shorts" placement="bottom">
                    <MenuItem
                        title="Shorts"
                        to={config.routes.shorts}
                        icon={<ShortsIcon />}
                        activeIcon={<ShortsActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Subscriptions" placement="bottom">
                    <MenuItem
                        title="Subscriptions"
                        to={config.routes.subscription}
                        icon={<SubscriptionsIcon />}
                        activeIcon={<SubscriptionsActiveIcon />}
                    />
                </Tippy>
            </Menu>
            <Menu>
                <Tippy content="Library" placement="bottom">
                    <MenuItem
                        title="Library"
                        to={config.routes.library}
                        icon={<LibraryIcon />}
                        activeIcon={<LibraryActiveIcon />}
                    />
                </Tippy>
                <Tippy content="History" placement="bottom">
                    <MenuItem
                        title="History"
                        to={config.routes.history}
                        icon={<HistoryIcon />}
                        activeIcon={<HistoryActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Watch Later" placement="bottom">
                    <MenuItem
                        title="Watch Later"
                        to={config.routes.watchLater}
                        icon={<WatchLaterIcon />}
                        activeIcon={<WatchLaterActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Liked Videos" placement="bottom">
                    <MenuItem
                        title="Liked Videos"
                        to={config.routes.likedVideos}
                        icon={<LikedVideoIcon />}
                        activeIcon={<LikedVideoActiveIcon />}
                    />
                </Tippy>
            </Menu>
            <Subscriptions />
        </div>
    );
}

export default Sidebar;
