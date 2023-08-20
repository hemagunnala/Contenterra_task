import React, { useState } from 'react'
import { useDataFetchRover } from '../../Utils/customHooks';
import './card.scss';
import { Utility } from '../../Utils/utils';

const Card = () => {

    const [cardItems, setCardItems] = useState([]);
    useDataFetchRover('https://www.reddit.com/r/reactjs.json', setCardItems);

    return (
        <div className='card__container'>   
            {(cardItems?.data?.children || []).map(({ data }, index) => {
                const { title, selftext_html, url, score } = data;
                const isAlternate = index % 2 === 1;
                const cardItemClasses = isAlternate ? 'card__items alternate' : 'card__items';
                return (
                    <div className={cardItemClasses} key={index}>
                        <h3 className='card__items__title'>{title}</h3>
                        <div className='card__items__self' dangerouslySetInnerHTML={{ __html: Utility.decodeAndExtractHTML(selftext_html) }}></div>
                        <a href={url}>Explore Further</a>
                        <div className='card__items__score'>{score}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
