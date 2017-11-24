import React from 'react';
import {connect} from 'react-redux';
import {createMeme} from "../actions";

class MemeItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      hovered:true
    }

    this.postMeme = this.postMeme.bind(this);

  }

  postMeme(){
    console.log('this.props',this.props);
    const {text0,text1} = this.props;
    const memeObj = {
      template_id:this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj)
  }

  render(){
    return(
      <div
        className='memeItem'
        onMouseEnter={() => this.setState({hovered:true})}
        onMouseLeave={() => this.setState({hovered:false})}
        onClick={this.postMeme}
      >
        <img
          className={this.state.hovered ? "memeImg darkenImg" : "memeImg"}
          src={this.props.meme.url} alt = {this.props.meme.name}
        />
      <p className={this.state.hovered ? 'memeText' : 'noText'}>
        {this.props.meme.name}
      </p>
      </div>
    )
  }
};

//mapDispatchToProps

export default connect(null,{createMeme})(MemeItem);
