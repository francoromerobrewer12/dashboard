import React from 'react';
import './FeaturedInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo({ title, value, tendency }) {
    return (
        <div className="featuredContainer">
            <div className="featuredWrap">

                <h1 className="featuredTitle">{title}</h1>
                <div className="featuredValues">
                    <span className="featuredNumber">${value}</span>
                    <div className="featuredTendency">
                        <p className="featuredTendencyValue">{tendency}</p>
                        {
                            Number(tendency) > 0 ? <ArrowUpwardIcon className="featuredTendencyIcon green"/> : <ArrowDownwardIcon className="featuredTendencyIcon red"/>
                        }
                    </div>
                </div>
                <p className="featuredInfoSubtitle">Compared to last month</p>

            </div>
        </div>
    )
}

export default FeaturedInfo
