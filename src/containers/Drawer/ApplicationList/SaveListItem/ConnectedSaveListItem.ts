import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import {SaveListItem} from "../../../../components/Drawer";

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};

export const ConnectedSaveListItem = connect(mapStateToProps)(
  SaveListItem
);
