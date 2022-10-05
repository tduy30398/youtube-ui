import config from '~/config';
import WatchVideoLayout1 from '~/layouts/WatchVideoLayout1/WatchVideoLayout1';
import WatchVideoLayout3 from '~/layouts/WatchVideoLayout3';
import WatchVideoLayout2 from '~/layouts/WatchVideoLayout2';
import WatchVideoLayout4 from '~/layouts/WatchVideoLayout4';
import WatchVideoLayout5 from '~/layouts/WatchVideoLayout5';
import WatchVideoLayout6 from '~/layouts/WatchVideoLayout6';
import WatchVideoLayout7 from '~/layouts/WatchVideoLayout7';
import WatchVideoLayout8 from '~/layouts/WatchVideoLayout8';
import WatchVideoLayout9 from '~/layouts/WatchVideoLayout9';
import WatchVideoLayout10 from '~/layouts/WatchVideoLayout10';
import WatchVideoLayout11 from '~/layouts/WatchVideoLayout11';
import WatchVideoLayout12 from '~/layouts/WatchVideoLayout12';
import WatchVideoLayout13 from '~/layouts/WatchVideoLayout13';
import WatchVideoLayout14 from '~/layouts/WatchVideoLayout14';
import WatchVideoLayout15 from '~/layouts/WatchVideoLayout15';
import WatchVideoLayout16 from '~/layouts/WatchVideoLayout16';

import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Shorts from '~/pages/Shorts';
import Subscription from '~/pages/Subscription';
import Library from '~/pages/Library';
import History from '~/pages/History';
import YourVideos from '~/pages/YourVideos';
import WatchLater from '~/pages/WatchLater';
import LikedVideos from '~/pages/LikedVideos';
import Gaming from '~/pages/Gaming';
import Sports from '~/pages/Sports';
import Studio from '~/pages/Studio';
import Music from '~/pages/Music';
import Kids from '~/pages/Kids';
import TV from '~/pages/TV';
import VideoPage1 from '~/pages/VideoPage1';
import VideoPage2 from '~/pages/VideoPage2';
import VideoPage3 from '~/pages/VideoPage3';
import VideoPage4 from '~/pages/VideoPage4';
import VideoPage5 from '~/pages/VideoPage5';
import VideoPage6 from '~/pages/VideoPage6';
import VideoPage7 from '~/pages/VideoPage7';
import VideoPage8 from '~/pages/VideoPage8';
import VideoPage9 from '~/pages/VideoPage9';
import VideoPage10 from '~/pages/VideoPage10';
import VideoPage11 from '~/pages/VideoPage11';
import VideoPage12 from '~/pages/VideoPage12';
import VideoPage13 from '~/pages/VideoPage13';
import VideoPage14 from '~/pages/VideoPage14';
import VideoPage15 from '~/pages/VideoPage15';
import VideoPage16 from '~/pages/VideoPage16';

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
    { path: config.routes.gaming, component: Gaming },
    { path: config.routes.sports, component: Sports },
    { path: config.routes.studio, component: Studio },
    { path: config.routes.music, component: Music },
    { path: config.routes.kids, component: Kids },
    { path: config.routes.tv, component: TV },
    { path: config.video.video1, component: VideoPage1, layout: WatchVideoLayout1 },
    { path: config.video.video2, component: VideoPage2, layout: WatchVideoLayout2 },
    { path: config.video.video3, component: VideoPage3, layout: WatchVideoLayout3 },
    { path: config.video.video4, component: VideoPage4, layout: WatchVideoLayout4 },
    { path: config.video.video5, component: VideoPage5, layout: WatchVideoLayout5 },
    { path: config.video.video6, component: VideoPage6, layout: WatchVideoLayout6 },
    { path: config.video.video7, component: VideoPage7, layout: WatchVideoLayout7 },
    { path: config.video.video8, component: VideoPage8, layout: WatchVideoLayout8 },
    { path: config.video.video9, component: VideoPage9, layout: WatchVideoLayout9 },
    { path: config.video.video10, component: VideoPage10, layout: WatchVideoLayout10 },
    { path: config.video.video11, component: VideoPage11, layout: WatchVideoLayout11 },
    { path: config.video.video12, component: VideoPage12, layout: WatchVideoLayout12 },
    { path: config.video.video13, component: VideoPage13, layout: WatchVideoLayout13 },
    { path: config.video.video14, component: VideoPage14, layout: WatchVideoLayout14 },
    { path: config.video.video15, component: VideoPage15, layout: WatchVideoLayout15 },
    { path: config.video.video16, component: VideoPage16, layout: WatchVideoLayout16 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
