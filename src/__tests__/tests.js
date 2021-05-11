import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import App from "../App";
import ViewSmoothies from "../components/ViewSmoothies";
import SmoothieForm from "../components/SmoothieForm";

Enzyme.configure({ adapter: new Adapter() });

//testing for App component
describe("Test <App />", () => {
  const wrapper = shallow(<App />);

  //testing for ViewSmoothies component
  it("Should render ViewSmoothies", () => {
    expect(wrapper.contains(<ViewSmoothies />)).toBeDefined();
  });

  // testing for SmoothieForm component
  it("Should render SmoothieForm", () => {
    expect(wrapper.contains(<SmoothieForm />)).toBeDefined();
  });
});

//'npm test' to run
