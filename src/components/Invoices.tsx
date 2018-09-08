import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

interface InvoiceProps extends RouteComponentProps {
  invoiceId: any;
}

export const Invoice: React.SFC<InvoiceProps> = props => (
  <>
    <h4>Invoice {props.invoiceId}</h4>
  </>
);

interface InvoicesProps extends RouteComponentProps {}

const Invoices: React.SFC<InvoicesProps> = props => (
  <>
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        const id = event.target.elements[0].value;
        event.target.reset();

        if (!props.navigate) {
          return;
        }

        props.navigate(id);
      }}
    >
      <p>
        <label>
          New Invoice ID: <input type="text" />
        </label>
        <button type="submit">create</button>
      </p>
    </form>

    {props.children}
  </>
);

export default Invoices;
