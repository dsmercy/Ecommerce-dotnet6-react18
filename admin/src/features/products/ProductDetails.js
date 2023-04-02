import React, { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"



export default function ProductDetails() {
   const [myFiles, setMyFiles] = useState([])

   const onDrop = useCallback(acceptedFiles => {
     setMyFiles([...myFiles, ...acceptedFiles])
   }, [myFiles])
 
   const { getRootProps, getInputProps } = useDropzone({
     onDrop,
   })
 
   const removeFile = file => () => {
     const newFiles = [...myFiles]
     newFiles.splice(newFiles.indexOf(file), 1)
     setMyFiles(newFiles)
   }
 
   const removeAll = () => {
     setMyFiles([])
   }

   useEffect(() => {
     console.log(myFiles);
   }, [myFiles])
   
 
   const files = myFiles.map(file => (
     <li key={file.path}>
       {file.path} - {file.size} bytes{" "}
       <button onClick={removeFile(file)}>Remove File</button>
     </li>
   ))

   return (
      <>
   <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {files.length > 0 && <button onClick={removeAll}>Remove All</button>}
    </section>
      </>
   )
}
