const React = require('react');


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

module.exports = MessageItem;
