import React from 'react'
import {Link} from "react-router-dom";

const PlanItem = ({plan}) => (
    <div className="card">
        <div className="card-title">
            {plan.name}
        </div>
        <div className="card-body">
            <div className="card-price">
                ${plan.price}
                <span>per month</span>
            </div>
            <div className={`card-prop ${plan.unlimSupport ? 'checked' : 'unchecked'}`}>
               Unlimited Support
            </div>
            <div className="card-prop checked">
                {plan.space} Server space
            </div>
            <div className="card-prop checked">
                {plan.usersPerProject} Users per Project
            </div>
            <div className={`card-prop ${plan.emailIntegration ? 'checked' : 'unchecked'}`}>
                Email Integration
            </div>
            <div className={`card-prop ${plan.unlimDownload ? 'checked' : 'unchecked'}`}>
                Unlimited Download
            </div>

            <Link to="#" className="card-action">
                Choose plan
            </Link>
        </div>
    </div>
)

export default PlanItem