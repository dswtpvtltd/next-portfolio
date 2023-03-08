import React from "react";

import Link from "next/link";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import withApollo from "@/hoc/withApollo";
import {
  useGetPortfolio,
  useUpdatePortfolio,
  useDeletePortfolio,
  useCreatePortfolio,
} from "@/apollo/actions";
const Portfolios = () => {
  const { data } = useGetPortfolio();

  const [updatedPortfolio] = useUpdatePortfolio();
  const [deletePortfolio] = useDeletePortfolio();
  const [createPortfolio] = useCreatePortfolio();

  const portfolios = (data && data.portfolios) || [];

  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button onClick={createPortfolio} className="btn btn-primary">
          Create Portfolio
        </button>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map((portfolio) => {
            return (
              <div className="col-md-4" key={portfolio._id}>
                <Link
                  href={`/portfolios/[id]`}
                  as={`/portfolios/${portfolio._id}`}
                  legacyBehavior
                >
                  <a>
                    <PortfolioCard portfolio={portfolio} />
                  </a>
                </Link>
                <button
                  className="btn btn-warning pe-2 ps-2 me-2"
                  onClick={() =>
                    updatedPortfolio({
                      variables: {
                        portfolioId: portfolio._id,
                      },
                    })
                  }
                >
                  Update Portfolio
                </button>
                <button
                  className="btn btn-danger pe-2 ps-2"
                  onClick={() =>
                    deletePortfolio({
                      variables: {
                        portfolioId: portfolio._id,
                      },
                    })
                  }
                >
                  Delete Portfolio
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">
        See More Portfolios
      </a>
    </>
  );
};

export default withApollo({ ssr: true })(Portfolios);
