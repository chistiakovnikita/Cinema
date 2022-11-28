import { Component } from '../../../../core'

export class H1 extends Component {

    constructor() {
        super();
        this.isShadow = true;
    }
   


    componentDidMount() {
        this.attachShadow({ mode: 'open' })
    }

    render() {
        return `
            <div>
            <slot></slot>
            <div>
            `
    }

}


customElements.define('it-h1', H1)