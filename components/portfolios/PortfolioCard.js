const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="card subtle-shadow no-border">
      <div className="card-body">
        <h5 className="card-title">{portfolio.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{portfolio.jobTitle}</h6>
        <p className="card-text">{portfolio.description}</p>
      </div>
      <div className="card-footer no-border">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};
export default PortfolioCard;
