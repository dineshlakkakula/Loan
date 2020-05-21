import React, { PureComponent } from 'react'
import API from './Services/API'
import Gif from './Gif'

class Search extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            search: null,
      clicked: false,
      apiData: null,
      limit:18,
        }
    }

     
  async componentDidUpdate() {
    if(this.state.search!== null && this.state.clicked===true){
    let getData = await API.getData(this.state.search,this.state.limit);
    this.setState({
      apiData: getData.data
    })

  }
  }

    textvalue = () => {
        let textValue = this.refs.text.value;
        this.setState({
          search: textValue
        })
      }
    
      click=()=>{
        this.setState({
          clicked:true,
        })
      }
    
      more=() =>{
          this.setState({
              limit:this.state.limit*2,
          })
      }
    

    render() {
        return (
            <div>

<input className="Search" value={this.state.months} type="text" ref="text" onChange={this.textvalue} />
<input type="button" value="search" onClick={this.click}/>
<Gif {...this.state}/>

<div class="container">

<input type="button" className="more" value="More..." onClick={this.more}/>
</div>

            </div>
            

        )
    }
}

export default Search