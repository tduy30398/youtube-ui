import config from '~/config';

import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Shorts from '~/pages/Shorts';
import Subscription from '~/pages/Subscription';
import Library from '~/pages/Library';
import History from '~/pages/History';
import YourVideos from '~/pages/YourVideos';
import WatchLater from '~/pages/WatchLater';
import LikedVideos from '~/pages/LikedVideos';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.shorts, component: Shorts },
    { path: config.routes.subscription, component: Subscription },
    { path: config.routes.library, component: Library },
    { path: config.routes.history, component: History },
    { path: config.routes.yourVideos, component: YourVideos },
    { path: config.routes.watchLater, component: WatchLater },
    { path: config.routes.likedVideos, component: LikedVideos },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
