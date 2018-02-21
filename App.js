class App extends React.Component {
    constructor() {
    	super();
    	this.state = {
    		running: false,
        	display: display,
        	}
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    print() {
        this.display.innerText = this.format(this.times);
	}

	format(times) {
        	return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	start() {
		if (!this.state.running) {
		    this.setState ({
			running:true
		    });
		    this.watch = setInterval(() => this.step(), 10);
			}
	}
	step() {
	    if (!this.running) return;
	    this.calculate();
	    this.setState ({
            times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds,
                miliseconds: this.state.times.miliseconds
            }
        });
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.state.times.miliseconds >= 100) {
	        this.state.times.seconds += 1;
	        this.state.times.miliseconds = 0;
	    }
	    if (this.state.times.seconds >= 60) {
	        this.state.times.minutes += 1;
	        this.state.times.seconds = 0;
	    }
	}

	stop() {
	    this.setState ({
            running: false
        });
	    clearInterval(this.watch);
	}

    render() {
    return (
      <div className="container">
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
        </div>
       </div>
       );
    }
};
	function pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    	};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
