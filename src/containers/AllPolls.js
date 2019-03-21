import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Polls from '../components/Polls/Polls';
import { getPolls } from '../selectors/polls';
import { fetchPolls } from '../actions/polls';

class AllPolls extends PureComponent {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        {this.props.polls && <Polls polls={this.props.polls} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  polls: getPolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPolls());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AllPolls);
