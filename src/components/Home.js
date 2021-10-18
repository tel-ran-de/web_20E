import React from 'react'
import {useSelector} from "react-redux";
import PlanItem from "./PlanItem";

const Home = () => {
    const plans = useSelector(state => state.list)

    const renderPlans = () => {
        if ( !plans.length ) {
            return (<h3>No plans</h3>)
        }
        return plans.map(plan => <PlanItem key={plan.id} plan={plan}/>)
    }

    return (
        <main className="main">
            <div className="plans">
                { renderPlans() }
            </div>
        </main>
    )
}
export default Home