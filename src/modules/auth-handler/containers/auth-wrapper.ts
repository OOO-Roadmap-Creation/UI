import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser } from '../actions/auth-handler-actions';
import { StateType } from '../../../redux/state-type';
import AuthWrapper from '../components/auth-wrapper';

const mapStateToProps = (state: StateType) => {
    const { initialAuthHandled, userInformation } = state.authorization;
    return {
        initialAuthHandled,
        userInformation
    };
};

const mapDispatchToProps = {
    getUser: getUser
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(AuthWrapper);
