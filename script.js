// ChatApp: 原本的 HTML
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
    //console.log(i);
    
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

class ThreadList extends React.Component {
  renderThreadItem(item, i) {
    return (
      <div 
          onClick={() => this.props.onClick(this,item.fIdx)}>
        <ThreadItem
          fIndex={item.fIdx}//friend idx
          fName={item.fName}//friend name
  	  lastMsg={item.msg[ item.msg.length-1 ].txt} 
        />
      </div>
    );
  }

  render() {
    return (
      // html -> jsx
	<ul className="threadlist">{this.props.states.threads.map(this.renderThreadItem, this)}</ul>
    );
  }
}

class ThreadItem extends React.Component {
  render() {
    return (
      // html -> jsx
       <li className="thread-item">
		
			<div className="clearfix">
				<div className="thread-item_left">
				</div>
				<div className="thread-item_right">
					<div className="thread-from">
						{this.props.fName}
					</div>
					<div>
						<span className="thread-content">{this.props.lastMsg}</span>
					</div>
					<span className="thread-time"></span>
				</div>
			</div>
		
	</li>
    );
  }
}

class MessageList extends React.Component {
  renderMessageItem(item, i) {
    return (
      <MessageItem
        msgItem={item.txt}
        from={item.from}
      />
    );
  }


  render() {
    return (
      // html -> jsx
	<div>	
	
			<div className="heading">
				<div className="current-target">{this.props.states.threads[this.props.states.currentPersonIndex].fName}</div>
			</div>
			<ul className="messagelist">{this.props.states.threads[this.props.states.currentPersonIndex].msg.map(this.renderMessageItem, this)}</ul>
	
	</div>
    );
  }
}

class MessageItem extends React.Component {
  render() {
   if(this.props.from=="me"){
    return (
      // html -> jsx
       <li>
         <div class="message-item message-from-me">
           <span>{this.props.msgItem}</span>
         </div>
       </li>
    );
   }
   else{
    return (
      // html -> jsx
       <li>
         <div class="message-item message-from-other">
           <span>{this.props.msgItem}</span>
         </div>
       </li>
    );
   }
  }
}

ReactDOM.render(<ChatApp />, document.getElementById('root'));
