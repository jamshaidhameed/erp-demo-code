import React from 'react';
import MenuDropdown from './menuDropdown';
import { DEFAULT_MSG } from 'constants/shared/common';
import { confirm } from 'utils/shared';
import AppTooltip from '../tooltip';

const typesClass = {
  primary: 'custom_action_menu_primary',
  secondary: 'custom_action_menu_secondary',
  danger: 'custom_action_menu_danger',
};

const ActionMenu = ({ options }) => {
  return (
    <>
      <div className="btn-mobile-view">
        <MenuDropdown menuList={options} selectorDirection="vertical" />
      </div>
      <div className="gap-3 btn-desktop-view menu_action_items">
        {options?.map(
          (
            { label, buttonType, onClick, confirmAction, confirmTitle, icon, confirmMsg, hidden },
            index
          ) =>
            !hidden && (
              <AppTooltip key={index} text={label}>
                <span
                  className={`${typesClass[buttonType] || typesClass.primary}`}
                  onClick={() =>
                    confirmAction
                      ? confirm(
                          confirmTitle || 'Deleting',
                          confirmMsg || DEFAULT_MSG.DeleteConfirmMsg,
                          onClick
                        )
                      : onClick()
                  }>
                  {icon}
                </span>
              </AppTooltip>
            )
        )}
      </div>
    </>
  );
};

export default ActionMenu;
