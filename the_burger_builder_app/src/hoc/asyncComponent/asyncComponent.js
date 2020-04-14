import React from "react";

const asyncComponent = importComponent => {
    return class extends React.Component {
        state = {
            component: null
        }
        componentDidMount(){
            importComponent().then(component => {
                this.setState({component:component.default});
            });
        }
        render(){
            let AsyncComponent=this.state.component;
            return (
                AsyncComponent?<AsyncComponent {...this.props}/>:null
            );
        }
    };
};
export default asyncComponent;