var React = require('react')
var ReactDOM = require('react-dom')
require('./index.scss')

class App extends React.Component {
  render() {
    return (
      <h1>Works</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))