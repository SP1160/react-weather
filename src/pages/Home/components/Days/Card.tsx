import React from 'react';
import s from './Days.module.scss';
import { Day } from './Days';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props {
    day: Day;
}

const Card = ({ day }: Props) => {
    const { day: day_name, day_info, icon_id, info, temp_day, temp_night } = day;

    return (
        <div className={s.card}>
            <div className={s.day}>{day_name}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;
