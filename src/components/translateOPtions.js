import React, {component} from 'react'


/**
 * class render select to chose:
 * 1. to save words to stoplist
 * 2. number of words to translate
 */
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaving: true,
            numberOfWords: 10
        };
        this.handleINputChange = this.handleINputChange.bind(this)
    }

    handleINputChange(e) {
        const target = e.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
 render() {
    return (
    <>
        <label>
          is Saving
          <input
            name="isSaving"
            type="checkbox"
            checked={this.state.isSaving}
            onChange={this.handleINputChange} />
        </label>
        <br />
        <label>
          Number of words:
          <input
            name="numberOfWords"
            type="number"
            value={this.state.numberOfWords}
            onChange={this.handleINputChange} />
        </label>
    </>


    );
  }
}

export default Options