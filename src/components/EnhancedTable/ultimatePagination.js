import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import IconButton from 'material-ui/Icon';
import Button from 'material-ui/Button';
import NavigationFirstPage from 'material-ui-icons/FirstPage';
import NavigationLastPage from 'material-ui-icons/LastPage';
import NavigationChevronLeft from 'material-ui-icons/ChevronLeft';
import NavigationChevronRight from 'material-ui-icons/ChevronRight';

const flatButtonStyle = {
  minWidth: 36,
  verticalAlign: 'middle',
};

const Page = ({value, isActive, onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}>{value.toString()}</Button>
);

const Ellipsis = ({onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}>...</Button>
);

const FirstPageLink = ({isActive, onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}><NavigationFirstPage/></Button>
);

const PreviousPageLink = ({isActive, onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}><NavigationChevronLeft/></Button>
);

const NextPageLink = ({isActive, onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}><NavigationChevronRight/></Button>
);

const LastPageLink = ({isActive, onClick}) => (
  <Button style={flatButtonStyle} onClick={onClick}><NavigationLastPage/></Button>
);

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationMaterialUi = createUltimatePagination({itemTypeToComponent});

export default UltimatePaginationMaterialUi;
