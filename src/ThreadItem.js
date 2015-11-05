const React = require('react');



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

module.exports = ThreadItem;
