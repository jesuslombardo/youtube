import React from 'react';

class SearchBar extends React.Component{

    state = { term : '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    }

    searchWord = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
        //console.log(this.state.term); //aca esta la palabra que buscó
        
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.searchWord} className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Search any word" 
                            value={this.state.term}
                            onChange = {this.onInputChange}    
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;