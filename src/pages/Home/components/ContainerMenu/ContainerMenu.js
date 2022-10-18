import classNames from 'classnames/bind';
import styles from './ContainerMenu.module.scss';
import ContainerItem from '../ContainerItem/ContainerItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ContainerMenu() {
    const [isActive, setIsActive] = useState('All');

    const handleUpdateActive = (value) => {
        setIsActive(value);
    };

    return (
        <ul className={cx('container_scroll-list', 'menu-item-margin')}>
            <ContainerItem name="All" onClick={() => handleUpdateActive('All')} isActive={isActive} />
            <ContainerItem name="Mixes" onClick={() => handleUpdateActive('Mixes')} isActive={isActive} />
            <ContainerItem name="Music" onClick={() => handleUpdateActive('Music')} isActive={isActive} />
            <ContainerItem name="Live" onClick={() => handleUpdateActive('Live')} isActive={isActive} />
            <ContainerItem name="Sport" onClick={() => handleUpdateActive('Sport')} isActive={isActive} />
            <ContainerItem
                name="Premier League"
                onClick={() => handleUpdateActive('Premier League')}
                isActive={isActive}
            />
            <ContainerItem name="World Cup" onClick={() => handleUpdateActive('World Cup')} isActive={isActive} />
            <ContainerItem name="Programming" onClick={() => handleUpdateActive('Programming')} isActive={isActive} />
            <ContainerItem name="Anime" onClick={() => handleUpdateActive('Anime')} isActive={isActive} />
            <ContainerItem name="News" onClick={() => handleUpdateActive('News')} isActive={isActive} />
            <ContainerItem name="AI" onClick={() => handleUpdateActive('AI')} isActive={isActive} />
            <ContainerItem name="Movie" onClick={() => handleUpdateActive('Movie')} isActive={isActive} />
            <ContainerItem name="Kids" onClick={() => handleUpdateActive('Kids')} isActive={isActive} />
            <ContainerItem
                name="Super Natural"
                onClick={() => handleUpdateActive('Super Natural')}
                isActive={isActive}
            />
            <ContainerItem name="Comedy" onClick={() => handleUpdateActive('Comedy')} isActive={isActive} />
            <ContainerItem name="Watched" onClick={() => handleUpdateActive('Watched')} isActive={isActive} />
            <ContainerItem name="Love" onClick={() => handleUpdateActive('Love')} isActive={isActive} />
            <ContainerItem name="Dating" onClick={() => handleUpdateActive('Dating')} isActive={isActive} />
            <ContainerItem name="Aerospace" onClick={() => handleUpdateActive('Aerospace')} isActive={isActive} />
            <ContainerItem name="English" onClick={() => handleUpdateActive('English')} isActive={isActive} />
        </ul>
    );
}

export default ContainerMenu;
