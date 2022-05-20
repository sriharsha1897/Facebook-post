import React from "react";
import classes from "./header.module.css";
import { searchActions } from "../store/slices/SearchSlice";
import { createPostActions } from "../store/slices/CreatePost";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const inputvalue = useSelector((state) => state.search.searchinput);
  const createPostHandler = (e) => {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
    dispatch(createPostActions.setcreatepost(true));
  };
  const searchInputHandler = (e) => {
    dispatch(searchActions.setsearchinput(e.target.value));
  };
  return (
    <div className={classes.header}>
      <img
        src="https://img.icons8.com/color/2x/facebook-new.png"
        alt="logo"
      />
      <div className={classes.searchandcreate}>
        {" "}
        <input
          onChange={searchInputHandler}
          type="text"
          name="search"
          id=""
          value={inputvalue}
          placeholder="Search Users"
        />
        <button onClick={createPostHandler} id="createpost">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default Header;
