
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'visible': false
        };
        this.handleToggleVisibily = this.handleToggleVisibily.bind(this);
    }
    handleToggleVisibily () {
        this.setState((prevState) => {
            return {
                visible: !(prevState.visible)
            };
        });
        console.log(this.state.visible);
    }
    render() {
        return (
            <div>
                <h1>Visible toogle</h1>
                <button onClick={this.handleToggleVisibily}>{this.state.visible ? 'Hide' : 'Show'} details</button>
                {this.state.visible && <p>Detail</p>}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
