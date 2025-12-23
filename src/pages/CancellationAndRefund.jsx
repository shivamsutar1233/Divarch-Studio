export default function CancellationAndRefund() {
  return (
    <article className="max-w-3xl mx-auto prose-custom dark:prose-invert">
      <h1 className="dark:text-white">Cancellation & Refund Policy</h1>
      <p className="dark:text-gray-300">
        We want you to be happy with your purchase. This page explains when you
        can cancel an order and how refunds work.
      </p>

      <h2 className="dark:text-white">Order Cancellation</h2>
      <p className="dark:text-gray-300">
        You may cancel your order within{" "}
        <strong className="dark:text-white">1 hour</strong> of placing it if it
        has not yet been processed. To cancel, contact support@yourcompany.com
        with your order number.
      </p>

      <h2 className="dark:text-white">Refunds</h2>
      <p className="dark:text-gray-300">
        If a refund is approved, we will process it within{" "}
        <strong className="dark:text-white">3–7 business days</strong>. The
        refund will be issued to the original payment method. Depending on your
        bank or payment provider, it may take additional time to appear in your
        account.
      </p>

      <h2 className="dark:text-white">Damaged or Incorrect Items</h2>
      <p className="dark:text-gray-300">
        If your product arrives damaged or incorrect, contact us within{" "}
        <strong className="dark:text-white">7 days</strong> with photos and
        order details. We will arrange a replacement or refund.
      </p>

      <h2 className="dark:text-white">Contact</h2>
      <a
        href="mailto:support@div-arch.in"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
      >
        support@div-arch.in
      </a>
    </article>
  );
}
