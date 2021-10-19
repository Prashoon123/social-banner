export default function Test({ test }) {
  return <div>Test: {test}</div>;
}

export async function getServerSideProps(context) {
  const test = "test";

  return {
    props: {
      test,
    },
  };
}
