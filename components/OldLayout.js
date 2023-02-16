import Head from 'next/head';
import Link from 'next/link';

const OldLayout = (props) => {
  return (
    <div>
      <Head>
        <title>app de gastos e ingresos</title>
        {/* <link rel="stylesheet" href="/static/styles.css" /> */}
      </Head>
      <header>
        <nav>
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/summary">
            <button>Summary</button>
          </Link>
          {/* <Link href="/transactions">
            <button>Transactions</button>
          </Link> */}
        </nav>
      </header>
      {props.children}
    </div>
  );
};

export default OldLayout;
