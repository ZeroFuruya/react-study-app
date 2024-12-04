import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className="student">
        <p className="student-detail">Name: {props.name}</p>
        <p className="student-detail">Age: {props.age}</p>
        <p className="student-detail">Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guess",
    age: 0,
    isStudent: false,
}

export default Student