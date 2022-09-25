import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ data }) {
    return <div className={cx('search-result')}>{data.nickname}</div>;
}

export default SearchResult;
