import React from "react";
import PingPongContainer from "../containers/PingPongContainer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("PingPongContainer", () => {
  let container;

  beforeEach(() => {
    container = mount(<PingPongContainer />)
  });

  // it('should be able to retrieve the user name' , () => {
  //   const welcomeMessage = container.find('header > p');
  //   expect(welcomeMessage.text()).toEqual("Welcome Máté");
  // });

  // it('should be able to add item to basket', () => {
  //     const welcomeMessage = container.find('header > p');
  //     expect(welcomeMessage.text()).toEqual("Welcome Máté");
  //   });

});


// const runningTotal = container.find('#running-total');
//     expect(runningTotal.text()).toEqual('5');