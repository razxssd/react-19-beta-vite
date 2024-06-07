import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        this.onResetHandler = this.onResetHandler.bind(this);
    }

    static getDerivedStateFromError(error) {
        console.log('error', error)
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    onResetHandler() {
        this.setState({ hasError: false });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <>
                {this.props.fallback}
                <button className={'mt-10'} onClick={this.onResetHandler}>Reset</button>
            </>;
        }

        return this.props.children;
    }
}
