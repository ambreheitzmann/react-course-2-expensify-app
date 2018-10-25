class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

    this.state = {
      //count: this.props.count,
      name: 'Test'
    }
  };
  componentDidMount() {
    let count = parseInt(localStorage.getItem('count'), 10);
    if(!count || isNaN(count)) {
      count = 0;
    }
    else {
      count = localStorage.getItem('count');
    }
    this.setState(() => ({ count }));


  }
  componentDidUpdate(prevState){
    if(prevState.count != this.state.count && !isNaN(this.state.count) ) {
      localStorage.setItem('count', this.state.count);
    console.log(this.state.count);

    }
  }
  handleAddOne () {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleRemoveOne () {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  handleRemoveAll () {
    this.setState(() => ({ count: 0 }));
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <p>{this.state.name}</p>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleRemoveAll}>0</button>
      </div>
    );
  };
  
};

ReactDOM.render(<Counter />, document.getElementById('app'));
/*
let count = 0;

const addOne = () => {
  console.log(++count);
  renderCounterApp();

}
const minusOne = () => {
  console.log(--count);
renderCounterApp();

}
const reset = () => {
  count = 0;
  console.log(count);
renderCounterApp();

}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="btn">+ 1</button>
      <button onClick={minusOne} className="btn">- 1</button>
      <button onClick={reset} className="btn">reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();



// JSX - JavaScript XML
const app = {
    title: "My Title",
    subTitle: "My subtitle",
    options: [],
  }
  
  const addOption = (e) => {
    e.preventDefault();
    const option =  e.target.elements.option.value;
    if (option) {
      app.options.push(option);
    }
    e.target.elements.option.value = '';
  
    console.log(app.options);
    console.log(app.options.length);
    return renderPage();
  };
  
  const resetOption = () => {
    app.options = [];
    console.log(app.options.length);
    return renderPage();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
  };
  
  const numbers = [12, 26, 288, 288];
  numbers.map 
  
  //const getFirstName = (fullName) => fullName.split(' ')[0];
  const appRoot = document.getElementById('app');
  const renderPage = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        {app.options.length > 0 ? 'Here my options' : 'No option'}
        <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do ?</button>
        <button onClick={resetOption}>Remove option</button>
        <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
        </ol>
        
        <form onSubmit={addOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  }
  renderPage();*/