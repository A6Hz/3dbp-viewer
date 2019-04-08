import React, { Component } from "react";
import threeEntryPoint from "../threejs/threeEntryPoint";
import Container from "./container";
import Item from "./item";
import data from "../data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null,
      item: null
    };

    this.createMenu = this.createMenu.bind(this);
    this.createItems = this.createItems.bind(this);
  }

  createItems(items, id) {
    let itemsTemp = [];
    items.forEach((value, key) => {
      let active = key === id ? true : false;
      itemsTemp.push(
        <Item
          name={value.name}
          type={0}
          key={key}
          active={active}
          onClick={() => this.createItems(items, key)}
        />
      );
    });

    this.setState(state => ({ ...state, item: itemsTemp }));
  }

  createMenu(id) {
    let containerTemp = [];
    data.forEach((value, key) => {
      let active = false;
      if (key === id) {
        active = true;
        this.createItems(value.items, 0);
      }
      containerTemp.push(
        <Container
          name={value.name}
          type={0}
          key={key}
          active={active}
          onClick={() => this.createMenu(key)}
        />
      );
    });

    this.setState(state => ({ ...state, container: containerTemp }));
  }

  componentDidMount() {
    threeEntryPoint(this.threeRootElement, data);
    this.createMenu(0);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">{this.state.container}</div>
          <div className="col-md-2">{this.state.item}</div>
          <div className="col-md-8">
            <div
              ref={element => (this.threeRootElement = element)}
              style={{ height: "100%", background: "gray" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
