function Spinner(): JSX.Element {
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '44px' }}>
        <span>⬛⬛⬛⬜⬜</span>
        <br />
      Loading in progress
      </h1>
    </div>
  );
}
export default Spinner;
