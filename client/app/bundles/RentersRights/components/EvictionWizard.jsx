import React from 'react';

const stages = {
  moveOut: {
    title: 'You receive 3-day, 30-day, 60-day, or 90-day notice to move out.',
    next: ['summons'],
  },
  summons: {
    title: 'You are served "Summons" and "Complaint - Unlawful Detainer".',
    next: ['fileMotionQuestion'],
  },
  fileMotionQuestion: {
    title: 'Do you file a motion within 5 days?',
    next: ['fileMotionResult', 'doesNotFileMotion'],
  },
  fileMotionResult: {
    title: 'You file motion(s) within 5 days',
    next: ['fileAnswer'],
  },
  fileAnswer: {
    title: 'You file "Answer" within 5 days',
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
    title: 'The trial is held within 20 days. Jugdment is decided in your favor or the landlord\'s favor?',
    next: ['tenantJudgment', 'landlordJudgment'],
  },
  tenantJudgment: {
    title: 'Judgement for Tenant',
    next: ['tenantResult'],
  },
  tenantResult: {
    title: 'You Stay',
    next: [],
  },
  landlordJudgment: {
    title: 'Judgement for Landlord',
    next: ['evictionNotice'],
  },
  evictionNotice: {
    title: 'You receive the Sheriff\'s 5-day eviction notice',
    next: ['motionToStay'],
  },
  motionToStay: {
    title: 'Optional: You file a "Motion for Stay of Execution" (to buy more days to stay)',
    next: ['sheriffEviction'],
  },
  sheriffEviction: {
    title: 'Sheriff evicts you',
    next: [],
  },
  doesNotFileMotion: {
    title: 'You do nothing within 5 days',
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
    title: 'Optional: You file "Motion to Set Aside Default and Default Judgement"',
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
        <h2>Demo the Eviction Process</h2>
        <p>This is a simulation of what may happen in the eviction process in the State of California. Click "Next" to walk through the simulation. </p>
        <p>If you are seeking legal aid, please consult a lawyer immediately. </p>

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
        <h3>Step {history.length + 1} of the Eviction Process</h3>
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
            <em>You have reached the end of the simulation of the eviction process. To restart, click Reset.</em>
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
        <h3>Eviction Process Timeline</h3>
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
