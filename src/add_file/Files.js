import React from 'react';
import {useState} from 'react';
import File from '../images/file_img.png';
function Files(){
    const [files , setfiles] = useState(
        [
    {id:1,
        fileName:"Resume.pdf",
    },

     {id:2,
        fileName:"Aadharcard.pdf",
  
    },
     {id:3,
         fileName:"Photograph.pdf",
    },
    {id:4,
 fileName:"LastDegree.pdf",
    },

    {
id:5,
 fileName:"LastDegree.pdf",
    },
]
    )
    return(
        <div className="main">
            <h2>My Documents</h2>
            <div className="add-document">
                <input type="file" id="file"/>
                <label className="file-label" for="file">Add Document</label>
            </div>
                  
                  {files.map((file) =>(
                    
                  
                           
                <div className="files-upload">
                         <div className="line"></div>
                       <img className="file" src={File} alt=""/>
                       <span key={file.id} className="file-name" >{file.fileName}</span>
                       <span className="edit-option">
                        <a href="">Edit</a>
                        <span>|</span>
                        <a href="">Download</a>
                    </span>
                    </div>
                   
                       
                  ))}

                
                  
                
         
          
           <input type="checkbox" name="" id="policy"/>
            <label class="policy-label" for="policy">I hereby declare that all the information given by me in this
                application is true
                and correct to the best of my knowledge and belief.</label>
     
           </div>     
               
    )
}

export default Files