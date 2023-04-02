import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddCategory() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmitCategory = data => console.log(data);
  const onSubmitSubCategory = data => console.log(data);

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
                  <div className="col-md-6">
                    <div className="main-card mb-3 card">
                      <div className="card-body">
                        <div className="card-title">Add Category</div>
                        <form className onSubmit={handleSubmit(onSubmitCategory)}>
                          <div className="mb-3">
                            <label htmlFor="txtcategory" className="form-label">Category Name</label>
                            <input id="txtcategory" placeholder="Category Name" type="text" className="form-control" {...register("CategoryName", {required: true, maxLength: 80})} />
                            {errors.CategoryName && <span className='error-text'>This field is required</span>}
                          </div>
                          <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" {...register("Active", {required: true})} />
                            <label className="form-check-label">Active</label>
                            {errors.Active && <span className='error-text' style={{display: 'block'}}>This field is required</span>}
                          </div>
                          <button className="mt-1 btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="main-card mb-3 card">
                      <div className="card-body">
                        <div className="card-title">Add Sub Category</div>
                        <form className onSubmit={handleSubmit(onSubmitSubCategory)}>
                        <div className="mb-3">
                            <label htmlFor="txtsubcategory" className="form-label">Sub Category Name</label>
                            <input id="txtsubcategory" placeholder="Category Name" type="text" className="form-control" {...register("SubcategoryName", {required: true, maxLength: 80})} />
                            {errors.SubcategoryName && <span className='error-text'>This field is required</span>}
                          </div>
                           <div className="mb-3">
                            <label htmlFor="selectCategory" className="form-label">Select</label>
                            <select name="select" id="selectCategory" className="form-select" {...register("selectCategory", {required: true})} >
                            <option value="" selected disabled>Select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                            {errors.selectCategory && <span className='error-text'>This field is required</span>}
                          </div>
                          <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" {...register("Active", {required: true})} />
                            <label className="form-check-label">Active</label>
                            {errors.Active && <span className='error-text' style={{display: 'block'}}>This field is required</span>}
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
