
class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subTitle: 'Hello ',
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if(options) {
        this.setState (()=> ({ options }));
      }
    }
    catch (e){

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonOptions);
    }
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  handleDeleteOptions() {
    this.setState (()=> ({ options: [] }));
  };

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
    return this.state.options[randomNum];
  };

  handleDeleteOption (optionToRemove) {
    this.setState ( (prevState) => ({
      options: prevState.options.filter((option)=> option !== optionToRemove )
    }));

  };

  handleAddOption(option) {
    if (!option) {
      return 'Enter right value';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'Already here';
    }
    this.setState ((prevState) => ({ options: prevState.options.concat([option]) }));
    return '';
  };
  render() {
    return (
      <div>
        <Header subTitle = {this.state.subTitle} />
        <Action 
          
        tion={this.state.options.length > 0} 
          handlePickOption={this.handlePickOption}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
         />
        <AddOptions 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
    );
};

Header.defaultProps = {
 title: 'Indecision' 
};



const Action = (props) => {
    return (
      <div>
        <button 
          disabled={!props.
            tion}
          onClick={props.handlePickOption}
        >
          What should I do ?</button>
      </div>
    )
};

const Options = (props) => {
  return (
    <div><button onClick={props.handleDeleteOptions}>Remove all</button>
      <ol>
        {
          props.options.map((option) => (
            <Option 
              key={option} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption} 
            />
          ))
        }
      </ol>
    </div>
  )
};

const Option = (props) => (
  <li>
    {props.optionText} 
    <button 
      onClick = {(e) => {
        console.log(props);
          props.handleDeleteOption(props.optionText)
      }}
    >
        Remove
      </button>
  </li>
);


class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.optionForm.value;
    const error = this.props.handleAddOption(option);
    if(!error) {
      e.target.elements.optionForm.value =  '';
    }
    this.setState(()=> ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionForm" />
          <input type="submit" name="Envoyer" />
        </form>
      </div>
    )
  }
}
ReactDOM.render(<IndecisionApp options={['test']} />, document.getElementById('app'));