const Logo = React.memo(({ href = '/' }) => (
  <a href={href}>
    <img src="/img/logo.png" />
  </a>
));