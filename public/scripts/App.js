import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor(){
		super()
	}
	render(){
		return <div>Naomi is awesome</div>
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);


export default App