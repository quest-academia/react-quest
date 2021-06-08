import React from "react";
import Button from "./Button";
import css from "../styles/layout.module.css";
// import {store} from '../store/createStore';
import { inputLeft } from "../actions/action";

class Calc extends React.Component {
  
  render() {
    return (
      <div>
        <div>
          <input type="text"></input>
        </div>
        <div className={css.yokonarabi}>
          <div>
            <Button buttonParam={1} onClick={ inputLeft }/>
            <Button buttonParam={4} />
            <Button buttonParam={7} />
            <Button buttonParam={"00"} />
          </div>
          <br />
          <div>
            <Button buttonParam={2} />
            <Button buttonParam={5} />
            <Button buttonParam={8} />
            <Button buttonParam={0} />
          </div>
          <br />
          <div>
            <Button buttonParam={3} />
            <Button buttonParam={6} />
            <Button buttonParam={9} />
            <Button buttonParam={"="} />
          </div>
          <br />
          <div>
            <Button buttonParam={"/"} />
            <Button buttonParam={"x"} />
            <Button buttonParam={"-"} />
            <Button buttonParam={"+"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
