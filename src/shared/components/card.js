import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

export default function Card({ collapseAble = false, title, children, className = '' }) {
  const { Panel } = Collapse;

  return (
    <>
      {collapseAble ? (
        <Collapse
          className={`form-card-collapsible ${className}`}
          defaultActiveKey={[title]}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          ghost>
          <Panel header={title} key={title}>
            {children}
          </Panel>
        </Collapse>
      ) : (
        <div className={`form_card ${className}`}>
          <div className="card_body">{children}</div>
        </div>
      )}
    </>
  );
}
