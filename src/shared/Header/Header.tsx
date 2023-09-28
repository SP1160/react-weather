import React from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

interface Props {}

const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Нижний Новгород' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Санкт-Петербург' },
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '215px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
    };

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </div>
    );
};

export default Header;
