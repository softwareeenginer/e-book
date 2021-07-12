import React from 'react';
import {ViewPropTypes} from "react-native";
import {Button, Spinner} from "native-base";
import PropTypes from "prop-types";

function LoadingButton(props: any) {
    const {isLoading, buttonStyle, spinnerColor, spinnerStyle, children, onPress, disabled} = props;
    return (
        <Button
            full
            onPress={() => {
                onPress();
            }}
            disabled={isLoading || disabled}
            style={[buttonStyle, {alignItems: 'center', justifyContent: 'center'}]}
        >
            {isLoading ? <Spinner size="small" color={spinnerColor} style={spinnerStyle}/> : children}
        </Button>
    )
}

LoadingButton.propTypes = {
    buttonStyle: ViewPropTypes.style,
    spinnerStyle: ViewPropTypes.style,
    spinnerColor: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    children: PropTypes.element.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
}

LoadingButton.defaultProps = {
    buttonStyle: {},
    spinnerStyle: {},
    spinnerColor: '#fff',
    isLoading: false,
    disabled: false,
    onPress: () => {

    }
}

export default LoadingButton;