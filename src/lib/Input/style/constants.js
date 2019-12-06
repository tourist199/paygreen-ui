const fieldTextColor = {
    default: props => props.theme.wab.grey60,
    success: props => props.theme.color.status.success,
    warning: props => props.theme.wab.grey60,
    danger: props => props.theme.color.status.danger
};

const inputPadding = {
    base: props => props.params.shadow ?
        props.theme.space.sm : 0,
    larger: props => props.params.shadow ?
        props.theme.space.md : props.theme.space.sm,
};

const underlineAnimation = {
    before: {
        entering: '0', // useless property, must be specify to avoid "cut" in animation
        exiting: '100%',
        exited: '0',
    },
    after: {
        entering: '100%',
        exiting: '0',
        exited: '100%',
    }
};

export {
    fieldTextColor,
    inputPadding,
    underlineAnimation
};