import './index.css'

const HistoryItem = props => {
  const {historyItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem
  const {deleteHistory} = props

  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history">
      <p className="time">{timeAccessed}</p>
      <div className="website-container">
        <img src={logoUrl} className="domain-logo" alt="domain logo" />
        <p className="domain-name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
