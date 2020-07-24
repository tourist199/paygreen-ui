const color = {
    theme: props => props.theme.color[props.colorTheme].main,
    wab: props => props.theme.wab[props.colorWab],
    status: props => props.theme.status[props.colorStatus].main,
};

export { color };
