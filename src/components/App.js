import React from 'react';
import {connect} from 'react-redux';

import '../styles/styles.css';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      memeLimit:10,
      text0:'',
      text1:''
    }
    this.loadMore = this.loadMore.bind(this);
    this.submitMeme = this.submitMeme.bind(this);
  }

  loadMore(){
    console.log(this.state.memeLimit);
    this.setState((prevState) => {
      return{
        memeLimit:prevState.memeLimit+10
      }
    })

    this.submitMeme = this.submitMeme.bind(this);
    this.handleTopText = this.handleTopText.bind(this);
    this.handleBottomText = this.handleBottomText.bind(this);

  }

  submitMeme(e){
    e.preventDefault();
    console.log('this.props',this.props);
  }

  handleTopText(e){
    this.setState({
      text0:e.target.value
    })
  }

  handleBottomText(e){
    this.setState({
      text1:e.target.value
    })
  }

  render(){
    // console.log(this.props.memes)
    return(
      <div className='outerContainer'>
        <h2><u>Welcome to the Meme Generator</u></h2>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
      <div className='card'>
        <form onSubmit={this.submitMeme}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Top Text</label>
            <input
              type="text"
              className="form-control"
              ref='top'
              placeholder="Top Text"
              onChange={(e) => this.handleTopText(e)}
             />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Bottom Text</label>
          <input
            type="text"
            className="form-control"
            ref='bottom'
            placeholder="Bottom Text"
            onChange={(e) => this.handleBottomText(e)}
          />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {
        this.props.memes.slice(0,this.state.memeLimit).map((meme,index) => {
          return(
            <MemeItem
              key={meme.id}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          )
        })
      }
      <div className='memeButton' onClick={this.loadMore}>Load 10 More</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(App);
