import React from 'react';
import {connect} from 'react-redux';

class MyMemes extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.myMeme.map((meme,index) => {
            return(
              <img
                key={index}
                src={meme.data.url}
                alt="my-meme"
                className="myMemeImg"
              />

            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    myMeme:state.myMeme
  }
}

export default connect(mapStateToProps,null)(MyMemes)
