const colors = {
    main: {
        theme: props => props.theme.color[props.colorTheme].main,
        wab: props => props.theme.wab[props.colorWab],
        status: props => props.theme.color.status[props.colorStatus]
    },
    secondary: props => props.theme.wab.white00
};

export { colors };