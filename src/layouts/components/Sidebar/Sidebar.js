import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    ExploreActiveIcon,
    ExploreIcon,
    GamingActiveIcon,
    GamingIcon,
    HistoryActiveIcon,
    HistoryIcon,
    HomeActiveIcon,
    HomeIcon,
    LibraryActiveIcon,
    LibraryIcon,
    LikedVideoActiveIcon,
    LikedVideoIcon,
    RedKidIcon,
    RedMusicIcon,
    RedStudioIcon,
    RedYoutubeTvIcon,
    ShortsActiveIcon,
    ShortsIcon,
    SportsActiveIcon,
    SportsIcon,
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
                <Tippy content="Home" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Home"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Explore" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Shorts" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Shorts"
                        to={config.routes.shorts}
                        icon={<ShortsIcon />}
                        activeIcon={<ShortsActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Subscriptions" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Subscriptions"
                        to={config.routes.subscription}
                        icon={<SubscriptionsIcon />}
                        activeIcon={<SubscriptionsActiveIcon />}
                    />
                </Tippy>
            </Menu>
            <Menu>
                <Tippy content="Library" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Library"
                        to={config.routes.library}
                        icon={<LibraryIcon />}
                        activeIcon={<LibraryActiveIcon />}
                    />
                </Tippy>
                <Tippy content="History" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="History"
                        to={config.routes.history}
                        icon={<HistoryIcon />}
                        activeIcon={<HistoryActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Watch Later" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Watch Later"
                        to={config.routes.watchLater}
                        icon={<WatchLaterIcon />}
                        activeIcon={<WatchLaterActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Liked Videos" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Liked Videos"
                        to={config.routes.likedVideos}
                        icon={<LikedVideoIcon />}
                        activeIcon={<LikedVideoActiveIcon />}
                    />
                </Tippy>
            </Menu>
            <Subscriptions />
            <Menu>
                <p className={cx('label')}>EXPLORE</p>
                <Tippy content="Gaming" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Gaming"
                        to={config.routes.gaming}
                        icon={<GamingIcon />}
                        activeIcon={<GamingActiveIcon />}
                    />
                </Tippy>
                <Tippy content="Sports" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Sports"
                        to={config.routes.sports}
                        icon={<SportsIcon />}
                        activeIcon={<SportsActiveIcon />}
                    />
                </Tippy>
            </Menu>
            <Menu>
                <p className={cx('label')}>MORE FROM YOUTUBE</p>
                <Tippy content="Creator Studio" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Creator Studio"
                        to={config.routes.studio}
                        icon={<RedStudioIcon />}
                        activeIcon={<RedStudioIcon />}
                    />
                </Tippy>
                <Tippy content="Youtube Music" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Youtube Music"
                        to={config.routes.music}
                        icon={<RedMusicIcon />}
                        activeIcon={<RedMusicIcon />}
                    />
                </Tippy>
                <Tippy content="Youtube Kids" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Youtube Kids"
                        to={config.routes.kids}
                        icon={<RedKidIcon />}
                        activeIcon={<RedKidIcon />}
                    />
                </Tippy>
                <Tippy content="Youtube TV" placement="bottom" delay={[500, 0]}>
                    <MenuItem
                        title="Youtube TV"
                        to={config.routes.tv}
                        icon={<RedYoutubeTvIcon />}
                        activeIcon={<RedYoutubeTvIcon />}
                    />
                </Tippy>
            </Menu>
        </div>
    );
}

export default Sidebar;
