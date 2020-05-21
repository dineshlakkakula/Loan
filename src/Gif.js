import React, { PureComponent } from 'react'

class Gif extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        if (this.props.apiData === null) {
            return (
                <div>
                    Enter To Search a gif

                </div>
            )
        }
        else {
            return (
                <div>
                    <div class="grid-container">

                        {this.props.apiData.map((data, index) => {
                            return (
                                <img alt="" class="grid-item" src={data.images.preview_gif.url} onClick={this.click} />

                            )


                        })}
                    </div>


                </div>
            )
        }

    }



}

export default Gif