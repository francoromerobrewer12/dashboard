import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
            <div className="featureBoxesWrap">
                <FeaturedInfo title="Revenue" value="4.213" tendency="11.2"/>
                <FeaturedInfo title="Sales" value="1.250" tendency="5.7"/>
                <FeaturedInfo title="Costs" value="500" tendency="-10.2"/>
            </div>
            <Chart />
        </div>
    )
}

export default Home
