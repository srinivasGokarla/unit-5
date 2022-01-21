
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDetailsError,
  getDetailsLoading,
  getDetailsSuccess,
} from "../store/actions";

export const Details = () => {
  const { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    getDetails();
  }, []);

  const { loadingDetails, details, error } = useSelector((state) => ({
    loadingDetails: state.loadingDetails,
    details: state.details,
    error: state.error,
  }));

  const getDetails = async () => {
    try {
      dispatch(getDetailsLoading());
      let res = await fetch(`http://localhost:3001/Todos/${id}`);
      let data = await res.json();

      dispatch(getDetailsSuccess(data));
    } catch (err) {
      dispatch(getDetailsError(err));
    }
  };

  return loadingDetails ? (
    <div>Loding Data...</div>
  ) : error ? (
    <div>SomeThing Went Wrong</div>
  ) : (
    <>
      <h1>Todo Detail Page</h1>
      <div id="details_cont">
        <h3>Title : {details.title}</h3>
        <p>
          {" "}
          <b>Description</b> : {details.description}
        </p>
      </div>
    </>
  );
};