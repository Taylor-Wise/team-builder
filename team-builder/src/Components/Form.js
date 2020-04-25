import React from "react";

const Form = (props) => {

    return(
        <div>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input 
                id="firstName"
                type="text" 
                placeholder="First name" />

                
            </form>
        </div>
    );
};

export default Form;