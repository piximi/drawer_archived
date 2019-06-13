import * as React from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useCollapseList } from '@piximi/hooks';
import * as _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { ConnectedCategoryListItem } from '../../../../containers/Drawer';
import { CreateCategoryListItem } from '../..';

export const CategoriesList = (props: any) => {
  const { collapsedList, collapseList } = useCollapseList();

  const { t: translation } = useTranslation();

  const { categories, connectDropTarget } = props;

  const [unknown, known] = _.partition(categories, category => {
    if (category.identifier === '00000000-0000-0000-0000-000000000000') {
      return category;
    }
  });

  let sortedCategories = _.concat(_.sortBy(known, 'description'), unknown);

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText primary={translation('Categories')} />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        {sortedCategories.map((category, index) => (
          <ConnectedCategoryListItem
            category={category}
            key={category.identifier}
            index={index}
            connectDropTarget={connectDropTarget}
          />
        ))}

        <CreateCategoryListItem />
      </Collapse>
    </List>
  );
};
