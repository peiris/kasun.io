import * as React from "react";
import { NextPage } from "next";
import Layout from "../layouts/default";


/* Interfaces */
interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Layout title="Error">
      <h1>This is the {statusCode} page</h1>
    </Layout>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    statusCode
  };
};

export default Error;