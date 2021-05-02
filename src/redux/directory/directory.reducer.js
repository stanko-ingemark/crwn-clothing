import SECTIONS_DATA from "../../sections.data";

const INIT_STATE = {
  sections: SECTIONS_DATA
}

const directoryReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer;
