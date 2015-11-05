const React = require('react');
const MessageList = require('./MessageList.js');
const ThreadList = require('./ThreadList.js');


////////////////////////////////////////////////
class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPersonIndex: 1,
      newMsg: '',
      threads: [
	{fIdx:0, fName:'test1', msg: [{txt:"Hello1!", from:"notMe"} , {txt:"Hello test1", from: "me"}] },
	{fIdx:1, fName:'test2', msg: [{txt:"Hello2!", from:"notMe"} , {txt:"Hello test2", from: "me"}] },
	{fIdx:2, fName:'test3', msg: [{txt:"Hello3!", from:"notMe"} , {txt:"Hello test3", from: "me"}] }
	]
    };
  }

  handleThreadChange(event,idx){
    this.setState({currentPersonIndex: idx});
  }

  handleNewMessageChange(event){
    this.setState({newMsg: event.target.value});
  }

  handleKeyDown(event){
    const inputValue=event.target.value;
    if(event.keyCode == 13 && inputValue !== ''){
      const { threads, newMsg } = this.state;
      this.setState({
        newMsg: ''
      });
      threads[this.state.currentPersonIndex].msg=threads[this.state.currentPersonIndex].msg.concat({txt:newMsg , from:"me"});
      //console.log(threads[this.state.currentPersonIndex].msg);
    }
  }
  

  handleThreadChange(event, i){
    this.setState({currentPersonIndex: i});
    //???
  }

  render() {
    return (
      // html -> jsx
      <div className="chat-app clearfix">
		<div className="chat-app_left">
			<div className="heading">
				<h3 className="messenger-title">Messager</h3>
			</div>
                        <div>
			<ThreadList states={this.state} onClick={this.handleThreadChange.bind(this)}/>
                        </div>
		</div>
		<div className="chat-app_right">
			<MessageList states={this.state} />

		        <div className="footer">
			  <input 
 			    className="new-message" 
                            placeholder="What needs to be done?"
			    autofocus 
                            value={this.state.newMsg}
			    onChange={this.handleNewMessageChange.bind(this)} 
			    onKeyDown={this.handleKeyDown.bind(this)}
			  />
  		        </div>
		</div>
	</div>
    );
  }
}
/////////////////////////////////////////////

module.exports = ChatApp;
