import { connect } from "react-redux";
import { deleteBusiness } from "../redux/actions";
import Listing from "../components/Listing";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBusiness: (index) => dispatch(deleteBusiness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);