import { Menu, Dropdown } from 'antd';
import { EllipsisOutlined, MoreOutlined } from '@ant-design/icons';
import { DEFAULT_MSG } from 'constants/shared/common';
import { confirm } from 'utils/shared';

const typesClass = {
  primary: 'custom_menu_primary',
  secondary: 'custom_menu_secondary',
  danger: 'custom_menu_danger',
};

export default function MenuDropdown({ selectorDirection = 'horizontal', menuList = [] }) {
  const menu = (
    <Menu>
      <div className="list-menu-dropdown-options">
        {menuList.map(
          (item, index) =>
            !item.hidden && (
              <Menu.Item
                key={index}
                onClick={() =>
                  item.confirmAction
                    ? confirm(
                        item.confirmTitle || 'Deleting',
                        item.confirmMsg || DEFAULT_MSG.DeleteConfirmMsg,
                        item.onClick
                      )
                    : item.onClick()
                }
                className={`link-text-color mb-2 ${
                  typesClass[item.buttonType] || typesClass.primary
                }`}
                disabled={!!item.disabled}>
                <span className="pr-2">{item.icon}</span>
                <span className="px-2">{item.label}</span>
              </Menu.Item>
            )
        )}
      </div>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        {selectorDirection == 'horizontal' ? <EllipsisOutlined /> : <MoreOutlined />}
      </a>
    </Dropdown>
  );
}
