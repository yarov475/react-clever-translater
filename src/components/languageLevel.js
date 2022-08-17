import React, {Component} from 'react';


/**
 * class component
 * renders select with english levels from A1 to C2
 */
class LevelPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'B1'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        alert('your level is: ' +  this.state.value )

        e.preventDefault()
    }


    handleChange(e) {
        this.setState({value:e.target.value})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    choose your english lavel
                </label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                </select>
                <input type="submit" value='submit'/>
            </form>
        )
    }
}

export default  LevelPicker