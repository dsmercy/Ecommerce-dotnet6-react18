import React, { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"

export default function AddDropzone({ register, setValue, trigger, errors }) {

  const [myFiles, setMyFiles] = useState([]);

  useEffect(() => {
    register('files');
  }, [register])

  useEffect(() => {
    setValue('files', myFiles);
    trigger('files');
  }, [myFiles])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])    
    console.log('myFiles', myFiles);
  }, [myFiles, setValue, trigger])

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


  const files = myFiles.map((file,index) => (
    <li key={index} style={{ padding: '1px' }}>
      {file.path} - {file.size} bytes{" "}
      <button onClick={removeFile(file)} className="removebtn">X</button>
    </li>
  ))

  return (
      <div className="col-md-6">
        <label htmlFor="txtquantity" className="form-label">Upload Images</label>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} {...register("files")}
              onChange={(event, files) => {
                // const data = editor.getData();
                console.log({ event, files });

              }} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside className="mt-3">
            <ul>{files}</ul>
          </aside>
          {files.length > 0 && <button className="removebtn" onClick={removeAll}>Remove All</button>}
        </section>
        {errors.files && <span className='error-text' style={{ display: 'block' }}>This field is required</span>}
      </div>

  )
}
