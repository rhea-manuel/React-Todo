import React from 'react'

class Form extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (

            <div>
                {console.log(this.props)}
                <form onSubmit={this.props.add}>
                    <input name="curItem" onChange={this.props.toChange} value={this.props.value}></input>
                    <button>Submit</button>
                    <button onClick={this.props.clear}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default Form