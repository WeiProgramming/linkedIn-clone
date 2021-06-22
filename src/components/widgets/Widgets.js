import React from 'react'
import InfoIcon from "@material-ui/icons/Info"
import './Widgets.css'
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Wei Programmer is back", "Top news - 5655")}
            {newsArticle("Corona Virus strikes", "Top news - 4322")}
            {newsArticle("Jobs aren't meant for ypu", "Top news - 2139")}
        </div>
    )
}

export default Widgets
