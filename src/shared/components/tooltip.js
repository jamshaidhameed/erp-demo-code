import { Tooltip } from 'antd';

export default function AppTooltip(props) {
  return (
    <Tooltip color="#091e42" placement={props.position ? props.position : 'top'} title={props.text}>
      {props.children}
    </Tooltip>
  );
}
