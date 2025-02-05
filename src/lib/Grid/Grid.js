import React from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    displayOptions,
    displayDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
} from '../../shared/constants';
import { GridBase } from './style';

const Grid = props => {
    return (
        <GridBase {...props}>
            {props.displayType === displayOptions.column
                ? React.Children.map(props.children, (child, index) =>
                      child ? <div key={index}>{child}</div> : null,
                  )
                : props.children}
        </GridBase>
    );
};

Grid.propTypes = {
    align: PropTypes.oneOf(Object.values(alignOptions)),
    displayType: PropTypes.oneOf(Object.values(displayOptions)),
    columnNumber: PropTypes.number,
    gridTemplateColumns: PropTypes.string,
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    childrenFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    childrenShiftSize: PropTypes.oneOf(Object.values(spaceOptions)),
    isNegativeShift: PropTypes.bool,
    isReverseShift: PropTypes.bool,

    blockPadding: PropTypes.oneOf(Object.values(spaceOptions)),
    gridGap: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMargin: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginBig: PropTypes.oneOf(Object.values(spaceOptions)),
};

Grid.defaultProps = {
    align: alignOptions.center,
    displayType: displayDefault,
    columnNumber: 2,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',

    childrenShiftSize: spaceOptions.none,
    isNegativeShift: false,
    isReverseShift: false,

    blockPadding: spaceOptions.md,
    gridGap: spaceOptions.none,
    childrenMargin: spaceOptions.md,
    childrenMarginBig: spaceOptions.lg,
};

export default Grid;
