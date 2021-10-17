import React, { useState } from 'react'
import './SideMenu.css';

function SideMenu(props) {
    const colors = ["#EF5350", "#AB47BC", "#5C6BC0", "#29B6F6", "#66BB6A"];
    const [active, setActive] = useState(false);

    return (
        <div className="sidebar">
            <button onClick={() => setActive
                (!active)}>+</button>

            <ul className={`sidebar_list ${active ? "sidebar_list_active":""}`}>
                {colors.map((item, index) =>
                    <li onClick={() => props.addNote(item)} key={index} className="sidebar_list_item" style={{ backgroundColor: item }}></li>
                )}
            </ul>
        </div>
    )
}

export default SideMenu
