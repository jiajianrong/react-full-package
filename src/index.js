import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Route, Router, hashHistory, IndexRoute, Redirect } from 'react-router';
import store from './store/index';


import App from './containers/App';
import Apartment from './containers/Apartment/Apartment';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


/*
 * https://github.com/ReactTraining/react-router/issues/2144#issuecomment-150939358
 * router scrollY
 */
hashHistory.listen(location => {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        // to scroll to top, but we can't differentiate it from the others)
        if (location.action === 'POP') {
            return;
        }
        // In all other cases, scroll to top
        window.scrollTo(0, 0);
    });
});



ReactDOM.render(

    <Provider store={store}>

        <Router history={hashHistory}>

            <Route path="/" component={App}>
        
                <IndexRedirect to="home" />
                
                
                
                {/* 首页 */}
                <Route path="home" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Home/Home').default)
                    }, 'Home')
                }} />
                
                
                
                {/* 公寓列表，公寓详情，公寓搜索 */}
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
                
                
                
                {/* 常见问题 */}
                <Route path="qa" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/QA/QA').default)
                    }, 'QA')
                }} />
                
                
                
                {/* 关于我们 */}
                <Route path="about" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/About/About').default)
                    }, 'About')
                }} />
                
                
                
                {/* 合作 */}
                <Route path="cooperate" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Cooperate/Cooperate').default)
                    }, 'Cooperate')
                }} />
                
            </Route>
            
            
            
            <Redirect from="*" to="/home" />
            
        </Router>

    </Provider>,

    document.getElementById('root')

)







registerServiceWorker();
