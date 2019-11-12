const brokenVideoDefiner = ({ video, requiredFields }) => (
  requiredFields.some((field) => !video[field])
    ? { isBroken: true }
    : { isBroken: false }
);

export default brokenVideoDefiner;
