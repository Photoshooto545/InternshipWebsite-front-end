import React from 'react';
import Files from './Files';


function File(){
    return(
        <div>
        {Files.map((file)=> (
                
                    <Files 
                        
                key = {file.id} file = {file}/>
                
            ))}
            </div>
    )
}
export default File