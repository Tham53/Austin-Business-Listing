import { connect } from "react-redux";
import { addBusiness } from "../redux/actions";
import AddListing from "../components/AddListing";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);