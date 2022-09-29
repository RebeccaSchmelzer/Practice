import { Component } from "react";

class ErrorBoundary extends Component {
    
    /**
     * 171 makes it a error component
     * triggeres when child throws error
     */
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError) {
            return <p>something went wrong</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary