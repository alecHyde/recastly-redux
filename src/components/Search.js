import React from 'react';
 
// class Search extends React.Component {
//   constructor(props) {
//     super(props);

    // this.state = {
    //   value: ''
    // };
  // }

  // handleInputChange(e) {
  //   this.props.handleSearchInputChange(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
//   render() {
//     return (
//     );
//   }
// }

var Search = ({ handleSearchInputChange }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text" 
      onChange={(e) => {
        handleSearchInputChange(e.target.value)
      }} 
    />
      {/*value={this.state.value}*/}
      {/*onChange={this.handleInputChange.bind(this)}*/}
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>

)



export default Search;
