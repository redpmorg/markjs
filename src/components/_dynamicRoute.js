import Menu from '../../data.js';

createRoutes() {
    return this.props.data.nav.map((item: any, index: number) => {
        let DynamicComponent = require('../../' + item.component.path + '/' + item.component.name).default;
        return <Route key={index} path={item.route.url}
                      exact={item.route.exact}
                      render={() => (<DynamicComponent key={item.component.name}/>)}/>
    });
}
