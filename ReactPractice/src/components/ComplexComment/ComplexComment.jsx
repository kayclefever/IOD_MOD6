function ComplexComment(props) {
  // complex component which displays different elements of a comment

  return (
    <div className="Comment componentBox">
      <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>
      <div className="Comment-date">
        {" "}
        {/* the comment date is another aspect */}
        {props.date.toLocaleString()}
      </div>
    </div>
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx

export default ComplexComment;

// <ComplexComment author={comment.author} date={comment.date} text={comment.text} /> add to App.jsx this is the code Carlos was typing out in class

//const comment = {
//date: new Date(),
//text: "I hope you enjoy learning React!",
//author: {
//name: 'Hello Kitty',
//avatarUrl: 'https://placekitten.com/g/64/64',
//} add this code as well
// object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
