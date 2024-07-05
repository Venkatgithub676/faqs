// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqsLists: []}

  componentDidMount() {
    const {faqsList} = this.props
    const res = faqsList.map(each => ({...each, isClicked: false}))
    this.setState({faqsLists: res})
  }

  clickBtn = id => {
    const {faqsLists} = this.state
    const filteredFaq = faqsLists.map(each => {
      if (each.id === id) {
        return {...each, isClicked: !each.isClicked}
      }
      return each
    })
    // console.log(filteredFaq)

    this.setState({faqsLists: filteredFaq})
  }

  render() {
    const {faqsList} = this.props
    const {faqsLists} = this.state
    // console.log(btnStatus)
    const res = faqsLists.length === 0 ? faqsList : faqsLists
    // console.log(faqsLists)
    return (
      <div className="bg-con">
        <div className="main-con">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="ul-con">
            {res.map(each => (
              <FaqItem each={each} key={each.id} clickBtn={this.clickBtn} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
