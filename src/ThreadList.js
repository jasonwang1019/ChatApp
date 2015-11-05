const React = require('react');
const ThreadItem = require('./ThreadItem.js');

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

module.exports = ThreadList;
