// Write your code here.
import './index.css'

const FaqItem = props => {
  const {each, clickBtn} = props
  //   console.log(each)
  const {answerText, isClicked, questionText, id} = each

  const onClickBtn = () => {
    clickBtn(id)
  }
  const vis = (
    <div className="vis-con">
      <hr className="hr-line" />
      <p className="answer">{answerText}</p>
    </div>
  )
  const res = isClicked && vis
  const res1 = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const res2 = isClicked ? 'minus' : 'plus'
  return (
    <li className="li-con">
      <div className="heading-con">
        <h1 className="heading">{questionText}</h1>
        <button onClick={onClickBtn} type="button" className="img-btn">
          <img src={res1} alt={res2} className="img" />
        </button>
      </div>
      {res}
    </li>
  )
}

export default FaqItem
