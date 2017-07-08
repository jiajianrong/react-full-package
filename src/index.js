import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Route, Router, hashHistory, IndexRoute, Redirect } from 'react-router';
import store from './store/index';


import './index.scss';
import App from './containers/App';
import Apartment from './containers/Apartment/Apartment';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(

    <Provider store={store}>

        <Router history={hashHistory}>

            <Route path="/" component={App}>
        
                <IndexRedirect to="home" />
                
                
                
                
                <Route path="home" getComponent={(location, callback)=>{
                    
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Home/Home').default)
                    }, 'Home')
                    
                }} />
                
                
                
                {
                /*<Route path="apartment" getComponent={(location, callback)=>{
                    
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Apartment/Apartment').default)
                    }, 'Apartment')
                    
                }} />*/
                }
                
                
                <Route path="apartment" component={Apartment}>
            
                    <IndexRedirect to="list"/>
            
                    <Route path="list" getComponent={(location, callback)=>{
                            
                        require.ensure([], function (require) {
                            callback(null, require('./containers/Apartment/ApartmentList').default)
                        }, 'ApartmentList')
                
                    }} />
            
                    <Route path="detail" getComponent={(location, callback)=>{
                            
                        require.ensure([], function (require) {
                            callback(null, require('./containers/Apartment/ApartmentDetail').default)
                        }, 'ApartmentDetail')
                
                    }} />
            
                </Route>
                
                

            </Route>
            
            <Redirect from="*" to="/home" />
            
        </Router>

    </Provider>,

    document.getElementById('root')

)







registerServiceWorker();
