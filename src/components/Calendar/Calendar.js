import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches.js';

import './Calendar.css';


const Calendar = (props) => {
    
    const {data} = useLaunches();

    return (
        <>
            <Main name='Календар SpaceX' />
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        {data.map(item =>
                            (<li className="calendar-item" key={item.id}>
                                <article className="launches">
                                    <div className="launches-image">
                                        <img src={item.links.patch.small} alt="" />
                                    </div>
                                    <div className="launches-content">
                                        <h2 className="launches-title">{item.name}</h2>
                                        <Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
                                    </div>
                                </article>
                            </li>)
                        )}

                    </ul>
                </div>
            </section>
        </>
    )
};

export default Calendar;