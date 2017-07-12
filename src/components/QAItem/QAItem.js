import React from 'react';
import { Link } from 'react-router';
import './QAItem.scss';



export default class QAItem extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            unfold: false
        }
    }
    
    
    foldHanlder() {
        let unfold = !this.state.unfold;
        
        this.setState({unfold: unfold})
    }

    /*componentWillMount() {
        console.log('1111')
    }
    componentWillUnmount() {
        console.log('2222')
    }*/
   
    render() {

        const { title, text } = this.props.item;
        
        let displayStr = this.state.unfold ? 'block' : 'none';

        return (
            <li className="QAItem">
                <header className="item-title" onClick={ e => this.foldHanlder() }> {title} </header>
                <div style={{"display": displayStr}}>
                    {
                        text.map((sentence, index) => {
                            return (
                                <div key={`sentence${index}`}>{sentence}</div>
                            )
                        })
                    }
                </div>
            </li>
        )

    }

}


