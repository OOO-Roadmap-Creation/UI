import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutUser, editUserInformation } from '../actions/personal-page';
import { StateType } from '../../../redux/state-type';
import PersonalPage from '../components/personal-page';

const mapStateToProps = (state: StateType) => {
    const { loading } = state.personalPage;
    const { userInformation } = state.authorization;
    return {
        loading,
        userInformation
    };
};

const mapDispatchToProps = {
    logoutUser: logoutUser,
    editUserInformation: editUserInformation
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(PersonalPage);
