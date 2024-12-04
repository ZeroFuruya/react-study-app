import capitalize from "lodash/capitalize";
import PropTypes, { array, string } from "prop-types";

const List = (props) => {
  const category = props.category;
  const itemList = props.items;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //   itemList.sort((a, b) => b.name.localeCompare(a.name)); // Reversed Alphabetical

  const listItems = itemList.map((item) => (
    <li key={item.id} className="items">
      <b>{capitalize(item.name)}</b>: &nbsp; {item.calories}
    </li>
  ));
  return (
    <>
      <div className="card">
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
      </div>
    </>
  );
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
