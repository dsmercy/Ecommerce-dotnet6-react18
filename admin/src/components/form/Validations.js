import React from 'react'

export default function Validations() {
    return (
        <>
            <div className="main-card mb-3 card">
                <div className="card-body">
                    <h5 className="card-title">Tooltips Validation</h5>
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationTooltip01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" defaultValue="Mark" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationTooltip02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" defaultValue="Otto" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationTooltipUsername" className="form-label">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <span className="" id="validationTooltipUsernamePrepend">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
                                    <div className="invalid-tooltip">
                                        Please choose a unique and valid username.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationTooltip03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationTooltip04" className="form-label">State</label>
                                <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationTooltip05" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        </>
    )
}
