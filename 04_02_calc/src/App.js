import "./App.css";
import Button from "./components/button";
import css from './styles/layout.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={css.l_calc}>
          <div>
            <input type="text" />
          </div>
          <div>
            <div>
              <Button buttonParam={7} />
              <Button buttonParam={8} />
              <Button buttonParam={9} />
              <Button buttonParam={"/"} />
            </div>
            <div>
              <Button buttonParam={4} />
              <Button buttonParam={5} />
              <Button buttonParam={6} />
              <Button buttonParam={"x"} />
            </div>
            <div>
              <Button buttonParam={1} />
              <Button buttonParam={2} />
              <Button buttonParam={3} />
              <Button buttonParam={"-"} />
            </div>
            <div>
              <Button buttonParam={"00"} />
              <Button buttonParam={0} />
              <Button buttonParam={"="} />
              <Button buttonParam={"+"} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
