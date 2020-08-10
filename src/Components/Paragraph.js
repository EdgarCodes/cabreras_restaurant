import React from 'react'

export default function Paragraph(props) {
    return (
        <div className = "Paragraph">
            <div className = "Paragraph-container">
                <div className = "Paragraph-title">
                    <h1>Come, Give Us a Visit!</h1>
                    <div className = "Paragraph-Underline"/>
                </div>
                <p>{props.children}</p>
            </div>
        </div>
    )
}
