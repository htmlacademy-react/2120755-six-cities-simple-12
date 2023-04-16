import LoadingIcon from '@img/loading-icon.svg';

function Spinner(): JSX.Element {

  // eslint-disable-next-line no-console
  console.log('Spinner');

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '33px' }}>
        <img style={{ width: '100px', height: '100px' }} src={LoadingIcon} alt='LoadingIndicator'/>
        <br />
      Loading in progress
      </h1>
    </div>
  );
}
export default Spinner;
