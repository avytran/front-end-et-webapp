import './Statistics.css';
import { useState, useEffect } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { Available } from '../Available';
import { statisticsData } from '../../mocks/data';
import { STATISTICS_TITLE } from '../../constants';

const statistics = statisticsData.statistics;

export const Statistics = () => {

    const [isVisible, setIsVisible] = useState(false);  

    const handleScroll = () => {  
        const element = document.querySelector('.statistics-section');  
        const position = element.getBoundingClientRect();        

        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {  
            setIsVisible(true);  
        }  
    };      

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);

    return (
        <div className="statistics-section">  
            <Available when={isVisible} parentClassName={'statistics-section'}
                children={
                    <>
                        <h1 id="statistics-item-title" className="statistics-section__title">{STATISTICS_TITLE}</h1>  
                        <div className="statistics-section__items">  
                            {
                                statistics.map((item) => {
                                    return (
                                        <div className="statistics-section__item">  
                                            <img src={require(`../../mocks${item.image}`)} alt={item.title} className="statistics-section__item-image" />  
                                            <AnimatedNumber  
                                                id="statistics-time"  
                                                value={item.value}  
                                                duration={item.duration}  
                                                className="statistics-section__item-value"  
                                            />  
                                            <div className="statistics-section__item-desc">{item.title}</div>  
                                        </div>
                                    )
                                })
                            } 
                        </div> 
                    </>
                }
            /> 
        </div>
    )
}

