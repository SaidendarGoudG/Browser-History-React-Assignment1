import './index.css'

const BrowserHistoryItems = props => {
  const {browserHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserHistory

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <div className="item-container">
        <div className="time-item-container">
          <p className="time">{timeAccessed}</p>
          <div className="domain-container">
            <img className="logo" src={logoUrl} alt="domain logo" />
            <div className="title-container">
              <h1 className="title">{title}</h1>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
        </div>
        <div className="delete-icon-container">
          <button className="delete-button" type="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
              data-testid="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistoryItems
