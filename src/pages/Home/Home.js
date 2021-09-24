import { Widgets } from '@material-ui/icons';
import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import {chartData} from '../../data';
import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
            <div className="featureBoxesWrap">
                <FeaturedInfo title="Revenue" value="4.213" tendency="11.2"/>
                <FeaturedInfo title="Sales" value="1.250" tendency="5.7"/>
                <FeaturedInfo title="Costs" value="500" tendency="-10.2"/>
            </div>
            <Chart title="Users Analysis" data={chartData} ejeX="Month" ejeY="Active Users"/>
            <div className="widgetsWrap">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
