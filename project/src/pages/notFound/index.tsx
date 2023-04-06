function NotFoundPage(): JSX.Element {
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '88px' }}>
        <span>☹️</span>
        <br />
        404 Not Found
      </h1>
      <p style={{ fontSize: '26px' }}>
      Unfortunately, this page is not available.
      Please procced to
        <a href="/"
          style={{
            color: '#3443eb',
            fontWeight: 'bold',
            cursor: 'pointer'}}
        >
        Main page
        </a>
      </p>
    </div>
  );
}

export default NotFoundPage;
