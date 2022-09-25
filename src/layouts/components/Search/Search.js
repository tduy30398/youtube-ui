import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchService from '~/services/searchService';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { default as PopperWrapper } from '~/components/Popper/Wrapper';
import SearchResult from '~/components/SearchResult/SearchResult';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

// Cần tách component Search ra riêng vì nếu để chung và xài state, nó sẽ render
// không cần thiết cho cả Header
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isFocus, setIsFocus] = useState(false);

    // Khi user ngừng gõ 500ms, giá trị debouncedValue mới được update bằng giá trị mới
    // nhất của searchValue
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef('');

    useEffect(() => {
        // Ở lần đầu searchValue là chuỗi rỗng, nếu search với q là chuỗi rỗng thì sẽ gây lỗi
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }

        (async () => {
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
        })();

        // Đây là get đc lấy từ object do import *
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setIsFocus(false);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                offset={[0, 12]}
                visible={isFocus && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <SearchResult key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        onChange={handleChange}
                        onFocus={() => setIsFocus(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    <Tippy content="Search" placement="bottom">
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </Tippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
