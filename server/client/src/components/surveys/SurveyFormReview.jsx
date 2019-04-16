import React from "react";
import { connect } from "react-redux";
import { FIELDS } from "./formConsts";
const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{}</div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);

  const {
    form: {
      surveyForm: { values }
    }
  } = state;

  console.log(values);
  return { formValues: values };
}
export default connect(mapStateToProps)(SurveyFormReview);