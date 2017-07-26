/**
 * Created by 58 on 2017/7/14.
 */
import React from 'react';
import {Link} from 'react-router';
import './ApartmentButton.scss';
export default class ApartmentButton extends React.Component{
    render(){
        return(
            <div className="ApartmentButton">

                <Link to="/cooperate" className="btn">申请月付</Link>

            </div>
        )
    }
}