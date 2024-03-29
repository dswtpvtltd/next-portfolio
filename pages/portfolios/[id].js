import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../apollo/queries";
import withApollo from "@/hoc/withApollo";

const PortfolioDetail = ({ id }) => {
  const { data } = useQuery(GET_PORTFOLIO, {
    variables: {
      id,
    },
  });

  const portfolio = (data && data.portfolio) || {};

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">{portfolio.title}</h1>
        <p className="lead">{portfolio.jobTitle}</p>
        <p>
          <a className="btn btn-lg btn-success" href="#" role={"button"}>
            See Company
          </a>
        </p>
      </div>
      <div className="row marketing">
        <div className="col-lg-6">
          <h4 className="title">location</h4>
          <p className="text">some location</p>
          <h4 className="title">Start Date</h4>
          <p className="text">{portfolio.startDate}</p>
        </div>
        <div className="col-lg-6">
          {/* TODO: later */}
          <h4 className="title">Days</h4>
          <p className="text">44</p>

          <h4 className="title">End Date</h4>
          <p className="text">{portfolio.endDate}</p>
        </div>
        <div className="col-md-12">
          <hr />
          <h4 className="title">Description</h4>
          <p className="text">{portfolio.description}</p>
        </div>
      </div>
    </div>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default withApollo({ ssr: true })(PortfolioDetail);
