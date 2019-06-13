import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

type Props = {
  anchorEl: any;
  closeMenu: () => void;
  openedMenu: boolean;
};

export const OpenMenuList = (props: Props) => {
  const { anchorEl, closeMenu, openedMenu } = props;

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <MaterialUI.Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={closeMenu}
      open={openedMenu}
    >
      <MaterialUI.Paper>
        <MaterialUI.MenuList dense>
          <ConnectedOpenClassifierMenuItem closeMenu={closeMenu} />

          <MaterialUI.Divider />

          <OpenExampleClassifierMenuItem closeMenu={closeMenu} />

          <OpenWeightsMenuItem closeMenu={closeMenu} />
        </MaterialUI.MenuList>
      </MaterialUI.Paper>
    </MaterialUI.Popover>
  );
};
