import React from 'react';
import PropTypes from 'prop-types';

class PopupBox extends React.Component {
  clickHandler = () => {
    window.alert('Done!');
  }

  render() {
    const { value } = this.props;
    return (
      <div className="fab active">
        <div>
          <h3 className="popup-heading">{value.toUpperCase()}</h3>
        </div>
        <div className="popup-content">
          <span>Hello!</span>
        </div>
        <div className="buttons">
          <div>
            <button type="button" className="popup-button">Cancel</button>
          </div>
          <div>
            <button onClick={this.clickHandler} type="button" className="popup-button">Proceed</button>
          </div>
        </div>
      </div>
    );
  }
}

PopupBox.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PopupBox;
