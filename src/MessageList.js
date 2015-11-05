const React = require('react');
const MessageItem = require('./MessageItem.js');




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

module.exports = MessageList;

