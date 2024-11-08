import React from 'react'

import './About.css'

export default function About() {
    return (
        
                       
        
        <div className="about-container">

            

            
            <h1 className="about-heading">About</h1>
            <div className="about-main">
            <p className="about-content">
    Yoga has been a way of life for centuries. With TotalWell, we have developed an AI Yoga Trainer webpage where learners can select the yoga poses they want to practice. Our unique pose detection and correction software then helps them navigate their learning experience, ensuring they perform each pose correctly.
    This is an open-source project developed by a group of third-year students.
</p>
<p className="about-content">
    The AI first predicts keypoints or coordinates of different parts of the body (essentially identifying their position in an image). Using these keypoints, another classification model determines if the learner is performing a specific yoga pose. If the AI detects the pose with more than 95% accuracy, it notifies the learner that they are performing it correctly by displaying a virtual skeleton in green.
    We use the TensorFlow pre-trained MoveNet Model to predict the keypoints and built a neural network on top of that. This network takes the coordinates and classifies the yoga pose.
    The model was initially trained in Python, but leveraging the power of TensorFlow.js for browser compatibility, we converted the Keras/TensorFlow model into TensorFlow.js.
</p>

                
            </div>
        </div>
    )
}
