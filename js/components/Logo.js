const Logo = React.memo(({ href = '/' }) => (
  <a href={href}>
    <img alt={`${COMPANY_NAME} logo`} src="/img/logo.png" />
  </a>
));