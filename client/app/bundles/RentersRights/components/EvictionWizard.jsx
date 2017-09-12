import React from 'react';

const stages = {
  moveOut: {
    title: 'Tenant receives 3-day, 30-day, 60-day, or 90-day notice to move out.',    
    next: ['summons'],
  }, 
  summons: {
    title: 'Tenant is served "Summons" and "Complaint - Unlawful Detainer".',
    next: ['fileMotionQuestion'],
  },
  fileMotionQuestion: {
    title: 'Does the tenant file a motion within 5 days?',
    next: ['fileMotionResult', 'doesNotFileMotion'],
  },
  fileMotionResult: {
    title: 'Tenant files motion(s) within 5 days',
    next: ['fileAnswer'],
  },
  fileAnswer: {
    title: 'Tenant files "Answer" within 5 days',
    next: ['discovery'],
  },
  discovery: {
    title: 'Discovery',
    next: ['counterRequest'],
  },
  counterRequest: {
    title: 'Landlord files "Request/Counter-Request to Set Case for Trial"',
    next: ['hearing'],
  },                
  hearing: {
    title: 'Notice of Hearing',
    next: ['trialQuestion'],
  },
  trialQuestion: {
    title: 'Is the trial held within 20 days?',
    next: ['tenantJudgment', 'landlordJudgment'],
  },
  tenantJudgment: {
    title: 'Judgement for Tenant',
    next: ['tenantResult'],
  },
  tenantResult: {
    title: 'Tenant Stays',
    next: [],
  },
  landlordJudgment: {
    title: 'Judgement for Landlord',
    next: ['evictionNotice'],
  },  
  evictionNotice: {
    title: 'Tenant receives Sheriff\'s 5-day eviction notice',
    next: ['motionToStay'],
  },
  motionToStay: {
    title: 'Optional: Tenant files "Motion for Stay of Execution" (to buy more days to stay)',
    next: ['sheriffEviction'],
  },
  sheriffEviction: {
    title: 'Sheriff evicts tenant(s)',
    next: [],
  },
  doesNotFileMotion: {
    title: 'Tenant does nothing within 5 days',
    next: ['defaultRequest'],
  },
  defaultRequest: {
    title: 'Landlord files "Request to Enter Default"',
    next: ['defaultLandlordJudgment'],
  },
  defaultLandlordJudgment: {
    title: 'Judgement entered in favor of Landlord',
    next: ['defaultTenantMotion'],
  },
  defaultTenantMotion: {
    title: 'Optional: Tenant files "Motion to Set Aside Default and Default Judgement"',
    next: ['evictionNotice'],
  },
};

export default class EvictionWizard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentStageId: 'moveOut',
      history: [],
    };
    
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  getCurrentStage() {
    return stages[this.state.currentStageId];
  }

  handleNext() {
    this.setState({
      currentStageId: this.getCurrentStage().next[0],
      history: [
        ...this.state.history,
        {
          event: this.state.currentStageId,
        }
      ],
    });
  }
  
  handleOption(stageId) {
    this.setState({
      currentStageId: stages[stageId].next[0],
      history: [
        ...this.state.history,
        {
          event: this.state.currentStageId,
          option: stageId,
        }
      ],
    });
  }
  
  handleReset() {
    this.setState({
      currentStageId: 'moveOut',
      history: [],
    });
  }
  
  render() {        
    return (
      <div>
        <div className="page-header">
          <h1>Tenant Eviction Process</h1>
        </div>
        <p>Click "Next" to walk through the eviction process.</p>
        <p>This is a simulation of what may happen in the eviction process in the State of California. </p>
        <p>If you are seeking legal aid, please consult a lawyer immediately. </p>
        <hr />
        {this.renderCurrentStage()}
        <hr />
        {this.renderHistory()}
      </div>
    );
  }
  
  renderCurrentStage() {
    const { history } = this.state;
    
    const currentStage = this.getCurrentStage();
    
    return (
      <div>
        <h2>Step {history.length + 1} of the Eviction Process</h2>
        <p>{currentStage.title}</p>
        {currentStage.next.length > 1 && <div>
          {currentStage.next.map(stageId => {
            const stage = stages[stageId];
            return (
              <div className="form-group" key={stageId}>
                <button
                  className="btn btn-primary" 
                  onClick={() => this.handleOption(stageId)}
                  type="button"
                >
                  {stage.title}
                </button>
              </div>
            );
          })}
        </div>}
        {currentStage.next.length === 1 && <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={this.handleNext}
            type="button"
          >
            Next
          </button>
        </div>}
        {currentStage.next.length === 0 && <div>
          <p>
            <em>You have reached the end of the simulation of the eviction process in California. To restart the simulation, click Reset.</em>
          </p>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={this.handleReset}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>}
      </div>
    );
  }
  
  renderHistory() {
    const { history } = this.state;
    
    return (
      <div>
        <h2>Eviction Process Timeline in California</h2>
        <ul className="list-group">
          {history.map((item, i) => (
            <li
              className="list-group-item"
              key={item.event}
            >
              <span>
                <strong>Step {i + 1}:</strong> {stages[item.event].title}
              </span>
              {item.option && <ul>
                <li>
                  {stages[item.option].title}
                </li>
              </ul>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
