import { connect } from 'react-redux';
import { compose } from 'redux';
import { StateType } from '../../../redux/state-type';
import RoadmapCreation from '../components/roadmap-creation';
import { roadmapCreation } from '../actions/roadmap-creation';

const mapStateToProps = (state: StateType) => {
    const { loading } = state.roadmapCreation;
    return { loading };
};

const mapDispatchToProps = {
    roadmapCreation: roadmapCreation
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(RoadmapCreation);
