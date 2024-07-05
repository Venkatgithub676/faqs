// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = props
    const res = faqsList.map(each => ({...each, isClicked: false}))
    this.state = {faqsList: res}
  }

  clickBtn = id => {
    const {faqsList} = this.state
    const filteredFaq = faqsList.map(each => {
      if (each.id === id) {
        return {...each, isClicked: !each.isClicked}
      }
      return each
    })
    // console.log(filteredFaq)

    this.setState({faqsList: filteredFaq})
  }

  render() {
    const {faqsList} = this.state
    // console.log(btnStatus)

    // console.log(faqsLists)
    return (
      <div className="bg-con">
        <div className="main-con">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="ul-con">
            {faqsList.map(each => (
              <FaqItem each={each} key={each.id} clickBtn={this.clickBtn} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
