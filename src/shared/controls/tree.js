import { Tree } from 'antd';
import SectionLoader from 'shared/components/loaders/sectionLoader';
import PageTitle from 'shared/components/pageTitle';

export default function TreeIndicator({
  onCheck,
  onSelect,
  titleRender,
  treeData = [],
  selectedKeys = [],
  defaultExpandedKeys = [],
  checkedKeys = [],
  loading = false,
  showLine = true,
  showIcon = true,
  selectable = false,
  checkable = false,
  multiple = false,
  className = '',
  fieldNames = { title: 'title', key: 'key', children: 'children' },
}) {
  return (
    <div className={className}>
      <PageTitle title="List View" />

      <SectionLoader loading={loading}>
        <Tree
          className="px-5 my-5"
          checkedKeys={checkedKeys}
          selectable={selectable}
          showLine={showLine}
          showIcon={showIcon}
          defaultExpandedKeys={defaultExpandedKeys}
          selectedKeys={selectedKeys}
          treeData={treeData}
          checkable={checkable}
          onCheck={onCheck}
          onSelect={onSelect}
          fieldNames={fieldNames}
          titleRender={titleRender}
          multiple={multiple}
        />
      </SectionLoader>
    </div>
  );
}
