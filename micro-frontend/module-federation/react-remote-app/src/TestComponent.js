import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';
import TestRoute from './Test-route';

function TestComponent() {
    return (
        <>
            Test            
            <MemoryRouter>
            <Link to="/test-route">Test Route</Link>
                <Switch>
                    <Route path="/test-route" component={TestRoute} />
                </Switch>
            </MemoryRouter>
        </>
    );
}


export default TestComponent;

class TestComponentElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<TestComponent />, this);
    }
}

customElements.define("react-remote-test-component-element", TestComponentElement);