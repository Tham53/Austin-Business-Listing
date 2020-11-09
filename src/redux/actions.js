//add
export const addBusiness = (business) => {
    return {
      type: "ADD_BUSINESS",
      value: business,
    };
  };
  
  //delete
  export const deleteBusiness = (index) => {
    return {
      type: "DELETE_BUSINESS",
      value: index,
    };
  };
  
  //login
  export const userLogin = (user) => {
    return {
      type: "USER_LOGIN",
      value: user,
    };
  };