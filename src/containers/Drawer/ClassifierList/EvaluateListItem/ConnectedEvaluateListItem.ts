import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { EvaluateListItem } from '../../../../components/Drawer';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    classifier: state.classifier,
    images: state.classifier.images
  };
};

export const ConnectedEvaluateListItem = connect(mapStateToProps)(
  EvaluateListItem
);
