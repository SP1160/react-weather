import React from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

interface Props {}

const Header = (props: Props) => {
    const { theme, changeTheme } = useTheme();
    const options = [
        { value: 'city-1', label: 'Нижний Новгород' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Санкт-Петербург' },
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '215px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === Theme.DARK ? '#fff' : '#000',
        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: theme === Theme.DARK ? '#4f4f4f' : '#fff',
            zIndex: 90,
        }),
        option: (styles: any, { isFocused, isSelected }: any) => ({
            ...styles,
            backgroundColor: isSelected
                ? '#357ABD'
                : isFocused
                ? 'rgba(71, 147, 255, 0.2)'
                : 'transparent',
            color: isSelected ? 'white' : theme === Theme.DARK ? '#fff' : '#000',
        }),
    };

    const changeProjectTheme = () => {
        changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeProjectTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </header>
    );
};

export default Header;
