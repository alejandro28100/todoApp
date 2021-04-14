import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        this.setState({inputText:e.target.value});
    }
    render() {
        return (
            <div className="form" >
                <input type="text" onChange={this.handleInputChange} placeholder="Escribe aquí" value={this.state.inputText}/>
                <button onClick={(e) => {
                    const result = this.props.handleAdd(e,{text:this.state.inputText,done:false})
                    if(result){
                        alert('Ya existe el elemento');
                    }
                    else {
                        this.setState({inputText:""});
                    }             
                    }}>
                        Crear</button>
            </div>
        )
    }

}

export default Form
