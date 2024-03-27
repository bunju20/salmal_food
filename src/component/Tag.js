import React, { useState } from "react";
import "../App.css";

function Tag({ children, onClick, isActive }) {
    return (
        <div
            className={`input-box ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Tag;
