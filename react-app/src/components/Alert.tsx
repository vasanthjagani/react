interface Props {
  chlidren: React.ReactNode;
}

const Alert = ({ chlidren }: Props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {chlidren}
      </div>
    </div>
  );
};

export default Alert;
