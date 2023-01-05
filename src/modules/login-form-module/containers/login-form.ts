import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearError, loginUser } from '../actions/login-form-actions';
import { StateType } from '../../../redux/state-type';
import LoginForm from '../components/login-form';

const mapStateToProps = (state: StateType) => {
    const { loading, error } = state.registrationForm;
    return {
        loading,
        error
    };
};

const mapDispatchToProps = {
    loginUser: loginUser,
    clearError: clearError
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(LoginForm);
