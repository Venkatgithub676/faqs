// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {btnStatus: [{btn: false}, {btn: false}, {btn: false}, {btn: false}]}

  clickBtn = id => {
    const {btnStatus} = this.state
    const filteredBtn = btnStatus.filter()
    this.setState(prevState => ({
      btnStatus: !prevState.btnStatus.map(each =>
        prevState.btnStatus.indexOf(each) === id
          ? {btn: !each.btn}
          : {btn: each.btn},
      ),
    }))
  }

  render() {
    const {faqsList} = this.props
    const {btnStatus} = this.state
    console.log(btnStatus)
    // console.log(faqsList)
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
