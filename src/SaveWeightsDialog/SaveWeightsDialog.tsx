import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilenameTextField
} from '@piximi/components';

type SaveWeightsDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const SaveWeightsDialog = (props: SaveWeightsDialogProps) => {
  const { open, onClose } = props;

  const [filename, setFilename] = React.useState<string>('');

  const onAcceptance = () => {
    onClose();
  };

  const onFilenameChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setFilename(target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle title="Save weights" />

      <DialogContent>
        <FilenameTextField
          filename={filename}
          onFilenameChange={onFilenameChange}
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle="Save"
        cancellationTitle="Cancel"
        onAcceptance={onAcceptance}
        onCancellation={onClose}
      />
    </Dialog>
  );
};