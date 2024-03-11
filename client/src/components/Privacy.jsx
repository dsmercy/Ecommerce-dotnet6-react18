import React from 'react'

export default function Privacy() {
  return (
    <>

      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <ul className="r-top">
                <li><a href="#"><i className="icofont-headphone-alt"></i> Helpline : 910-313-1728</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
        <h4 className="mb-4 profile-title">Privacy</h4>
        <div id="terms_conditions">
          <p className="text-muted">Grocery may give refunds for some item purchases, depending on the refund policies. You can also contact us directly.
          </p>
            <p className="text-muted">If a purchase was accidentally made by a friend or family member using your account, request a refund on the grocery website.</p>
            <p className="text-muted"> If you find a grocery purchase on your card or other payment method that you did'nt make and that wasn't made by anyone you know, report unauthorized charges within 120 days of the transaction.</p>
            <p className="text-muted">If you've had a refund request accepted, check how long your refund will take.</p>


        </div>
      </div>

    </>
  )
}
