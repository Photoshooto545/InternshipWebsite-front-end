import React from 'react';

function Heading(){
    return(
    <div>

         <h1>Documnets</h1>
        <div className="main">
            <h2>My Documents</h2>
            <div className="add-document">
                <input type="file" id="file"/>
                <label className="file-label" for="file" name="Add Document" />
            </div>
    </div>
    </div>
    )
}
export default Heading