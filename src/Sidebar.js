import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hach">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who view you</p>
          <p className="sidebar_statNumber">2.543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2.488</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default SideBar;