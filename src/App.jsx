import React from "react"
import FeedbackOptions from './components/FeedbackOptions'
// import Section from "./components/Section"
import Statistics from "./components/Statistics"
import Notification from "./components/Notification"


class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

      goodFeedback = () => {
          this.setState((prevState) => {
              return {
                  good: prevState.good + 1
              }
          })
      }

      neutralFeedback = () => {
          this.setState((prevState) => {
              return {
                neutral: prevState.neutral + 1
              }
          })
      }

      badFeedback = () => {
          this.setState((prevState) => {
              return {
                bad: prevState.bad + 1
              }
          })
      }

      countTotalFeedback() {
         return (this.state.neutral + this.state.good + this.state.bad)
      }

      countPositiveFeedbackPercentage () {
          return (((this.state.good / (this.state.neutral + this.state.bad + this.state.good)) * 100).toFixed(2))
      }

    render() {
        const total = this.countTotalFeedback()
        const percent = this.countPositiveFeedbackPercentage()
        
        return (
            <>
                <FeedbackOptions
                    onGoodClick = {this.goodFeedback}
                    onNeutralClick = {this.neutralFeedback}
                    onBadClick = {this.badFeedback}
                />
                {(this.state.bad || this.state.good || this.state.neutral) ? <Statistics
                    good={this.state.good} 
                    neutral={this.state.neutral} 
                    bad={this.state.bad} 
                    total={total} 
                    positivePercentage={percent}
                /> : 
                <Notification message = "No feedback given"/>}
            </>
        )
    }
}

export default App