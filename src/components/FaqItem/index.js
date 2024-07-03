// Write your code here.
import './index.css'

const FaqItem = props => {
  const {each, clickBtn} = props
  //   console.log(each)
  const {answerText, questionText, id} = each

  const onClickBtn = () => {
    clickBtn(id)
  }
  const vis = (
    <div className="vis-con">
      <hr className="hr-line" />
      <p className="answer">{answerText}</p>
    </div>
  )
  return (
    <li className="li-con">
      <div className="heading-con">
        <h1 className="heading">{questionText}</h1>
        <button onClick={onClickBtn} type="button" className="img-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
            className="img"
          />
        </button>
      </div>
      {vis}
    </li>
  )
}

export default FaqItem
