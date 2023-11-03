import React, { useState } from 'react';
import './studentForm.css';

function StudentForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
            <h1>Nazi Registration Form</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{name}</p>
            </form>
        </div>
    )
}
export default StudentForm