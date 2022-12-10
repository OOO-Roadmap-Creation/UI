import { connect } from 'react-redux';
import { registerUser } from '../actions/registration-form-actions';
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
    registerUser: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
