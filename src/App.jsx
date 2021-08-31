import React from "react"
import FeedbackOptions from './components/FeedbackOptions'
// import Section from "./components/Section"
import Statistics from "./components/Statistics"


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
        if(this.state.bad === 0 && this.state.good === 0 && this.state.neutral === 0) {
          return (
            <>
            <FeedbackOptions
                    onGoodClick = {this.goodFeedback}
                    onNeutralClick = {this.neutralFeedback}
                    onBadClick = {this.badFeedback}
                />
            <span>notification</span>
            </>
          )
        } else {
        return (
            <>
                <FeedbackOptions
                    onGoodClick = {this.goodFeedback}
                    onNeutralClick = {this.neutralFeedback}
                    onBadClick = {this.badFeedback}
                />
                <Statistics
                    good={this.state.good} 
                    neutral={this.state.neutral} 
                    bad={this.state.bad} 
                    total={total} 
                    positivePercentage={percent}
                />
            </>
        )}
    }
}

export default App