import React from 'react';
import { Calendar, Badge, Button } from "antd";
import calendar from './calendar.json';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const formattedEntries = () =>
    calendar.calendar[0].event.map((item) => ({

        time: moment(moment(item.time).toDate()).format('DD/MM/YYYY'),
        content: item.content
    }));

const getListData = (value) => {
    const date = value.format('DD/MM/YYYY');
    const entriesByCurrentDate = formattedEntries().filter((item) => item.time === date);

    return entriesByCurrentDate.map((item) => ({
        type: 'error',
        content: item.content,
        ...item
    }));
};

function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map(item => (
                <li key={item.uid} onClick={() => console.log(item)}>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
}

function Kalendar() {
    const history = useHistory();

    function handleClick() {
        history.push(`/`);
    }
    return (
        <div className="calendar">
            <Calendar dateCellRender={dateCellRender} />
            <Button onClick={handleClick}> Vrati se na početnu stranicu</Button>
        </div>
    )
}

export default Kalendar;