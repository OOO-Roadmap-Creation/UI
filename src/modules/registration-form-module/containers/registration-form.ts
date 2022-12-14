import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearError, registerUser } from '../actions/registration-form-actions';
import { StateType } from '../../../redux/state-type';
import RegistrationForm from '../components/registration-form';

const mapStateToProps = (state: StateType) => {
    const { loading, error } = state.registrationForm;
    return {
        loading,
        error
    };
};

const mapDispatchToProps = {
    registerUser: registerUser,
    clearError: clearError
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(RegistrationForm);
