import { connect } from 'react-redux';
import { compose } from 'redux';
import { setMenuOpen } from '../actions/main-page';
import { StateType } from '../../../redux/state-type';
import MainPage from '../components/main-page';

const mapStateToProps = (state: StateType) => {
    const { isMenuOpen } = state.mainPage;
    return {
        isMenuOpen
    };
};

const mapDispatchToProps = {
    setMenuOpen: setMenuOpen
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MainPage);
