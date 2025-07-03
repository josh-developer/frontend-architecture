import React from 'react'
import ReactDOM from 'react-dom'

const TestComponent = () => {
   
    return (
        <>
            <h1>React Remote Test Web Component</h1>
        </>
    );
};

export default TestComponent;

class TestComponentElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<TestComponent />, this);
    }
}

customElements.define("react-remote-test-component-element", TestComponentElement);