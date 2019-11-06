import React from "react";

class MyClass {
    constructor() {
        this._prefix = "MyClass:";
    }

    Print = text => {
        console.log(`${this._prefix} ${text}`);

        return (
            <p>
                {this._prefix} {text}
            </p>
        );
    };
}

export default MyClass;
