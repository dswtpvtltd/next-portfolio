import { useQuery, useMutation } from "@apollo/client";
import { GET_PORTFOLIOS } from "@/apollo/queries";
import {
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  USER_SIGNUP,
} from "@/apollo/mutations";

export const useGetPortfolio = () => useQuery(GET_PORTFOLIOS);

export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO);

export const useDeletePortfolio = () =>
  useMutation(DELETE_PORTFOLIO, {
    update: (cache, { data: { deletePortfolio } }) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      const newPortfolio = portfolios.filter(
        (portfolio) => portfolio._id !== deletePortfolio
      );
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolio },
      });
    },
  });

//create new portfolios
export const useCreatePortfolio = () =>
  useMutation(CREATE_PORTFOLIO, {
    update: (cache, { data: { createPortfolio } }) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    },
  });

//create new portfolios
export const useSignUp = () => useMutation(USER_SIGNUP);
