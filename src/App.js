import React, { PureComponent } from 'react'
import Search from './Search'

class App extends PureComponent {
  
  constructor(props) {
    super(props)

    this.state = {
      search: null,
      clicked: false,
      apiData: null,
      init: false
    }
  }
  
  componentDidMount(){
    this.setState({
      init:true
    })
  }
 

  render() {

    if(!this.state.init){
      return(
        <div>
        Loading
        </div>
      )
    }
  
    return (
      <div>
<div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  

</div>

<Search/> 

    </div>
    )
  }};


export default App