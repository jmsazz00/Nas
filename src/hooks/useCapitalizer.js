export const useCapitalizer = (msg) => {
  return msg.split(" ").map((e) => (
    <span key={e}>
      <mark className="first-letter">{e.at(0)}</mark>
      {e.slice(1)}&nbsp;
    </span>
  ));
};
