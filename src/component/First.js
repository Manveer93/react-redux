import React from 'react';
// import connect now we can connect store with our component(Man).but now it is not working.
//huh pta ni kithe glti ho gyi.chl peya component de bahr ni rkheya c mapStateToProps nu.
import { connect } from 'react-redux';
//import textHandling here otherwise it will give error as textHandling is not defined.
import {textHandling} from './abc.action.js';
class First extends React.Component {
    //here we dispatch our action(textHandling).
    handleChange=(e)=> {
        this.props.dispatch(textHandling(e.target.value))
     }
    

    render() {
    
        return(
            //ethe appa onchange function lgana tn k state ch koi v change aye tn ohdi appa nu info rhe.
            //here e is event means jo v appa type krage.
        <div>
            <h2>Manveer Singh Bhatoye</h2>
            <input value={this.props.text} type="text" onChange={(e)=>{this.handleChange(e)}}/>
        <div>
            {this.props.text}
        </div>
        </div>
        );
    }
}
    const mapStateToProps=(state)=> {
        console.log("state",state)
        return {
            text:state.text
        };
    }
 //normal export is always imported in curly braces,export default is imported as normally as we are typing.
 //export default is always used once in an app. normal export can we used many times in the app.

export default connect(mapStateToProps)(First);