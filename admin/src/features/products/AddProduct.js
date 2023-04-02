import React, { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-dropzone-uploader/dist/styles.css'

export default function AddProduct() {

  const { register, trigger, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
  const [myFiles, setMyFiles] = useState([]);

  useEffect(() => {
    register('description', { required: true });
    console.log('description', getValues("description"));
  }, [getValues("description")])

  const onSubmit = data => console.log(data);

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
    <li key={file.path} style={{ padding: '1px' }}>
      {file.path} - {file.size} bytes{" "}
      <button onClick={removeFile(file)} className="removebtn">X</button>
    </li>
  ))

  return (
    <>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon"><i className="pe-7s-display1 icon-gradient bg-premium-dark" /></div>
              <div>
                Form Controls
                <div className="page-title-subheading">Wide selection of forms controls, using the Bootstrap 5 code base, but built with React.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="RRT__container">
          <div className="RRT__panel" role="tabpanel" id="panel-0" aria-labelledby="tab-0" aria-hidden="false">
            <div>
              <div component="div" className="TabsAnimation appear-done enter-done">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-card mb-3 card">
                      <div className="card-body">
                        <div className="card-title">Add Product</div>
                        <form className onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-3">
                            <label htmlFor="txtproduct" className="form-label">Product Name</label>
                            <input id="txtproduct" placeholder="Product Name" type="text" className="form-control" {...register("ProductName", { required: true, maxLength: 80 })} />
                            {errors.ProductName && <span className='error-text'>This field is required</span>}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="txtcategory" className="form-label">Category Name</label>
                                <input id="txtcategory" placeholder="Product Name" type="text" className="form-control" {...register("Productcategory", { required: true, maxLength: 80 })} />
                                {errors.Productcategory && <span className='error-text'>This field is required</span>}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="txtproSubCategory" className="form-label">Sub Category Name</label>
                                <input id="txtproSubCategory" placeholder="Product Name" type="text" className="form-control" {...register("ProductSubCategory", { required: true, maxLength: 80 })} />
                                {errors.ProductSubCategory && <span className='error-text'>This field is required</span>}
                              </div>
                            </div>

                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="txtPrice" className="form-label">Price</label>
                                <input id="txtPrice" placeholder="Enter Price" type="text" className="form-control" {...register("ProductPrice", { required: true, maxLength: 6 })} />
                                {errors.ProductPrice && <span className='error-text'>This field is required</span>}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="txtPrice" className="form-label">Offer Price</label>
                                <input id="txtOfferPrice" placeholder="Enter Offer Price" type="text" className="form-control" {...register("ProductOfferPrice", { required: true, maxLength: 6 })} />
                                {errors.ProductOfferPrice && <span className='error-text'>This field is required</span>}
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="txtquantity" className="form-label">Quantity</label>
                                <input id="txtquantity" placeholder="Product Quantity" type="text" className="form-control" {...register("ProductQuantity", { required: true, maxLength: 80 })} />
                                {errors.ProductQuantity && <span className='error-text'>This field is required</span>}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="txtquantity" className="form-label">Upload Images</label>
                              <section className="container">
                                <div {...getRootProps({ className: "dropzone" })}>
                                  <input {...getInputProps()} />
                                  <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                                <aside className="mt-3">
                                  <ul>{files}</ul>
                                </aside>
                                {files.length > 0 && <button className="removebtn" onClick={removeAll}>Remove All</button>}
                              </section>
                            </div>                            
                          </div>
                          <div className='row mb-3'>
                            <div className="col-md-6">
                            <label htmlFor="txtquantity" className="form-label">Description</label>
                              <CKEditor
                                editor={ClassicEditor}
                                data="<p>Description !</p>"
                                onReady={editor => {
                                  // You can store the "editor" and use when it is needed.
                                  // console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                  // const data = editor.getData();
                                  // console.log({ event, editor, data });
                                  setValue('description', editor.getData());
                                  trigger('description');
                                }}
                                onBlur={(event, editor) => {
                                  console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                  console.log('Focus.', editor);
                                }}
                              />
                              {errors.description && <span className='error-text' style={{ display: 'block' }}>This field is required</span>}
                            </div>
                          </div>
                          <div className='row mb-3'>
                          <div className="col-md-6">
                              <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" {...register("Active", { required: true })} />
                                <label className="form-check-label">In Stock</label>
                                {errors.Active && <span className='error-text' style={{ display: 'block' }}>This field is required</span>}
                              </div>
                            </div>
                            </div>
                          <button className="mt-1 btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
