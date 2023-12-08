import Title from '../helmet';

export default function AuthRoute(props) {
  const Component = props.component;
  const route = props.route;
  return (
    <>
      <Title title={props.title} />
      <Component route={route} />
    </>
  );
}
