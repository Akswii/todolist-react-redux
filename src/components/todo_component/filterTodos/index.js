import React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../../../redux/actions";

const FilterTodos = ({ setVisibilityFilter }) => {
    const handleClick = e => {
        setVisibilityFilter(e.target.value);
    }

    return (
        <select onClick={handleClick}>
            <option value="SHOW_ALL">Show all</option>
            <option value="SHOW_COMPLETE">Complete</option>
            <option value="SHOW_INCOMPLETE">Incomplete</option>
            <option value="SHOW_DELETED">Deleted</option>
        </select>
    );
};

export default connect(null, { setVisibilityFilter })(FilterTodos);
